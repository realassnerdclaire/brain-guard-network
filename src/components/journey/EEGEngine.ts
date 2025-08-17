// components/journey/EEGEngine.ts
// Pure TS helpers. No React/DOM here.

export type JourneyConfig = {
  seed: number;
  theme: {
    colors: {
      eeg: string;
      ghost: string;
      allowedHalo: string;
      ok: string;
      error: string;
      redact: string;
      ticksDark: string;
      ticksLight: string;
    };
  };
  eeg: {
    duration_s: number;
    fs_hz: number;
    amp_uv: number;
    map: { x_px_start: number; x_px_end: number; y_px_center: number; y_px_scale: number };
    components: Array<
      | { type: 'sine'; freq_hz: number; amp_uv: number; phase: number }
      | { type: 'pink_noise'; sigma_uv: number }
    >;
    bandpass_visual: { low_hz: number; high_hz: number; smoothness: number };
  };
  artifacts: Array<{
    kind: string;
    t_s: number;
    peak_uv?: number;
    width_ms?: number;
    duration_ms?: number;
    clamp_uv?: number;
  }>;
  encryption: {
    window_ms: number;
    cipher_filter: { turbulence_base_freq: number; displacement_scale: number };
    show_nonce_indicator_hz: number;
    gcm_tag: { width_px: number; height_px: number; offset_px: number };
    lock_anim_deg: number;
  };
  consent: {
    allow_ratio: number;
    deny_style: { hatch_angle_deg: number; opacity: number };
    tooltip: string;
  };
  autoencoder: {
    window_ms: number;
    anomaly_rate: number;
    sigma_threshold: number;
    residual_colormap: Array<{ t: number; color: string }>;
    quarantine: { tray_y_px: number; slot_px: number };
  };
  downstream: {
    destinations: Array<{ id: string; icon: string; label: string }>;
    shield_pulse_ms: number;
    latency_label: string;
    show_hash_chain: boolean;
    hash_icon: string;
  };
  steps: Array<{
    id: string;
    side: string;
    title: string;
    body: string;
    animations: any;
  }>;
  a11y: {
    stage_aria: string;
  };
  reduced_motion: {
    enabled: boolean;
    disable: string[];
    fallbacks: { use_opacity: boolean; use_color: boolean };
  };
};

export type EEGSeries = {
  raw: Float32Array;
  clean: Float32Array;
  x: Float32Array;
  yRaw: Float32Array;
  yClean: Float32Array;
};

export function mulberry32(seed: number) {
  let t = seed >>> 0;
  return function () {
    t += 0x6D2B79F5;
    let r = Math.imul(t ^ (t >>> 15), 1 | t);
    r ^= r + Math.imul(r ^ (r >>> 7), 61 | r);
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
  };
}

function pinkNoise(len: number, sigma: number, rnd: () => number): Float32Array {
  // Simple Voss-ish approximation (good enough for a visual)
  const out = new Float32Array(len);
  let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
  for (let i = 0; i < len; i++) {
    const white = rnd() * 2 - 1;
    b0 = 0.99886 * b0 + white * 0.0555179;
    b1 = 0.99332 * b1 + white * 0.0750759;
    b2 = 0.96900 * b2 + white * 0.1538520;
    b3 = 0.86650 * b3 + white * 0.3104856;
    b4 = 0.55000 * b4 + white * 0.5329522;
    b5 = -0.7616 * b5 - white * 0.0168980;
    const v = b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362;
    b6 = white * 0.115926;
    out[i] = v * sigma;
  }
  return out;
}

export function generateEEG(cfg: JourneyConfig): EEGSeries {
  const { duration_s, fs_hz, amp_uv, map, components } = cfg.eeg;
  const n = Math.round(duration_s * fs_hz);
  const dt = 1 / fs_hz;
  const rnd = mulberry32(cfg.seed);
  const raw = new Float32Array(n);

  for (let i = 0; i < n; i++) {
    const t = i * dt;
    let v = 0;
    for (const c of components) {
      if (c.type === 'sine') {
        v += c.amp_uv * Math.sin(2 * Math.PI * c.freq_hz * t + c.phase);
      } else if (c.type === 'pink_noise') {
        // fill pink later
      }
    }
    raw[i] = v;
  }

  // Add pink noise once
  const pink = components.find((c): c is { type: 'pink_noise'; sigma_uv: number } => c.type === 'pink_noise');
  if (pink) {
    const pn = pinkNoise(n, pink.sigma_uv, rnd);
    for (let i = 0; i < n; i++) raw[i] += pn[i];
  }

  // Visual band-pass smoothing (approx)
  const clean = smoothPath(raw, 5);

  // Clamp visual scale
  for (let i = 0; i < n; i++) {
    raw[i] = clamp(raw[i], -amp_uv, amp_uv);
    clean[i] = clamp(clean[i], -amp_uv, amp_uv);
  }

  // Map to SVG coords
  const x = new Float32Array(n);
  const yRaw = new Float32Array(n);
  const yClean = new Float32Array(n);
  for (let i = 0; i < n; i++) {
    const ratio = i / (n - 1);
    x[i] = lerp(map.x_px_start, map.x_px_end, ratio);
    yRaw[i] = map.y_px_center - (raw[i] / amp_uv) * map.y_px_scale;
    yClean[i] = map.y_px_center - (clean[i] / amp_uv) * map.y_px_scale;
  }

  return { raw, clean, x, yRaw, yClean };
}

function smoothPath(arr: Float32Array | number[], radius: number): Float32Array {
  const n = arr.length;
  const out = new Float32Array(n);
  let acc = 0, count = 0;
  const r = Math.max(1, radius | 0);
  for (let i = 0; i < n; i++) {
    const i0 = Math.max(0, i - r);
    const i1 = Math.min(n - 1, i + r);
    acc = 0; count = 0;
    for (let j = i0; j <= i1; j++) { acc += +arr[j]; count++; }
    out[i] = acc / count;
  }
  return out;
}

export function buildPath(xs: Float32Array, ys: Float32Array): string {
  const n = xs.length;
  if (n === 0) return '';
  let d = `M ${xs[0].toFixed(2)} ${ys[0].toFixed(2)}`;
  for (let i = 1; i < n; i++) {
    d += ` L ${xs[i].toFixed(2)} ${ys[i].toFixed(2)}`;
  }
  return d;
}

export function windowsByMs(cfg: JourneyConfig, windowMs: number) {
  const { duration_s, fs_hz, map } = cfg.eeg;
  const n = Math.round(duration_s * fs_hz);
  const win = Math.max(1, Math.round((windowMs / 1000) * fs_hz));
  const total = Math.floor(n / win);
  const widthPx = (cfg.eeg.map.x_px_end - cfg.eeg.map.x_px_start) * (win / n);
  const arr: Array<{ startIdx: number; endIdx: number; x: number; w: number; y: number; h: number }> = [];
  for (let k = 0; k < total; k++) {
    const startIdx = k * win;
    const endIdx = Math.min(n - 1, startIdx + win - 1);
    const x = lerp(map.x_px_start, map.x_px_end, startIdx / (n - 1));
    arr.push({ startIdx, endIdx, x, w: widthPx, y: map.y_px_center - 22, h: 44 });
  }
  return arr;
}

export function seededMask(count: number, allowRatio: number, seed: number): boolean[] {
  const rnd = mulberry32(seed);
  const out: boolean[] = new Array(count);
  let allowCount = Math.round(count * allowRatio);
  // Fill deterministically
  const idxs = Array.from({ length: count }, (_, i) => i).sort(() => rnd() - 0.5);
  for (let i = 0; i < count; i++) out[i] = false;
  for (let i = 0; i < allowCount; i++) out[idxs[i]] = true;
  return out;
}

function clamp(x: number, a: number, b: number) { return Math.max(a, Math.min(b, x)); }
function lerp(a: number, b: number, t: number) { return a + (b - a) * t; }
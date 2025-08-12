import React, { useEffect, useRef } from "react";

// Animated EEG waves canvas overlay
const AnimatedEEG: React.FC<{ className?: string }>= ({ className }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = canvas.offsetWidth * window.devicePixelRatio);
    let height = (canvas.height = canvas.offsetHeight * window.devicePixelRatio);

    const dpr = window.devicePixelRatio || 1;
    ctx.scale(1,1);

    const resize = () => {
      width = canvas.width = canvas.offsetWidth * dpr;
      height = canvas.height = canvas.offsetHeight * dpr;
    };

    window.addEventListener("resize", resize);

    const waves = new Array(4).fill(0).map((_, i) => ({
      amp: 18 + i * 6,
      freq: 0.0025 + i * 0.0008,
      speed: 0.9 + i * 0.25,
      phase: i * Math.PI / 3,
      hue: 200 + i * 12,
    }));

    let t = 0;
    const render = () => {
      t += 1;
      ctx.clearRect(0, 0, width, height);

      // Neon glow background
      ctx.save();
      const grad = ctx.createRadialGradient(width*0.65, height*0.55, 10, width*0.5, height*0.6, Math.max(width,height)*0.7);
      grad.addColorStop(0, `hsla(200,90%,56%,0.08)`);
      grad.addColorStop(1, `hsla(265,85%,66%,0)`);
      ctx.fillStyle = grad;
      ctx.fillRect(0,0,width,height);
      ctx.restore();

      waves.forEach((w, idx) => {
        ctx.save();
        ctx.lineWidth = 1.5 + idx * 0.6;
        const pathGrad = ctx.createLinearGradient(0, 0, width, 0);
        pathGrad.addColorStop(0, `hsla(${w.hue}, 85%, 60%, 0.0)`);
        pathGrad.addColorStop(0.2, `hsla(${w.hue}, 95%, 60%, 0.7)`);
        pathGrad.addColorStop(0.8, `hsla(${w.hue+40}, 95%, 65%, 0.7)`);
        pathGrad.addColorStop(1, `hsla(${w.hue+60}, 85%, 60%, 0.0)`);
        ctx.strokeStyle = pathGrad;
        ctx.shadowColor = `hsla(${w.hue+30}, 90%, 60%, 0.45)`;
        ctx.shadowBlur = 12 + idx * 4;

        ctx.beginPath();
        const baseY = height * (0.45 + idx * 0.08);
        for (let x = 0; x <= width; x += 4) {
          const y = baseY + Math.sin(x * w.freq + t * 0.02 * w.speed + w.phase) * w.amp * (1 + Math.sin(t*0.01+idx)/8);
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
        ctx.restore();
      });

      rafRef.current = requestAnimationFrame(render);
    };

    render();
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas ref={canvasRef} className={"absolute inset-0 -z-10 w-full h-full " + (className ?? "")} aria-hidden="true" />
  );
};

export default AnimatedEEG;

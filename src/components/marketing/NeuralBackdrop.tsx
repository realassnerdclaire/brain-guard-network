const NeuralBackdrop = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(1000px_circle_at_20%_30%,hsl(var(--brand)/0.15),transparent_60%)]" aria-hidden="true" />
      <div className="absolute inset-0 bg-[radial-gradient(900px_circle_at_80%_70%,hsl(var(--brand-2)/0.12),transparent_60%)]" aria-hidden="true" />
      <svg className="absolute inset-0 h-full w-full opacity-20" aria-hidden="true">
        <defs>
          <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
            <path d="M 32 0 L 0 0 0 32" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" className="text-foreground/10" />
      </svg>
    </div>
  );
};

export default NeuralBackdrop;

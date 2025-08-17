export default function IconSprite() {
  return (
    <svg id="xbr-icon-sprite" xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
      <symbol id="xbr-lock" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="10" width="16" height="10" rx="2" />
        <path d="M8 10V7a4 4 0 0 1 8 0v3" />
        <circle cx="12" cy="15" r="1" />
      </symbol>

      <symbol id="xbr-gate" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 7h8v10H3z" /><path d="M13 7h8v10h-8z" /><path d="M11 12h2" />
      </symbol>

      <symbol id="xbr-shield" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
        <path d="M9.5 12.5l1.7 1.7 3.5-3.5" />
      </symbol>

      <symbol id="xbr-hashchain" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2.5" y="4" width="6" height="6" rx="1.2" />
        <rect x="8" y="14" width="6" height="6" rx="1.2" />
        <rect x="15.5" y="4" width="6" height="6" rx="1.2" />
        <path d="M8.5 7h2.5M13 17h2.5M14 7h1.5" />
      </symbol>

      <symbol id="xbr-dashboard" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="14" rx="2" />
        <path d="M7 12l3 3 7-7" />
        <path d="M3 20h18" />
      </symbol>

      <symbol id="xbr-lab" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 3v5l-5 9a3 3 0 0 0 2.6 4.5h10.8A3 3 0 0 0 20 17L15 8V3" />
        <path d="M9 8h6" />
      </symbol>

      <symbol id="xbr-therapy" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 21s-6-3.2-6-8a6 6 0 1 1 12 0c0 4.8-6 8-6 8z" />
        <path d="M12 9v4m-2-2h4" />
      </symbol>
    </svg>
  );
}
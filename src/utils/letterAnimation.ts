export const animateLetters = (element: HTMLElement, word: string) => {
  console.log('🎬 Starting letter animation for:', word);
  
  const letters = word.split('');
  const colorSequence = [
    '#ffb3d9', // light pink
    '#ff80c7', // pink  
    '#ff4db6', // darker pink
    '#a855f7', // purple
    '#3b82f6', // blue
    '#60a5fa'  // light blue
  ];

  // Create letter spans with proper structure
  const letterSpans = letters.map((letter, index) => 
    `<span class="animated-letter" data-index="${index}" style="
      display: inline-block; 
      transition: all 0.4s ease-out; 
      padding: 2px 1px;
      border-radius: 6px;
      background: rgba(255,255,255,0.05);
      backdrop-filter: blur(5px);
      border: 1px solid rgba(255,255,255,0.1);
      margin: 0 1px;
    ">${letter}</span>`
  ).join('');

  // Replace content
  element.innerHTML = letterSpans;

  // Animate each letter through color sequence
  letters.forEach((letter, letterIndex) => {
    const letterSpan = element.querySelector(`[data-index="${letterIndex}"]`) as HTMLElement;
    if (!letterSpan) return;

    console.log(`🔤 Animating letter: ${letter} (index ${letterIndex})`);

    colorSequence.forEach((color, colorIndex) => {
      setTimeout(() => {
        const r = parseInt(color.slice(1,3), 16);
        const g = parseInt(color.slice(3,5), 16);
        const b = parseInt(color.slice(5,7), 16);
        
        letterSpan.style.color = color;
        letterSpan.style.textShadow = `0 0 ${15 + colorIndex * 8}px ${color}, 0 0 ${30 + colorIndex * 15}px ${color}`;
        letterSpan.style.transform = `scale(${1.1 + colorIndex * 0.08})`;
        letterSpan.style.filter = `brightness(${1.2 + colorIndex * 0.15}) saturate(${1.4 + colorIndex * 0.2})`;
        letterSpan.style.background = `rgba(${r}, ${g}, ${b}, ${0.1 + colorIndex * 0.05})`;
        letterSpan.style.boxShadow = `0 0 ${10 + colorIndex * 8}px rgba(${r}, ${g}, ${b}, 0.4)`;
        letterSpan.style.backdropFilter = `blur(${8 + colorIndex * 4}px)`;
        letterSpan.style.border = `1px solid rgba(${r}, ${g}, ${b}, 0.4)`;
        
        console.log(`✨ Letter ${letter} -> Phase ${colorIndex + 1}: ${color}`);
      }, letterIndex * 100 + colorIndex * 250);
    });
  });

  // Reset after animation completes
  const totalDuration = letters.length * 100 + colorSequence.length * 250 + 1000;
  setTimeout(() => {
    element.innerHTML = word;
    element.style.color = '';
    element.style.textShadow = '';
    element.style.transform = '';
    element.style.filter = '';
    console.log('🔄 Animation reset complete');
  }, totalDuration);

  return totalDuration;
};
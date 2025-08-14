// Optimized letter animation utilities with reduced performance impact

// Cached elements to avoid repeated DOM queries
const elementCache = new Map<HTMLElement, any>();

// Simple, fast letter animation with minimal setTimeout usage
export const animateLetters = (element: HTMLElement, text: string) => {
  const colors = ['#ffb3d9', '#ff80c7', '#ff4db6', '#a855f7', '#3b82f6', '#60a5fa'];
  const letters = text.split('');
  
  // Create spans immediately
  element.innerHTML = letters.map((letter, i) => 
    `<span style="display: inline-block; transition: color 0.15s ease; color: white;">${letter === ' ' ? '&nbsp;' : letter}</span>`
  ).join('');
  
  const spans = element.querySelectorAll('span');
  
  // Single quick animation cycle instead of multiple setTimeout calls
  letters.forEach((letter, letterIndex) => {
    if (letter !== ' ') {
      const span = spans[letterIndex] as HTMLElement;
      
      // Immediate color change
      span.style.color = colors[letterIndex % colors.length];
      
      // Reset to white after short delay
      setTimeout(() => {
        span.style.color = 'white';
      }, 200);
    }
  });
  
  // Reset entire element after animation
  setTimeout(() => {
    element.innerHTML = text;
    element.style.color = 'white';
  }, 400);
};

// Optimized hover animation with reduced frequency
export const startHoverAnimation = (element: HTMLElement) => {
  if (elementCache.has(element)) {
    return elementCache.get(element);
  }
  
  const colors = ['#ffb3d9', '#ff80c7', '#ff4db6', '#a855f7', '#3b82f6', '#60a5fa'];
  let colorIndex = 0;
  
  const interval = setInterval(() => {
    element.style.color = colors[colorIndex % colors.length];
    colorIndex++;
  }, 400); // Slower interval for better performance
  
  elementCache.set(element, interval);
  return interval;
};

export const stopHoverAnimation = (element: HTMLElement, interval: number) => {
  clearInterval(interval);
  element.style.color = 'white';
  element.style.textShadow = 'none';
  element.style.transform = 'scale(1)';
  elementCache.delete(element);
};
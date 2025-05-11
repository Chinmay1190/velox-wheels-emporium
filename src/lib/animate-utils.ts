
// Utility for animating elements as they scroll into view
export function setupScrollAnimation() {
  if (typeof window === 'undefined') return;
  
  // Observer callback function
  const observerCallback = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  };

  // Create observer with options
  const observer = new IntersectionObserver(observerCallback, {
    root: null, // Use viewport as root
    rootMargin: '0px',
    threshold: 0.1 // Trigger when 10% of the element is visible
  });

  // Observe all elements with the animate-on-scroll class
  const animateElements = document.querySelectorAll('.animate-on-scroll');
  animateElements.forEach((element) => {
    observer.observe(element);
  });

  return () => {
    animateElements.forEach((element) => {
      observer.unobserve(element);
    });
  };
}

// Utility for adding animation delays to multiple elements
export function applyAnimationDelay(elements: NodeListOf<Element>, baseDelay = 0.1) {
  elements.forEach((element, index) => {
    (element as HTMLElement).style.transitionDelay = `${baseDelay * index}s`;
  });
}

// Create a shimmer loading effect
export function applyShimmerEffect(elements: NodeListOf<Element>) {
  elements.forEach((element) => {
    element.classList.add('shine-effect');
  });
}

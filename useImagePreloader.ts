import { useEffect } from 'react';

/**
 * Hook to preload images in the background
 * Continues loading even if user stops scrolling
 */
export const useImagePreloader = (images: string[]) => {
  useEffect(() => {
    // Create preload links for all images
    const links: HTMLLinkElement[] = [];
    
    images.forEach((src, index) => {
      // Stagger preloading to avoid blocking
      const delay = index * 50; // 50ms delay between each image
      
      const timer = setTimeout(() => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
        links.push(link);
        
        // Also create Image object to trigger browser caching
        const img = new Image();
        img.src = src;
      }, delay);
      
      return () => clearTimeout(timer);
    });
    
    // Cleanup on unmount
    return () => {
      links.forEach(link => {
        if (link.parentNode) {
          link.parentNode.removeChild(link);
        }
      });
    };
  }, [images]);
};

/**
 * Hook to eagerly load images with IntersectionObserver
 * Preloads images before they come into view
 */
export const useEagerImageLoad = (containerRef: React.RefObject<HTMLElement>) => {
  useEffect(() => {
    if (!containerRef.current) return;
    
    const images = containerRef.current.querySelectorAll('img[loading="lazy"]');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.removeAttribute('data-src');
            }
            observer.unobserve(img);
          }
        });
      },
      {
        rootMargin: '200px', // Load images 200px before they come into view
      }
    );
    
    images.forEach((img) => observer.observe(img));
    
    return () => observer.disconnect();
  }, [containerRef]);
};

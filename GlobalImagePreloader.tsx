import { useEffect } from 'react';
import { productImages } from '@/data/imageImports';

/**
 * Component to preload all product images in the background
 * This ensures images are cached and load instantly when needed
 */
const GlobalImagePreloader = () => {
  useEffect(() => {
    // Get all product image URLs
    const allImages = Object.values(productImages);
    
    // Preload images in batches to avoid overwhelming the browser
    const batchSize = 10;
    let currentBatch = 0;
    
    const preloadBatch = () => {
      const start = currentBatch * batchSize;
      const end = Math.min(start + batchSize, allImages.length);
      
      for (let i = start; i < end; i++) {
        const img = new Image();
        img.src = allImages[i];
      }
      
      currentBatch++;
      
      // Continue loading next batch if there are more images
      if (end < allImages.length) {
        setTimeout(preloadBatch, 300); // 300ms delay between batches
      }
    };
    
    // Start preloading after a short delay to not block initial render
    const timer = setTimeout(preloadBatch, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  return null; // This component doesn't render anything
};

export default GlobalImagePreloader;

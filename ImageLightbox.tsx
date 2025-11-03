import { X, ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Button } from './ui/button';

interface ImageLightboxProps {
  image: string;
  alt: string;
  isOpen: boolean;
  onClose: () => void;
}

const ImageLightbox = ({ image, alt, isOpen, onClose }: ImageLightboxProps) => {
  const [zoom, setZoom] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [lastTouchDistance, setLastTouchDistance] = useState(0);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setZoom(1);
      setPosition({ x: 0, y: 0 });
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (!isOpen) return;
      e.preventDefault();
      
      const delta = e.deltaY * -0.01;
      setZoom(prev => Math.min(Math.max(0.5, prev + delta), 5));
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [isOpen]);

  const handleZoomIn = () => setZoom(prev => Math.min(prev + 0.5, 5));
  const handleZoomOut = () => setZoom(prev => Math.max(prev - 0.5, 0.5));
  const handleReset = () => {
    setZoom(1);
    setPosition({ x: 0, y: 0 });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoom > 1) {
      setIsDragging(true);
      setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && zoom > 1) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const getTouchDistance = (touches: React.TouchList) => {
    if (touches.length < 2) return 0;
    const touch1 = touches[0];
    const touch2 = touches[1];
    return Math.sqrt(
      Math.pow(touch2.clientX - touch1.clientX, 2) +
      Math.pow(touch2.clientY - touch1.clientY, 2)
    );
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      e.preventDefault();
      setLastTouchDistance(getTouchDistance(e.touches));
    } else if (e.touches.length === 1 && zoom > 1) {
      setIsDragging(true);
      setDragStart({
        x: e.touches[0].clientX - position.x,
        y: e.touches[0].clientY - position.y
      });
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      e.preventDefault();
      const currentDistance = getTouchDistance(e.touches);
      if (lastTouchDistance > 0) {
        const delta = (currentDistance - lastTouchDistance) * 0.01;
        setZoom(prev => Math.min(Math.max(0.5, prev + delta), 5));
      }
      setLastTouchDistance(currentDistance);
    } else if (e.touches.length === 1 && isDragging && zoom > 1) {
      setPosition({
        x: e.touches[0].clientX - dragStart.x,
        y: e.touches[0].clientY - dragStart.y
      });
    }
  };

  const handleTouchEnd = () => {
    setLastTouchDistance(0);
    setIsDragging(false);
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div className="absolute top-4 right-4 z-[101] flex gap-2">
        <Button
          onClick={(e) => {
            e.stopPropagation();
            handleZoomOut();
          }}
          size="icon"
          className="rounded-full bg-background/80 hover:bg-background"
        >
          <ZoomOut className="h-5 w-5" />
        </Button>
        <Button
          onClick={(e) => {
            e.stopPropagation();
            handleZoomIn();
          }}
          size="icon"
          className="rounded-full bg-background/80 hover:bg-background"
        >
          <ZoomIn className="h-5 w-5" />
        </Button>
        <Button
          onClick={(e) => {
            e.stopPropagation();
            handleReset();
          }}
          size="icon"
          className="rounded-full bg-background/80 hover:bg-background"
        >
          <RotateCcw className="h-5 w-5" />
        </Button>
        <Button
          onClick={onClose}
          size="icon"
          className="rounded-full bg-background/80 hover:bg-background"
        >
          <X className="h-5 w-5" />
        </Button>
      </div>

      <div 
        className="relative overflow-hidden max-w-[90vw] max-h-[90vh] flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={image}
          alt={alt}
          className="rounded-lg shadow-2xl select-none transition-transform"
          style={{
            transform: `scale(${zoom}) translate(${position.x / zoom}px, ${position.y / zoom}px)`,
            cursor: zoom > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default',
            maxWidth: '90vw',
            maxHeight: '90vh',
            objectFit: 'contain',
            touchAction: 'none'
          }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          draggable={false}
        />
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-background/80 px-4 py-2 rounded-full text-sm font-medium">
        {Math.round(zoom * 100)}%
      </div>
    </div>
  );
};

export default ImageLightbox;

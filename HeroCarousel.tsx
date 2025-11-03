import { useRef } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { categoryImages } from '@/data/imageImports';
import { useImagePreloader } from '@/hooks/useImagePreloader';

const HeroCarousel = () => {
  const plugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false })
  );

  const carouselImages = [
    categoryImages.bullionBadges,
    categoryImages.flagsBanners,
    categoryImages.militaryCaps,
    categoryImages.armyUniform,
    categoryImages.sportsWear,
    categoryImages.westernPoncho,
  ];

  // Preload all carousel images in background
  useImagePreloader(carouselImages);

  return (
    <Carousel
      opts={{
        align: 'start',
        loop: true,
      }}
      plugins={[plugin.current]}
      className="w-full h-[300px] md:h-[400px]"
    >
      <CarouselContent className="h-full">
        {carouselImages.map((image, index) => (
          <CarouselItem key={index} className="h-full">
            <div className="relative w-full h-full">
              <img
                src={image}
                alt={`NYA Enterprises Product ${index + 1}`}
                className="w-full h-full object-cover"
                fetchPriority={index === 0 ? "high" : "low"}
                loading={index === 0 ? "eager" : "lazy"}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default HeroCarousel;

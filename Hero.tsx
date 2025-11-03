import { Button } from '@/components/ui/button';
import HeroCarousel from './HeroCarousel';

const Hero = () => {
  return (
    <>
      <section className="relative w-full pt-20">
        <HeroCarousel />
      </section>
      
      <section id="home" className="relative py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in bg-background/85 backdrop-blur-md rounded-2xl p-10 md:p-14 shadow-card border border-border/50">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 tracking-tighter">
              Welcome to <span className="text-primary">Nya Enterprises</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed max-w-3xl mx-auto">
              Premier manufacturers and exporters of embroidery badges, military uniforms, sportswear, gloves, and premium leather goods
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium shadow-md hover:shadow-lg transition-all"
                onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Products
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="font-medium border-2"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;

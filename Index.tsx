import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Categories from '@/components/Categories';
import FeaturedProducts from '@/components/FeaturedProducts';
import AllProducts from '@/components/AllProducts';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import CompareBar from '@/components/CompareBar';
import GlobalImagePreloader from '@/components/GlobalImagePreloader';
import { useCompare } from '@/contexts/CompareContext';

const Index = () => {
  const { compareProducts } = useCompare();

  return (
    <div className="min-h-screen bg-background">
      <GlobalImagePreloader />
      <Navigation />
      <main className={compareProducts.length > 0 ? 'pb-20 md:pb-28' : ''}>
        <Hero />
        <Features />
        <Categories />
        <FeaturedProducts />
        <AllProducts />
        <About />
        <Contact />
        <Footer />
      </main>
      <CompareBar />
    </div>
  );
};

export default Index;

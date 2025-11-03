import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import ImageLightbox from './ImageLightbox';
import { useCompare } from '@/contexts/CompareContext';
import { useNavigate } from 'react-router-dom';
import { Scale } from 'lucide-react';
import { toast } from 'sonner';
import { productImages } from '@/data/imageImports';
import { useImagePreloader } from '@/hooks/useImagePreloader';

const FeaturedProducts = () => {
  const navigate = useNavigate();
  const [lightboxImage, setLightboxImage] = useState<{ src: string; alt: string } | null>(null);
  const { addToCompare, isInCompare, compareProducts } = useCompare();

  const handleAddToCompare = (product: { id: number; title: string; image: string }) => {
    if (compareProducts.length >= 2) {
      toast.error('You can only compare 2 products at a time');
      return;
    }
    addToCompare({
      id: product.id,
      title: product.title,
      image: product.image,
      subSubcategory: 'featured',
    });
    toast.success('Added to comparison');
  };

  const products = [
    {
      id: 312,
      title: 'Cap Badge 1',
      image: productImages[312],
    },
    {
      id: 343,
      title: 'Wings Badge 1',
      image: productImages[343],
    },
    {
      id: 211,
      title: 'National Flag',
      image: productImages[211],
    },
    {
      id: 183,
      title: 'Military Peak Cap',
      image: productImages[183],
    },
    {
      id: 88,
      title: 'WWII Armband',
      image: productImages[88],
    },
    {
      id: 486,
      title: 'Coat of Arms 1',
      image: productImages[486],
    },
    {
      id: 642,
      title: 'Band Shirt 4',
      image: productImages[642],
    },
    {
      id: 679,
      title: 'Belt Buckle 9',
      image: productImages[679],
    },
  ];

  // Preload all featured product images in background
  useImagePreloader(products.map(p => p.image));

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Featured Products
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-6">
            Discover our most popular and highest quality items
          </p>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {products.map((product, index) => (
            <Card 
              key={product.title}
              className="group overflow-hidden hover:shadow-hover transition-all duration-300 border animate-fade-in"
              style={{ animationDelay: `${index * 40}ms` }}
            >
              <div 
                className="aspect-square overflow-hidden bg-muted cursor-pointer"
                onClick={() => navigate(`/product?id=${product.id}`)}
              >
                <img 
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading={index < 4 ? "eager" : "lazy"}
                  fetchPriority={index < 4 ? "high" : "low"}
                  width="306"
                  height="306"
                />
              </div>
              <div className="p-5 bg-card">
                <h3 
                  className="text-sm font-medium text-foreground group-hover:text-primary transition-colors line-clamp-2 leading-snug mb-3 cursor-pointer"
                  onClick={() => navigate(`/product?id=${product.id}`)}
                >
                  {product.title}
                </h3>
                <Button
                  variant={isInCompare(product.id) ? "secondary" : "outline"}
                  size="sm"
                  className="w-full gap-2"
                  onClick={() => handleAddToCompare(product)}
                  disabled={isInCompare(product.id)}
                >
                  <Scale className="h-4 w-4" />
                  {isInCompare(product.id) ? 'Added' : 'Compare'}
                </Button>
              </div>
            </Card>
          ))}
        </div>
        
        <ImageLightbox
          image={lightboxImage?.src || ''}
          alt={lightboxImage?.alt || ''}
          isOpen={!!lightboxImage}
          onClose={() => setLightboxImage(null)}
        />
      </div>
    </section>
  );
};

export default FeaturedProducts;

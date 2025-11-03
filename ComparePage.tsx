import { useCompare } from '@/contexts/CompareContext';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useEffect } from 'react';

const ComparePage = () => {
  const { compareProducts, removeFromCompare, clearCompare } = useCompare();
  const navigate = useNavigate();

  useEffect(() => {
    if (compareProducts.length === 0) {
      navigate('/');
    }
  }, [compareProducts.length, navigate]);

  const formatSubcategory = (subcategory: string) => {
    return subcategory
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex items-center justify-between">
            <Button
              variant="ghost"
              onClick={() => navigate(-1)}
              className="gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Back
            </Button>
            <Button
              variant="outline"
              onClick={clearCompare}
              className="gap-2"
            >
              Clear Comparison
            </Button>
          </div>

          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Product Comparison
            </h1>
            <p className="text-muted-foreground text-lg">
              Compare features and details side by side
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {compareProducts.map((product, index) => (
              <Card key={product.id} className="overflow-hidden relative animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-2 right-2 z-10 h-8 w-8 bg-background/80 backdrop-blur-sm hover:bg-destructive hover:text-destructive-foreground"
                  onClick={() => removeFromCompare(product.id)}
                >
                  <X className="h-4 w-4" />
                </Button>

                <div className="aspect-square overflow-hidden bg-muted">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover"
                    width="306"
                    height="306"
                    loading="lazy"
                  />
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-2">
                      {product.title}
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      Product ID: {product.id}
                    </p>
                  </div>

                  <div className="space-y-3 pt-4 border-t">
                    <div className="flex justify-between py-2">
                      <span className="text-muted-foreground">Category</span>
                      <span className="font-medium text-foreground capitalize">
                        {formatSubcategory(product.subSubcategory)}
                      </span>
                    </div>
                    
                    <div className="flex justify-between py-2">
                      <span className="text-muted-foreground">Availability</span>
                      <span className="font-medium text-green-600">In Stock</span>
                    </div>
                    
                    <div className="flex justify-between py-2">
                      <span className="text-muted-foreground">Quality</span>
                      <span className="font-medium text-foreground">Premium</span>
                    </div>
                    
                    <div className="flex justify-between py-2">
                      <span className="text-muted-foreground">Customizable</span>
                      <span className="font-medium text-foreground">Yes</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t">
                    <h3 className="font-semibold mb-2 text-foreground">Features</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>High-quality materials and craftsmanship</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Customizable to your specifications</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Professional finish and attention to detail</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Suitable for various applications</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>
            ))}

            {compareProducts.length < 2 && (
              <Card className="overflow-hidden flex items-center justify-center min-h-[500px] border-dashed">
                <div className="text-center p-8">
                  <p className="text-muted-foreground mb-4">
                    Select another product to compare
                  </p>
                  <Button onClick={() => navigate('/')}>
                    Browse Products
                  </Button>
                </div>
              </Card>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ComparePage;

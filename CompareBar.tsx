import { useCompare } from '@/contexts/CompareContext';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { X, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CompareBar = () => {
  const { compareProducts, removeFromCompare, clearCompare } = useCompare();
  const navigate = useNavigate();

  if (compareProducts.length === 0) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-t border-border shadow-lg animate-fade-in">
      <div className="container mx-auto px-2 md:px-4 py-2 md:py-4">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-2 md:gap-4">
          <div className="flex items-center gap-2 md:gap-4 flex-1 min-w-0">
            <span className="text-xs md:text-sm font-medium whitespace-nowrap">
              Compare ({compareProducts.length}/2)
            </span>
            
            <div className="flex gap-1 md:gap-2 flex-1 overflow-x-auto">
              {compareProducts.map((product) => (
                <Card key={product.id} className="flex items-center gap-1 md:gap-2 p-1.5 md:p-2 min-w-fit">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-8 h-8 md:w-10 md:h-10 object-cover rounded"
                  />
                  <span className="text-xs max-w-[80px] md:max-w-[150px] truncate hidden sm:inline">
                    {product.title}
                  </span>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-5 w-5 md:h-6 md:w-6 flex-shrink-0"
                    onClick={() => removeFromCompare(product.id)}
                  >
                    <X className="h-3 w-3" />
                  </Button>
                </Card>
              ))}
            </div>
          </div>

          <div className="flex gap-1.5 md:gap-2 justify-end">
            <Button
              variant="outline"
              size="sm"
              onClick={clearCompare}
              className="text-xs md:text-sm h-8 md:h-9 px-2 md:px-3"
            >
              Clear
            </Button>
            <Button
              size="sm"
              onClick={() => navigate('/compare')}
              disabled={compareProducts.length < 2}
              className="gap-1 md:gap-2 text-xs md:text-sm h-8 md:h-9 px-2 md:px-3"
            >
              Compare
              <ArrowRight className="h-3 w-3 md:h-4 md:w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompareBar;

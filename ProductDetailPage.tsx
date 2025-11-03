import { useSearchParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { categoriesData, getArticleNo } from '@/data/productsData';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, Scale } from 'lucide-react';
import { useCompare } from '@/contexts/CompareContext';
import { toast } from 'sonner';

const ProductDetailPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const productId = searchParams.get('id');
  const { addToCompare, isInCompare, compareProducts } = useCompare();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Find the product across all categories
  let foundProduct = null;
  let categoryName = '';
  let subcategoryName = '';

  for (const category of categoriesData) {
    for (const subcategory of category.subcategories) {
      for (const subSubcategory of subcategory.subSubcategories) {
        const product = subSubcategory.products.find(p => p.id === Number(productId));
        if (product) {
          foundProduct = product;
          categoryName = category.name;
          subcategoryName = subcategory.name;
          break;
        }
      }
      if (foundProduct) break;
    }
    if (foundProduct) break;
  }

  if (!foundProduct) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
            <Button onClick={() => navigate('/')}>Return Home</Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const handleAddToCompare = () => {
    if (compareProducts.length >= 2) {
      toast.error('You can only compare 2 products at a time');
      return;
    }
    addToCompare(foundProduct);
    toast.success('Added to comparison');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 pt-6 pb-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <Button
            variant="ghost"
            onClick={() => navigate(-1)}
            className="mb-6 gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </Button>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <Card className="overflow-hidden">
              <img
                src={foundProduct.image}
                alt={foundProduct.title}
                width="500"
                height="500"
                className="w-full h-auto object-contain bg-white"
              />
            </Card>

            <div className="space-y-6">
              <div>
                <div className="text-sm text-muted-foreground mb-2">
                  {categoryName} / {subcategoryName}
                </div>
                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                  {foundProduct.title}
                </h1>
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-primary/10 px-4 py-2 rounded-lg">
                    <span className="text-sm text-muted-foreground">Article No:</span>
                    <span className="ml-2 font-semibold text-primary">
                      {foundProduct.articleNo || getArticleNo(foundProduct.id)}
                    </span>
                  </div>
                </div>
              </div>

              <div className="prose max-w-none">
                <h2 className="text-xl font-semibold mb-3">Product Details</h2>
                <p className="text-muted-foreground">
                  {foundProduct.description || 
                    `High-quality ${foundProduct.title.toLowerCase()} from our ${categoryName} collection. Expertly crafted with attention to detail and built to last. Perfect for professional use and ceremonial occasions.`
                  }
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-semibold">Features:</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Premium quality materials</li>
                  <li>Expert craftsmanship</li>
                  <li>Customization available</li>
                  <li>Worldwide shipping</li>
                </ul>
              </div>

              <div className="flex gap-3 pt-4">
                <Button 
                  size="lg" 
                  className="flex-1"
                  onClick={() => {
                    const phoneNumber = '923008616698';
                    const message = `Hi, I'm interested in:\n\nProduct: ${foundProduct.title}\nArticle No: ${foundProduct.articleNo || getArticleNo(foundProduct.id)}\nCategory: ${categoryName} / ${subcategoryName}\n\nPlease provide a quote.`;
                    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                    window.open(whatsappUrl, '_blank');
                  }}
                >
                  Request Quote
                </Button>
                <Button
                  variant={isInCompare(foundProduct.id) ? "secondary" : "outline"}
                  size="lg"
                  onClick={handleAddToCompare}
                  disabled={isInCompare(foundProduct.id)}
                  className="gap-2"
                >
                  <Scale className="h-4 w-4" />
                  {isInCompare(foundProduct.id) ? 'Added' : 'Compare'}
                </Button>
              </div>
            </div>
          </div>

          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Product Specifications</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2">Category</h3>
                <p className="text-muted-foreground">{categoryName}</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Type</h3>
                <p className="text-muted-foreground">{subcategoryName}</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Article Number</h3>
                <p className="text-muted-foreground">{foundProduct.articleNo || getArticleNo(foundProduct.id)}</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Availability</h3>
                <p className="text-muted-foreground">Made to Order</p>
              </div>
            </div>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetailPage;

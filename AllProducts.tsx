import { Card } from '@/components/ui/card';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import ImageLightbox from './ImageLightbox';
import { useCompare } from '@/contexts/CompareContext';
import { Scale, LayoutGrid, LayoutList, Grid3x3 } from 'lucide-react';
import { toast } from 'sonner';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { categoriesData } from '@/data/productsData';

const AllProducts = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [lightboxImage, setLightboxImage] = useState<{ src: string; alt: string } | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'list' | 'compact'>('grid');
  const { addToCompare, isInCompare, compareProducts } = useCompare();

  type FlatProduct = {
    id: number;
    title: string;
    image: string;
    categoryId: string;
    categoryName: string;
    subcategoryId: string;
    subcategoryName: string;
    subSubcategoryId: string;
    subSubcategoryName: string;
  };

  const handleAddToCompare = (product: FlatProduct) => {
    if (compareProducts.length >= 2) {
      toast.error('You can only compare 2 products at a time');
      return;
    }
    addToCompare({
      id: product.id,
      title: product.title,
      image: product.image,
      subSubcategory: product.subSubcategoryId,
    });
    toast.success('Added to comparison');
  };

  const allProducts: FlatProduct[] = categoriesData.flatMap((cat) =>
    cat.subcategories.flatMap((sub) =>
      sub.subSubcategories.flatMap((ssc) =>
        ssc.products.map((p) => ({
          id: p.id,
          title: p.title,
          image: p.image,
          categoryId: cat.id,
          categoryName: cat.name,
          subcategoryId: sub.id,
          subcategoryName: sub.name,
          subSubcategoryId: ssc.id,
          subSubcategoryName: ssc.name,
        }))
      )
    )
  );

  const categories = [
    { id: 'all', label: 'All Products' },
    ...categoriesData.map((cat) => ({ id: cat.id, label: cat.name })),
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? allProducts 
    : allProducts.filter(p => p.categoryId === selectedCategory);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            All Products
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto mb-8"></div>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((cat) => (
              <Button
                key={cat.id}
                variant={selectedCategory === cat.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(cat.id)}
                className={selectedCategory === cat.id ? "bg-accent text-primary" : ""}
              >
                {cat.label}
              </Button>
            ))}
          </div>

          {/* View Mode Toggle */}
          <div className="flex justify-end mb-6">
            <ToggleGroup type="single" value={viewMode} onValueChange={(value) => value && setViewMode(value as 'grid' | 'list' | 'compact')}>
              <ToggleGroupItem value="list" aria-label="List view" className="gap-2">
                <LayoutList className="h-4 w-4" />
                <span className="hidden sm:inline">List</span>
              </ToggleGroupItem>
              <ToggleGroupItem value="grid" aria-label="Grid view" className="gap-2">
                <LayoutGrid className="h-4 w-4" />
                <span className="hidden sm:inline">Grid</span>
              </ToggleGroupItem>
              <ToggleGroupItem value="compact" aria-label="Compact view" className="gap-2">
                <Grid3x3 className="h-4 w-4" />
                <span className="hidden sm:inline">Compact</span>
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
        </div>
        
        {viewMode === 'list' && (
          <div className="flex flex-col gap-4">
            {filteredProducts.map((product, index) => (
              <Card 
                key={product.id}
                className="group overflow-hidden hover:shadow-hover transition-all duration-300 border-border animate-fade-in flex flex-row"
                style={{ animationDelay: `${index * 30}ms` }}
              >
                <div 
                  className="w-40 h-40 sm:w-56 sm:h-56 overflow-hidden bg-secondary cursor-pointer flex-shrink-0"
                  onClick={() => navigate(`/product?id=${product.id}`)}
                >
                  <img 
                    src={product.image}
                    alt={product.title}
                    width="500"
                    height="500"
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
                <div className="bg-card flex-1 p-4 sm:p-6 flex flex-col justify-between">
                  <h3 
                    className="font-semibold text-foreground group-hover:text-accent transition-colors cursor-pointer text-base sm:text-xl mb-2 sm:mb-4 line-clamp-2"
                    onClick={() => navigate(`/product?id=${product.id}`)}
                  >
                    {product.title}
                  </h3>
                  <Button
                    variant={isInCompare(product.id) ? "secondary" : "outline"}
                    size="sm"
                    className="gap-2 mt-auto w-fit"
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
        )}
        
        {viewMode === 'grid' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product, index) => (
              <Card 
                key={product.id}
                className="group overflow-hidden hover:shadow-hover transition-all duration-300 border-border animate-fade-in flex flex-col"
                style={{ animationDelay: `${index * 30}ms` }}
              >
                <div 
                  className="w-full aspect-square overflow-hidden bg-secondary cursor-pointer"
                  onClick={() => navigate(`/product?id=${product.id}`)}
                >
                  <img 
                    src={product.image}
                    alt={product.title}
                    width="306"
                    height="306"
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
                <div className="bg-card p-4 flex flex-col">
                  <h3 
                    className="font-semibold text-foreground group-hover:text-accent transition-colors cursor-pointer text-sm line-clamp-2 mb-3"
                    onClick={() => navigate(`/product?id=${product.id}`)}
                  >
                    {product.title}
                  </h3>
                  <Button
                    variant={isInCompare(product.id) ? "secondary" : "outline"}
                    size="sm"
                    className="gap-2 mt-auto w-full"
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
        )}
        
        {viewMode === 'compact' && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {filteredProducts.map((product, index) => (
              <Card 
                key={product.id}
                className="group overflow-hidden hover:shadow-hover transition-all duration-300 border-border animate-fade-in flex flex-col"
                style={{ animationDelay: `${index * 30}ms` }}
              >
                <div 
                  className="w-full aspect-square overflow-hidden bg-secondary cursor-pointer"
                  onClick={() => navigate(`/product?id=${product.id}`)}
                >
                  <img 
                    src={product.image}
                    alt={product.title}
                    width="306"
                    height="306"
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
                <div className="bg-card p-2 flex flex-col">
                  <h3 
                    className="font-semibold text-foreground group-hover:text-accent transition-colors cursor-pointer text-xs mb-2 line-clamp-2"
                    onClick={() => navigate(`/product?id=${product.id}`)}
                  >
                    {product.title}
                  </h3>
                  <Button
                    variant={isInCompare(product.id) ? "secondary" : "outline"}
                    size="sm"
                    className="gap-1 mt-auto w-full text-xs px-2 h-7"
                    onClick={() => handleAddToCompare(product)}
                    disabled={isInCompare(product.id)}
                  >
                    <Scale className="h-3 w-3" />
                    {isInCompare(product.id) ? '✓' : '+'}
                  </Button>
                </div>
              </Card>
            ))}
          </div>
          )}
        
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

export default AllProducts;

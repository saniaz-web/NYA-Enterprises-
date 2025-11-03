import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ChevronRight, LayoutGrid, LayoutList, Grid3x3, Scale } from 'lucide-react';
import { categoriesData, Category, Subcategory, SubSubcategory } from '@/data/productsData';
import ImageLightbox from '@/components/ImageLightbox';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { useCompare } from '@/contexts/CompareContext';
import { toast } from 'sonner';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const CategoryPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [category, setCategory] = useState<Category | null>(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>('all');
  const [selectedSubSubcategory, setSelectedSubSubcategory] = useState<string>('all');
  const [lightboxImage, setLightboxImage] = useState<{ src: string; alt: string } | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'list' | 'compact'>('grid');
  const { addToCompare, isInCompare, compareProducts } = useCompare();

  const handleAddToCompare = (product: { id: number; title: string; image: string; subSubcategory: string }) => {
    if (compareProducts.length >= 2) {
      toast.error('You can only compare 2 products at a time');
      return;
    }
    addToCompare(product);
    toast.success('Added to comparison');
  };
  const handleBackClick = () => {
    if (selectedSubSubcategory !== 'all') {
      setSelectedSubSubcategory('all');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    if (selectedSubcategory !== 'all') {
      setSelectedSubcategory('all');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    navigate(-1);
  };

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const categoryId = params.get('id');
    const subcategoryId = params.get('sub');
    const subSubcategoryId = params.get('subsub');
    
    if (categoryId) {
      const foundCategory = categoriesData.find(cat => cat.id === categoryId);
      setCategory(foundCategory || null);
      
      if (subcategoryId) {
        setSelectedSubcategory(subcategoryId);
      }
      
      if (subSubcategoryId) {
        setSelectedSubSubcategory(subSubcategoryId);
      }
    }
  }, [location]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname, location.search, selectedSubcategory, selectedSubSubcategory]);

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Category not found</p>
      </div>
    );
  }

  const allProducts = category.subcategories.flatMap(sub => 
    sub.subSubcategories.flatMap(subsub => subsub.products)
  );

  let displayProducts = allProducts;
  let displaySubcategories = category.subcategories;
  let displaySubSubcategories: SubSubcategory[] = [];

  if (selectedSubcategory !== 'all') {
    const subcategory = category.subcategories.find(sub => sub.id === selectedSubcategory);
    if (subcategory) {
      displaySubSubcategories = subcategory.subSubcategories;
      
      if (selectedSubSubcategory !== 'all') {
        const subSubcategory = subcategory.subSubcategories.find(
          subsub => subsub.id === selectedSubSubcategory
        );
        displayProducts = subSubcategory?.products || [];
      } else {
        displayProducts = subcategory.subSubcategories.flatMap(subsub => subsub.products);
      }
    }
  }

  const currentSubcategory = category.subcategories.find(sub => sub.id === selectedSubcategory);
  const currentSubSubcategory = currentSubcategory?.subSubcategories.find(
    subsub => subsub.id === selectedSubSubcategory
  );

  return (
    <div className="min-h-screen bg-background pt-6 pb-24">
      <div className="container mx-auto px-4">
        <Button
          variant="ghost"
          onClick={handleBackClick}
          className="mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>

        {/* Breadcrumbs */}
        <Breadcrumb className="mb-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink 
                onClick={() => {
                  setSelectedSubcategory('all');
                  setSelectedSubSubcategory('all');
                }}
                className="cursor-pointer hover:text-primary"
              >
                {category.name}
              </BreadcrumbLink>
            </BreadcrumbItem>
            
            {selectedSubcategory !== 'all' && currentSubcategory && (
              <>
                <BreadcrumbSeparator>
                  <ChevronRight className="h-4 w-4" />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                  {selectedSubSubcategory === 'all' ? (
                    <BreadcrumbPage>{currentSubcategory.name}</BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink 
                      onClick={() => setSelectedSubSubcategory('all')}
                      className="cursor-pointer hover:text-primary"
                    >
                      {currentSubcategory.name}
                    </BreadcrumbLink>
                  )}
                </BreadcrumbItem>
              </>
            )}
            
            {selectedSubSubcategory !== 'all' && currentSubSubcategory && (
              <>
                <BreadcrumbSeparator>
                  <ChevronRight className="h-4 w-4" />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbPage>{currentSubSubcategory.name}</BreadcrumbPage>
                </BreadcrumbItem>
              </>
            )}
          </BreadcrumbList>
        </Breadcrumb>

        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {currentSubSubcategory?.name || currentSubcategory?.name || category.name}
          </h1>
          <p className="text-lg text-muted-foreground mb-6">
            {category.description}
          </p>
          <div className="w-24 h-1 bg-gradient-accent"></div>
        </div>

        {/* Subcategory Selection - Level 2 */}
        {selectedSubcategory === 'all' && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">Browse by Type</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {displaySubcategories.map((sub) => (
                <Card 
                  key={sub.id}
                  className="group overflow-hidden cursor-pointer hover:shadow-hover transition-all duration-300 border animate-fade-in"
                  onClick={() => setSelectedSubcategory(sub.id)}
                >
                  <div className="aspect-[4/3] overflow-hidden bg-muted">
                    <img 
                      src={sub.image || sub.subSubcategories[0]?.products[0]?.image || ''}
                      alt={sub.name}
                      width="500"
                      height="375"
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  </div>
                  <div className="p-6 bg-card">
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                      {sub.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {sub.subSubcategories.reduce((sum, subsub) => sum + subsub.products.length, 0)} products available
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Sub-Subcategory Filter - Level 3 */}
        {selectedSubcategory !== 'all' && displaySubSubcategories.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">Filter by Material/Type</h2>
            <div className="flex flex-wrap gap-4">
              <Card
                className={`group overflow-hidden cursor-pointer transition-all duration-300 border ${
                  selectedSubSubcategory === 'all' ? 'ring-2 ring-primary shadow-hover' : 'hover:shadow-hover'
                }`}
                onClick={() => setSelectedSubSubcategory('all')}
              >
                <div className="flex items-center gap-3 p-3">
                  <div className="w-12 h-12 rounded-md bg-gradient-accent flex items-center justify-center">
                    <span className="text-lg font-bold text-primary">All</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">All Items</p>
                    <p className="text-xs text-muted-foreground">
                      {displaySubSubcategories.reduce((sum, subsub) => sum + subsub.products.length, 0)} products
                    </p>
                  </div>
                </div>
              </Card>
              {displaySubSubcategories.map((subsub) => (
                <Card
                  key={subsub.id}
                  className={`group overflow-hidden cursor-pointer transition-all duration-300 border ${
                    selectedSubSubcategory === subsub.id ? 'ring-2 ring-primary shadow-hover' : 'hover:shadow-hover'
                  }`}
                  onClick={() => setSelectedSubSubcategory(subsub.id)}
                >
                  <div className="flex items-center gap-3 p-3">
                    <div className="w-12 h-12 rounded-md overflow-hidden bg-secondary flex-shrink-0">
                      {subsub.products[0]?.image && (
                        <img 
                          src={subsub.products[0].image}
                          alt={subsub.name}
                          width="48"
                          height="48"
                          loading="lazy"
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                      )}
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{subsub.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {subsub.products.length} products
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Products Grid */}
        <div>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-foreground">
              Products ({displayProducts.length})
            </h2>
            
            {/* View Mode Toggle */}
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
          
          {viewMode === 'list' && (
            <div className="flex flex-col gap-4">
              {displayProducts.map((product, index) => (
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
                      onClick={() => handleAddToCompare({
                        id: product.id,
                        title: product.title,
                        image: product.image,
                        subSubcategory: product.subSubcategory
                      })}
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
              {displayProducts.map((product, index) => (
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
                      onClick={() => handleAddToCompare({
                        id: product.id,
                        title: product.title,
                        image: product.image,
                        subSubcategory: product.subSubcategory
                      })}
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
              {displayProducts.map((product, index) => (
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
                      onClick={() => handleAddToCompare({
                        id: product.id,
                        title: product.title,
                        image: product.image,
                        subSubcategory: product.subSubcategory
                      })}
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
        </div>
        
        <ImageLightbox
          image={lightboxImage?.src || ''}
          alt={lightboxImage?.alt || ''}
          isOpen={!!lightboxImage}
          onClose={() => setLightboxImage(null)}
        />
      </div>
    </div>
  );
};

export default CategoryPage;

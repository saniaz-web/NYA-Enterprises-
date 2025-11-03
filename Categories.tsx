import { Card } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import { categoriesData } from '@/data/productsData';

const Categories = () => {
  const navigate = useNavigate();

  return (
    <section id="products" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Our Categories
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-6">
            Explore our comprehensive range of premium products
          </p>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categoriesData.map((category, index) => (
            <Card 
              key={category.id}
              className="group overflow-hidden cursor-pointer hover:shadow-hover transition-all duration-300 border animate-fade-in"
              style={{ animationDelay: `${index * 50}ms` }}
              onClick={() => navigate(`/category?id=${category.id}`)}
            >
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <img 
                  src={category.image}
                  alt={category.name}
                  width="500"
                  height="375"
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6 bg-card">
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                  {category.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {category.subcategories.reduce((sum, sc) => sum + sc.subSubcategories.reduce((subSum, subsub) => subSum + subsub.products.length, 0), 0)} products available
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;

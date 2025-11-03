import { useState, useEffect } from 'react';
import { Menu, X, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { useNavigate, useLocation } from 'react-router-dom';
import logoMain from '@/assets/images/logo-main.png';
import logoSecondary from '@/assets/images/logo-secondary.png';
import { categoriesData, Product } from '@/data/productsData';
import { Card } from '@/components/ui/card';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Close mobile menu on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isOpen]);

  // Get all products from all categories
  const allProducts = categoriesData.flatMap(category =>
    category.subcategories.flatMap(subcategory => 
      subcategory.subSubcategories.flatMap(subSubcategory => subSubcategory.products)
    )
  );

  // Filter products based on search query (search by title or article number)
  const searchResults = searchQuery.trim()
    ? allProducts.filter(product => {
        const query = searchQuery.toLowerCase().trim();
        const matchesTitle = product.title.toLowerCase().includes(query);
        const matchesId = product.id.toString().includes(query);
        return matchesTitle || matchesId;
      }).slice(0, 8) // Limit to 8 results
    : [];

  const handleNavClick = (href: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Products', href: '#products' },
    { label: 'Contact Us', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div 
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => navigate('/')}
          >
            <img src={logoMain} alt="NYA Enterprises Logo" width="146" height="125" className="h-12 w-auto" fetchPriority="high" />
            <img src={logoSecondary} alt="NYA" width="177" height="100" className="h-10 w-auto" fetchPriority="high" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
              >
                {item.label}
              </button>
            ))}
            
            {/* Search Bar */}
            <Popover open={isSearchOpen} onOpenChange={setIsSearchOpen}>
              <PopoverTrigger asChild>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Search by name or article #..."
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      setIsSearchOpen(e.target.value.trim().length > 0);
                    }}
                    className="pl-9 w-64"
                  />
                </div>
              </PopoverTrigger>
              {searchResults.length > 0 && (
                <PopoverContent className="w-80 p-2 max-h-96 overflow-y-auto" align="end">
                  <div className="space-y-2">
                    {searchResults.map((product) => (
                      <Card
                        key={product.id}
                        className="p-3 hover:bg-accent/50 cursor-pointer transition-colors"
                        onClick={() => {
                          navigate(`/product?id=${product.id}`);
                          setSearchQuery('');
                          setIsSearchOpen(false);
                        }}
                      >
                        <div className="flex gap-3">
                          <img
                            src={product.image}
                            alt={product.title}
                            width="64"
                            height="64"
                            loading="lazy"
                            className="w-16 h-16 object-cover rounded"
                          />
                          <div className="flex-1 min-w-0">
                            <h4 className="text-sm font-medium text-foreground line-clamp-2">
                              {product.title}
                            </h4>
                            <p className="text-xs text-muted-foreground mt-1">
                              Article #: {product.id}
                            </p>
                            <p className="text-xs text-muted-foreground capitalize">
                              {product.subSubcategory.split('-').join(' ')}
                            </p>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </PopoverContent>
              )}
            </Popover>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 animate-fade-in">
            {/* Mobile Search */}
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search by name or article #..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9"
              />
            </div>
            
            {/* Mobile Search Results */}
            {searchResults.length > 0 && (
              <div className="mb-4 space-y-2 max-h-64 overflow-y-auto">
                {searchResults.map((product) => (
                  <Card
                    key={product.id}
                    className="p-3 hover:bg-accent/50 cursor-pointer transition-colors"
                    onClick={() => {
                      navigate(`/product?id=${product.id}`);
                      setSearchQuery('');
                      setIsOpen(false);
                    }}
                  >
                    <div className="flex gap-3">
                      <img
                        src={product.image}
                        alt={product.title}
                        width="64"
                        height="64"
                        loading="lazy"
                        className="w-16 h-16 object-cover rounded"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-medium text-foreground line-clamp-2">
                          {product.title}
                        </h4>
                        <p className="text-xs text-muted-foreground mt-1">
                          Article #: {product.id}
                        </p>
                        <p className="text-xs text-muted-foreground capitalize">
                          {product.subSubcategory.split('-').join(' ')}
                        </p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            )}
            
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="block w-full text-left py-3 text-sm font-medium text-foreground hover:text-accent transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;

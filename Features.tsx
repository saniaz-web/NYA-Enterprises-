import { Award, Globe, Settings } from 'lucide-react';
import { Card } from '@/components/ui/card';

const Features = () => {
  const features = [
    {
      icon: Award,
      title: 'High Quality',
      description: 'Top-notch craftsmanship and materials.',
    },
    {
      icon: Globe,
      title: 'Global Export',
      description: 'Supplying products across the world.',
    },
    {
      icon: Settings,
      title: 'Custom Orders',
      description: 'Tailored solutions for your business.',
    },
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={feature.title}
              className="p-10 text-center hover:shadow-hover transition-all duration-300 animate-fade-in border bg-card group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

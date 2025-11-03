import { Card } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="p-10 md:p-14 shadow-card border">
            <div className="text-center mb-10">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
                About NYA Enterprises
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
            </div>
            
            <div className="space-y-6">
              <p className="text-muted-foreground text-lg leading-relaxed">
                NYA Enterprises is a leading manufacturer and exporter of high-quality embroidery badges, 
                masonic regalia items, military peck caps & berets, uniforms & accessories, sports wear, 
                saddlery equipment, gloves, and sports leather goods.
              </p>
              
              <p className="text-muted-foreground text-lg leading-relaxed">
                With years of experience in the industry, we have built a reputation for delivering 
                exceptional quality products to customers worldwide. Our commitment to craftsmanship 
                and attention to detail ensures that every item meets the highest standards.
              </p>
              
              <p className="text-muted-foreground text-lg leading-relaxed">
                Whether you need custom embroidered patches, military uniforms, or specialized sports equipment, 
                NYA Enterprises is your trusted partner for all your manufacturing needs.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;

import { Mail, Phone, MapPin } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Get In Touch
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-6">
            Have a question or need a custom quote? We're here to help
          </p>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="p-10 text-center hover:shadow-hover transition-all duration-300 border">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6">
              <Mail className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-3">Email Us</h3>
            <p className="text-muted-foreground text-sm break-all">
              <a href="mailto:info@nyaent.com" className="hover:underline">info@nyaent.com</a><br />
              <a href="mailto:nyaent2@gmail.com" className="hover:underline">nyaent2@gmail.com</a>
            </p>
          </Card>

          <Card className="p-10 text-center hover:shadow-hover transition-all duration-300 border">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6">
              <Phone className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-3">Call Us</h3>
            <p className="text-muted-foreground text-sm">
              <a href="tel:+923008616698" className="hover:underline">+92 3008616698</a>
            </p>
          </Card>

          <Card className="p-10 text-center hover:shadow-hover transition-all duration-300 border">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6">
              <MapPin className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-3">Visit Us</h3>
            <p className="text-muted-foreground text-sm whitespace-pre-line">
              NYA ENTERPRISES,
              Plot No: 228, Street # 1,
              B-Block, MAG Town,
              Kashmir Road, Sialkot
              Pakistan. 51310
            </p>
          </Card>
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium shadow-md hover:shadow-lg transition-all"
          >
            Send Message
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;

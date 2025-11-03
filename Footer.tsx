import { Instagram } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Contact Us', href: '#contact' },
    { label: 'Custom Made Requirements', href: '#contact' },
    { label: 'Terms & Conditions', href: '#' },
  ];

  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="text-3xl font-bold text-accent">NYA</div>
              <div className="text-sm font-semibold tracking-wider">ENTERPRISES</div>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Manufacturer and exporter of embroidery badges, masonic regalia items, 
              military peck caps & berets, uniforms & accessories, sports wear, 
              saddlery equipment, gloves and sports leather goods.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-accent transition-colors text-sm hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li>
                NYA ENTERPRISES,<br />
                Plot No: 228, Street # 1,<br />
                B-Block, MAG Town,<br />
                Kashmir Road, Sialkot<br />
                Pakistan. 51310
              </li>
              <li>
                Phone: <a href="tel:+923008616698" className="hover:underline text-accent">+92 3008616698</a>
              </li>
              <li>
                Email: <a href="mailto:info@nyaent.com" className="hover:underline text-accent">info@nyaent.com</a>,
                <br className="md:hidden" /> <a href="mailto:nyaent2@gmail.com" className="hover:underline text-accent">nyaent2@gmail.com</a>
              </li>
              <li className="flex items-center gap-2 mt-4">
                <span>Follow us:</span>
                <a 
                  href="https://www.instagram.com/nya_enterprises?igsh=MXNzam9jdDhtYzU2MA==" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-8 h-8 bg-primary-foreground/10 hover:bg-accent rounded-full transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-4 w-4" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-primary-foreground/70 text-sm">
            © 2015-2025 NYA Enterprises. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

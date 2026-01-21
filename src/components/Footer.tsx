import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="gradient-hero py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg gradient-accent flex items-center justify-center">
                <span className="font-display text-2xl text-secondary-foreground">GD</span>
              </div>
              <span className="font-display text-2xl text-primary-foreground tracking-wide">
                GARAGE DOOR PRO
              </span>
            </div>
            <p className="text-primary-foreground/70">
              Your trusted partner for all garage door needs. Quality service since 2004.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-xl text-primary-foreground mb-4">SERVICES</h4>
            <ul className="space-y-2 text-primary-foreground/70">
              <li>Garage Door Repair</li>
              <li>New Installation</li>
              <li>Maintenance</li>
              <li>Emergency Service</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-xl text-primary-foreground mb-4">CONTACT</h4>
            <div className="space-y-3 text-primary-foreground/70">
              <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-secondary transition-colors">
                <Phone className="w-4 h-4" />
                (123) 456-7890
              </a>
              <a href="mailto:info@garagedoorpro.com" className="flex items-center gap-2 hover:text-secondary transition-colors">
                <Mail className="w-4 h-4" />
                info@garagedoorpro.com
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                123 Main Street, City, ST 12345
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/50 text-sm">
          © {new Date().getFullYear()} Garage Door Pro. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

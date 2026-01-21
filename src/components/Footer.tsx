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
                <span className="font-display text-xl text-secondary-foreground">BH</span>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-display text-xl text-primary-foreground tracking-wide">
                  BH GARAGE DOOR
                </span>
                <span className="font-display text-sm text-secondary tracking-wide">
                  & GATES SOLUTIONS
                </span>
              </div>
            </div>
            <p className="text-primary-foreground/70">
              Your trusted partner for all garage door and gate needs. Quality service since 2004.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-xl text-primary-foreground mb-4">SERVICES</h4>
            <ul className="space-y-2 text-primary-foreground/70">
              <li>Spring Repair & Replacement</li>
              <li>Opener Repair & Installation</li>
              <li>New Door Installation</li>
              <li>Gate Repair & Installation</li>
              <li>24/7 Emergency Service</li>
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
              <a href="mailto:info@bhgaragedoor.com" className="flex items-center gap-2 hover:text-secondary transition-colors">
                <Mail className="w-4 h-4" />
                info@bhgaragedoor.com
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                123 Main Street, City, ST 12345
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/50 text-sm">
          © {new Date().getFullYear()} BH Garage Door & Gates Solutions. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

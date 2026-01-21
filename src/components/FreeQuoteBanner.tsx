import { motion } from "framer-motion";
import { Phone, Calendar, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const FreeQuoteBanner = () => {
  return (
    <section className="py-12 md:py-16 gradient-accent">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col lg:flex-row items-center justify-between gap-8"
        >
          <div className="text-center lg:text-left">
            <h2 className="font-display text-3xl md:text-5xl text-secondary-foreground mb-4">
              GET YOUR FREE ESTIMATE TODAY
            </h2>
            <div className="flex flex-wrap justify-center lg:justify-start gap-6">
              <div className="flex items-center gap-2 text-secondary-foreground">
                <CheckCircle className="w-5 h-5" />
                <span>No Obligation</span>
              </div>
              <div className="flex items-center gap-2 text-secondary-foreground">
                <CheckCircle className="w-5 h-5" />
                <span>Same Day Service</span>
              </div>
              <div className="flex items-center gap-2 text-secondary-foreground">
                <CheckCircle className="w-5 h-5" />
                <span>Fair Pricing</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="xl" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold"
              asChild
            >
              <a href="tel:+1234567890" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                (123) 456-7890
              </a>
            </Button>
            <Button 
              size="xl" 
              variant="outline"
              className="border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground/10 font-bold"
              asChild
            >
              <a href="#contact" className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Schedule Online
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FreeQuoteBanner;

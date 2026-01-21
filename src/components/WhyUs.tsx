import { Check, Award, Users, ThumbsUp } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  { icon: Award, text: "20+ Years Experience" },
  { icon: Users, text: "5000+ Happy Customers" },
  { icon: ThumbsUp, text: "100% Satisfaction Guarantee" },
  { icon: Check, text: "Transparent Pricing" },
];

const WhyUs = () => {
  return (
    <section id="why-us" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
              Why Choose Us
            </span>
            <h2 className="font-display text-4xl md:text-6xl text-foreground mt-2 mb-6">
              TRUSTED BY HOMEOWNERS
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              We're committed to providing the best garage door services in the area. 
              Our team of certified technicians delivers quality workmanship and 
              exceptional customer service on every job.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.text}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3 p-4 bg-muted rounded-lg"
                >
                  <feature.icon className="w-6 h-6 text-secondary flex-shrink-0" />
                  <span className="font-medium text-foreground">{feature.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="gradient-hero rounded-2xl p-8 md:p-12">
              <div className="text-center">
                <div className="font-display text-7xl md:text-9xl text-secondary mb-2">
                  20+
                </div>
                <div className="text-primary-foreground text-xl font-medium mb-6">
                  Years of Excellence
                </div>
                <div className="grid grid-cols-2 gap-6 pt-6 border-t border-primary-foreground/20">
                  <div>
                    <div className="font-display text-4xl text-secondary">5K+</div>
                    <div className="text-primary-foreground/80 text-sm">Projects Done</div>
                  </div>
                  <div>
                    <div className="font-display text-4xl text-secondary">4.9</div>
                    <div className="text-primary-foreground/80 text-sm">Star Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;

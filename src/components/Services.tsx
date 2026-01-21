import { Wrench, PlusCircle, Settings, Shield } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Wrench,
    title: "Garage Door Repair",
    description: "Fast and reliable repair services for all types of garage doors. Springs, cables, openers, and more.",
  },
  {
    icon: PlusCircle,
    title: "New Installation",
    description: "Professional installation of residential and commercial garage doors. Wide selection of styles and materials.",
  },
  {
    icon: Settings,
    title: "Maintenance",
    description: "Regular maintenance to keep your garage door running smoothly and extend its lifespan.",
  },
  {
    icon: Shield,
    title: "Emergency Service",
    description: "24/7 emergency repairs when you need us most. Fast response times for urgent situations.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 md:py-32 bg-muted">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            What We Offer
          </span>
          <h2 className="font-display text-4xl md:text-6xl text-foreground mt-2">
            OUR SERVICES
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-xl p-6 shadow-card hover:shadow-elevated transition-shadow duration-300"
            >
              <div className="w-14 h-14 rounded-lg gradient-accent flex items-center justify-center mb-4">
                <service.icon className="w-7 h-7 text-secondary-foreground" />
              </div>
              <h3 className="font-display text-2xl text-card-foreground mb-3">
                {service.title.toUpperCase()}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

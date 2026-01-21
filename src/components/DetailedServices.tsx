import { motion } from "framer-motion";
import { 
  Wrench, 
  Cog, 
  Cable, 
  MonitorSpeaker, 
  ShieldCheck, 
  Home,
  ArrowRight,
  DoorOpen
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Wrench,
    title: "Spring Repair & Replacement",
    description: "Broken garage door springs are one of the most common issues we handle. We repair and replace both torsion and extension springs quickly and safely.",
    details: [
      "Torsion spring replacement",
      "Extension spring repair",
      "Spring tension adjustment",
      "Safety cable installation"
    ]
  },
  {
    icon: MonitorSpeaker,
    title: "Opener Repair & Installation",
    description: "From chain-drive to belt-drive openers, we service all major brands. Whether you need a repair or a complete new opener installation, we've got you covered.",
    details: [
      "All major brands serviced",
      "Smart opener installation",
      "Remote programming",
      "Safety sensor alignment"
    ]
  },
  {
    icon: Cable,
    title: "Cable & Drum Repair",
    description: "Frayed or broken cables can leave your door stuck or hanging unevenly. Our technicians quickly replace cables and drums to restore smooth operation.",
    details: [
      "Cable replacement",
      "Drum repair/replacement",
      "Track realignment",
      "Bearing lubrication"
    ]
  },
  {
    icon: Cog,
    title: "Off-Track Repair",
    description: "A garage door that's come off its track is a safety hazard. We carefully realign and secure your door, replacing any damaged rollers or tracks.",
    details: [
      "Track realignment",
      "Roller replacement",
      "Bracket repair",
      "Full system inspection"
    ]
  },
  {
    icon: Home,
    title: "New Door Installation",
    description: "Upgrade your home's curb appeal with a brand new garage door. We offer a wide selection of styles, materials, and colors to match your home.",
    details: [
      "Steel & aluminum doors",
      "Carriage house styles",
      "Insulated options",
      "Custom sizing available"
    ]
  },
  {
    icon: DoorOpen,
    title: "Gate Repair & Installation",
    description: "We also specialize in automatic gate systems for residential and commercial properties. From swing gates to sliding gates, we install and repair them all.",
    details: [
      "Swing gate installation",
      "Sliding gate systems",
      "Access control systems",
      "Gate opener repair"
    ]
  },
];

const DetailedServices = () => {
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
          <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
            Complete garage door and gate solutions for residential and commercial properties
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-2xl p-6 shadow-card hover:shadow-elevated transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-xl gradient-accent flex items-center justify-center mb-5">
                <service.icon className="w-7 h-7 text-secondary-foreground" />
              </div>
              
              <h3 className="font-display text-2xl text-card-foreground mb-3">
                {service.title.toUpperCase()}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed mb-4">
                {service.description}
              </p>

              <ul className="space-y-2 mb-5">
                {service.details.map((detail) => (
                  <li key={detail} className="flex items-center gap-2 text-sm text-foreground">
                    <ShieldCheck className="w-4 h-4 text-secondary flex-shrink-0" />
                    {detail}
                  </li>
                ))}
              </ul>

              <a 
                href="#contact" 
                className="inline-flex items-center gap-2 text-secondary font-semibold group-hover:gap-3 transition-all"
              >
                Get a Quote <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Emergency CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 gradient-hero rounded-2xl p-8 md:p-12 text-center"
        >
          <h3 className="font-display text-3xl md:text-4xl text-primary-foreground mb-4">
            24/7 EMERGENCY SERVICE
          </h3>
          <p className="text-primary-foreground/80 text-lg mb-6 max-w-xl mx-auto">
            Stuck with a broken garage door? We offer fast emergency repairs when you need us most.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" asChild>
              <a href="tel:+1234567890">Call Now: (123) 456-7890</a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#contact">Schedule Service</a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DetailedServices;

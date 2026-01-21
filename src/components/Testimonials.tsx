import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Jennifer Williams",
    location: "San Diego, CA",
    rating: 5,
    text: "BH Garage Door came out the same day I called. The technician was professional, explained everything, and fixed my broken spring in under an hour. Highly recommend!",
    service: "Spring Replacement"
  },
  {
    name: "Robert Thompson",
    location: "Chula Vista, CA",
    rating: 5,
    text: "We needed a complete garage door replacement. From the quote to the installation, everything was seamless. Our new door looks amazing and works perfectly.",
    service: "New Installation"
  },
  {
    name: "Maria Garcia",
    location: "La Mesa, CA",
    rating: 5,
    text: "Emergency service at its finest! My garage door went off track late at night and they had someone out first thing in the morning. Great pricing too!",
    service: "Off-Track Repair"
  },
  {
    name: "David Kim",
    location: "El Cajon, CA",
    rating: 5,
    text: "The team installed a new smart opener for us. They were on time, clean, and showed us how to use all the features. Excellent customer service!",
    service: "Opener Installation"
  },
  {
    name: "Lisa Anderson",
    location: "Oceanside, CA",
    rating: 5,
    text: "I've used BH Garage Door twice now and both times they exceeded expectations. Fair prices, quality work, and friendly technicians. Won't go anywhere else!",
    service: "Cable Repair"
  },
  {
    name: "Michael Brown",
    location: "Carlsbad, CA",
    rating: 5,
    text: "They installed an automatic gate for our driveway. The work was impeccable and they handled all the permits. Very professional operation!",
    service: "Gate Installation"
  }
];

const Testimonials = () => {
  return (
    <section id="reviews" className="py-20 md:py-32 bg-muted">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="font-display text-4xl md:text-6xl text-foreground mt-2">
            WHAT OUR CLIENTS SAY
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
            Don't just take our word for it – hear from our satisfied customers
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-2xl p-6 shadow-card hover:shadow-elevated transition-all duration-300 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 opacity-10">
                <Quote className="w-12 h-12 text-foreground" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                ))}
              </div>

              {/* Service Badge */}
              <span className="inline-block px-3 py-1 bg-secondary/10 text-secondary text-sm font-medium rounded-full mb-4">
                {testimonial.service}
              </span>

              {/* Review Text */}
              <p className="text-muted-foreground leading-relaxed mb-6">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="border-t border-border pt-4">
                <div className="font-semibold text-foreground">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">{testimonial.location}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-4 bg-card rounded-full px-6 py-3 shadow-card">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
              ))}
            </div>
            <span className="text-foreground font-medium">4.9 out of 5</span>
            <span className="text-muted-foreground">based on 500+ reviews</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, CheckCircle, Clock, Calendar } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const serviceOptions = [
  "Garage Door Repair",
  "Opener Repair",
  "Springs Repair",
  "Cables Repair",
  "New Garage Door",
  "Gate Installation",
  "Maintenance",
  "Other"
];

const timeSlots = [
  "08:00 AM - 11:00 AM",
  "09:00 AM - 12:00 PM",
  "10:00 AM - 1:00 PM",
  "11:00 AM - 2:00 PM",
  "12:00 PM - 3:00 PM",
  "1:00 PM - 4:00 PM",
  "2:00 PM - 5:00 PM",
  "3:00 PM - 6:00 PM",
  "4:00 PM - 7:00 PM",
  "5:00 PM - 8:00 PM"
];

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    date: "",
    time: "",
    service: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSubmitted(true);
    toast({
      title: "Request Received!",
      description: "We'll contact you shortly to confirm your appointment.",
    });

    setFormData({ name: "", email: "", phone: "", address: "", date: "", time: "", service: "", message: "" });
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            Schedule Service
          </span>
          <h2 className="font-display text-4xl md:text-6xl text-foreground mt-2">
            REQUEST A FREE ESTIMATE
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
            Fill out the form below or give us a call. We offer free estimates on all services!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-display text-3xl text-foreground mb-6">
              CONTACT INFORMATION
            </h3>
            <p className="text-muted-foreground text-lg mb-8">
              Ready to get started? Fill out the form or contact us directly. 
              We're available 24/7 for emergency services!
            </p>

            <div className="space-y-4">
              <a
                href="tel:+1234567890"
                className="flex items-center gap-4 p-5 bg-card rounded-xl shadow-card hover:shadow-elevated transition-all group"
              >
                <div className="w-14 h-14 rounded-xl gradient-accent flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Phone className="w-7 h-7 text-secondary-foreground" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Call Us Now</div>
                  <div className="font-display text-2xl text-foreground">(123) 456-7890</div>
                </div>
              </a>

              <a
                href="mailto:info@bhgaragedoor.com"
                className="flex items-center gap-4 p-5 bg-card rounded-xl shadow-card hover:shadow-elevated transition-all group"
              >
                <div className="w-14 h-14 rounded-xl gradient-accent flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Mail className="w-7 h-7 text-secondary-foreground" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Email Us</div>
                  <div className="font-semibold text-foreground">info@bhgaragedoor.com</div>
                </div>
              </a>

              <div className="flex items-center gap-4 p-5 bg-card rounded-xl shadow-card">
                <div className="w-14 h-14 rounded-xl gradient-accent flex items-center justify-center">
                  <MapPin className="w-7 h-7 text-secondary-foreground" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Service Area</div>
                  <div className="font-semibold text-foreground">San Diego County & Surrounding Areas</div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-5 bg-card rounded-xl shadow-card">
                <div className="w-14 h-14 rounded-xl gradient-accent flex items-center justify-center">
                  <Clock className="w-7 h-7 text-secondary-foreground" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Hours</div>
                  <div className="font-semibold text-foreground">Mon - Sat: 8AM - 8PM | Emergency 24/7</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-6 md:p-8 shadow-elevated border border-border">
              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 rounded-full text-secondary font-semibold text-sm mb-2">
                  <Calendar className="w-4 h-4" />
                  Schedule Your Free Estimate
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="h-12"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Phone *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(123) 456-7890"
                      required
                      className="h-12"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                      className="h-12"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-foreground mb-2">
                    Address
                  </label>
                  <Input
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="123 Main St, City, State"
                    className="h-12"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-foreground mb-2">
                      Preferred Date
                    </label>
                    <Input
                      id="date"
                      name="date"
                      type="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="h-12"
                    />
                  </div>
                  <div>
                    <label htmlFor="time" className="block text-sm font-medium text-foreground mb-2">
                      Preferred Time
                    </label>
                    <select
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className="w-full h-12 px-3 bg-background border border-input rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    >
                      <option value="">Select time</option>
                      {timeSlots.map((slot) => (
                        <option key={slot} value={slot}>{slot}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                    How Can We Help? *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full h-12 px-3 bg-background border border-input rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    <option value="">Select service</option>
                    {serviceOptions.map((service) => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Additional Details
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your issue or what service you need..."
                    rows={3}
                    className="resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  variant="hero"
                  size="xl"
                  className="w-full"
                  disabled={isSubmitting || isSubmitted}
                >
                  {isSubmitting ? (
                    "Submitting..."
                  ) : isSubmitted ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      Request Sent!
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Get Free Estimate
                    </>
                  )}
                </Button>

                <p className="text-center text-sm text-muted-foreground">
                  By submitting this form, you agree to be contacted regarding your service request.
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

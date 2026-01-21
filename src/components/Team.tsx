import { motion } from "framer-motion";
import { Shield, Award, Clock, Users } from "lucide-react";
import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";
import team3 from "@/assets/team-3.jpg";

const teamMembers = [
  {
    image: team1,
    name: "Mike Johnson",
    role: "Lead Technician",
    experience: "15+ years",
  },
  {
    image: team2,
    name: "Sarah Martinez",
    role: "Customer Relations",
    experience: "10+ years",
  },
  {
    image: team3,
    name: "David Chen",
    role: "Senior Installer",
    experience: "12+ years",
  },
];

const values = [
  {
    icon: Shield,
    title: "Licensed & Insured",
    description: "Fully licensed professionals with comprehensive insurance coverage"
  },
  {
    icon: Award,
    title: "Quality Workmanship",
    description: "Every job completed to the highest industry standards"
  },
  {
    icon: Clock,
    title: "Prompt Service",
    description: "Same-day service available with fast response times"
  },
  {
    icon: Users,
    title: "Family Owned",
    description: "A local business that treats every customer like family"
  }
];

const Team = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
              About Us
            </span>
            <h2 className="font-display text-4xl md:text-6xl text-foreground mt-2 mb-6">
              MEET OUR TEAM
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              At BH Garage Door & Gates Solutions, our team is the heart of everything we do. 
              With years of hands-on experience and a passion for quality workmanship, each 
              technician is trained to deliver top-tier service with a friendly attitude.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              We prioritize reliability, expert craftsmanship, and completing each job correctly 
              the first time. Our crew takes pride in every repair and installation, working 
              together to ensure customer satisfaction.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3 p-4 bg-muted rounded-xl"
                >
                  <value.icon className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-foreground">{value.title}</h4>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Team Photos */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <div className="bg-card rounded-2xl overflow-hidden shadow-card">
                <img
                  src={team1}
                  alt={teamMembers[0].name}
                  className="w-full aspect-square object-cover"
                />
                <div className="p-4 text-center">
                  <h4 className="font-display text-xl text-card-foreground">{teamMembers[0].name}</h4>
                  <p className="text-secondary text-sm font-medium">{teamMembers[0].role}</p>
                </div>
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="bg-card rounded-2xl overflow-hidden shadow-card">
                <img
                  src={team2}
                  alt={teamMembers[1].name}
                  className="w-full aspect-square object-cover"
                />
                <div className="p-4 text-center">
                  <h4 className="font-display text-xl text-card-foreground">{teamMembers[1].name}</h4>
                  <p className="text-secondary text-sm font-medium">{teamMembers[1].role}</p>
                </div>
              </div>
              <div className="bg-card rounded-2xl overflow-hidden shadow-card">
                <img
                  src={team3}
                  alt={teamMembers[2].name}
                  className="w-full aspect-square object-cover"
                />
                <div className="p-4 text-center">
                  <h4 className="font-display text-xl text-card-foreground">{teamMembers[2].name}</h4>
                  <p className="text-secondary text-sm font-medium">{teamMembers[2].role}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="gradient-hero rounded-2xl p-8 md:p-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          <div className="text-center">
            <div className="font-display text-5xl md:text-6xl text-secondary">20+</div>
            <div className="text-primary-foreground mt-2">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="font-display text-5xl md:text-6xl text-secondary">5,000+</div>
            <div className="text-primary-foreground mt-2">Doors Installed</div>
          </div>
          <div className="text-center">
            <div className="font-display text-5xl md:text-6xl text-secondary">4.9</div>
            <div className="text-primary-foreground mt-2">Star Rating</div>
          </div>
          <div className="text-center">
            <div className="font-display text-5xl md:text-6xl text-secondary">24/7</div>
            <div className="text-primary-foreground mt-2">Emergency Service</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;

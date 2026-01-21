import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import before1 from "@/assets/before-1.jpg";
import after1 from "@/assets/after-1.jpg";
import before2 from "@/assets/before-2.jpg";
import after2 from "@/assets/after-2.jpg";
import before3 from "@/assets/before-3.jpg";
import after3 from "@/assets/after-3.jpg";

const projects = [
  {
    before: before1,
    after: after1,
    title: "Complete Door Replacement",
    location: "Residential Home",
    description: "Replaced damaged wooden door with new insulated steel door",
  },
  {
    before: before2,
    after: after2,
    title: "Spring Repair",
    location: "Family Garage",
    description: "Fixed broken torsion spring and realigned the entire system",
  },
  {
    before: before3,
    after: after3,
    title: "Modern Door Installation",
    location: "Suburban Home",
    description: "Upgraded old door to elegant carriage-style steel door",
  },
];

const RecentWork = () => {
  return (
    <section id="recent-work" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            Our Portfolio
          </span>
          <h2 className="font-display text-4xl md:text-6xl text-foreground mt-2">
            RECENT WORKS
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
            See the transformations we've completed for our satisfied customers
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 group"
            >
              {/* Before/After Image Comparison */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <div className="absolute inset-0 flex">
                  <div className="w-1/2 relative overflow-hidden">
                    <img
                      src={project.before}
                      alt={`${project.title} before`}
                      className="absolute inset-0 w-[200%] h-full object-cover object-left"
                    />
                    <div className="absolute bottom-2 left-2 bg-destructive text-destructive-foreground text-xs font-bold px-3 py-1 rounded-full">
                      BEFORE
                    </div>
                  </div>
                  <div className="w-1/2 relative overflow-hidden">
                    <img
                      src={project.after}
                      alt={`${project.title} after`}
                      className="absolute inset-0 w-[200%] h-full object-cover object-right"
                    />
                    <div className="absolute bottom-2 right-2 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                      AFTER
                    </div>
                  </div>
                </div>
                {/* Center divider */}
                <div className="absolute inset-y-0 left-1/2 w-1 bg-secondary -translate-x-1/2 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                    <ArrowRight className="w-4 h-4 text-secondary-foreground" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-2xl text-card-foreground mb-1">
                  {project.title.toUpperCase()}
                </h3>
                <p className="text-secondary font-medium text-sm mb-2">
                  {project.location}
                </p>
                <p className="text-muted-foreground">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentWork;

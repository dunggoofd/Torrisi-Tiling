import { motion } from "framer-motion";
import { Shield, Award, Clock, Sparkles, FileCheck } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "AS 3740 Compliant",
    description: "All waterproofing work meets Australian Standards for wet areas, ensuring long-term protection.",
  },
  {
    icon: Award,
    title: "Licensed & Insured",
    description: "Fully licensed tradesman with comprehensive insurance coverage for your peace of mind.",
  },
  {
    icon: Clock,
    title: "On Time, Every Time",
    description: "We respect your schedule with punctual arrivals and realistic project timelines.",
  },
  {
    icon: Sparkles,
    title: "Clean Work Sites",
    description: "We maintain tidy work areas and leave your space spotless after every job.",
  },
  {
    icon: FileCheck,
    title: "Warranty-Backed",
    description: "Confident in our craftsmanship with warranty coverage on all completed work.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="section-padding bg-secondary">
      <div className="section-container">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-accent">
              Why Choose Us
            </span>
            <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
              Quality You Can Trust
            </h2>
            <p className="mb-8 text-muted-foreground">
              With years of experience across Brisbane, we've built our reputation on delivering exceptional tiling and waterproofing work that stands the test of time.
            </p>

            <div className="space-y-4">
              {reasons.map((reason, index) => (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10">
                    <reason.icon className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-foreground">
                      {reason.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {reason.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/3] overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&h=600&fit=crop"
                alt="Professional tiling work in progress"
                className="h-full w-full object-cover"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 rounded-xl bg-card p-4 shadow-xl md:p-6">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent">
                  <span className="text-xl font-bold text-accent-foreground">10+</span>
                </div>
                <div>
                  <span className="block text-2xl font-bold text-foreground">Years</span>
                  <span className="text-sm text-muted-foreground">of Excellence</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

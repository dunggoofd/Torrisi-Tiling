import { motion } from "framer-motion";
import { Award, Shield, Clock, Star, Wrench } from "lucide-react";

const stats = [
  { icon: Clock, value: "10+", label: "Years Experience" },
  { icon: Shield, value: "AS 3740", label: "Compliant" },
  { icon: Award, value: "Licensed", label: "& Insured" },
  { icon: Star, value: "5.0", label: "Google Rating" },
  { icon: Wrench, value: "500+", label: "Projects Completed" },
];

export function TrustStrip() {
  return (
    <section className="relative -mt-16 z-20">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-border bg-card p-6 shadow-xl md:p-8"
        >
          <div className="grid grid-cols-2 gap-6 md:grid-cols-5">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                  <stat.icon className="h-6 w-6 text-accent" />
                </div>
                <span className="text-2xl font-bold text-foreground">{stat.value}</span>
                <span className="text-sm text-muted-foreground">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

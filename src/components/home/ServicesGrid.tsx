import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Building2, Home, Droplets, Bath, Trees, Waves, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Commercial Tiling",
    description: "High-traffic tiling for offices, retail, hospitality, and industrial spaces with minimal disruption.",
    href: "/services/commercial-tiling",
  },
  {
    icon: Home,
    title: "Residential Tiling",
    description: "Beautiful tile installations for kitchens, bathrooms, laundries, and living areas.",
    href: "/services/residential-tiling",
  },
  {
    icon: Droplets,
    title: "Waterproofing",
    description: "AS 3740 compliant waterproofing membranes for wet areas, balconies, and rooftops.",
    href: "/services/waterproofing",
  },
  {
    icon: Bath,
    title: "Bathroom Fit-Outs",
    description: "Complete bathroom and laundry renovations from demolition to final tile installation.",
    href: "/services/bathroom-fitouts",
  },
  {
    icon: Trees,
    title: "Balconies & Outdoor",
    description: "Weather-resistant tiling for balconies, patios, courtyards, and alfresco areas.",
    href: "/services/balconies-outdoor",
  },
  {
    icon: Waves,
    title: "Pool Tiling",
    description: "Specialist pool and spa tiling with premium materials designed for chlorine exposure.",
    href: "/services/pool-tiling",
  },
];

export function ServicesGrid() {
  return (
    <section className="section-padding bg-secondary">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-accent">
            What We Do
          </span>
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
            Our Services
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            From commercial fit-outs to residential renovations, we deliver expert tiling and waterproofing solutions across Brisbane.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                to={service.href}
                className="group card-elevated flex h-full flex-col p-6 transition-colors hover:border-accent/30"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10 transition-colors group-hover:bg-accent">
                  <service.icon className="h-7 w-7 text-accent transition-colors group-hover:text-accent-foreground" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="mb-4 flex-1 text-muted-foreground">
                  {service.description}
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-accent">
                  Learn more
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <Link
            to="/services"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-6 py-3 font-semibold text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            View All Services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

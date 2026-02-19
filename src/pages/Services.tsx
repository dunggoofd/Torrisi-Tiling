import { Layout } from "../components/layout/Layout";
import { SEOHead } from "../components/seo/SEOHead";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Building2, Home, Droplets, Bath, Trees, Waves, Wrench, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Commercial Tiling",
    description: "High-traffic tiling solutions for offices, retail spaces, hospitality venues, and industrial facilities. We work around your schedule to minimise business disruption.",
    features: ["Offices & Corporate", "Retail Showrooms", "Hospitality Venues", "Industrial Facilities"],
    href: "/services/commercial-tiling",
  },
  {
    icon: Home,
    title: "Residential Tiling",
    description: "Transform your home with beautiful tile installations. From kitchen splashbacks to living room floors, we bring your vision to life with precision and care.",
    features: ["Kitchens", "Living Areas", "Laundries", "Entranceways"],
    href: "/services/residential-tiling",
  },
  {
    icon: Droplets,
    title: "Waterproofing",
    description: "AS 3740 compliant waterproofing for all wet areas. Protect your property from water damage with our expertly applied membranes and sealing solutions.",
    features: ["Bathrooms & Ensuites", "Balconies", "Rooftops", "Retaining Walls"],
    href: "/services/waterproofing",
  },
  {
    icon: Bath,
    title: "Bathroom Fit-Outs",
    description: "Complete bathroom and laundry renovations from demolition to final finish. We coordinate every aspect to deliver stunning results on time and budget.",
    features: ["Full Renovations", "Ensuite Conversions", "Laundry Upgrades", "Disability Modifications"],
    href: "/services/bathroom-fitouts",
  },
  {
    icon: Trees,
    title: "Balconies & Outdoor",
    description: "Weather-resistant tiling for outdoor living spaces. Our outdoor solutions combine durability with aesthetics for areas exposed to the elements.",
    features: ["Balconies", "Courtyards", "Patios", "Alfresco Areas"],
    href: "/services/balconies-outdoor",
  },
  {
    icon: Waves,
    title: "Pool Tiling",
    description: "Specialist pool and spa tiling with premium materials designed for chlorine exposure and constant water immersion. Create your backyard oasis.",
    features: ["Swimming Pools", "Spas & Hot Tubs", "Pool Surrounds", "Water Features"],
    href: "/services/pool-tiling",
  },
  {
    icon: Wrench,
    title: "Leak Repairs & Remedial",
    description: "Expert diagnosis and repair of waterproofing failures. We identify the source of leaks and implement lasting solutions to protect your property.",
    features: ["Leak Detection", "Membrane Repairs", "Grout Restoration", "Preventative Maintenance"],
    href: "/services/leak-repairs",
  },
];

const Services = () => {
  return (
    <>
      <SEOHead
        title="Our Services | Tiling & Waterproofing Brisbane | NZI"
        description="Professional tiling and waterproofing services in Brisbane. Commercial, residential, pools, bathrooms, balconies, and more. AS 3740 compliant. Free quotes."
        canonical="/services"
      />
      <Layout>
        {/* Hero */}
        <section className="hero-bg pb-20 pt-32">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl"
            >
              <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-accent">
                Our Services
              </span>
              <h1 className="mb-6 text-4xl font-bold text-white sm:text-5xl">
                Complete Tiling & Waterproofing Solutions
              </h1>
              <p className="text-lg text-white/80">
                From residential bathrooms to commercial fit-outs, we deliver expert tiling and waterproofing services across Brisbane.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services List */}
        <section className="section-padding">
          <div className="section-container">
            <div className="space-y-8">
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
                    className="group card-elevated flex flex-col gap-6 p-6 md:flex-row md:items-start md:p-8"
                  >
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-accent/10 transition-colors group-hover:bg-accent">
                      <service.icon className="h-8 w-8 text-accent transition-colors group-hover:text-accent-foreground" />
                    </div>
                    <div className="flex-1">
                      <h2 className="mb-3 text-2xl font-bold text-foreground">
                        {service.title}
                      </h2>
                      <p className="mb-4 text-muted-foreground">
                        {service.description}
                      </p>
                      <div className="mb-4 flex flex-wrap gap-2">
                        {service.features.map((feature) => (
                          <span
                            key={feature}
                            className="rounded-full bg-secondary px-3 py-1 text-sm text-muted-foreground"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                      <span className="inline-flex items-center gap-2 font-semibold text-accent">
                        Learn more
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-secondary">
          <div className="section-container text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-4 text-3xl font-bold text-foreground">
                Need Help Choosing?
              </h2>
              <p className="mx-auto mb-8 max-w-xl text-muted-foreground">
                Not sure which service is right for your project? Contact us for expert advice and a free consultation.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Link to="/contact" className="btn-primary">
                  Get a Free Quote
                </Link>
                <a
                  href="tel:0424479303"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-background px-6 py-3 font-semibold text-foreground transition-colors hover:border-accent"
                >
                  Call 0424 479 303
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Services;

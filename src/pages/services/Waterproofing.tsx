import { Layout } from "../../components/layout/Layout";
import { SEOHead } from "../../components/seo/SEOHead";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Shield, CheckCircle, Droplets, ArrowRight } from "lucide-react";

const benefits = [
  "AS 3740 Australian Standards compliant",
  "10+ year warranty on waterproofing membranes",
  "Works with all tile types and substrates",
  "Prevents costly water damage repairs",
  "Required for building compliance certificates",
  "Expert application by certified professionals",
];

const applications = [
  {
    title: "Bathrooms & Ensuites",
    description: "Complete wet area waterproofing including shower bases, walls, and floors.",
    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=400&h=300&fit=crop",
  },
  {
    title: "Balconies & Terraces",
    description: "External waterproofing solutions that protect against weather and drainage issues.",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=400&h=300&fit=crop",
  },
  {
    title: "Rooftops & Podiums",
    description: "Heavy-duty waterproofing for rooftop gardens, terraces, and podium levels.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop",
  },
  {
    title: "Retaining Walls",
    description: "Below-grade waterproofing to prevent moisture ingress and structural damage.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
  },
];

const WaterproofingService = () => {
  return (
    <>
      <SEOHead
        title="Waterproofing Services Brisbane | AS 3740 Compliant | NZI"
        description="Professional waterproofing services in Brisbane. AS 3740 compliant membranes for bathrooms, balconies, rooftops & more. Licensed applicators. Free quotes."
        canonical="/services/waterproofing"
      />
      <Layout>
        {/* Hero */}
        <section className="hero-bg pb-20 pt-32">
          <div className="section-container">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <Link
                  to="/services"
                  className="mb-4 inline-flex items-center gap-2 text-sm text-white/70 hover:text-white"
                >
                  <ArrowRight className="h-4 w-4 rotate-180" />
                  Back to Services
                </Link>
                <h1 className="mb-6 text-4xl font-bold text-white sm:text-5xl">
                  Waterproofing Services
                </h1>
                <p className="mb-6 text-lg text-white/80">
                  Protect your property from water damage with our AS 3740 compliant waterproofing solutions. Expert membrane application for wet areas, balconies, rooftops, and more.
                </p>
                <div className="mb-8 flex items-center gap-4">
                  <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white">
                    <Shield className="h-4 w-4 text-accent" />
                    AS 3740 Compliant
                  </div>
                  <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white">
                    <Droplets className="h-4 w-4 text-accent" />
                    10+ Year Warranty
                  </div>
                </div>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Link to="/contact" className="btn-primary">
                    Get a Free Quote
                  </Link>
                  <a href="tel:0424479303" className="btn-secondary">
                    Call 0424 479 303
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="hidden lg:block"
              >
                <div className="aspect-[4/3] overflow-hidden rounded-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=600&h=450&fit=crop"
                    alt="Professional waterproofing membrane application"
                    className="h-full w-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="section-padding">
          <div className="section-container">
            <div className="grid gap-12 lg:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="mb-6 text-3xl font-bold text-foreground">
                  Why Proper Waterproofing Matters
                </h2>
                <p className="mb-8 text-muted-foreground">
                  Water damage is one of the most costly issues property owners face. A small leak can lead to structural damage, mould growth, and expensive repairs. Our professional waterproofing ensures your wet areas, balconies, and external surfaces are protected for the long term.
                </p>
                <ul className="space-y-4">
                  {benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                      <span className="text-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="card-elevated p-6 md:p-8"
              >
                <h3 className="mb-6 text-xl font-bold text-foreground">
                  Our Waterproofing Process
                </h3>
                <div className="space-y-6">
                  {[
                    { step: "1", title: "Inspection", desc: "Thorough assessment of the area and substrate condition." },
                    { step: "2", title: "Surface Prep", desc: "Cleaning, priming, and repairing any defects or cracks." },
                    { step: "3", title: "Membrane Application", desc: "Professional application of AS 3740 compliant membranes." },
                    { step: "4", title: "Flood Test", desc: "24-48 hour water test to verify integrity." },
                    { step: "5", title: "Sign-off", desc: "Compliance certificate and warranty documentation." },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-lg font-bold text-accent-foreground">
                        {item.step}
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Applications */}
        <section className="section-padding bg-secondary">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12 text-center"
            >
              <h2 className="mb-4 text-3xl font-bold text-foreground">
                Waterproofing Applications
              </h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                We provide waterproofing solutions for a wide range of residential and commercial applications.
              </p>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {applications.map((app, index) => (
                <motion.div
                  key={app.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group overflow-hidden rounded-xl bg-card"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={app.image}
                      alt={app.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="mb-2 font-semibold text-foreground">{app.title}</h3>
                    <p className="text-sm text-muted-foreground">{app.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding">
          <div className="section-container text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-4 text-3xl font-bold text-foreground">
                Ready to Protect Your Property?
              </h2>
              <p className="mx-auto mb-8 max-w-xl text-muted-foreground">
                Get in touch for a free inspection and quote. We'll assess your waterproofing needs and provide a detailed, no-obligation proposal.
              </p>
              <Link to="/contact" className="btn-primary">
                Get a Free Quote
              </Link>
            </motion.div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default WaterproofingService;

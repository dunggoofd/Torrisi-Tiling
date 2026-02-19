import { Layout } from "../components/layout/Layout";
import { SEOHead } from "../components/seo/SEOHead";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Award, Users, Target, Wrench } from "lucide-react";

const values = [
  {
    icon: Award,
    title: "Quality First",
    description: "We never cut corners. Every tile is laid with precision and every waterproofing membrane is applied to Australian Standards.",
  },
  {
    icon: Users,
    title: "Client Focused",
    description: "Your satisfaction is our priority. We communicate clearly, respect your time, and deliver on our promises.",
  },
  {
    icon: Target,
    title: "Attention to Detail",
    description: "From perfect grout lines to seamless waterproofing, we sweat the small stuff so you don't have to.",
  },
  {
    icon: Wrench,
    title: "Expert Craftsmanship",
    description: "With over a decade of experience, our team brings expertise and skill to every project, big or small.",
  },
];

const About = () => {
  return (
    <>
      <SEOHead
        title="About Us | NZI Tiling & Waterproofing Brisbane"
        description="Learn about NZI Tiling & Waterproofing - Brisbane's trusted experts in tiling and waterproofing with over 10 years of experience. Licensed, insured, and committed to quality."
        canonical="/about"
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
                About Us
              </span>
              <h1 className="mb-6 text-4xl font-bold text-white sm:text-5xl">
                Brisbane's Trusted Tiling & Waterproofing Experts
              </h1>
              <p className="text-lg text-white/80">
                For over a decade, NZI Tiling & Waterproofing has been delivering exceptional craftsmanship to homes and businesses across Brisbane.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Story */}
        <section className="section-padding">
          <div className="section-container">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="mb-6 text-3xl font-bold text-foreground">
                  Our Story
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    NZI Tiling & Waterproofing was founded with a simple mission: to deliver the highest quality tiling and waterproofing services in Brisbane. What started as a one-man operation has grown into a trusted team of skilled professionals.
                  </p>
                  <p>
                    Based in Brisbane and serving Greater Brisbane, we've completed hundreds of projects ranging from luxury bathroom renovations to large-scale commercial fit-outs. Our reputation is built on precision workmanship, reliable service, and genuine care for our clients.
                  </p>
                  <p>
                    We're proud to be fully licensed and insured, with all waterproofing work certified to AS 3740 standards. Every project we undertake is backed by our commitment to quality and our comprehensive warranty.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="aspect-[4/3] overflow-hidden rounded-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop"
                    alt="Professional tiling work"
                    className="h-full w-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="section-padding bg-secondary">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12 text-center"
            >
              <h2 className="mb-4 text-3xl font-bold text-foreground">
                Our Values
              </h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                These principles guide everything we do, from the first quote to the final tile.
              </p>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="card-elevated p-6 text-center"
                >
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10">
                    <value.icon className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
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
                Ready to Start Your Project?
              </h2>
              <p className="mx-auto mb-8 max-w-xl text-muted-foreground">
                Get in touch today for a free, no-obligation quote.
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

export default About;

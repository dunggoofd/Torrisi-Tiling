import { Layout } from "../components/layout/Layout";
import { SEOHead } from "../components/seo/SEOHead";
import { QuoteForm } from "../components/home/QuoteForm";
import { ContactSection } from "../components/home/ContactSection";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <>
      <SEOHead
        title="Contact Us | Get a Free Quote | Torrisi Tiling Brisbane"
        description="Contact Torrisi Tiling & Maintenance for a free quote. Call 0405 508 730 or fill out our form. Serving Brisbane and surrounding areas."
        canonical="/contact"
      />
      <Layout>
        {/* Hero */}
        <section className="hero-bg pb-16 pt-32">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl text-center mx-auto"
            >
              <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-accent">
                Contact Us
              </span>
              <h1 className="mb-6 text-4xl font-bold text-white sm:text-5xl">
                Get in Touch
              </h1>
              <p className="text-lg text-white/80">
                Ready to start your project? Fill out the form below or give us a call for a free, no-obligation quote.
              </p>
            </motion.div>
          </div>
        </section>

        <QuoteForm />
        <ContactSection />
      </Layout>
    </>
  );
};

export default Contact;

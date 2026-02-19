import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Phone, Shield, Award, CheckCircle } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import heroVideo from "@/assets/Bathroom_Animation_Video_For_Tiling.mp4";
import { QuoteForm } from "./QuoteForm";

const trustBadges = [
  { icon: Shield, text: "AS 3740 Compliant" },
  { icon: Award, text: "Licensed & Insured" },
  { icon: CheckCircle, text: "Warranty-Backed" },
];

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Video (with image fallback) */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster={heroBg}
      >
        <source src={heroVideo} type="video/mp4" />
        {/* Optional: add a WebM source if available */}
        {/* <source src="/hero.webm" type="video/webm" /> */}
      </video>
      <div className="absolute inset-0 hero-bg opacity-90" />

      {/* Content */}
      <div className="section-container relative z-10 min-h-screen pb-20 pt-32">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="max-w-2xl">
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Pre-headline badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
              Brisbane & Surrounds
            </div>

            {/* Main Headline */}
            <h1 className="mb-6 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Experts in{" "}
              <span className="text-gradient-gold">Tiling & Waterproofing</span>
            </h1>

            {/* Subheadline */}
            <p className="mb-8 text-lg text-white/80 sm:text-xl">
              Qualified and Licenced Tilers. Residential and Commercial Tiling. 20 years of experience delivering quality craftsmanship across Brisbane.
            </p>

            {/* CTAs */}
            <div className="mb-10 flex flex-col gap-4 sm:flex-row">
              <Link to="/contact" className="btn-primary text-center">
                Get a Free Quote
              </Link>
              <a href="tel:0405508730" className="btn-secondary text-center">
                <Phone className="h-5 w-5" />
                Call 0405 508 730
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-3">
              {trustBadges.map((badge) => (
                <div key={badge.text} className="trust-badge">
                  <badge.icon className="h-4 w-4 text-accent" />
                  {badge.text}
                </div>
              ))}
            </div>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <QuoteForm variant="hero" />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/60 lg:flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <span className="text-xs uppercase tracking-wider">Scroll</span>
        <div className="h-12 w-0.5 rounded-full bg-gradient-to-b from-white/40 to-transparent" />
      </motion.div>
    </section>
  );
}

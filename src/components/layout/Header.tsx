import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logoUrl from "@/assets/torrisi-logo.png";

const services = [
  { name: "Commercial Tiling", href: "/services/commercial-tiling" },
  { name: "Residential Tiling", href: "/services/residential-tiling" },
  { name: "Waterproofing", href: "/services/waterproofing" },
  { name: "Bathroom Fit-Outs", href: "/services/bathroom-fitouts" },
  { name: "Balconies & Outdoor", href: "/services/balconies-outdoor" },
  { name: "Pool Tiling", href: "/services/pool-tiling" },
  { name: "Leak Repairs", href: "/services/leak-repairs" },
];

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services", hasDropdown: true },
  { name: "Projects", href: "/projects" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "FAQs", href: "/faqs" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  }, [location]);

  return (
    <>
      <header
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/95 shadow-lg backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <div className="section-container">
          <div className="flex h-20 items-center justify-between">
            {/* Logo + Brand Text */}
            <Link to="/" className="flex items-center gap-3">
              <img
                src={logoUrl}
                alt="Torrisi Tiling Logo"
                className="h-12 w-auto sm:h-14"
                loading="eager"
              />
              <div className="hidden sm:block leading-tight">
                <span
                  className={`block font-bold ${
                    isScrolled ? "text-foreground" : "text-white"
                  }`}
                >
                  Torrisi Tiling
                </span>
                <span
                  className={`block font-bold ${
                    isScrolled ? "text-muted-foreground" : "text-white/80"
                  }`}
                >
                  &amp; Maintenance
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden items-center gap-1 lg:flex">
              {navLinks.map((link) => (
                <div key={link.name} className="relative">
                  {link.hasDropdown ? (
                    <div
                      className="group"
                      onMouseEnter={() => setIsServicesOpen(true)}
                      onMouseLeave={() => setIsServicesOpen(false)}
                    >
                      <button
                        className={`flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                          isScrolled
                            ? "text-foreground hover:bg-secondary"
                            : "text-white/90 hover:text-white"
                        }`}
                      >
                        {link.name}
                        <ChevronDown className="h-4 w-4" />
                      </button>
                      <AnimatePresence>
                        {isServicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            className="absolute left-0 top-full w-56 pt-2"
                          >
                            <div className="rounded-xl border border-border bg-card p-2 shadow-xl">
                              {services.map((service) => (
                                <Link
                                  key={service.name}
                                  to={service.href}
                                  className="block rounded-lg px-4 py-2.5 text-sm text-card-foreground transition-colors hover:bg-secondary"
                                >
                                  {service.name}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      to={link.href}
                      className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                        location.pathname === link.href
                          ? isScrolled
                            ? "bg-secondary text-foreground"
                            : "bg-white/20 text-white"
                          : isScrolled
                          ? "text-foreground hover:bg-secondary"
                          : "text-white/90 hover:text-white"
                      }`}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden items-center gap-3 lg:flex">
              <a
                href="tel:0405508730"
                className={`flex items-center gap-2 text-sm font-medium ${
                  isScrolled ? "text-foreground" : "text-white"
                }`}
              >
                <Phone className="h-4 w-4" />
                0405 508 730
              </a>
              <Link to="/contact" className="btn-primary">
                Get a Free Quote
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`rounded-lg p-2 lg:hidden ${
                isScrolled ? "text-foreground" : "text-white"
              }`}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-20 z-40 max-h-[calc(100vh-5rem)] overflow-y-auto bg-background p-4 shadow-xl lg:hidden"
          >
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.hasDropdown ? (
                    <>
                      <button
                        onClick={() => setIsServicesOpen(!isServicesOpen)}
                        className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-foreground hover:bg-secondary"
                      >
                        {link.name}
                        <ChevronDown
                          className={`h-4 w-4 transition-transform ${
                            isServicesOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {isServicesOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden pl-4"
                          >
                            {services.map((service) => (
                              <Link
                                key={service.name}
                                to={service.href}
                                className="block rounded-lg px-4 py-2.5 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground"
                              >
                                {service.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      to={link.href}
                      className={`block rounded-lg px-4 py-3 ${
                        location.pathname === link.href
                          ? "bg-secondary text-foreground"
                          : "text-foreground hover:bg-secondary"
                      }`}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>
            <div className="mt-4 flex flex-col gap-3 border-t border-border pt-4">
              <a
                href="tel:0405508730"
                className="btn-secondary justify-center border-primary text-primary"
              >
                <Phone className="h-4 w-4" />
                Call 0405 508 730
              </a>
              <Link to="/contact" className="btn-primary justify-center">
                Get a Free Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Sticky Bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background p-3 lg:hidden">
        <div className="flex gap-3">
          <a
            href="tel:0405508730"
            className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-border bg-secondary py-3 font-semibold text-foreground"
          >
            <Phone className="h-4 w-4" />
            Call Now
          </a>
          <Link
            to="/contact"
            className="btn-primary flex-1 justify-center py-3"
          >
            Get Quote
          </Link>
        </div>
      </div>
    </>
  );
}

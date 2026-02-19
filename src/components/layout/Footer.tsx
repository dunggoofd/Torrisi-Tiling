import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin } from "lucide-react";

const quickLinks = [
  { name: "About Us", href: "/about" },
  { name: "Our Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "FAQs", href: "/faqs" },
  { name: "Contact", href: "/contact" },
];

const services = [
  { name: "Commercial Tiling", href: "/services/commercial-tiling" },
  { name: "Residential Tiling", href: "/services/residential-tiling" },
  { name: "Waterproofing", href: "/services/waterproofing" },
  { name: "Bathroom Fit-Outs", href: "/services/bathroom-fitouts" },
  { name: "Balconies & Outdoor", href: "/services/balconies-outdoor" },
  { name: "Pool Tiling", href: "/services/pool-tiling" },
];

const serviceAreas = [
  { name: "Brisbane CBD", href: "/areas/brisbane-cbd" },
  { name: "South Brisbane", href: "/areas/south-brisbane" },
  { name: "Fortitude Valley", href: "/areas/fortitude-valley" },
  { name: "Chermside", href: "/areas/chermside" },
  { name: "Sunnybank", href: "/areas/sunnybank" },
  { name: "View All Areas", href: "/areas" },
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="section-container section-padding">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent">
                <span className="text-lg font-bold text-primary">NZI</span>
              </div>
              <div>
                <span className="font-bold text-primary-foreground">NZI Tiling</span>
                <span className="block text-xs text-primary-foreground/70">& Waterproofing</span>
              </div>
            </Link>
            <p className="mb-6 text-sm leading-relaxed text-primary-foreground/80">
              Brisbane's trusted experts in tiling and waterproofing. Delivering quality craftsmanship for commercial and residential projects since day one.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/80 transition-colors hover:text-accent"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.href}
                    className="text-sm text-primary-foreground/80 transition-colors hover:text-accent"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:0424479303"
                  className="flex items-start gap-3 text-sm text-primary-foreground/80 transition-colors hover:text-accent"
                >
                  <Phone className="mt-0.5 h-4 w-4 shrink-0" />
                  <span>0424 479 303</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:nzi_tiling@outlook.com"
                  className="flex items-start gap-3 text-sm text-primary-foreground/80 transition-colors hover:text-accent"
                >
                  <Mail className="mt-0.5 h-4 w-4 shrink-0" />
                  <span>nzi_tiling@outlook.com</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-primary-foreground/80">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>Brisbane & Surrounds</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-primary-foreground/80">
                <Clock className="mt-0.5 h-4 w-4 shrink-0" />
                <span>
                  Mon-Fri: 7am - 5pm
                  <br />
                  Sat: 8am - 2pm
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Service Areas */}
        <div className="mt-10 border-t border-white/10 pt-8">
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">
            Service Areas
          </h4>
          <div className="flex flex-wrap gap-2">
            {serviceAreas.map((area) => (
              <Link
                key={area.name}
                to={area.href}
                className="rounded-full bg-white/10 px-4 py-1.5 text-sm text-primary-foreground/80 transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                {area.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="section-container flex flex-col items-center justify-between gap-4 py-6 text-sm text-primary-foreground/60 md:flex-row">
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
            <span>© {new Date().getFullYear()} NZI Tiling & Waterproofing</span>
            <span className="hidden md:inline">•</span>
            <span>ABN: {"{INSERT ABN}"}</span>
            <span className="hidden md:inline">•</span>
            <span>License: {"{INSERT LICENSE}"}</span>
          </div>
          <div className="flex gap-4">
            <Link to="/privacy" className="hover:text-accent">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-accent">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>

      {/* Spacer for mobile sticky CTA */}
      <div className="h-20 lg:hidden" />
    </footer>
  );
}

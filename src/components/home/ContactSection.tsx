import { motion } from "framer-motion";
import { Phone, Mail, Clock, MapPin } from "lucide-react";

export function ContactSection() {
  return (
    <section className="section-padding bg-secondary">
      <div className="section-container">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-accent">
              Contact Us
            </span>
            <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
              Get in Touch
            </h2>
            <p className="mb-8 text-muted-foreground">
              Ready to start your project? Contact us today for a free quote or to discuss your tiling and waterproofing needs.
            </p>

            <div className="space-y-6">
              {/* Phone */}
              <a
                href="tel:0405508730"
                className="flex items-start gap-4 rounded-xl bg-card p-4 transition-shadow hover:shadow-md"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10">
                  <Phone className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <span className="mb-1 block font-semibold text-foreground">
                    Phone
                  </span>
                  <span className="text-lg font-medium text-accent">
                    0405 508 730
                  </span>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:torrisitilinginfo@gmail.com"
                className="flex items-start gap-4 rounded-xl bg-card p-4 transition-shadow hover:shadow-md"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10">
                  <Mail className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <span className="mb-1 block font-semibold text-foreground">
                    Email
                  </span>
                  <span className="text-muted-foreground">
                    torrisitilinginfo@gmail.com
                  </span>
                </div>
              </a>

              {/* Hours */}
              <div className="flex items-start gap-4 rounded-xl bg-card p-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10">
                  <Clock className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <span className="mb-1 block font-semibold text-foreground">
                    Business Hours
                  </span>
                  <span className="text-muted-foreground">
                    Mon-Fri: 7am - 5pm
                    <br />
                    Sat: 8am - 2pm
                  </span>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4 rounded-xl bg-card p-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10">
                  <MapPin className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <span className="mb-1 block font-semibold text-foreground">
                    Service Area
                  </span>
                  <span className="text-muted-foreground">
                    Brisbane & Surrounds
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-2xl"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3538.047981635393!2d153.025123!3d-27.469771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b915a05b5f0a2b9%3A0x2a5f345b2a8b!2sBrisbane%20QLD!5e0!3m2!1sen!2sau!4v1700000000001!5m2!1sen!2sau"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Torrisi Tiling Service Area - Brisbane"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah M.",
    suburb: "New Farm",
    rating: 5,
    text: "Excellent work on our bathroom renovation. The team was professional, punctual, and the finish is absolutely stunning. Highly recommend!",
  },
  {
    id: 2,
    name: "David L.",
    suburb: "South Brisbane",
    rating: 5,
    text: "NZI tiled our entire ground floor and the quality is outstanding. They were meticulous with the preparation and the tiles are perfectly aligned.",
  },
  {
    id: 3,
    name: "Michael T.",
    suburb: "Chermside",
    rating: 5,
    text: "Had our balcony waterproofed and tiled. Great communication throughout the project and they cleaned up perfectly at the end. Very happy!",
  },
];

export function Testimonials() {
  return (
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-accent">
            Testimonials
          </span>
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            What Our Clients Say
          </h2>
          <p className="mx-auto max-w-2xl text-primary-foreground/70">
            Don't just take our word for it. Here's what Brisbane homeowners and businesses have to say about our work.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative rounded-xl bg-white/10 p-6 backdrop-blur-sm"
            >
              <Quote className="absolute right-6 top-6 h-8 w-8 text-accent/30" />
              
              {/* Stars */}
              <div className="mb-4 flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-accent text-accent"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="mb-6 text-primary-foreground/90">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-lg font-semibold text-accent-foreground">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <span className="block font-semibold">{testimonial.name}</span>
                  <span className="text-sm text-primary-foreground/60">
                    {testimonial.suburb}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Google Rating Banner */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 flex flex-col items-center justify-center gap-4 rounded-xl bg-white/5 p-6 sm:flex-row sm:gap-8"
        >
          <div className="flex items-center gap-2">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-accent text-accent" />
              ))}
            </div>
            <span className="text-xl font-bold">5.0</span>
          </div>
          <span className="text-primary-foreground/70">
            Rated 5 stars on Google Reviews
          </span>
        </motion.div>
      </div>
    </section>
  );
}

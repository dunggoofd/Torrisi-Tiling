import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Expand } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Modern Bathroom Renovation",
    category: "Bathroom",
    location: "Glen Waverley",
    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&h=400&fit=crop",
  },
  {
    id: 2,
    title: "Commercial Office Tiling",
    category: "Commercial",
    location: "Brisbane CBD",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop",
  },
  {
    id: 3,
    title: "Balcony Waterproofing",
    category: "Waterproofing",
    location: "South Brisbane",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&h=400&fit=crop",
  },
  {
    id: 4,
    title: "Luxury Pool Tiling",
    category: "Pool",
    location: "New Farm",
    image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=600&h=400&fit=crop",
  },
  {
    id: 5,
    title: "Kitchen Floor Tiling",
    category: "Residential",
    location: "Chermside",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop",
  },
  {
    id: 6,
    title: "Retail Showroom Fit-out",
    category: "Commercial",
    location: "Fortitude Valley",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop",
  },
];

const categories = ["All", "Bathroom", "Commercial", "Waterproofing", "Pool", "Residential"];

export function ProjectsGallery() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section className="section-padding">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 text-center"
        >
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-accent">
            Our Work
          </span>
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
            Recent Projects
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Browse our portfolio of completed tiling and waterproofing projects across Brisbane.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-8 flex flex-wrap justify-center gap-2"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                activeCategory === category
                  ? "bg-accent text-accent-foreground"
                  : "bg-secondary text-muted-foreground hover:bg-secondary/80 hover:text-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              {/* Overlay */}
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="mb-1 text-sm font-medium text-accent">
                  {project.category}
                </span>
                <h3 className="mb-1 text-lg font-semibold text-white">
                  {project.title}
                </h3>
                <p className="text-sm text-white/70">{project.location}</p>
              </div>
              {/* Quick View Button */}
              <button className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
                <Expand className="h-5 w-5 text-foreground" />
              </button>
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
            to="/projects"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-6 py-3 font-semibold text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            View All Projects
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

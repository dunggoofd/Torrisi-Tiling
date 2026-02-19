import { useState } from "react";
import { Layout } from "../components/layout/Layout";
import { SEOHead } from "../components/seo/SEOHead";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Expand } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Modern Bathroom Renovation",
    category: "Bathroom",
    location: "Glen Waverley",
    description: "Complete bathroom renovation with large format tiles, walk-in shower, and full waterproofing.",
    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&h=600&fit=crop",
  },
  {
    id: 2,
    title: "Commercial Office Fit-out",
    category: "Commercial",
    location: "Brisbane CBD",
    description: "Large-scale commercial tiling project for a corporate office spanning multiple floors.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
  },
  {
    id: 3,
    title: "Balcony Waterproofing & Tiling",
    category: "Waterproofing",
    location: "South Brisbane",
    description: "Full balcony waterproofing with membrane application and slip-resistant outdoor tiles.",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop",
  },
  {
    id: 4,
    title: "Luxury Pool & Surrounds",
    category: "Pool",
    location: "New Farm",
    description: "Premium pool tiling with matching surrounds, featuring imported Italian mosaic tiles.",
    image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=800&h=600&fit=crop",
  },
  {
    id: 5,
    title: "Kitchen Floor Installation",
    category: "Residential",
    location: "Chermside",
    description: "Open-plan kitchen and dining area with large format porcelain floor tiles.",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop",
  },
  {
    id: 6,
    title: "Retail Showroom Fit-out",
    category: "Commercial",
    location: "Fortitude Valley",
    description: "High-traffic retail flooring with decorative feature walls and accent lighting.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
  },
  {
    id: 7,
    title: "Ensuite Upgrade",
    category: "Bathroom",
    location: "Paddington",
    description: "Compact ensuite transformation with wall-hung fixtures and floor-to-ceiling tiles.",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&h=600&fit=crop",
  },
  {
    id: 8,
    title: "Outdoor Entertainment Area",
    category: "Residential",
    location: "Carindale",
    description: "Alfresco area with wood-look porcelain pavers and integrated BBQ zone.",
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&h=600&fit=crop",
  },
];

const categories = ["All", "Bathroom", "Commercial", "Waterproofing", "Pool", "Residential"];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <>
      <SEOHead
        title="Our Projects | Tiling & Waterproofing Portfolio | NZI Brisbane"
        description="Browse our portfolio of completed tiling and waterproofing projects across Brisbane. Bathrooms, commercial spaces, pools, balconies and more."
        canonical="/projects"
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
                Our Work
              </span>
              <h1 className="mb-6 text-4xl font-bold text-white sm:text-5xl">
                Projects Portfolio
              </h1>
              <p className="text-lg text-white/80">
                Explore our completed tiling and waterproofing projects across Brisbane. Each project showcases our commitment to quality and craftsmanship.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="section-padding">
          <div className="section-container">
            {/* Category Filter */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mb-10 flex flex-wrap justify-center gap-2"
            >
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${
                    activeCategory === category
                      ? "bg-accent text-accent-foreground"
                      : "bg-secondary text-muted-foreground hover:bg-secondary/80 hover:text-foreground"
                  }`}
                >
                  {category}
                </button>
              ))}
            </motion.div>

            {/* Grid */}
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  className="group"
                >
                  <div className="relative mb-4 overflow-hidden rounded-xl">
                    <div className="aspect-[4/3]">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                      />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity group-hover:opacity-100">
                      <button className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-foreground shadow-lg">
                        <Expand className="h-5 w-5" />
                      </button>
                    </div>
                    <span className="absolute left-4 top-4 rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="mb-1 text-lg font-semibold text-foreground">
                    {project.title}
                  </h3>
                  <p className="mb-2 text-sm text-muted-foreground">
                    {project.location}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {project.description}
                  </p>
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
                Ready to Start Your Project?
              </h2>
              <p className="mx-auto mb-8 max-w-xl text-muted-foreground">
                Let's discuss how we can bring your vision to life. Get in touch for a free consultation and quote.
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

export default Projects;

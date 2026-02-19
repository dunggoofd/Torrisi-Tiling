import { Layout } from "../components/layout/Layout";
import { SEOHead } from "../components/seo/SEOHead";
import { Hero } from "../components/home/Hero";
import { TrustStrip } from "../components/home/TrustStrip";
import { ServicesGrid } from "../components/home/ServicesGrid";
import { ProjectsGallery } from "../components/home/ProjectsGallery";
import { WhyChooseUs } from "../components/home/WhyChooseUs";
import { ProcessSteps } from "../components/home/ProcessSteps";
import { Testimonials } from "../components/home/Testimonials";
import { ContactSection } from "../components/home/ContactSection";

const Index = () => {
  return (
    <>
      <SEOHead />
      <Layout>
        <Hero />
        <TrustStrip />
        <ServicesGrid />
        <ProjectsGallery />
        <WhyChooseUs />
        <ProcessSteps />
        <Testimonials />
        <ContactSection />
      </Layout>
    </>
  );
};

export default Index;

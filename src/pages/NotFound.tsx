import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Layout } from "../components/layout/Layout";
import { SEOHead } from "../components/seo/SEOHead";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <SEOHead
        title="Page Not Found | NZI Tiling & Waterproofing"
        description="The page you're looking for doesn't exist. Return to our homepage to explore our tiling and waterproofing services."
      />
      <Layout>
        <section className="flex min-h-[70vh] items-center justify-center section-padding">
          <div className="section-container text-center">
            <div className="mb-8">
              <span className="text-8xl font-bold text-accent/20">404</span>
            </div>
            <h1 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
              Page Not Found
            </h1>
            <p className="mx-auto mb-8 max-w-md text-muted-foreground">
              Sorry, the page you're looking for doesn't exist or has been moved. Let's get you back on track.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                to="/"
                className="btn-primary inline-flex items-center justify-center gap-2"
              >
                <Home className="h-4 w-4" />
                Back to Home
              </Link>
              <button
                onClick={() => window.history.back()}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-background px-6 py-3 font-semibold text-foreground transition-colors hover:border-accent"
              >
                <ArrowLeft className="h-4 w-4" />
                Go Back
              </button>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default NotFound;
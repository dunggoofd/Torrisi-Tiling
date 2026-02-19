import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title?: string;
  description?: string;
  canonical?: string;
  type?: string;
  image?: string;
}

const defaultTitle = "NZI Tiling & Waterproofing | Brisbane Tiling Experts";
const defaultDescription = "Expert tiling and waterproofing services across Brisbane. AS 3740 compliant, licensed, and insured. Commercial & residential projects. Get a free quote today.";

export function SEOHead({
  title = defaultTitle,
  description = defaultDescription,
  canonical = "",
  type = "website",
  image = "/og-image.jpg",
}: SEOHeadProps) {
  const siteUrl = "https://nzitiling.com.au";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": siteUrl,
    name: "NZI Tiling & Waterproofing Services",
    description: defaultDescription,
    url: siteUrl,
    telephone: "0424479303",
    email: "nzi_tiling@outlook.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Brisbane",
      addressRegion: "QLD",
      addressCountry: "AU",
    },
    areaServed: [
      {
        "@type": "City",
        name: "Brisbane",
      },
    ],
    serviceType: [
      "Tiling Services",
      "Waterproofing Services",
      "Bathroom Renovations",
      "Commercial Tiling",
      "Pool Tiling",
    ],
    openingHours: ["Mo-Fr 07:00-17:00", "Sa 08:00-14:00"],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "50",
    },
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={`${siteUrl}${canonical}`} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={`${siteUrl}${canonical}`} />
      <meta property="og:image" content={`${siteUrl}${image}`} />
      <meta property="og:site_name" content="NZI Tiling & Waterproofing" />
      <meta property="og:locale" content="en_AU" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}${image}`} />

      {/* Additional SEO */}
      <meta name="geo.region" content="AU-QLD" />
      <meta name="geo.placename" content="Brisbane" />
      <meta name="robots" content="index, follow" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
}

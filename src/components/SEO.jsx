import React from 'react';
import { Helmet } from 'react-helmet-async';

/**
 * SEO component — injects per-page meta tags including:
 * - title, description, canonical
 * - Open Graph tags
 * - Twitter Card tags
 * - JSON-LD schema markup
 * Covers: Crawlability, Indexability, Schema Markup (Technical SEO Guide)
 */
export default function SEO({
  title = 'City Cab | Taxi, Tempo Traveller, Bus Hire – Bhubaneswar & Puri',
  description = 'Book Taxi/Cab, Tempo Traveller, Urbania, Bus Hire & Odisha Tour Packages from Bhubaneswar and Puri. Clean AC vehicles. Call +91 9090913111',
  canonical = 'https://www.citycab.in/',
  ogImage = 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1200',
  noindex = false,
  schema = null,
  faqSchema = null,
}) {
  const baseSchema = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": "City Cab",
    "url": "https://www.citycab.in",
    "telephone": "+91-9090913111",
    "email": "citycab7777@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Bhubaneswar",
      "addressLocality": "Bhubaneswar",
      "addressRegion": "Odisha",
      "postalCode": "751001",
      "addressCountry": "IN"
    },
    "priceRange": "₹₹",
    "areaServed": ["Bhubaneswar", "Puri", "Odisha"],
  };

  return (
    <Helmet>
      {/* Core */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      {!noindex && <meta name="robots" content="index, follow" />}

      {/* OG */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="City Cab" />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Schema */}
      <script type="application/ld+json">{JSON.stringify(schema || baseSchema)}</script>
      {faqSchema && <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>}
    </Helmet>
  );
}

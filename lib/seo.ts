import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://728collaborative.org";

export function pageMetadata(title: string, description: string, path = ""): Metadata {
  const url = `${siteUrl}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: "728 Collaborative LLC",
      type: "website",
      images: [{ url: "/assets/728-collaborative-logo.svg", width: 1200, height: 630, alt: "728 Collaborative LLC" }]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/assets/728-collaborative-logo.svg"]
    }
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "728 Collaborative LLC",
    url: siteUrl,
    email: "tlance@728collaborative.org",
    telephone: "+18439429196",
    foundingDate: "2026",
    areaServed: ["United States", "South Carolina", "North Carolina"],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Florence",
      addressRegion: "SC",
      addressCountry: "US"
    },
    description:
      "Strategic consulting, workforce development, professional training, and non-clinical support services for organizations, professionals, individuals, and families."
  };
}

export function breadcrumbSchema(items: Array<{ name: string; href: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.href}`
    }))
  };
}


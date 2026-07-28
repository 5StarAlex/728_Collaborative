import { notFound } from "next/navigation";
import { ItemGrid } from "@/components/Cards";
import { Breadcrumbs, SectionHeading } from "@/components/Section";
import { industryPages } from "@/lib/site-data";
import { pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return industryPages.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const industry = industryPages.find((item) => item.slug === slug);
  if (!industry) return {};
  return pageMetadata(`${industry.title} Consulting and Training`, industry.description, `/industries/${industry.slug}`);
}

export default async function IndustryDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const industry = industryPages.find((item) => item.slug === slug);
  if (!industry) notFound();
  return (
    <>
      <Breadcrumbs items={[{ label: "Industries", href: "/industries" }, { label: industry.title, href: `/industries/${industry.slug}` }]} />
      <section className="page-hero hero-industry-detail"><div className="container"><p className="eyebrow">Industry Focus</p><h1>{industry.title}</h1><p className="large">{industry.description}</p></div></section>
      <section><div className="container split"><div><SectionHeading eyebrow="Support Map" title="Needs, services, and possible results in one view." /><div className="feature-grid"><article className="feature-card"><h2>Common Needs</h2><ItemGrid items={industry.challenges.slice(0, 4)} /></article><article className="feature-card"><h2>Relevant Services</h2><ItemGrid items={industry.services.slice(0, 4)} /></article><article className="feature-card"><h2>Potential Outcomes</h2><ItemGrid items={industry.outcomes.slice(0, 4)} /></article></div></div><div className="feature-card"><h2>Recommended Next Step</h2><p>Start with a discovery conversation to identify the right consulting, training, or support path for your organization.</p><a className="button button-primary" href="/schedule">Schedule a Discovery Call</a></div></div></section>
    </>
  );
}

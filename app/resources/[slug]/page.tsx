import { notFound } from "next/navigation";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Section";
import { resources } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return resources.map((resource) => ({ slug: resource.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const resource = resources.find((item) => item.slug === slug);
  if (!resource) return {};
  return pageMetadata(resource.title, resource.description, `/resources/${resource.slug}`);
}

export default async function ResourcePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const resource = resources.find((item) => item.slug === slug);
  if (!resource) notFound();
  return (
    <>
      <Breadcrumbs items={[{ label: "Resources", href: "/resources" }, { label: resource.title, href: `/resources/${resource.slug}` }]} />
      <section className="page-hero hero-resources"><div className="container"><p className="eyebrow">{resource.category}</p><h1>{resource.title}</h1><p className="large">{resource.description}</p></div></section>
      <section><div className="container narrow"><p className="pill">{resource.type}</p><p>This resource entry is ready for a final approved file, email capture workflow, or CMS-managed download tracking. Current launch materials use supplied PDFs only.</p>{resource.href.endsWith(".pdf") ? <Link className="button button-primary" href={resource.href}>Download PDF</Link> : <Link className="button button-primary" href="/contact">Request Resource</Link>}</div></section>
    </>
  );
}

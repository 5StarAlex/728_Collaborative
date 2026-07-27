import Link from "next/link";
import { Breadcrumbs } from "@/components/Section";
import { industryPages } from "@/lib/site-data";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("Industries Served", "Consulting, training, workforce development, and support services for healthcare, education, nonprofits, government, and community organizations.", "/industries");

export default function IndustriesPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Industries", href: "/industries" }]} />
      <section className="page-hero hero-industries"><div className="container"><p className="eyebrow">Industries</p><h1>Industries Served</h1><p className="large">728 Collaborative supports organizations whose work depends on people, systems, learning, care coordination, and community trust.</p><div className="button-row"><Link className="button button-primary" href="/contact">Discuss Your Industry</Link></div></div></section>
      <section><div className="container industry-grid">{industryPages.map((industry) => <article className="industry-card" key={industry.slug}><h2>{industry.title}</h2><p>{industry.description}</p><h3>Common challenges</h3><ul className="check-list">{industry.challenges.map((item) => <li key={item}>{item}</li>)}</ul><Link className="text-link" href={`/industries/${industry.slug}`}>View {industry.title}</Link></article>)}</div></section>
    </>
  );
}

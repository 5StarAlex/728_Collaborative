import { FilterGrid } from "@/components/FilterGrid";
import { Breadcrumbs, SectionHeading } from "@/components/Section";
import { articles } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";

export const metadata = pageMetadata("Insights", "Insights on leadership, workforce development, organizational strategy, professional learning, healthcare, education, and community support.", "/insights");

export default function InsightsPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Insights", href: "/insights" }]} />
      <section className="page-hero hero-insights"><div className="container"><p className="eyebrow">Insights</p><h1>Ideas & Guidance</h1><p className="large">A thought-leadership hub for practical strategy, workforce development, professional learning, and community-centered support.</p><div className="button-row"><Link className="button button-primary" href="/resources">Browse Resources</Link></div></div></section>
      <section className="section-intro">
        <div className="container">
          <SectionHeading eyebrow="Featured and Recent" title="Explore articles by topic." />
        </div>
      </section>
      <FilterGrid items={articles} kind="insights" />
    </>
  );
}

import { FilterGrid } from "@/components/FilterGrid";
import { Breadcrumbs, SectionHeading } from "@/components/Section";
import { resources } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";

export const metadata = pageMetadata("Resource Library", "Filterable resource library with guides, worksheets, capability statements, training materials, and support resources.", "/resources");

export default function ResourcesPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Resources", href: "/resources" }]} />
      <section className="page-hero hero-resources"><div className="container"><p className="eyebrow">Resources</p><h1>Resource Library</h1><p className="large">Guides, worksheets, capability materials, organizational resources, and family support tools can be added here as the content library grows.</p><div className="button-row"><Link className="button button-primary" href="/contact">Request a Resource</Link></div></div></section>
      <SectionHeading eyebrow="Library" title="Search and filter resources." />
      <FilterGrid items={resources} kind="resources" />
    </>
  );
}

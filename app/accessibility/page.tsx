import { Breadcrumbs } from "@/components/Section";
import { company } from "@/lib/site-data";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("Accessibility Statement", "Accessibility statement for 728 Collaborative LLC website.", "/accessibility");

export default function AccessibilityPage() {
  return <><Breadcrumbs items={[{ label: "Accessibility Statement", href: "/accessibility" }]} /><section className="page-hero hero-legal"><div className="container"><h1>Accessibility</h1><p className="large">728 Collaborative aims to provide an accessible digital experience aligned with WCAG 2.2 AA principles.</p></div></section><section><div className="container narrow"><h2>Accessibility Commitments</h2><p>The website uses semantic HTML, visible focus indicators, keyboard-accessible navigation, readable contrast, reduced-motion support, form labels, and descriptive link text.</p><h2>Feedback</h2><p>If you encounter an accessibility barrier, contact <a href={`mailto:${company.email}`}>{company.email}</a> or <a href={company.phoneHref}>{company.phone}</a>.</p></div></section></>;
}

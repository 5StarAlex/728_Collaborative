import { Breadcrumbs } from "@/components/Section";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("Privacy Policy", "Privacy policy for 728 Collaborative LLC website forms, analytics, resources, and communications.", "/privacy");

export default function PrivacyPage() {
  return <><Breadcrumbs items={[{ label: "Privacy Policy", href: "/privacy" }]} /><section className="page-hero hero-legal"><div className="container"><h1>Privacy Policy</h1><p className="large">This launch policy explains the intended privacy posture and should be reviewed by counsel before publication.</p></div></section><section><div className="container narrow"><h2>Information We Collect</h2><p>Website forms may collect contact information, organization details, inquiry type, and message content. Visitors should not submit sensitive clinical, health, financial, or legal information through standard forms.</p><h2>How Information Is Used</h2><p>Information is used to respond to inquiries, prepare proposals, share requested resources, send newsletters when requested, and improve website performance.</p><h2>Analytics and Consent</h2><p>Analytics should be configured to avoid unnecessary personal data and to honor applicable consent requirements.</p><h2>Security</h2><p>Production form delivery should use secure environment variables, server-side validation, spam protection, rate limiting, and careful logging that avoids sensitive content.</p></div></section></>;
}

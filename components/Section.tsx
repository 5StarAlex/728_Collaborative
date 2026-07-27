import Link from "next/link";
import type { ReactNode } from "react";

export function SectionHeading({ eyebrow, title, children }: { eyebrow?: string; title: string; children?: ReactNode }) {
  return (
    <div className="section-heading reveal">
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2>{title}</h2>
      {children ? <p>{children}</p> : null}
    </div>
  );
}

export function CtaBand({ title, text, primary = "Schedule a Discovery Call", secondary = "Request a Proposal" }: { title: string; text: string; primary?: string; secondary?: string }) {
  return (
    <section className="cta-band reveal">
      <div className="container cta-inner">
        <div>
          <p className="eyebrow">Next Step</p>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <div className="button-row">
          <Link className="button button-primary" href="/schedule">{primary}</Link>
          <Link className="button button-secondary" href="/request-proposal">{secondary}</Link>
        </div>
      </div>
    </section>
  );
}

export function Breadcrumbs({ items }: { items: Array<{ label: string; href: string }> }) {
  return (
    <nav className="breadcrumbs container" aria-label="Breadcrumb">
      <ol>
        <li><Link href="/">Home</Link></li>
        {items.map((item) => <li key={item.href}><Link href={item.href}>{item.label}</Link></li>)}
      </ol>
    </nav>
  );
}

export function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}


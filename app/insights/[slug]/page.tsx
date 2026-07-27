import { notFound } from "next/navigation";
import Link from "next/link";
import { Breadcrumbs, JsonLd } from "@/components/Section";
import { articles } from "@/lib/content";
import { company } from "@/lib/site-data";
import { pageMetadata } from "@/lib/seo";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://728collaborative.org";

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);
  if (!article) return {};
  return pageMetadata(article.title, article.excerpt, `/insights/${article.slug}`);
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);
  if (!article) notFound();
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    datePublished: article.date,
    author: { "@type": "Person", name: company.founder },
    publisher: { "@type": "Organization", name: company.name },
    mainEntityOfPage: `${siteUrl}/insights/${article.slug}`
  };
  return (
    <>
      <JsonLd data={schema} />
      <Breadcrumbs items={[{ label: "Insights", href: "/insights" }, { label: article.title, href: `/insights/${article.slug}` }]} />
      <article className="narrow">
        <section className="page-hero hero-insights">
          <p className="eyebrow">{article.category}</p>
          <h1>{article.title}</h1>
          <p>{new Date(article.date).toLocaleDateString("en-US")} · {article.readTime} · By {company.founder}</p>
        </section>
        <section>
          {article.body.map((paragraph) => <p className="large" key={paragraph}>{paragraph}</p>)}
          <div className="button-row"><Link className="button button-secondary" href="/insights">Back to Insights</Link><Link className="button button-primary" href="/contact">Discuss This Topic</Link></div>
        </section>
      </article>
    </>
  );
}

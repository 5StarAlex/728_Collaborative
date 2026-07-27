"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type Card = {
  slug: string;
  title: string;
  category: string;
  excerpt?: string;
  description?: string;
  date?: string;
  readTime?: string;
  type?: string;
};

export function FilterGrid({ items, kind }: { items: Card[]; kind: "insights" | "resources" }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const categories = ["All", ...Array.from(new Set(items.map((item) => item.category)))];
  const filtered = useMemo(() => items.filter((item) => {
    const text = `${item.title} ${item.category} ${item.excerpt || item.description || ""}`.toLowerCase();
    return (category === "All" || item.category === category) && text.includes(query.toLowerCase());
  }), [category, items, query]);

  return (
    <section className="container filter-section">
      <div className="filter-controls" role="search">
        <label>
          <span>Search</span>
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder={`Search ${kind}`} />
        </label>
        <label>
          <span>Category</span>
          <select value={category} onChange={(event) => setCategory(event.target.value)}>
            {categories.map((item) => <option key={item}>{item}</option>)}
          </select>
        </label>
      </div>
      <div className="article-grid">
        {filtered.map((item) => (
          <article className="article-card reveal" key={item.slug}>
            <p className="pill">{item.type || item.category}</p>
            <h2><Link href={`/${kind}/${item.slug}`}>{item.title}</Link></h2>
            <p>{item.excerpt || item.description}</p>
            {item.date ? <small>{new Date(item.date).toLocaleDateString("en-US")} · {item.readTime}</small> : null}
            <Link className="text-link" href={`/${kind}/${item.slug}`}>{kind === "insights" ? "Read article" : "View resource"}</Link>
          </article>
        ))}
      </div>
      {filtered.length === 0 ? <p className="empty-state">No matching entries found.</p> : null}
    </section>
  );
}


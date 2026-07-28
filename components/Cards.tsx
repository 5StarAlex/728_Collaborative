import Link from "next/link";
import { divisions } from "@/lib/site-data";

export function DivisionCards({ showServices = true }: { showServices?: boolean }) {
  return (
    <div className="division-grid">
      {divisions.map((division) => (
        <article className="division-card reveal" key={division.name}>
          <p className="pill">{division.label}</p>
          <h3>{division.name}</h3>
          <h4>{division.title}</h4>
          <p>{division.description}</p>
          {showServices && (
            <ul className="check-list">
              {division.services.slice(0, 6).map((service) => <li key={service}>{service}</li>)}
            </ul>
          )}
          <Link className="text-link" href={division.href}>{division.cta}</Link>
        </article>
      ))}
    </div>
  );
}

export function ItemGrid({ items }: { items: string[] }) {
  return (
    <ol className="item-grid capability-matrix">
      {items.map((item, index) => (
        <li key={item}>
          <span>{String(index + 1).padStart(2, "0")}</span>
          <strong>{item}</strong>
        </li>
      ))}
    </ol>
  );
}

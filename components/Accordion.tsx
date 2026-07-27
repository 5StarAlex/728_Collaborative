"use client";

import { useState } from "react";

export function Accordion({ items }: { items: Array<[string, string]> }) {
  const [open, setOpen] = useState(0);
  return (
    <div className="accordion">
      {items.map(([question, answer], index) => (
        <div className="accordion-item" key={question}>
          <button type="button" aria-expanded={open === index} onClick={() => setOpen(open === index ? -1 : index)}>
            <span>{question}</span>
            <span aria-hidden="true">{open === index ? "-" : "+"}</span>
          </button>
          <div className="accordion-panel" hidden={open !== index}>
            <p>{answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}


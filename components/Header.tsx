"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { divisions, navItems } from "@/lib/site-data";
import { trackEvent } from "./Analytics";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("nav-lock", open);
    if (open) closeRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
      if (event.key === "Tab" && open) {
        const panel = document.querySelector(".mobile-panel");
        const focusable = panel?.querySelectorAll<HTMLElement>("a, button");
        if (!focusable?.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.classList.remove("nav-lock");
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  if (pathname === "/") return null;

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <a className="skip-link" href="#main">Skip to content</a>
      <div className="container nav-shell">
        <Link href="/" className="logo-link" aria-label="728 Collaborative home">
          <Image src="/assets/728-collaborative-logo.svg" alt="728 Collaborative LLC" width={190} height={190} priority />
        </Link>
        <nav className="desktop-nav" aria-label="Primary">
          {navItems.map((item) =>
            item.label === "Services" ? (
              <div className="nav-dropdown" key={item.href}>
                <Link href={item.href}>{item.label}</Link>
                <div className="mega-menu" aria-label="Services submenu">
                  {divisions.map((division) => (
                    <Link href={division.href} key={division.name}>
                      <span>{division.name}</span>
                      <small>{division.title}</small>
                    </Link>
                  ))}
                  <Link href="/services">
                    <span>All Services</span>
                    <small>Compare divisions and engagement paths</small>
                  </Link>
                </div>
              </div>
            ) : (
              <Link href={item.href} key={item.href}>{item.label}</Link>
            )
          )}
        </nav>
        <div className="nav-actions">
          <a className="icon-link" href="https://www.linkedin.com" aria-label="LinkedIn" onClick={() => trackEvent("linkedin_click")}>in</a>
          <Link className="button button-primary compact" href="/schedule" onClick={() => trackEvent("discovery_call_click")}>Schedule a Discovery Call</Link>
          <button className="menu-button" type="button" aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(true)}>
            <span></span><span></span><span></span>
            <span className="sr-only">Open menu</span>
          </button>
        </div>
      </div>
      <div className={`mobile-backdrop ${open ? "show" : ""}`} onClick={() => setOpen(false)} />
      <aside id="mobile-menu" className={`mobile-panel ${open ? "show" : ""}`} aria-hidden={!open} aria-label="Mobile navigation">
        <button ref={closeRef} className="close-button" type="button" onClick={() => setOpen(false)}>Close</button>
        <Link href="/" className="mobile-logo" onClick={() => setOpen(false)}>
          <Image src="/assets/728-collaborative-logo.svg" alt="728 Collaborative LLC" width={150} height={150} />
        </Link>
        <nav aria-label="Mobile primary">
          {navItems.map((item) => (
            <Link href={item.href} key={item.href} onClick={() => setOpen(false)}>{item.label}</Link>
          ))}
          <div className="mobile-subnav">
            {divisions.map((division) => (
              <Link href={division.href} key={division.name} onClick={() => setOpen(false)}>{division.name}</Link>
            ))}
          </div>
        </nav>
        <Link className="button button-primary" href="/schedule" onClick={() => setOpen(false)}>Schedule a Discovery Call</Link>
      </aside>
    </header>
  );
}

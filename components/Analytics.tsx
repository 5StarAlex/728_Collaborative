"use client";

export function trackEvent(eventName: string, details: Record<string, string> = {}) {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent("728:event", { detail: { eventName, ...details } }));
  const gtag = (window as Window & { gtag?: (...args: unknown[]) => void }).gtag;
  gtag?.("event", eventName, details);
}


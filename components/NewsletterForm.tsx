"use client";

import { FormEvent, useState } from "react";
import { trackEvent } from "./Analytics";

export function NewsletterForm() {
  const [status, setStatus] = useState("");
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("Thank you. You have been added to the launch newsletter list.");
    trackEvent("newsletter_signup");
  }
  return (
    <form className="mini-form" onSubmit={submit}>
      <label htmlFor="newsletter-email">Join the email list</label>
      <div>
        <input id="newsletter-email" name="email" type="email" placeholder="Email address" required />
        <button type="submit">Join</button>
      </div>
      <p className="form-status" role="status">{status}</p>
    </form>
  );
}


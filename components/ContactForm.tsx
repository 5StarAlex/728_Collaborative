"use client";

import { FormEvent, useState } from "react";
import { trackEvent } from "./Analytics";

const inquiryTypes = ["General inquiry", "Consulting inquiry", "Training inquiry", "SW@Home support inquiry", "Proposal request"];

export function ContactForm({ defaultType = "General inquiry" }: { defaultType?: string }) {
  const [type, setType] = useState(defaultType);
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setStatus("");
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });
    setLoading(false);
    if (response.ok) {
      form.reset();
      setStatus("Thank you. Your inquiry has been received and the next step will be confirmed by email or phone.");
      trackEvent(type.includes("Proposal") ? "proposal_request_submit" : type.includes("Training") ? "training_inquiry_submit" : type.includes("SW@Home") ? "sw_home_inquiry_submit" : "contact_form_submit");
    } else {
      setStatus("Please review the required fields and try again.");
    }
  }

  return (
    <form className="contact-form" onSubmit={submit} noValidate>
      <input type="text" name="company_website" tabIndex={-1} autoComplete="off" className="honeypot" aria-hidden="true" />
      <div className="form-grid two">
        <label>First name<input name="firstName" required /></label>
        <label>Last name<input name="lastName" required /></label>
        <label>Email<input name="email" type="email" required /></label>
        <label>Phone, optional<input name="phone" type="tel" /></label>
        <label>Organization<input name="organization" /></label>
        <label>Job title<input name="jobTitle" /></label>
      </div>
      <div className="form-grid two">
        <label>Inquiry type
          <select name="inquiryType" value={type} onChange={(event) => setType(event.target.value)}>
            {inquiryTypes.map((item) => <option key={item}>{item}</option>)}
          </select>
        </label>
        <label>Service of interest
          <select name="serviceInterest">
            <option>728 Consulting</option>
            <option>728 Learning</option>
            <option>SW@Home</option>
            <option>Government contracting</option>
            <option>Not sure yet</option>
          </select>
        </label>
      </div>
      {type === "Proposal request" ? (
        <div className="form-grid two form-conditional">
          <label>Industry<input name="industry" /></label>
          <label>Approximate timeline<input name="timeline" /></label>
          <label>Delivery preference<select name="delivery"><option>Virtual</option><option>On-site</option><option>Hybrid</option><option>Not sure</option></select></label>
          <label>Location<input name="location" /></label>
          <label>Approximate audience size<input name="audienceSize" /></label>
          <label>Budget range, optional<input name="budget" /></label>
        </div>
      ) : null}
      {type === "SW@Home support inquiry" ? (
        <p className="notice">Please share only enough information for initial contact. Do not submit highly sensitive health, clinical, financial, or legal details through this form.</p>
      ) : null}
      <label>Message<textarea name="message" rows={6} required /></label>
      <fieldset>
        <legend>Preferred contact method</legend>
        <label className="inline"><input type="radio" name="preferredContact" value="Email" defaultChecked /> Email</label>
        <label className="inline"><input type="radio" name="preferredContact" value="Phone" /> Phone</label>
      </fieldset>
      <label className="inline consent"><input type="checkbox" name="consent" required /> I consent to being contacted about this inquiry and understand this form should not be used for emergencies or sensitive clinical information.</label>
      <button className="button button-primary" type="submit" disabled={loading}>{loading ? "Sending..." : "Submit Inquiry"}</button>
      <p className="form-status" role="status">{status}</p>
    </form>
  );
}


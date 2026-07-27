import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  firstName: z.string().min(1).max(80),
  lastName: z.string().min(1).max(80),
  email: z.string().email().max(160),
  phone: z.string().max(40).optional(),
  organization: z.string().max(160).optional(),
  jobTitle: z.string().max(120).optional(),
  inquiryType: z.string().max(80),
  serviceInterest: z.string().max(80).optional(),
  message: z.string().min(8).max(2500),
  preferredContact: z.string().max(40),
  consent: z.union([z.literal("on"), z.literal(true)]).optional(),
  company_website: z.string().max(0).optional()
}).passthrough();

const hits = new Map<string, { count: number; expires: number }>();

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0] || "local";
  const now = Date.now();
  const hit = hits.get(ip);
  if (hit && hit.expires > now && hit.count > 8) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }
  hits.set(ip, { count: hit && hit.expires > now ? hit.count + 1 : 1, expires: now + 60_000 });

  const body = await request.json().catch(() => null);
  const parsed = contactSchema.safeParse(body);
  if (!parsed.success || parsed.data.company_website) {
    return NextResponse.json({ error: "Invalid submission" }, { status: 400 });
  }

  // Production email delivery should be wired to Resend, SMTP, or a secure CRM using env vars.
  return NextResponse.json({ ok: true });
}


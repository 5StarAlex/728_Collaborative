import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/Section";
import { organizationSchema } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://728collaborative.org"),
  title: {
    default: "728 Collaborative LLC | Strategic Consulting, Training, and Support",
    template: "%s | 728 Collaborative LLC"
  },
  description:
    "728 Collaborative LLC provides strategic consulting, professional learning, workforce development, and non-clinical support services nationwide virtually and in person across South Carolina and North Carolina.",
  applicationName: "728 Collaborative LLC",
  icons: {
    icon: "/assets/728-collaborative-logo.svg",
    apple: "/assets/728-collaborative-logo.svg"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <JsonLd data={organizationSchema()} />
      </body>
    </html>
  );
}

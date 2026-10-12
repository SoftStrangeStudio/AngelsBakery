import type { Metadata } from "next";
import { BakeryProvider } from "@/view-models/bakery-provider";
import { Header, Footer } from "@/components/site-shell";
import { basePath } from "@/lib/config";
import "./globals.css";
const publicOrigin = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/+$/, "");
const publicMetadataBase = publicOrigin
  ? new URL(`${publicOrigin}${basePath}/`)
  : undefined;
export const metadata: Metadata = {
  metadataBase: publicMetadataBase,
  title: {
    default: "Soft Strange Bakery — A little baked happiness",
    template: "%s | Soft Strange Bakery",
  },
  description:
    "Flaky pastries, happy little desserts, and something lovely to look forward to. Explore Soft Strange Bakery’s preview collection.",
  openGraph: {
    title: "Soft Strange Bakery — A little baked happiness",
    description: "Good things come to those who treat.",
    ...(publicMetadataBase && {
      images: [
        { url: "images/scenes/snickerdoodles.webp", width: 1000, height: 750 },
      ],
    }),
  },
  // This build is currently the temporary Pages preview; enable indexing only
  // when the approved commercial host and customer-facing details are ready.
  robots: { index: false, follow: false },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <BakeryProvider>
          <Header />
          <main id="main" tabIndex={-1}>{children}</main>
          <Footer />
        </BakeryProvider>
      </body>
    </html>
  );
}

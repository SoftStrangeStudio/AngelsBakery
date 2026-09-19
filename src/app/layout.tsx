import type { Metadata } from "next";
import { BakeryProvider } from "@/view-models/bakery-provider";
import { Header, Footer } from "@/components/site-shell";
import "./globals.css";
export const metadata: Metadata = {
  metadataBase: new URL("https://softstrangestudio.github.io/AngelsBakery/"),
  title: {
    default: "Angel’s Bakery — A little baked happiness",
    template: "%s | Angel’s Bakery",
  },
  description:
    "Flaky pastries, happy little desserts, and something lovely to look forward to. Explore Angel’s Bakery’s preview collection.",
  openGraph: {
    title: "Angel’s Bakery — A little baked happiness",
    description: "Good things come to those who treat.",
    images: [
      { url: "/AngelsBakery/images/hero.webp", width: 1536, height: 1024 },
    ],
  },
  robots: { index: true, follow: true },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <BakeryProvider>
          <Header />
          <main id="main">{children}</main>
          <Footer />
        </BakeryProvider>
      </body>
    </html>
  );
}

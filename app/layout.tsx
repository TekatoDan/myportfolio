import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://danportfolio-ashy.vercel.app"),
  title: {
    default: "Tekato Zumorukushi | IT Professional & System Developer",
    template: "%s | Tekato Zumorukushi",
  },
  description:
    "Portfolio of Tekato Zumorukushi, an IT professional, system developer, entrepreneur, and student building digital solutions for communities, government, and healthcare.",
  keywords: [
    "Tekato Zumorukushi",
    "IT professional",
    "system developer",
    "software engineer portfolio",
    "government technology",
    "healthcare technology",
    "Digos City",
    "PediGrab",
    "CADOCS",
  ],
  authors: [{ name: "Tekato Zumorukushi" }],
  creator: "Tekato Zumorukushi",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://danportfolio-ashy.vercel.app",
    title: "Tekato Zumorukushi | IT Professional & System Developer",
    description:
      "Modern portfolio showcasing community, government, healthcare, and business technology projects.",
    siteName: "Tekato Zumorukushi Portfolio",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Tekato Zumorukushi portfolio preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tekato Zumorukushi | IT Professional & System Developer",
    description:
      "Building digital solutions for communities, government, and healthcare.",
    images: ["/og-image.svg"],
  },
  alternates: {
    canonical: "https://danportfolio-ashy.vercel.app",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#05070d",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

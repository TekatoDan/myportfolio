import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://danportfolio-ashy.vercel.app"),
  title: {
    default: "Dan Jover Peloriana | Virtual Assistant",
    template: "%s | Dan Jover Peloriana",
  },
  description:
    "Virtual Assistant portfolio for Dan Jover Peloriana, specializing in administrative support, appointment setting, client communication, CRM management, and sales coordination.",
  keywords: [
    "Dan Jover Peloriana",
    "Virtual Assistant",
    "Administrative Support",
    "Appointment Setter",
    "CRM Management",
    "Client Communication",
    "Remote Assistant",
    "Davao City Virtual Assistant",
  ],
  authors: [{ name: "Dan Jover Peloriana" }],
  creator: "Dan Jover Peloriana",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://danportfolio-ashy.vercel.app",
    title: "Dan Jover Peloriana | Virtual Assistant",
    description:
      "Resume-backed Virtual Assistant portfolio focused on admin support, CRM, scheduling, client care, and sales coordination.",
    siteName: "Dan Jover Peloriana Portfolio",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Dan Jover Peloriana virtual assistant portfolio preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dan Jover Peloriana | Virtual Assistant",
    description:
      "Virtual Assistant specializing in admin support, CRM management, client communication, and appointment setting.",
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

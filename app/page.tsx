import { PortfolioSite } from "@/components/portfolio-site";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Dan Jover Peloriana",
  url: "https://danportfolio-ashy.vercel.app",
  jobTitle: "Virtual Assistant",
  description:
    "Virtual Assistant with over three years of experience in client communication, administrative support, appointment setting, CRM management, claims support, and sales coordination.",
  email: "mailto:danjover515@gmail.com",
  telephone: "+639477462117",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Davao City",
    addressRegion: "Davao del Sur",
    addressCountry: "PH",
  },
  sameAs: [
    "mailto:danjover515@gmail.com",
  ],
  knowsAbout: [
    "Virtual Assistance",
    "Administrative Support",
    "Appointment Scheduling",
    "Calendar Management",
    "Email and Phone Communication",
    "Client Relationship Management",
    "CRM and Database Management",
    "Data Entry",
    "Sales Coordination",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <PortfolioSite />
    </>
  );
}

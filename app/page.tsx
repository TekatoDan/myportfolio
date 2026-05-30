import { PortfolioSite } from "@/components/portfolio-site";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Tekato Zumorukushi",
  url: "https://danportfolio-ashy.vercel.app",
  jobTitle: "IT Professional and System Developer",
  description:
    "IT professional, college student, intake specialist, entrepreneur, and creative designer focused on community, government, and healthcare technology.",
  sameAs: [
    "https://github.com/TekatoDan",
    "https://www.linkedin.com/in/tekato-zumorukushi",
    "https://www.facebook.com/TekatoDan",
  ],
  knowsAbout: [
    "Frontend Development",
    "Backend Development",
    "Database Management",
    "System Analysis",
    "Healthcare Data Research",
    "AI and Automation Tools",
    "Government Workflow Systems",
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

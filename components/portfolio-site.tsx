"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import {
  ArrowUp,
  ArrowUpRight,
  Award,
  BadgeCheck,
  BrainCircuit,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  Code2,
  Database,
  Download,
  GraduationCap,
  HeartPulse,
  Layers3,
  Mail,
  MapPin,
  MessageCircle,
  Palette,
  Rocket,
  SearchCheck,
  ShieldCheck,
  Users,
} from "lucide-react";

const navItems = [
  "Home",
  "About",
  "Skills",
  "Experience",
  "Projects",
  "Certifications",
  "Contact",
];

const typeLines = [
  "System Developer",
  "IT Professional",
  "Healthcare Data Researcher",
  "Community Tech Builder",
  "Entrepreneur",
];

const highlights = [
  { value: "4", label: "Flagship systems" },
  { value: "8+", label: "Skill domains" },
  { value: "3", label: "Impact sectors" },
];

const skills = [
  {
    category: "Frontend Development",
    level: 88,
    icon: Code2,
    tools: "Next.js, React, TypeScript, Tailwind CSS",
  },
  {
    category: "Backend Development",
    level: 82,
    icon: Layers3,
    tools: "APIs, authentication, server workflows",
  },
  {
    category: "Database Management",
    level: 84,
    icon: Database,
    tools: "SQL, relational modeling, records systems",
  },
  {
    category: "UI/UX Design",
    level: 86,
    icon: Palette,
    tools: "Wireframes, design systems, user journeys",
  },
  {
    category: "System Analysis",
    level: 90,
    icon: SearchCheck,
    tools: "Requirements, workflows, documentation",
  },
  {
    category: "Project Management",
    level: 80,
    icon: ClipboardCheck,
    tools: "Planning, delivery, stakeholder alignment",
  },
  {
    category: "Healthcare Data Research",
    level: 85,
    icon: HeartPulse,
    tools: "Eligibility, case details, public service data",
  },
  {
    category: "AI & Automation Tools",
    level: 78,
    icon: BrainCircuit,
    tools: "Prompting, workflow automation, productivity systems",
  },
];

const experiences = [
  {
    role: "Intake Specialist",
    period: "Current",
    icon: BriefcaseBusiness,
    copy:
      "Supports SSDI application intake with careful client communication, accurate data gathering, and eligibility-focused documentation.",
  },
  {
    role: "Academic System Developer",
    period: "College",
    icon: GraduationCap,
    copy:
      "Builds student-led software projects that translate real institutional pain points into usable digital workflows.",
  },
  {
    role: "Freelance Development Work",
    period: "Independent",
    icon: Code2,
    copy:
      "Designs and develops practical web interfaces, internal tools, and concepts for business and community use cases.",
  },
  {
    role: "Leadership & Community Projects",
    period: "Ongoing",
    icon: Users,
    copy:
      "Combines entrepreneurial thinking, creative design, and local problem solving to create systems with public impact.",
  },
];

const filters = [
  "All",
  "Web Apps",
  "Government Systems",
  "Healthcare",
  "Research",
  "Concepts",
] as const;

type Filter = (typeof filters)[number];

const projects = [
  {
    title: "PediGrab",
    category: "Concepts",
    image: "/projects/pedigrab.svg",
    description:
      "A ride-hailing platform concept for tricycles in Digos City, inspired by modern mobility apps and tailored for local transport needs.",
    tech: ["Next.js", "Maps", "Booking Flow", "Mobile UX"],
    challenge: "Modernize informal tricycle dispatch without losing local accessibility.",
    impact: "Designed to improve commuter convenience, driver visibility, and city mobility data.",
    github: "https://github.com/TekatoDan",
    demo: "#contact",
  },
  {
    title: "Smart Enrollment & Payment Kiosk",
    category: "Web Apps",
    image: "/projects/kiosk.svg",
    description:
      "An automated enrollment and payment processing system built as a student project for faster school transactions.",
    tech: ["TypeScript", "Database Design", "Payments", "Admin Dashboard"],
    challenge: "Reduce manual queues and connect enrollment steps with payment validation.",
    impact: "Creates a cleaner student journey from registration to confirmation.",
    github: "https://github.com/TekatoDan",
    demo: "#contact",
  },
  {
    title: "Healthcare Hub",
    category: "Healthcare",
    image: "/projects/healthcare-hub.svg",
    description:
      "A centralized platform concept for free government clinics, focused on service discovery, scheduling, and public access.",
    tech: ["Healthcare UX", "Search", "Records", "Accessibility"],
    challenge: "Make free clinic information easier to find and easier to coordinate.",
    impact: "Improves access to public health services for underserved communities.",
    github: "https://github.com/TekatoDan",
    demo: "#contact",
  },
  {
    title: "CADOCS",
    category: "Government Systems",
    image: "/projects/cadocs.svg",
    description:
      "City Administrator's Office Document Control System for organizing records, routing work, and improving document accountability.",
    tech: ["Workflow System", "SQL", "Audit Trails", "Role Access"],
    challenge: "Digitize government records while preserving traceability and process discipline.",
    impact: "Supports faster retrieval, clearer ownership, and more reliable office workflows.",
    github: "https://github.com/TekatoDan",
    demo: "#contact",
  },
];

const achievements = [
  "Completed major academic systems with practical government, healthcare, and education use cases.",
  "Built a portfolio of concepts that connect business strategy with local community needs.",
  "Developed strong client communication and research discipline through SSDI intake work.",
  "Balanced technical development with creative design, painting, and entrepreneurial projects.",
];

const certifications = [
  "Academic IT project delivery",
  "Healthcare data research practice",
  "System analysis and documentation",
  "AI-assisted productivity workflows",
];

const socialLinks = [
  { label: "GitHub", href: "https://github.com/TekatoDan", icon: Code2 },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/tekato-zumorukushi",
    icon: BriefcaseBusiness,
  },
  {
    label: "Email",
    href: "mailto:tekatozumorukushi@gmail.com",
    icon: Mail,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/TekatoDan",
    icon: MessageCircle,
  },
];

const sectionVariant = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

function SectionHeader({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy: string;
}) {
  return (
    <motion.div
      className="mx-auto mb-12 max-w-3xl text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      variants={sectionVariant}
    >
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p className="section-copy">{copy}</p>
    </motion.div>
  );
}

function TypingLine() {
  const [index, setIndex] = useState(0);
  const [display, setDisplay] = useState("");

  useEffect(() => {
    const current = typeLines[index];
    if (display.length < current.length) {
      const timeout = window.setTimeout(
        () => setDisplay(current.slice(0, display.length + 1)),
        72,
      );
      return () => window.clearTimeout(timeout);
    }

    const timeout = window.setTimeout(() => {
      setDisplay("");
      setIndex((value) => (value + 1) % typeLines.length);
    }, 1450);

    return () => window.clearTimeout(timeout);
  }, [display, index]);

  return (
    <span className="typing" aria-label={typeLines[index]}>
      {display}
      <span aria-hidden="true" className="typing-cursor" />
    </span>
  );
}

export function PortfolioSite() {
  const [activeFilter, setActiveFilter] = useState<Filter>("All");
  const [showBackTop, setShowBackTop] = useState(false);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const progressScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return projects;
    if (activeFilter === "Research") {
      return projects.filter((project) => project.title === "Healthcare Hub");
    }
    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  useEffect(() => {
    const onScroll = () => setShowBackTop(window.scrollY > 640);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const animationProps = reduceMotion
    ? { initial: false as const }
    : {
        initial: "hidden" as const,
        whileInView: "visible" as const,
        viewport: { once: true, amount: 0.2 },
        transition: { duration: 0.55, ease: "easeOut" as const },
        variants: sectionVariant,
      };

  return (
    <main id="home">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <motion.div className="scroll-progress" style={{ scaleX: progressScale }} />

      <header className="site-nav">
        <a className="brand" href="#home" aria-label="Tekato Zumorukushi home">
          <span>TZ</span>
          <strong>Tekato</strong>
        </a>
        <nav aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}>
              {item}
            </a>
          ))}
        </nav>
      </header>

      <section className="hero section-pad" aria-labelledby="hero-title">
        <div className="hero-grid">
          <motion.div
            className="hero-copy"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <p className="eyebrow">Software systems with public-service focus</p>
            <h1 id="hero-title">
              Building Digital Solutions for Communities, Government, and
              Healthcare
            </h1>
            <p className="hero-role">
              Tekato Zumorukushi is a <TypingLine />
            </p>
            <p className="hero-subtitle">
              IT Professional, System Developer, and Entrepreneur focused on
              creating technology that solves real-world problems for students,
              local offices, clinics, and growing communities.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="/Tekato-Zumorukushi-Resume.html" download>
                <Download size={18} aria-hidden="true" />
                Download Resume
              </a>
              <a className="button secondary" href="#projects">
                <Rocket size={18} aria-hidden="true" />
                View Projects
              </a>
            </div>
            <div className="social-row" aria-label="Social links">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a key={label} href={href} aria-label={label}>
                  <Icon size={18} aria-hidden="true" />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.75, delay: 0.08, ease: "easeOut" }}
          >
            <div className="portrait-card">
              <Image
                src="/avatar.svg"
                width={640}
                height={640}
                alt="Stylized portrait avatar of Tekato Zumorukushi"
                priority
              />
              <div>
                <p>Tekato Zumorukushi</p>
                <span>IT Professional · System Developer</span>
              </div>
            </div>
            <div className="hero-dashboard" aria-label="Portfolio impact snapshot">
              <div className="dashboard-top">
                <span>Impact Console</span>
                <BadgeCheck size={18} aria-hidden="true" />
              </div>
              <div className="dashboard-map">
                <span />
                <span />
                <span />
              </div>
              <div className="metric-grid">
                {highlights.map((item) => (
                  <div key={item.label}>
                    <strong>{item.value}</strong>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <div id="main-content" />

      <section id="about" className="section-pad">
        <SectionHeader
          eyebrow="About"
          title="A practical technologist with creative range."
          copy="Tekato blends software development, intake operations, business thinking, and visual design into a portfolio built around useful systems."
        />
        <div className="about-grid">
          <motion.article className="story-panel" {...animationProps}>
            <p>
              I am an IT professional and college student building systems that
              connect people with better workflows. My background includes
              call-center and intake experience for SSDI applications, where
              accuracy, empathy, and clear documentation matter every day.
            </p>
            <p>
              That operational experience shapes how I approach software:
              understand the user, map the process, remove friction, and deliver
              tools that feel credible enough for schools, clinics, local
              government offices, and small businesses.
            </p>
          </motion.article>
          <motion.div className="value-stack" {...animationProps}>
            {[
              ["Technical background", "Web apps, databases, dashboards, and workflow systems."],
              ["Entrepreneurial mindset", "Ideas are evaluated by usefulness, adoption, and impact."],
              ["Creative discipline", "Painting and design sharpen taste, composition, and user empathy."],
            ].map(([title, copy]) => (
              <div key={title} className="value-item">
                <CheckCircle2 size={20} aria-hidden="true" />
                <div>
                  <strong>{title}</strong>
                  <span>{copy}</span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="skills" className="section-pad alternate">
        <SectionHeader
          eyebrow="Skills"
          title="Full-stack thinking for real-world systems."
          copy="A balanced skill set across product interfaces, data, system workflows, and research-heavy operations."
        />
        <div className="skills-grid">
          {skills.map(({ category, level, icon: Icon, tools }, index) => (
            <motion.article
              className="skill-card"
              key={category}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.04 }}
              variants={sectionVariant}
            >
              <div className="card-icon">
                <Icon size={22} aria-hidden="true" />
              </div>
              <div>
                <h3>{category}</h3>
                <p>{tools}</p>
              </div>
              <div className="progress-wrap" aria-label={`${category} skill level ${level}%`}>
                <span style={{ width: `${level}%` }} />
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="experience" className="section-pad">
        <SectionHeader
          eyebrow="Experience"
          title="A timeline built around service, systems, and delivery."
          copy="Professional and academic work that proves Tekato can understand stakeholders and turn process problems into technology."
        />
        <div className="timeline">
          {experiences.map(({ role, period, icon: Icon, copy }, index) => (
            <motion.article
              className="timeline-item"
              key={role}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              variants={sectionVariant}
            >
              <div className="timeline-icon">
                <Icon size={20} aria-hidden="true" />
              </div>
              <div>
                <span>{period}</span>
                <h3>{role}</h3>
                <p>{copy}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="projects" className="section-pad alternate">
        <SectionHeader
          eyebrow="Projects"
          title="Portfolio work with government, healthcare, and community impact."
          copy="Premium project cards designed to show the problem, solution, technology, and practical value behind each build."
        />
        <div className="filter-bar" aria-label="Project filters">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              className={activeFilter === filter ? "active" : ""}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
        <div className={`project-grid ${filteredProjects.length === 1 ? "single" : ""}`}>
          {filteredProjects.map((project, index) => (
            <motion.article
              className="project-card"
              key={project.title}
              layout
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
            >
              <Image
                src={project.image}
                width={1200}
                height={675}
                alt={`${project.title} project visual`}
              />
              <div className="project-body">
                <div className="project-title-row">
                  <span>{project.category}</span>
                  <ArrowUpRight size={18} aria-hidden="true" />
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tag-row">
                  {project.tech.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
                <dl>
                  <div>
                    <dt>Challenge</dt>
                    <dd>{project.challenge}</dd>
                  </div>
                  <div>
                    <dt>Impact</dt>
                    <dd>{project.impact}</dd>
                  </div>
                </dl>
                <div className="project-links">
                  <a href={project.github}>
                    <Code2 size={16} aria-hidden="true" />
                    GitHub
                  </a>
                  <a href={project.demo}>
                    <ArrowUpRight size={16} aria-hidden="true" />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="certifications" className="section-pad">
        <SectionHeader
          eyebrow="Achievements"
          title="Evidence of momentum and professional discipline."
          copy="A dedicated space for academic progress, completed systems, certifications, and leadership work."
        />
        <div className="achievement-grid">
          <motion.div className="achievement-panel" {...animationProps}>
            <Award size={28} aria-hidden="true" />
            <h3>Major achievements</h3>
            <ul>
              {achievements.map((achievement) => (
                <li key={achievement}>{achievement}</li>
              ))}
            </ul>
          </motion.div>
          <motion.div className="achievement-panel" {...animationProps}>
            <ShieldCheck size={28} aria-hidden="true" />
            <h3>Certifications & focus areas</h3>
            <ul>
              {certifications.map((certification) => (
                <li key={certification}>{certification}</li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      <section id="contact" className="section-pad contact-section">
        <SectionHeader
          eyebrow="Contact"
          title="Let’s build something practical and credible."
          copy="For recruiters, clients, collaborators, and organizations looking for a developer who understands both software and operations."
        />
        <div className="contact-grid">
          <motion.div className="contact-panel" {...animationProps}>
            <h3>Available for</h3>
            <div className="contact-options">
              {[
                ["Recruiter conversations", BriefcaseBusiness],
                ["System development projects", Building2],
                ["Healthcare and public-service tools", HeartPulse],
                ["Community technology concepts", MapPin],
              ].map(([label, Icon]) => (
                <div key={label as string}>
                  <Icon size={18} aria-hidden="true" />
                  <span>{label as string}</span>
                </div>
              ))}
            </div>
            <div className="social-row contact-socials">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a key={label} href={href} aria-label={label}>
                  <Icon size={18} aria-hidden="true" />
                </a>
              ))}
            </div>
          </motion.div>
          <motion.form
            className="contact-form"
            action="mailto:tekatozumorukushi@gmail.com"
            method="post"
            encType="text/plain"
            {...animationProps}
          >
            <label>
              Name
              <input name="name" type="text" autoComplete="name" required />
            </label>
            <label>
              Email
              <input name="email" type="email" autoComplete="email" required />
            </label>
            <label>
              Message
              <textarea name="message" rows={5} required />
            </label>
            <button className="button primary" type="submit">
              <Mail size={18} aria-hidden="true" />
              Send Message
            </button>
          </motion.form>
        </div>
      </section>

      <footer>
        <div>
          <a className="brand" href="#home">
            <span>TZ</span>
            <strong>Tekato Zumorukushi</strong>
          </a>
          <p>IT Professional · System Developer · Community-focused builder</p>
        </div>
        <nav aria-label="Footer navigation">
          {navItems.slice(0, 5).map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}>
              {item}
            </a>
          ))}
        </nav>
        <p>© {new Date().getFullYear()} Tekato Zumorukushi. All rights reserved.</p>
      </footer>

      <button
        className={`back-top ${showBackTop ? "show" : ""}`}
        type="button"
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <ArrowUp size={20} aria-hidden="true" />
      </button>
    </main>
  );
}

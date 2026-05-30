"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import {
  ArrowUp,
  ArrowUpRight,
  BadgeCheck,
  BriefcaseBusiness,
  CalendarCheck,
  CheckCircle2,
  ClipboardCheck,
  Database,
  Download,
  FileText,
  Headphones,
  Mail,
  MapPin,
  MessageCircle,
  PhoneCall,
  SearchCheck,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
} from "lucide-react";

const navItems = ["Home", "About", "Services", "Experience", "Skills", "Contact"];

const typeLines = [
  "Virtual Assistant",
  "Client Support Specialist",
  "Appointment Setter",
  "CRM & Admin Support",
  "Sales Coordinator",
];

const highlights = [
  { value: "3+", label: "Years experience" },
  { value: "C2", label: "English level" },
  { value: "100%", label: "Detail focused" },
];

const services = [
  {
    title: "Virtual Assistance & Admin Support",
    category: "Operations",
    image: "/va/admin-support.svg",
    description:
      "Reliable day-to-day administrative support for busy founders, teams, and client-facing operations.",
    points: ["Calendar support", "Document organization", "Workflow follow-through"],
  },
  {
    title: "Appointment Scheduling",
    category: "Sales Support",
    image: "/va/appointment-setting.svg",
    description:
      "Professional appointment setting, cold calling support, follow-ups, and lead coordination.",
    points: ["Cold calls", "Lead generation", "Timely follow-ups"],
  },
  {
    title: "Email, Phone & Client Communication",
    category: "Client Success",
    image: "/va/client-communication.svg",
    description:
      "Clear, empathetic, and organized communication across high-volume client inquiries.",
    points: ["Phone handling", "Inbox support", "Client relationship management"],
  },
  {
    title: "CRM & Data Management",
    category: "Data",
    image: "/va/crm-data.svg",
    description:
      "Accurate data entry, sensitive information handling, CRM updates, and records maintenance.",
    points: ["CRM hygiene", "Database updates", "Confidential records"],
  },
];

const experiences = [
  {
    role: "Insider Sales Representative",
    company: "JonesZylon",
    period: "Oct 2025 - Present",
    icon: Target,
    bullets: [
      "Support insider sales operations through client outreach, lead follow-up, and relationship-focused communication.",
      "Coordinate with prospects and customers to understand needs, provide timely updates, and maintain organized sales records.",
      "Assist with CRM tracking, pipeline visibility, and administrative follow-through for active sales opportunities.",
    ],
  },
  {
    role: "International Sales Representative",
    company: "EVORETRO",
    period: "Jan 2025 - Aug 2025",
    icon: Target,
    bullets: [
      "Managed international client accounts with tailored solutions and relationship-focused support.",
      "Oversaw lead generation, negotiations, sales operations, and deal coordination.",
      "Coordinated with cross-functional teams for timely order fulfillment and customer satisfaction.",
      "Conducted market research to identify overseas opportunities and strengthen brand presence.",
    ],
  },
  {
    role: "Case Manager / Claims Management Specialist",
    company: "Citizens Disability",
    period: "Mar 2023 - Dec 2024",
    icon: ShieldCheck,
    bullets: [
      "Conducted client interviews and gathered sensitive work, medical, and Social Security information for SSDI applications.",
      "Handled high volumes of inquiries with accuracy, professionalism, and empathy.",
      "Maintained detailed records while following company protocols and data protection standards.",
    ],
  },
  {
    role: "CSR | Appointment Setter",
    company: "Prime Inbox Inc.",
    period: "Nov 2021 - Dec 2022",
    icon: PhoneCall,
    bullets: [
      "Conducted cold calls and scheduled appointments to generate leads and support sales efforts.",
      "Managed client inquiries, timely follow-ups, and organized CRM records.",
      "Collaborated with team members to streamline processes and improve client satisfaction.",
    ],
  },
];

const skillGroups = [
  {
    title: "Administrative Support",
    level: 94,
    icon: ClipboardCheck,
    copy: "Calendar management, documentation, follow-ups, task tracking, and executive support.",
  },
  {
    title: "Client Communication",
    level: 92,
    icon: Headphones,
    copy: "Professional email and phone communication with an empathetic, service-first approach.",
  },
  {
    title: "CRM & Database Management",
    level: 88,
    icon: Database,
    copy: "Clean records, accurate data entry, inquiry tracking, and organized client histories.",
  },
  {
    title: "Appointment Setting",
    level: 90,
    icon: CalendarCheck,
    copy: "Cold calling, scheduling, reminders, lead qualification, and follow-up coordination.",
  },
  {
    title: "Project Coordination",
    level: 86,
    icon: BriefcaseBusiness,
    copy: "Supporting teams with reliable coordination, status updates, and process improvement.",
  },
  {
    title: "Research & Market Support",
    level: 84,
    icon: SearchCheck,
    copy: "Market research, opportunity tracking, sales support, and international account assistance.",
  },
];

const tools = [
  "Google Workspace",
  "Microsoft Office Suite",
  "CRM Software",
  "Slack",
  "Zoom",
  "Email Management",
  "Data Entry",
  "Phone Support",
];

const socialLinks = [
  { label: "Email", href: "mailto:danjover515@gmail.com", icon: Mail },
  { label: "Phone", href: "tel:+639477462117", icon: PhoneCall },
  { label: "Location", href: "#contact", icon: MapPin },
  { label: "Message", href: "#contact", icon: MessageCircle },
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
        70,
      );
      return () => window.clearTimeout(timeout);
    }

    const timeout = window.setTimeout(() => {
      setDisplay("");
      setIndex((value) => (value + 1) % typeLines.length);
    }, 1350);

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
  const [showBackTop, setShowBackTop] = useState(false);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const progressScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const animationProps = reduceMotion
    ? { initial: false as const }
    : {
        initial: "hidden" as const,
        whileInView: "visible" as const,
        viewport: { once: true, amount: 0.2 },
        transition: { duration: 0.55, ease: "easeOut" as const },
        variants: sectionVariant,
      };

  const contactSubject = useMemo(
    () => encodeURIComponent("Virtual Assistant opportunity for Dan Jover Peloriana"),
    [],
  );

  useEffect(() => {
    const onScroll = () => setShowBackTop(window.scrollY > 640);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main id="home">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <motion.div className="scroll-progress" style={{ scaleX: progressScale }} />

      <header className="site-nav">
        <a className="brand" href="#home" aria-label="Dan Jover Peloriana home">
          <span>DJ</span>
          <strong>Dan Jover</strong>
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
            <p className="eyebrow">Virtual assistance for organized client operations</p>
            <h1 id="hero-title">Reliable Virtual Assistant for Admin, CRM, and Client Support</h1>
            <p className="hero-role">
              Dan Jover Peloriana is a <TypingLine />
            </p>
            <p className="hero-subtitle">
              A highly organized Virtual Assistant with over three years of
              experience in client communications, administrative support,
              appointment setting, claims coordination, and international sales
              operations.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="/DanJoverPelorianaResume.pdf" download>
                <Download size={18} aria-hidden="true" />
                Download Resume
              </a>
              <a className="button secondary" href="#services">
                <Sparkles size={18} aria-hidden="true" />
                View Services
              </a>
            </div>
            <div className="social-row" aria-label="Contact shortcuts">
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
                src="/profile-photo.png"
                width={1247}
                height={1261}
                alt="Professional portrait of Dan Jover Peloriana"
                priority
              />
              <div>
                <p>Dan Jover Peloriana</p>
                <span>Virtual Assistant · Admin Support</span>
              </div>
            </div>
            <div className="hero-dashboard va-dashboard" aria-label="Virtual assistant strengths">
              <div className="dashboard-top">
                <span>Availability Snapshot</span>
                <BadgeCheck size={18} aria-hidden="true" />
              </div>
              <div className="assistant-board">
                <div>
                  <CalendarCheck size={24} aria-hidden="true" />
                  <span>Scheduling</span>
                </div>
                <div>
                  <Mail size={24} aria-hidden="true" />
                  <span>Inbox & Calls</span>
                </div>
                <div>
                  <Database size={24} aria-hidden="true" />
                  <span>CRM Records</span>
                </div>
                <div>
                  <Users size={24} aria-hidden="true" />
                  <span>Client Care</span>
                </div>
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
          title="Calm, organized support for teams that move fast."
          copy="Dan brings the communication discipline of customer support, the accuracy of claims management, and the follow-through needed for remote operations."
        />
        <div className="about-grid">
          <motion.article className="story-panel" {...animationProps}>
            <p>
              I help businesses stay organized by managing communication,
              appointments, records, and client follow-ups with care. My
              experience spans SSDI claims support, appointment setting, CRM
              management, international sales coordination, and high-volume
              client communication.
            </p>
            <p>
              I work best with teams that need dependable support, clear updates,
              clean documentation, and someone who can protect the details while
              keeping clients feeling heard.
            </p>
          </motion.article>
          <motion.div className="value-stack" {...animationProps}>
            {[
              ["Client-first communication", "Professional phone, email, and follow-up handling."],
              ["Sensitive data discipline", "Experience with medical, work history, and SSDI-related records."],
              ["Operational reliability", "Organized task tracking, CRM upkeep, and process coordination."],
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

      <section id="services" className="section-pad alternate">
        <SectionHeader
          eyebrow="Services"
          title="VA services built around communication, scheduling, and clean records."
          copy="A focused service set for founders, sales teams, agencies, healthcare-adjacent teams, and busy operators."
        />
        <div className="project-grid">
          {services.map((service, index) => (
            <motion.article
              className="project-card"
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
            >
              <Image src={service.image} width={1200} height={675} alt={`${service.title} visual`} />
              <div className="project-body">
                <div className="project-title-row">
                  <span>{service.category}</span>
                  <ArrowUpRight size={18} aria-hidden="true" />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className="tag-row">
                  {service.points.map((point) => (
                    <span key={point}>{point}</span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="experience" className="section-pad">
        <SectionHeader
          eyebrow="Experience"
          title="A track record in client-facing remote operations."
          copy="Resume-backed experience across sales, appointment setting, claims coordination, CRM records, and client care."
        />
        <div className="timeline">
          {experiences.map(({ role, company, period, icon: Icon, bullets }, index) => (
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
                <p className="company-name">{company}</p>
                <ul className="resume-list">
                  {bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="skills" className="section-pad alternate">
        <SectionHeader
          eyebrow="Skills"
          title="The practical skills employers expect from a strong VA."
          copy="A balanced skill set across admin operations, communication, records, sales support, and remote collaboration."
        />
        <div className="skills-grid">
          {skillGroups.map(({ title, level, icon: Icon, copy }, index) => (
            <motion.article
              className="skill-card"
              key={title}
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
                <h3>{title}</h3>
                <p>{copy}</p>
              </div>
              <div className="progress-wrap" aria-label={`${title} skill level ${level}%`}>
                <span style={{ width: `${level}%` }} />
              </div>
            </motion.article>
          ))}
        </div>
        <motion.div className="tools-panel" {...animationProps}>
          <FileText size={24} aria-hidden="true" />
          <h3>Tools & Workflows</h3>
          <div className="tag-row">
            {tools.map((tool) => (
              <span key={tool}>{tool}</span>
            ))}
          </div>
        </motion.div>
      </section>

      <section id="contact" className="section-pad contact-section">
        <SectionHeader
          eyebrow="Contact"
          title="Need organized VA support? Let’s talk."
          copy="Available for virtual assistance, appointment setting, CRM updates, customer support, and sales coordination roles."
        />
        <div className="contact-grid">
          <motion.div className="contact-panel" {...animationProps}>
            <h3>Contact Details</h3>
            <div className="contact-options">
              <a href="mailto:danjover515@gmail.com">
                <Mail size={18} aria-hidden="true" />
                <span>danjover515@gmail.com</span>
              </a>
              <a href="tel:+639477462117">
                <PhoneCall size={18} aria-hidden="true" />
                <span>+639 47-746-2117</span>
              </a>
              <div>
                <MapPin size={18} aria-hidden="true" />
                <span>Davao City, Davao del Sur</span>
              </div>
              <div>
                <BadgeCheck size={18} aria-hidden="true" />
                <span>English Level: C2 Advanced / Mastery</span>
              </div>
            </div>
          </motion.div>
          <motion.form
            className="contact-form"
            action={`mailto:danjover515@gmail.com?subject=${contactSubject}`}
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
            <span>DJ</span>
            <strong>Dan Jover Peloriana</strong>
          </a>
          <p>Virtual Assistant · Administrative Support · Client Communication</p>
        </div>
        <nav aria-label="Footer navigation">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}>
              {item}
            </a>
          ))}
        </nav>
        <p>© {new Date().getFullYear()} Dan Jover Peloriana. All rights reserved.</p>
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

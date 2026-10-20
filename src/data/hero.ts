export interface TechStackItem {
  name: string;
  category?: string;
  icon?: string;
}

export interface HighlightCard {
  id: string;
  title: string;
  subtitle: string;
  period?: string;
  icon: "education" | "experience" | "opportunity";
}

export const heroData = {
  greeting: "HEY, I'M",
  firstName: "Dinesh",
  lastName: "Prajapati",
  role: "FRONTEND DEVELOPER",
  bio: "I build modern, responsive and user-friendly web applications using React, Next.js, TypeScript and Tailwind CSS. I'm passionate about turning ideas into real-world products.",
  cta: {
    work: {
      label: "View My Work",
      href: "#projects",
    },
    resume: {
      label: "Download Resume",
      href: "/resume.pdf",
    },
  },
  socials: [
    {
      name: "GitHub",
      href: "https://github.com",
      icon: "github",
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com",
      icon: "linkedin",
    },
    {
      name: "Email",
      href: "mailto:contact@dineshprajapati.dev",
      icon: "mail",
    },
  ],
  techStack: [
    { name: "React" },
    { name: "Next.js" },
    { name: "TypeScript" },
    { name: "Tailwind CSS" },
    { name: "JavaScript" },
    { name: "Node.js" },
    { name: "PostgreSQL" },
    { name: "Git" },
  ],
  highlights: [
    {
      id: "mca",
      title: "MCA (AI & ML)",
      subtitle: "Chandigarh University",
      period: "2022 – 2026",
      icon: "education",
    },
    {
      id: "intern",
      title: "Frontend Developer Intern",
      subtitle: "Vyzion Innovations",
      period: "Jun 2025 – Present",
      icon: "experience",
    },
    {
      id: "opportunity",
      title: "Open to Opportunities",
      subtitle: "Full-time roles, internships or freelance projects.",
      icon: "opportunity",
    },
  ] as HighlightCard[],
};

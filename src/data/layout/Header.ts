export interface NavItem {
  id: number;
  label: string;
  href: string;
}

export const headerData: NavItem[] = [
  { id: 1, label: "Home", href: "#home" },
  { id: 2, label: "About", href: "#about" },
  { id: 3, label: "Projects", href: "#projects" },
  { id: 4, label: "Skills", href: "#skills" },
  { id: 5, label: "Experience", href: "#experience" },
  { id: 6, label: "Education", href: "#education" },
  { id: 7, label: "Contact", href: "#contact" },
];

export const resumeConfig = {
  label: "Download Resume",
  href: "/resume.pdf",
};
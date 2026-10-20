import React from "react";
import {
  Atom,
  Database,
  GitBranch,
  Hexagon,
  Wind,
  Layers,
  Code2,
  FileCode,
} from "lucide-react";

interface TechBadgeProps {
  name: string;
}

const techIcons: Record<string, React.ReactNode> = {
  React: <Atom className="w-5 h-5 text-[#58c4dc] animate-spin-slow" />,
  "Next.js": (
    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-foreground text-[11px] font-bold text-background">
      N
    </span>
  ),
  TypeScript: (
    <span className="flex h-5 w-5 items-center justify-center rounded bg-[#3178c6] text-[10px] font-extrabold text-white">
      TS
    </span>
  ),
  "Tailwind CSS": <Wind className="w-5 h-5 text-[#38bdf8]" />,
  JavaScript: (
    <span className="flex h-5 w-5 items-center justify-center rounded bg-[#f7df1e] text-[10px] font-extrabold text-black">
      JS
    </span>
  ),
  "Node.js": <Hexagon className="w-5 h-5 text-[#5fa04e]" />,
  PostgreSQL: <Database className="w-5 h-5 text-[#336791]" />,
  Git: <GitBranch className="w-5 h-5 text-[#f05032]" />,
};

export default function TechBadge({ name }: TechBadgeProps) {
  const icon = techIcons[name] || <Layers className="w-5 h-5 text-accent" />;

  return (
    <div
      className="group flex flex-col items-center justify-center gap-1.5 rounded-xl border border-border/80 bg-surface/70 px-3.5 py-2.5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:bg-surface-hover hover:shadow-[0_4px_16px_rgba(184,255,101,0.12)]"
      title={name}
    >
      <div className="flex h-6 w-6 items-center justify-center transition-transform duration-200 group-hover:scale-110">
        {icon}
      </div>
      <span className="text-[11px] font-medium text-muted transition-colors group-hover:text-foreground">
        {name}
      </span>
    </div>
  );
}

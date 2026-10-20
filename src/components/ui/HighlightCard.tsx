import React from "react";
import { GraduationCap, Briefcase, Target, LucideIcon } from "lucide-react";
import { type HighlightCard as HighlightCardType } from "@/data/hero";

interface HighlightCardProps {
  data: HighlightCardType;
}

const iconMap: Record<HighlightCardType["icon"], LucideIcon> = {
  education: GraduationCap,
  experience: Briefcase,
  opportunity: Target,
};

export default function HighlightCard({ data }: HighlightCardProps) {
  const Icon = iconMap[data.icon] || Target;

  return (
    <div className="group flex items-center gap-3.5 rounded-2xl border border-border/80 bg-surface/80 p-3.5 sm:p-4 backdrop-blur-md transition-all duration-300 hover:border-accent/40 hover:bg-surface-hover/90 hover:shadow-[0_8px_24px_rgba(0,0,0,0.4)]">
      {/* Icon Box */}
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-accent/20 bg-accent/10 text-accent transition-all duration-300 group-hover:scale-105 group-hover:border-accent/40 group-hover:shadow-[0_0_12px_rgba(184,255,101,0.25)]">
        <Icon className="h-5 w-5" />
      </div>

      {/* Content */}
      <div className="flex min-w-0 flex-1 flex-col">
        <div className="flex items-center justify-between gap-2">
          <h4 className="truncate text-xs sm:text-sm font-semibold text-foreground group-hover:text-accent transition-colors">
            {data.title}
          </h4>
        </div>
        <p className="text-[11px] sm:text-xs text-muted line-clamp-1">
          {data.subtitle}
        </p>
        {data.period && (
          <span className="text-[10px] text-muted/70 font-mono mt-0.5">
            {data.period}
          </span>
        )}
      </div>
    </div>
  );
}

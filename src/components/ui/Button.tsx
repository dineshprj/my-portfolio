import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export type ButtonVariant = "primary" | "outline" | "ghost" | "icon";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  target?: string;
  rel?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  download?: boolean | string;
  children?: React.ReactNode;
  className?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-background font-semibold hover:bg-accent/90 shadow-md shadow-accent/20 border border-accent",
  outline:
    "border border-border hover:border-accent text-foreground hover:text-accent bg-surface/40 hover:bg-surface-hover backdrop-blur-sm",
  ghost:
    "text-muted hover:text-foreground hover:bg-surface-hover",
  icon:
    "p-2.5 rounded-xl border border-border bg-surface text-muted hover:text-accent hover:border-accent/40 hover:bg-surface-hover",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-3.5 py-1.5 text-xs sm:text-sm rounded-lg gap-1.5",
  md: "px-5 py-2.5 text-sm sm:text-base rounded-xl gap-2",
  lg: "px-7 py-3 text-base sm:text-lg rounded-xl gap-2.5",
};

export default function Button({
  variant = "primary",
  size = "md",
  href,
  target,
  rel,
  icon,
  iconPosition = "left",
  download,
  children,
  className,
  disabled,
  ...props
}: ButtonProps) {
  const baseClasses = cn(
    "inline-flex items-center justify-center font-medium transition-all duration-200 cursor-pointer select-none active:scale-95 disabled:pointer-events-none disabled:opacity-50",
    variantStyles[variant],
    variant !== "icon" && sizeStyles[size],
    className
  );

  const content = (
    <>
      {icon && iconPosition === "left" && (
        <span className="shrink-0 transition-transform group-hover:scale-110">{icon}</span>
      )}
      {children && <span>{children}</span>}
      {icon && iconPosition === "right" && (
        <span className="shrink-0 transition-transform group-hover:translate-x-0.5">{icon}</span>
      )}
    </>
  );

  if (href) {
    const isExternal = href.startsWith("http") || href.endsWith(".pdf");
    return (
      <Link
        href={href}
        className={cn("group", baseClasses)}
        target={target || (isExternal ? "_blank" : undefined)}
        rel={rel || (isExternal ? "noopener noreferrer" : undefined)}
        download={download}
      >
        {content}
      </Link>
    );
  }

  return (
    <button className={cn("group", baseClasses)} disabled={disabled} {...props}>
      {content}
    </button>
  );
}

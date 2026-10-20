"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, Download, Mail } from "lucide-react";
import { type NavItem, resumeConfig } from "@/data/layout/Header";
import Button from "@/components/ui/Button";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import logoImg from "../../../public/logo/logo.png";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: NavItem[];
  activeId?: string;
}

export default function Sidebar({
  isOpen,
  onClose,
  navItems,
  activeId = "home",
}: SidebarProps) {
  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") onClose();
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
    document.body.style.overflow = "";
  }, [isOpen, onClose]);

  return (
    <>
      {/* Backdrop overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/70 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide-out Drawer */}
      <aside
        id="mobile-sidebar"
        className={`fixed right-0 top-0 bottom-0 z-50 flex w-[80%] max-w-xs flex-col justify-between border-l border-border bg-surface/95 p-6 backdrop-blur-xl shadow-2xl transition-transform duration-300 ease-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Mobile Navigation"
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between pb-6 border-b border-border/60">
          <Link href="#home" onClick={onClose} className="flex items-center gap-2">
            <Image
              src={logoImg}
              alt="Dinesh Prajapati Logo"
              width={56}
              height={32}
              className="h-8 w-auto object-contain"
              priority
            />
          </Link>
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-surface-hover/50 text-foreground transition-colors hover:border-accent/40 hover:text-accent"
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation Items */}
        <nav className="my-6 flex flex-1 flex-col gap-1 overflow-y-auto">
          {navItems.map((item) => {
            const isActive = activeId === item.href.replace("#", "");
            return (
              <Link
                key={item.id}
                href={item.href}
                onClick={onClose}
                className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-all ${
                  isActive
                    ? "bg-accent/10 text-accent font-semibold border border-accent/20"
                    : "text-muted hover:bg-surface-hover hover:text-foreground"
                }`}
              >
                <span>{item.label}</span>
                {isActive && (
                  <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Sidebar Footer */}
        <div className="space-y-4 pt-4 border-t border-border/60">
          <Button
            href={resumeConfig.href}
            variant="outline"
            size="md"
            className="w-full justify-center"
            icon={<Download size={16} className="text-accent" />}
            iconPosition="right"
          >
            {resumeConfig.label}
          </Button>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-3 pt-2">
            <Button
              href="https://github.com"
              variant="icon"
              aria-label="GitHub Profile"
              icon={<GithubIcon className="h-4 w-4" />}
            />
            <Button
              href="https://linkedin.com"
              variant="icon"
              aria-label="LinkedIn Profile"
              icon={<LinkedinIcon className="h-4 w-4" />}
            />
            <Button
              href="mailto:contact@dineshprajapati.dev"
              variant="icon"
              aria-label="Email Me"
              icon={<Mail size={18} />}
            />
          </div>
        </div>
      </aside>
    </>
  );
}

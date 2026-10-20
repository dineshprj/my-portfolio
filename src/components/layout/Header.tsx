"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Download, Menu } from "lucide-react";
import { headerData, resumeConfig } from "@/data/layout/Header";
import Button from "@/components/ui/Button";
import Sidebar from "@/components/layout/Sidebar";
import logoImg from "../../../public/logo/logo.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  // Track active section and scroll state
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = headerData.map((item) => item.href.replace("#", ""));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        const el = document.getElementById(sectionId);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sectionId);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 w-full transition-all duration-300 ${
          isScrolled ? "py-2.5 backdrop-blur-md bg-background/80" : "py-4 bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link
            href="#home"
            className="flex items-center gap-2 group transition-transform duration-200 hover:scale-105"
            aria-label="Dinesh Prajapati Home"
          >
            <Image
              src={logoImg}
              alt="DP Logo"
              width={70}
              height={38}
              priority
              className="h-8 sm:h-9 w-auto object-contain filter drop-shadow-[0_0_8px_rgba(184,255,101,0.25)]"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            className="hidden md:flex items-center gap-1 lg:gap-2 px-3 py-1.5 rounded-full border border-border/70 bg-surface/80 backdrop-blur-md shadow-sm"
            aria-label="Main Navigation"
          >
            {headerData.map((item) => {
              const isActive = activeSection === item.href.replace("#", "");
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  className={`relative px-3.5 py-1.5 text-xs lg:text-sm font-medium transition-colors duration-200 rounded-full ${
                    isActive
                      ? "text-accent font-semibold"
                      : "text-muted hover:text-foreground"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-[2px] rounded-full bg-accent shadow-[0_0_8px_#b8ff65]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action: Download Resume */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              href={resumeConfig.href}
              variant="outline"
              size="sm"
              icon={<Download className="w-4 h-4 text-accent" />}
              iconPosition="right"
              className="hover:border-accent hover:shadow-[0_0_12px_rgba(184,255,101,0.2)]"
            >
              {resumeConfig.label}
            </Button>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setIsOpen(true)}
            aria-label="Open Navigation Menu"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface text-foreground transition-colors hover:border-accent/50 hover:text-accent md:hidden"
          >
            <Menu size={20} />
          </button>
        </div>
      </header>

      {/* Mobile Sidebar / Drawer */}
      <Sidebar
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        navItems={headerData}
        activeId={activeSection}
      />
    </>
  );
}
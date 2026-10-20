import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download, Mail } from "lucide-react";
import Button from "@/components/ui/Button";
import TechBadge from "@/components/ui/TechBadge";
import HighlightCard from "@/components/ui/HighlightCard";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { heroData } from "@/data/hero";
import dineshPhoto from "../../../public/photo/dinesh.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden pt-28 pb-12 sm:pt-32 sm:pb-16 lg:pt-36 flex flex-col justify-between"
    >
      {/* Background Ambient Glows */}
      <div
        className="pointer-events-none absolute -top-40 right-0 sm:right-1/4 h-96 w-96 rounded-full bg-accent/15 blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/2 left-0 h-80 w-80 -translate-y-1/2 rounded-full bg-accent/5 blur-[100px]"
        aria-hidden="true"
      />

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Introduction & Details */}
          <div className="flex flex-col space-y-6 lg:col-span-7 xl:col-span-7">
            {/* Status Indicator */}
            <div className="inline-flex w-fit items-center gap-2.5 rounded-full border border-border/80 bg-surface/70 px-4 py-1.5 backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
              </span>
              <span className="text-xs font-semibold tracking-wider text-muted uppercase">
                {heroData.greeting}
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08]">
                <span className="block text-foreground">{heroData.firstName}</span>
                <span className="block text-accent drop-shadow-[0_0_30px_rgba(184,255,101,0.35)]">
                  {heroData.lastName}
                </span>
              </h1>
              <p className="text-xs sm:text-sm font-bold tracking-[0.22em] text-muted uppercase pt-1">
                {heroData.role}
              </p>
            </div>

            {/* Bio description */}
            <p className="max-w-xl text-sm sm:text-base text-muted leading-relaxed">
              {heroData.bio}
            </p>

            {/* Action Buttons & Socials */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Button
                variant="primary"
                size="md"
                href={heroData.cta.work.href}
                icon={<ArrowRight size={18} />}
                iconPosition="right"
              >
                {heroData.cta.work.label}
              </Button>
              <Button
                variant="outline"
                size="md"
                href={heroData.cta.resume.href}
                icon={<Download size={18} className="text-accent" />}
                iconPosition="right"
              >
                {heroData.cta.resume.label}
              </Button>

              {/* Social Icon Buttons */}
              <div className="flex items-center gap-2 pl-1 sm:pl-2">
                <Button
                  variant="icon"
                  href="https://github.com"
                  aria-label="GitHub Profile"
                  icon={<GithubIcon className="w-4 h-4" />}
                />
                <Button
                  variant="icon"
                  href="https://linkedin.com"
                  aria-label="LinkedIn Profile"
                  icon={<LinkedinIcon className="w-4 h-4" />}
                />
                <Button
                  variant="icon"
                  href="mailto:contact@dineshprajapati.dev"
                  aria-label="Email Me"
                  icon={<Mail size={18} />}
                />
              </div>
            </div>

            {/* Tech Stack Bar */}
            <div className="mt-4 rounded-2xl border border-border/80 bg-surface/60 p-4 backdrop-blur-md sm:p-5">
              <div className="mb-3.5 flex items-center gap-2">
                <span className="h-3 w-1 rounded-full bg-accent" />
                <span className="text-[11px] font-bold tracking-widest text-muted uppercase">
                  Tech Stack
                </span>
              </div>
              <div className="grid grid-cols-4 sm:grid-cols-8 gap-2 sm:gap-2.5">
                {heroData.techStack.map((tech) => (
                  <TechBadge key={tech.name} name={tech.name} />
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual (Single Image as requested + Highlights) */}
          <div className="relative flex flex-col items-center justify-center lg:col-span-5 xl:col-span-5">
            {/* Visual Container */}
            <div className="relative flex w-full max-w-md sm:max-w-lg lg:max-w-none flex-col items-center">
              
              {/* Glowing Halo Backdrop */}
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[320px] w-[320px] sm:h-[400px] sm:w-[400px] rounded-full bg-radial from-accent/30 via-accent/10 to-transparent blur-2xl pointer-events-none"
                aria-hidden="true"
              />

              {/* Decorative Circular Ring */}
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[280px] w-[280px] sm:h-[360px] sm:w-[360px] rounded-full border border-accent/20 border-dashed pointer-events-none animate-spin-slow"
                style={{ animationDuration: "40s" }}
                aria-hidden="true"
              />

              {/* Floating Quote Badge */}
              <div className="absolute top-4 left-0 sm:-left-4 z-20 hidden sm:flex items-center gap-2 rounded-2xl border border-border/90 bg-surface/90 px-3.5 py-2 backdrop-blur-md shadow-xl -rotate-6 transition-transform hover:rotate-0">
                <span className="text-xs font-semibold text-accent font-mono">
                  Turning Ideas into Real Products ⚡
                </span>
              </div>

              {/* Single Hero Image */}
              <div className="relative z-10 mx-auto w-full max-w-[340px] sm:max-w-[420px] lg:max-w-[460px] aspect-[4/5] drop-shadow-[0_20px_40px_rgba(0,0,0,0.7)]">
                <Image
                  src={dineshPhoto}
                  alt="Dinesh Prajapati - Frontend Developer"
                  priority
                  fill
                  sizes="(max-width: 640px) 340px, (max-width: 1024px) 420px, 460px"
                  className="object-contain object-bottom filter contrast-[1.03]"
                />
              </div>

              {/* Floating Milestone / Info Cards (Stacked neatly) */}
              <div className="relative z-20 mt-6 w-full max-w-md space-y-2.5 sm:space-y-3">
                {heroData.highlights.map((card) => (
                  <HighlightCard key={card.id} data={card} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="mt-12 flex flex-col items-center justify-center gap-2">
        <Link
          href="#about"
          className="group flex flex-col items-center gap-1.5 text-muted transition-colors hover:text-accent"
          aria-label="Scroll down to about section"
        >
          <div className="flex h-8 w-5 items-start justify-center rounded-full border border-border group-hover:border-accent p-1 transition-colors">
            <span className="h-1.5 w-1 rounded-full bg-accent animate-bounce" />
          </div>
          <span className="text-[10px] font-mono tracking-widest uppercase">
            SCROLL DOWN
          </span>
        </Link>
      </div>
    </section>
  );
}

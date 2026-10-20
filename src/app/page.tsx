import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />

      {/* Placeholder Anchor Sections to support smooth in-page navigation */}
      <section id="about" className="py-20 max-w-7xl mx-auto px-4 w-full">
        <div className="border-t border-border/40 pt-12">
          <span className="text-xs font-mono uppercase text-accent tracking-widest">
            Section
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mt-1">
            About Me
          </h2>
        </div>
      </section>

      <section id="projects" className="py-20 max-w-7xl mx-auto px-4 w-full">
        <div className="border-t border-border/40 pt-12">
          <span className="text-xs font-mono uppercase text-accent tracking-widest">
            Portfolio
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mt-1">
            Featured Projects
          </h2>
        </div>
      </section>

      <section id="skills" className="py-20 max-w-7xl mx-auto px-4 w-full">
        <div className="border-t border-border/40 pt-12">
          <span className="text-xs font-mono uppercase text-accent tracking-widest">
            Capabilities
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mt-1">
            Skills & Expertise
          </h2>
        </div>
      </section>

      <section id="experience" className="py-20 max-w-7xl mx-auto px-4 w-full">
        <div className="border-t border-border/40 pt-12">
          <span className="text-xs font-mono uppercase text-accent tracking-widest">
            Career
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mt-1">
            Work Experience
          </h2>
        </div>
      </section>

      <section id="education" className="py-20 max-w-7xl mx-auto px-4 w-full">
        <div className="border-t border-border/40 pt-12">
          <span className="text-xs font-mono uppercase text-accent tracking-widest">
            Academics
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mt-1">
            Education
          </h2>
        </div>
      </section>

      <section id="contact" className="py-20 max-w-7xl mx-auto px-4 w-full">
        <div className="border-t border-border/40 pt-12">
          <span className="text-xs font-mono uppercase text-accent tracking-widest">
            Get In Touch
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mt-1">
            Contact Me
          </h2>
        </div>
      </section>
    </main>
  );
}

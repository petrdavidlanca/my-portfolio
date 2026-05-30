import Hero from "@/components/Hero";
import ProjectsSection from "@/components/ProjectsSection";
import Contact from "@/components/Contact";
import FadeIn from "@/components/FadeIn";

/**
 * Main Home Page
 * Serves as the primary entry point to the portfolio, structurally 
 * limiting maximum width and gathering all sections sequentially.
 */
export default function Home() {
  return (
    <main className="min-h-screen max-w-5xl mx-auto px-6 overflow-hidden">
      {/* Top Banner & Intro */}
      <FadeIn delay={0.1}>
        <Hero />
      </FadeIn>
      
      {/* List of Portfolio Works */}
      <FadeIn delay={0.2}>
        <ProjectsSection />
      </FadeIn>
      
      {/* Footer / Contact Triggers */}
      <FadeIn delay={0.3}>
        <Contact />
      </FadeIn>
    </main>
  );
}
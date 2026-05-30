import Hero from "@/components/Hero";
import ProjectsSection from "@/components/ProjectsSection";
import Contact from "@/components/Contact";

/**
 * Main Home Page
 * Serves as the primary entry point to the portfolio, structurally 
 * limiting maximum width and gathering all sections sequentially.
 */
export default function Home() {
  return (
    <main className="min-h-screen max-w-5xl mx-auto px-6">
      {/* Top Banner & Intro */}
      <Hero />
      
      {/* List of Portfolio Works */}
      <ProjectsSection />
      
      {/* Footer / Contact Triggers */}
      <Contact />
    </main>
  );
}
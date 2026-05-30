import Link from "next/link";
import AsciiDonut from "./AsciiDonut";

/**
 * Hero Component
 * Displays the main introductory section of the portfolio with greeting, 
 * short bio, and call-to-action buttons.
 */
export default function Hero() {
  return (
    <section className="relative flex flex-col justify-center min-h-[85vh] py-20">
      {/* Background Donut Animation */}
      <div className="absolute inset-0 flex items-center justify-end -z-10 overflow-hidden pointer-events-none opacity-50 md:opacity-100">
        <AsciiDonut />
      </div>

      {/* Intro Greeting */}
      <p className="text-indigo-600 dark:text-indigo-400 font-bold tracking-widest text-sm uppercase mb-4 relative z-10">
        Hi, my name is
      </p>

      {/* Main Name Heading */}
      <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-slate-900 dark:text-white mb-4 relative z-10">
        Petr David Lanča.
      </h1>

      {/* Subheading / Tagline */}
      <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-500 dark:text-slate-400 mb-8 relative z-10">
        Studying...
      </h2>

      {/* Short Biography */}
      <p className="max-w-2xl text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-12 leading-relaxed relative z-10">
        At the Brno University of Technology, I am currently in my 2nd year of a Bachelor's degree in Computer Science
        at the Faculty of Information Technology.
      </p>

      {/* Call to Action Buttons */}
      <div className="flex gap-4 relative z-10">
        <Link 
          href="#projects" 
          className="px-8 py-3.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-sm font-semibold rounded-full hover:bg-slate-800 dark:hover:bg-slate-200 transition-all hover:-translate-y-0.5 shadow-sm"
        >
          View My Work
        </Link>
        <Link 
          href="#contact" 
          className="px-8 py-3.5 bg-white dark:bg-transparent border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm font-semibold rounded-full hover:border-slate-300 dark:hover:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all hover:-translate-y-0.5"
        >
          Contact Me
        </Link>
      </div>
    </section>
  );
}
/**
 * Contact Component
 * A section to encourage visitors to reach out via email, 
 * including links to social profiles like GitHub and LinkedIn.
 */
export default function Contact() {
  return (
    <section id="contact" className="py-32 max-w-2xl mx-auto text-center">
      {/* Header */}
      <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6">
        Get In Touch
      </h2>
      
      {/* Contact Description Text */}
      <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-12 leading-relaxed">
        I am currently looking for new opportunities. Whether you have a question, 
        a project proposal, or just want to say hi, my inbox is always open. 
        I'll try my best to get back to you!
      </p>

      {/* Main Email CTA Button */}
      <a 
        href="mailto:petrdavidlanca@gmail.com" 
        className="inline-block px-8 py-4 bg-indigo-600 text-white font-bold rounded-full hover:bg-indigo-700 transition-all hover:scale-105 shadow-md shadow-indigo-200 dark:shadow-none mb-16">
        Say Hello
      </a>

      {/* Social Links Container */}
      <div className="flex justify-center gap-10 text-slate-400 dark:text-slate-500">
      
        {/* GitHub Link */}
        <a 
          href="https://github.com/petrdavidlanca" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex flex-col items-center gap-2 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all hover:-translate-y-1 group"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="currentColor" 
            className="group-hover:text-slate-900 dark:group-hover:text-white transition-colors"
          >
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          <span className="text-sm font-medium">GitHub</span>
        </a>

        {/* LinkedIn Link */}
        <a 
          href="https://www.linkedin.com/in/petr-david-lanča-68a277385" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex flex-col items-center gap-2 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all hover:-translate-y-1 group"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="currentColor" 
            className="group-hover:text-slate-900 dark:group-hover:text-white transition-colors"
          >
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.785-1.75-1.75s.784-1.75 1.75-1.75 1.75.785 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5c0-1.191-.021-2.724-1.661-2.724s-1.915 1.297-1.915 2.636v5h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.561 2.843-1.561 3.042 0 3.603 2 3.603 4.594v5z"/>
          </svg>
          <span className="text-sm font-medium">LinkedIn</span>
        </a>
      </div>
    </section>
  );
}
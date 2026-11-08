import React from "react";

const HeroSection = () => (
  <section id="hero" className="pt-[72px]">
    <div className="max-w-6xl mx-auto px-8 py-16 flex items-center justify-between gap-12 flex-wrap md:flex-nowrap">
      {/* Left: info */}
      <div className="flex-1 min-w-0">
        <p className="text-pink-primary text-sm font-semibold tracking-widest uppercase mb-3">
          Full-Stack Developer
        </p>
        <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-4">
          Ezrela Fidelynn<br />Surya Wibisana
        </h1>
        <p className="text-white/60 text-base leading-relaxed mb-8 max-w-lg">
          I build real-time web applications, AI-integrated platforms, and IoT systems. From interactive dashboards to full-stack monorepos, specializing in React, Next.js, Node.js, and TypeScript.
        </p>
        <div className="flex items-center gap-3 flex-wrap">
          <a
            href="#projects"
            onClick={e => { e.preventDefault(); document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }); }}
            className="btn-pink"
          >
            View My Projects
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
          <a href="mailto:ezre252@gmail.com" className="btn-ghost">
            Contact Me
          </a>
          <a
            href="https://drive.google.com/file/d/1KJ1PA-EzkzZqnLxwfkDX0C4M9ndYEUBV/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            CV
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </a>
        </div>

        {/* Social links */}
        <div className="flex items-center gap-5 mt-6">
          <a
            href="https://github.com/ezrelafidelynn"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/40 hover:text-pink-primary transition-colors flex items-center gap-2 text-sm"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/ezrelafidelynn/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/40 hover:text-pink-primary transition-colors flex items-center gap-2 text-sm"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
            LinkedIn
          </a>
        </div>
      </div>

      {/* Right: profile picture */}
      <div className="flex-shrink-0 mx-auto md:mx-0">
        <div
          className="w-[220px] h-[220px] md:w-[260px] md:h-[260px] rounded-full overflow-hidden"
          style={{ border: "3px solid rgba(244,114,182,0.3)" }}
        >
          <img
            src="/profile.jpeg"
            alt="Ezrela Fidelynn Surya Wibisana"
            className="w-full h-full object-cover object-top"
          />
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;

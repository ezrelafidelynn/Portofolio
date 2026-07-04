import React from "react";

const HeroSection = () => (
  <section id="hero" className="pt-[72px]">
    <div className="max-w-6xl mx-auto px-8 py-16 flex items-center justify-between gap-12">
      {/* Left: info */}
      <div className="flex-1">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-3">
          Ezrela Fidelynn<br />Surya Wibisana
        </h1>
        <p className="text-white/70 text-lg font-light mb-8">Full-Stack Web Developer</p>
        <div className="flex items-center gap-3 flex-wrap">
          <a
            href="https://drive.google.com/file/d/1KJ1PA-EzkzZqnLxwfkDX0C4M9ndYEUBV/view?usp=sharing"
            download
            className="btn-pink"
          >
            CV
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/ezrelafidelynn/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            LinkedIn
          </a>
        </div>
      </div>

      {/* Right: profile picture */}
      <div className="flex-shrink-0">
        <div
          className="w-[260px] h-[260px] rounded-full overflow-hidden"
          style={{ border: "3px solid rgba(244,114,182,0.3)" }}
        >
          <img
            src="/profile.jpeg"
            alt="Ezrela Fidelynn"
            className="w-full h-full object-cover object-top"
          />
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;

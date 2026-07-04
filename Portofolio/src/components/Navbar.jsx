import React from "react";

const Navbar = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{ background: "#000510" }}
    >
      <div className="max-w-6xl mx-auto px-8 h-[72px] flex items-center justify-between">
        <span className="text-white font-bold text-xl tracking-wide cursor-pointer" onClick={() => scrollTo("hero")}>
          Ezrela
        </span>
        <div className="flex items-center gap-8">
          <button onClick={() => scrollTo("hero")} className="text-white/80 hover:text-white text-sm transition-colors">
            Profile
          </button>
          <button onClick={() => scrollTo("projects")} className="text-white/80 hover:text-white text-sm transition-colors">
            Projects
          </button>
          <button onClick={() => scrollTo("certifications")} className="text-white/80 hover:text-white text-sm transition-colors">
            Certifications
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

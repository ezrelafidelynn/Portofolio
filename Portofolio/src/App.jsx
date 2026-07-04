import React, { useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import EducationExperience from "./components/EducationExperience";
import ProjectsSection from "./components/ProjectsSection";
import Certifications from "./components/Certifications";
import FooterSection from "./components/FooterSection";
import "./index.css";

function App() {
  const [activeCategory, setActiveCategory] = useState("web");

  return (
    <div className="min-h-screen" style={{ background: "#000510" }}>
      <Navbar />
      <main>
        <HeroSection />
        <EducationExperience />
        <ProjectsSection activeCategory={activeCategory} onCategoryChange={setActiveCategory} />
        <Certifications />
        <FooterSection />
      </main>
    </div>
  );
}

export default App;

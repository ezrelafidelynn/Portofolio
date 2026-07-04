import React, { useState } from "react";
import Projects from "./Projects";

const CATEGORIES = [
  { id: "web", label: "Web Developer", icon: "💻" },
  { id: "ai", label: "Artificial Intelligence", icon: "🤖" },
  { id: "iot", label: "Internet of Things", icon: "🔌" },
];

const Hero = () => {
  const [activeCategory, setActiveCategory] = useState("web");

  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
  };

  return (
    <section className="pt-20 pb-0 bg-black min-h-screen">
      <div className="max-w-4xl mx-auto px-4">
        {/* Profile Header */}
        <div className="flex items-start gap-8 mb-8 pt-8">
          {/* Profile Picture */}
          <div className="flex-shrink-0">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-tr from-pink-300 via-pink-400 to-pink-500 p-0.5">
              <div className="w-full h-full rounded-full border-4 border-black overflow-hidden">
                <img
                  src="/profile.jpeg"
                  alt="Ezrela"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src =
                      "https://via.placeholder.com/160x160/1a1a1a/f9a8d4?text=E";
                  }}
                />
              </div>
            </div>
          </div>

          {/* Profile Info */}
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-4 flex-wrap">
              <h2 className="text-xl font-light">ezrela_dev</h2>
              <a
                href="mailto:ezre252@gmail.com"
                className="px-6 py-1.5 rounded-lg font-semibold text-sm transition-all duration-200 bg-transparent border border-pink-300/40 text-pink-300 hover:bg-pink-300/10 hover:border-pink-300"
              >
                Contact
              </a>
              <a
                href="https://www.linkedin.com/in/ezrelafidelynn/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-1.5 rounded-lg font-semibold text-sm transition-all duration-200"
                style={{ background: "linear-gradient(135deg, #f472b6, #f9a8d4)", color: "#000" }}
              >
                LinkedIn
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-8 mb-4">
              <div>
                <span className="font-semibold">8</span>{" "}
                <span className="text-gray-400 text-sm">projects</span>
              </div>
              <div>
                <span className="font-semibold">1,337</span>{" "}
                <span className="text-gray-400 text-sm">followers</span>
              </div>
              <div>
                <span className="font-semibold">420</span>{" "}
                <span className="text-gray-400 text-sm">following</span>
              </div>
            </div>

            {/* Bio */}
            <div className="text-sm">
              <p className="font-semibold">Ezrela Fidelynn</p>
              <p className="text-gray-300">Full-Stack Developer</p>
              <p className="text-gray-400 mt-1 leading-relaxed">
                Building web experiences, AI projects, and IoT systems.
                <br />
                React · Vue · Laravel · Node.js · Mixed Reality
              </p>
              <a
                href="https://github.com/ezrelafidelynn"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-300 mt-1 inline-block hover:text-pink-200 transition-colors"
              >
                github.com/ezrelafidelynn
              </a>
            </div>
          </div>
        </div>

        {/* Highlights / Story Bubbles */}
        <div className="flex gap-10 overflow-x-auto pb-2 mb-4 scrollbar-hide">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategoryChange(cat.id)}
              className="flex flex-col items-center gap-1.5 flex-shrink-0 group"
            >
              <div
                className={`w-20 h-20 rounded-full p-0.5 transition-all duration-200 ${
                  activeCategory === cat.id
                    ? "bg-gradient-to-tr from-pink-300 via-pink-400 to-pink-500"
                    : "bg-gray-800 group-hover:bg-gray-700"
                }`}
              >
                <div
                  className={`w-full h-full rounded-full flex items-center justify-center text-3xl ${
                    activeCategory === cat.id ? "bg-black" : "bg-gray-800 group-hover:bg-gray-700"
                  }`}
                >
                  {cat.icon}
                </div>
              </div>
              <span
                className={`text-xs transition-colors duration-200 ${
                  activeCategory === cat.id ? "text-pink-300" : "text-gray-400 group-hover:text-gray-300"
                }`}
              >
                {cat.label.split(" ")[0]}
              </span>
            </button>
          ))}
        </div>

        {/* Category Tabs */}
        <div className="border-t border-gray-800">
          <div className="flex">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                className={`category-tab ${
                  activeCategory === cat.id
                    ? "category-tab-active"
                    : "category-tab-inactive"
                }`}
              >
                <span className="hidden md:inline">{cat.label}</span>
                <span className="md:hidden">{cat.icon}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Projects Feed */}
        <div className="mt-0">
          <Projects activeCategory={activeCategory} />
        </div>
      </div>
    </section>
  );
};

export default Hero;

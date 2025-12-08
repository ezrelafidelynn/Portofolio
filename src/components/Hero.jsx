import React, { useState } from "react";
import Posts from "./Posts";

const Hero = () => {
  const [isFollowing, setIsFollowing] = useState(false);
  // Removed Tagged import since Tagged.jsx is erased
  // Only posts tab remains
  const [activeTab, setActiveTab] = useState("posts");

  return (
    <section className="pt-20 pb-0 bg-black min-h-screen">
      <div className="max-w-4xl mx-auto px-4">
        {/* Profile Header */}
        <div className="flex items-start gap-8 mb-8 pt-8">
          {/* Profile Picture */}
          <div className="flex-shrink-0">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-0.5">
              <div className="w-full h-full rounded-full border-4 border-black overflow-hidden">
                <img
                  src="/profile.jpeg"
                  alt="Ezrela"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src =
                      "https://via.placeholder.com/160x160/1f2937/ffffff?text=E";
                  }}
                />
              </div>
            </div>
          </div>

          {/* Profile Info */}
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-4">
              <h2 className="text-xl font-light">ezrela_dev</h2>
              <button
                onClick={() => setIsFollowing(!isFollowing)}
                className={`px-8 py-1.5 rounded-lg font-semibold text-sm transition-colors ${
                  isFollowing
                    ? "bg-gray-800 hover:bg-gray-700 text-white"
                    : "bg-blue-500 hover:bg-blue-600 text-white"
                }`}
              >
                {isFollowing ? "Following" : "Follow"}
              </button>
              <button className="text-white">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                  />
                </svg>
              </button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 mb-4">
              <div>
                <span className="font-semibold">5</span> posts
              </div>
              <div>
                <span className="font-semibold">1,337</span> followers
              </div>
              <div>
                <span className="font-semibold">420</span> following
              </div>
            </div>

            {/* Bio */}
            <div className="text-sm">
              <p className="font-semibold">Ezrela</p>
              <p className="text-gray-300">Full-Stack Developer</p>
              <p className="text-gray-300 mt-1">
                💻 Building amazing web experiences
                <br />
                🚀 React • Node.js • Mixed Reality
                <br />☕ Turning coffee into code
              </p>
              <a
                href="mailto:ezre252@gmail.com"
                className="text-blue-500 mt-1 inline-block"
              >
                ezre252@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Highlights/Stories (empty circles for now) */}
        <div className="flex gap-12 overflow-x-auto pb-2 mb-2 scrollbar-hide">
          <div className="flex flex-col items-center gap-1 flex-shrink-0">
            <div className="w-20 h-20 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center">
              <span className="text-3xl">💼</span>
            </div>
            <span className="text-xs text-gray-400">Projects</span>
          </div>
          <div className="flex flex-col items-center gap-1 flex-shrink-0">
            <div className="w-20 h-20 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center">
              <span className="text-3xl">🎨</span>
            </div>
            <span className="text-xs text-gray-400">Design</span>
          </div>
          <div className="flex flex-col items-center gap-1 flex-shrink-0">
            <div className="w-20 h-20 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center">
              <span className="text-3xl">💻</span>
            </div>
            <span className="text-xs text-gray-400">Code</span>
          </div>
          <div className="flex flex-col items-center gap-1 flex-shrink-0">
            <div className="w-20 h-20 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center">
              <span className="text-3xl">🎓</span>
            </div>
            <span className="text-xs text-gray-400">Learning</span>
          </div>
        </div>

        {/* Tabs - Only Posts tab remains */}
        <div className="border-t border-gray-800 mb-0">
          <div className="flex justify-around">
            <button
              onClick={() => setActiveTab("posts")}
              className={`flex-1 py-3 flex items-center justify-center gap-2 border-t-2 transition-colors ${
                activeTab === "posts"
                  ? "border-white text-white"
                  : "border-transparent text-gray-500"
              }`}
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <rect x="3" y="3" width="7" height="7" />
                <rect x="13" y="3" width="7" height="7" />
                <rect x="3" y="13" width="7" height="7" />
                <rect x="13" y="13" width="7" height="7" />
              </svg>
              <span className="hidden md:inline text-xs font-semibold tracking-wide">
                POSTS
              </span>
            </button>
          </div>
        </div>
        {/* Tab Content - Only Posts tab remains */}
        <div className="mt-0">
          <Posts />
        </div>
      </div>
    </section>
  );
};

export default Hero;

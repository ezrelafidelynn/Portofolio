import React, { useState, useEffect } from "react";

const Hero = () => {
  const [likes, setLikes] = useState(247);
  const [isLiked, setIsLiked] = useState(false);
  const [followers, setFollowers] = useState(1337);
  const [isFollowing, setIsFollowing] = useState(false);
  const [currentStatus, setCurrentStatus] = useState(0);

  const statusUpdates = [
    "🚀 Building the future, one line of code at a time",
    "💻 Full-Stack Developer crafting digital experiences",
    "🌟 Turning coffee into code since 2020",
    "⚡ Currently: Making the impossible possible",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStatus((prev) => (prev + 1) % statusUpdates.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes((prev) => (isLiked ? prev - 1 : prev + 1));
  };

  const handleFollow = () => {
    setIsFollowing(!isFollowing);
    setFollowers((prev) => (isFollowing ? prev - 1 : prev + 1));
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-2xl mx-auto">
        {/* Social Media Card */}
        <div className="glass-panel p-8 transform hover:scale-105 transition-all duration-500">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-neon-purple via-neon-cyan to-neon-blue p-1 shadow-glow">
                  <img
                    src="/profile.jpeg"
                    alt="Ezrela Profile"
                    className="w-full h-full rounded-full object-cover bg-gray-800"
                    onError={(e) => {
                      e.target.src =
                        "https://via.placeholder.com/80x80/1f2937/ffffff?text=E";
                    }}
                  />
                </div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-gray-900 animate-pulse"></div>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gradient">Ezrela</h1>
                <p className="text-gray-400">@ezrela_dev</p>
                <p className="text-sm text-neon-cyan">Full-Stack Developer</p>
              </div>
            </div>
            <button
              onClick={handleFollow}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                isFollowing
                  ? "bg-gray-700 text-gray-300 hover:bg-gray-600"
                  : "bg-gradient-to-r from-neon-purple to-neon-cyan text-white hover:shadow-neon-purple"
              }`}
            >
              {isFollowing ? "Following" : "Follow"}
            </button>
          </div>

          {/* Status Update */}
          <div className="mb-6">
            <p className="text-lg text-gray-200 leading-relaxed transition-all duration-1000">
              {statusUpdates[currentStatus]}
            </p>
            <p className="text-sm text-gray-500 mt-2">2 hours ago</p>
          </div>

          {/* Stats */}
          <div className="flex justify-between items-center mb-6 p-4 bg-black/20 rounded-xl">
            <div className="text-center">
              <div className="text-2xl font-bold text-neon-purple">
                {followers.toLocaleString()}
              </div>
              <div className="text-sm text-gray-400">Followers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-neon-cyan">42</div>
              <div className="text-sm text-gray-400">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-neon-blue">∞</div>
              <div className="text-sm text-gray-400">Ideas</div>
            </div>
          </div>

          {/* Interaction Buttons */}
          <div className="flex justify-between items-center">
            <button
              onClick={handleLike}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-110 ${
                isLiked ? "text-red-500" : "text-gray-400 hover:text-red-400"
              }`}
            >
              <svg
                className={`w-6 h-6 transition-transform duration-300 ${
                  isLiked ? "scale-125" : ""
                }`}
                fill={isLiked ? "currentColor" : "none"}
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              <span className="font-semibold">{likes}</span>
            </button>

            <button className="flex items-center space-x-2 px-4 py-2 rounded-full text-gray-400 hover:text-neon-cyan transition-all duration-300 transform hover:scale-110">
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
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
              <span className="font-semibold">Reply</span>
            </button>

            <button className="flex items-center space-x-2 px-4 py-2 rounded-full text-gray-400 hover:text-neon-purple transition-all duration-300 transform hover:scale-110">
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
                  d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
                />
              </svg>
              <span className="font-semibold">Share</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

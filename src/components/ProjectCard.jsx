import React, { useState } from "react";

const ProjectCard = ({
  title,
  description,
  image,
  video,
  link,
  github,
  tech = [],
  likes: initialLikes,
  comments,
  timeAgo,
  delay = 0,
}) => {
  const [likes, setLikes] = useState(initialLikes);
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes((prev) => (isLiked ? prev - 1 : prev + 1));
  };

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  // Show video on hover or click
  const handleShowVideo = () => {
    if (video) setShowVideo(true);
  };
  const handleHideVideo = () => {
    setShowVideo(false);
  };

  // For accessibility, also allow click to toggle video
  const handleToggleVideo = () => {
    if (video) setShowVideo((prev) => !prev);
  };

  return (
    <div
      className="glass-panel p-6 transition-all duration-500 transform hover:scale-[1.02] hover:shadow-neon-purple"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-16 h-16 rounded-full bg-gradient-to-r from-neon-purple via-neon-cyan to-neon-blue p-1">
            <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center">
              <span className="text-white font-bold text-2xl">E</span>
            </div>
          </div>
          <div>
            <p className="font-semibold text-white">Ezrela</p>
            <p className="text-sm text-gray-400">{timeAgo}</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
              title="View on GitHub"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-6 h-6"
              >
                <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.418 2.865 8.167 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.254-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.338 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.396.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .268.18.579.688.481C19.138 20.184 22 16.437 22 12.021 22 6.484 17.523 2 12 2z" />
              </svg>
            </a>
          )}
          <button
            onClick={handleBookmark}
            className="text-gray-400 hover:text-neon-cyan transition-colors duration-300"
          >
            <svg
              className={`w-6 h-6 ${isBookmarked ? "fill-neon-cyan" : ""}`}
              fill={isBookmarked ? "currentColor" : "none"}
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="mb-4">
        <h3 className="text-xl font-bold text-gradient mb-2">{title}</h3>
        <p className="text-gray-300 leading-relaxed">{description}</p>
      </div>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((t, i) => (
          <span
            key={i}
            className="px-3 py-1 bg-neon-purple/20 text-neon-purple rounded-full text-sm font-medium"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Image/Video */}
      <div
        className="relative overflow-hidden rounded-xl mb-4 group cursor-pointer"
        onMouseEnter={handleShowVideo}
        onMouseLeave={handleHideVideo}
        onClick={handleToggleVideo}
        tabIndex={0}
        role="button"
        aria-label={showVideo ? `Hide video for ${title}` : `Play video for ${title}`}
      >
        <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
          {!showVideo || !video ? (
            <img
              src={image}
              alt={title}
              className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
              onError={(e) => {
                e.target.src =
                  "https://via.placeholder.com/400x225/1f2937/ffffff?text=" +
                  encodeURIComponent(title);
              }}
            />
          ) : (
            <video
              src={video}
              className="w-full h-full object-contain"
              autoPlay
              loop
              muted
              controls={false}
              onEnded={handleHideVideo}
            />
          )}
        </div>
        {link && (
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gradient-to-r from-neon-purple to-neon-cyan rounded-lg font-semibold text-white transform hover:scale-105 transition-transform duration-300"
            >
              View Live Demo 🚀
            </a>
          </div>
        )}
      </div>

      {/* Interaction Buttons */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <button
            onClick={handleLike}
            className={`flex items-center space-x-2 transition-all duration-300 transform hover:scale-110 ${
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

          <button
            onClick={() => setShowComments(!showComments)}
            className="flex items-center space-x-2 text-gray-400 hover:text-neon-cyan transition-all duration-300 transform hover:scale-110"
          >
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
            <span className="font-semibold">{comments}</span>
          </button>

          <button className="flex items-center space-x-2 text-gray-400 hover:text-neon-purple transition-all duration-300 transform hover:scale-110">
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

      {/* Comments Section */}
      {showComments && (
        <div className="mt-4 pt-4 border-t border-gray-700/50 space-y-3 animate-fadeIn">
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-neon-blue to-neon-cyan flex items-center justify-center text-xs font-bold">
              D
            </div>
            <div className="flex-1">
              <p className="text-sm">
                <span className="font-semibold text-neon-cyan">DevFriend</span>{" "}
                <span className="text-gray-300">This looks amazing! 🔥</span>
              </p>
              <p className="text-xs text-gray-500">2h ago</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-neon-purple to-pink-500 flex items-center justify-center text-xs font-bold">
              T
            </div>
            <div className="flex-1">
              <p className="text-sm">
                <span className="font-semibold text-neon-purple">TechGuru</span>{" "}
                <span className="text-gray-300">Great work on the UI! 💎</span>
              </p>
              <p className="text-xs text-gray-500">4h ago</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;

import React, { useState } from "react";

const MacBook = ({ image, video, title, fullImage }) => {
  const [showVideo, setShowVideo] = useState(false);
  const [showLightbox, setShowLightbox] = useState(false);

  const handleClick = () => {
    if (video) {
      setShowVideo((p) => !p);
    } else if (fullImage) {
      setShowLightbox(true);
    }
  };

  const isClickable = video || fullImage;

  return (
    <>
      <div className="macbook" onClick={handleClick} style={{ cursor: isClickable ? "pointer" : "default" }}>
        <div className="macbook-lid">
          <div className="macbook-camera" />
          <div className="macbook-screen" style={{ position: "relative" }}>
            {showVideo && video ? (
              <video src={video} autoPlay loop muted onError={() => setShowVideo(false)} />
            ) : image ? (
              <img src={image} alt={title} />
            ) : (
              <div className="w-full h-full flex items-center justify-center" style={{ background: "#1a202c" }}>
                <span className="text-white/30 text-sm">No preview</span>
              </div>
            )}
            {isClickable && !showVideo && (
              <div
                style={{
                  position: "absolute", bottom: 8, right: 8,
                  background: "rgba(0,0,0,0.65)", backdropFilter: "blur(4px)",
                  borderRadius: 6, padding: "3px 8px",
                  display: "flex", alignItems: "center", gap: 4,
                  pointerEvents: "none",
                }}
              >
                <svg width="10" height="10" viewBox="0 0 16 16" fill="#f472b6">
                  <polygon points="4,2 14,8 4,14" />
                </svg>
                <span style={{ color: "#f9a8d4", fontSize: 10, fontWeight: 600, letterSpacing: "0.05em" }}>
                  {video ? "Play Demo" : "View"}
                </span>
              </div>
            )}
          </div>
        </div>
        <div className="macbook-base" />
        <div className="macbook-foot" />
      </div>

      {/* Lightbox */}
      {showLightbox && fullImage && (
        <div
          className="fixed inset-0 z-50 overflow-y-auto p-6"
          style={{ background: "rgba(0,0,0,0.85)", backdropFilter: "blur(4px)" }}
          onClick={() => setShowLightbox(false)}
        >
          <div className="relative max-w-5xl mx-auto" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setShowLightbox(false)}
              className="sticky top-0 float-right text-white/60 hover:text-white text-sm font-medium transition-colors mb-2"
            >
              ✕ Close
            </button>
            <img
              src={fullImage}
              alt={`${title} - full view`}
              className="w-full rounded-xl"
              style={{ boxShadow: "0 0 60px rgba(0,0,0,0.8)" }}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default MacBook;

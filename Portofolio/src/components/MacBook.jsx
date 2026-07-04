import React, { useState } from "react";

const MacBook = ({ image, video, title }) => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="macbook" onClick={() => video && setShowVideo((p) => !p)}>
      <div className="macbook-lid" style={{ cursor: video ? "pointer" : "default" }}>
        <div className="macbook-camera" />
        <div className="macbook-screen">
          {showVideo && video ? (
            <video src={video} autoPlay loop muted onError={() => setShowVideo(false)} />
          ) : image ? (
            <img src={image} alt={title} />
          ) : (
            <div
              className="w-full h-full flex items-center justify-center"
              style={{ background: "#1a202c" }}
            >
              <span className="text-white/30 text-sm">No preview</span>
            </div>
          )}
        </div>
      </div>
      <div className="macbook-base" />
      <div className="macbook-foot" />
    </div>
  );
};

export default MacBook;

import React from "react";
import MacBook from "./MacBook";

const ProjectCard = ({ title, description, image, video, link, github, tech, demoLabel = "View Demo" }) => (
  <div className="project-card mb-6">
    {/* Purple/pink blob accent behind the MacBook */}
    <div className="blob-accent" />

    {/* Left: text content */}
    <div className="relative z-10 flex-shrink-0 w-[320px] p-10">
      {/* Dot indicator */}
      <div
        className="w-2.5 h-2.5 rounded-full mb-6"
        style={{ background: "#d1d1d6" }}
      />
      <h3 className="text-white font-bold text-2xl leading-snug mb-3">{title}</h3>
      <p className="text-white/55 text-sm leading-relaxed mb-4">{description}</p>

      {/* Tech stack */}
      {tech && tech.length > 0 && (
        <div className="flex flex-wrap gap-x-4 gap-y-1 mb-6">
          {tech.map((t) => (
            <span key={t} className="text-tag-text text-xs">{t}</span>
          ))}
        </div>
      )}

      {/* Buttons */}
      <div className="flex flex-wrap gap-3">
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer" className="btn-pink">
            {demoLabel}
            <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="currentColor">
              <path d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
            </svg>
          </a>
        )}
        {github && (
          <a href={github} target="_blank" rel="noopener noreferrer" className="btn-ghost">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            Source Code
          </a>
        )}
      </div>
    </div>

    {/* Right: MacBook mockup */}
    <div className="relative z-10 flex-1 pr-8 py-6">
      <MacBook image={image} video={video} title={title} />
    </div>
  </div>
);

export default ProjectCard;

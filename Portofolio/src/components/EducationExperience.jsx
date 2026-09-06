import React from "react";

const TimelineEntry = ({ company, role, period }) => (
  <div className="flex gap-3 mt-4">
    <div className="flex flex-col items-center">
      <div className="timeline-dot mt-1" />
      <div className="timeline-line flex-1 mt-1" />
    </div>
    <div className="pb-4">
      <p className="text-white text-base font-semibold">{company}</p>
      <p className="text-white/60 text-sm mt-0.5">{role}</p>
      <p className="text-white/50 text-sm">{period}</p>
    </div>
  </div>
);

const EducationExperience = () => (
  <section className="max-w-6xl mx-auto px-8 py-12">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      {/* Education */}
      <div>
        <h2 className="text-3xl font-bold text-white mb-2">Education</h2>
        <div className="flex gap-3 mt-4">
          <div className="flex flex-col items-center">
            <div className="timeline-dot mt-1" />
            <div className="timeline-line flex-1 mt-1" />
            <div className="timeline-dot" />
          </div>
          <div>
            <p className="text-white text-base font-semibold">BINUS University</p>
            <p className="text-white/60 text-sm mt-0.5">Major : Computer Science</p>
            <p className="text-white/60 text-sm">Year : 2023-2027</p>
            <p className="text-white/60 text-sm">GPA: 3.89</p>
          </div>
        </div>
      </div>

      {/* Experience */}
      <div>
        <h2 className="text-3xl font-bold text-white mb-2">Experience</h2>
        <TimelineEntry
          company="Joy Leap Studio"
          role="Web Developer"
          period="February 2026 - February 2027"
        />
        <TimelineEntry
          company="GreyDx.AI"
          role="Back End Developer"
          period="August 2025 - November 2026"
        />
      </div>
    </div>
  </section>
);

export default EducationExperience;

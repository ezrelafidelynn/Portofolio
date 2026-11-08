import React from "react";

const SKILLS = [
  {
    label: "Frontend",
    items: ["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS", "Vite"],
  },
  {
    label: "Backend",
    items: ["Node.js", "Express", "Laravel", "Socket.io", "REST API", "WebSocket"],
  },
  {
    label: "Database",
    items: ["PostgreSQL", "MongoDB", "Redis", "Prisma", "Mongoose", "PostGIS"],
  },
  {
    label: "Dev Tools",
    items: ["Git", "Docker", "BullMQ", "Vitest", "ESLint", "Playwright"],
  },
];

const SkillsSection = () => (
  <section className="max-w-6xl mx-auto px-8 py-10">
    <h2 className="text-center text-white text-2xl font-light mb-8 tracking-wide">Skills</h2>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {SKILLS.map((group) => (
        <div key={group.label} className="bg-[#0b1019] rounded-xl p-5">
          <p className="text-pink-primary text-xs font-mono uppercase tracking-widest mb-4">
            {group.label}
          </p>
          <ul className="flex flex-col gap-2">
            {group.items.map((item) => (
              <li key={item} className="text-white/70 text-sm">{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
);

export default SkillsSection;

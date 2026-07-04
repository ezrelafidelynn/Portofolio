import React from "react";

const Contact = () => {
  const socialLinks = [
    {
      name: "GitHub",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
      url: "https://github.com/ezrelafidelynn",
      username: "github.com/ezrelafidelynn",
    },
    {
      name: "LinkedIn",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
      url: "https://www.linkedin.com/in/ezrelafidelynn/",
      username: "linkedin.com/in/ezrelafidelynn",
    },
    {
      name: "Email",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      url: "mailto:ezre252@gmail.com",
      username: "ezre252@gmail.com",
    },
  ];

  return (
    <section
      id="contact"
      className="py-16 border-t"
      style={{ borderColor: "rgba(249, 168, 212, 0.1)" }}
    >
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-light mb-1 text-gradient">Get In Touch</h2>
          <p className="text-gray-500 text-sm">Let's connect and build something amazing</p>
        </div>

        <div className="flex flex-col items-center gap-3 max-w-md mx-auto">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target={link.name !== "Email" ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="w-full flex items-center gap-4 p-4 rounded-xl transition-all duration-200 group"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(249, 168, 212, 0.12)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(249, 168, 212, 0.35)";
                e.currentTarget.style.background = "rgba(249, 168, 212, 0.06)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(249, 168, 212, 0.12)";
                e.currentTarget.style.background = "rgba(255,255,255,0.03)";
              }}
            >
              <div className="text-pink-300">{link.icon}</div>
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-white">{link.name}</h3>
                <p className="text-xs text-gray-500">{link.username}</p>
              </div>
              <svg className="w-4 h-4 text-gray-600 group-hover:text-pink-300 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          ))}
        </div>

        <div className="mt-12 text-center text-gray-600 text-xs">
          <p className="mb-1">© 2025 Ezrela Fidelynn · Full-Stack Developer</p>
          <p>Made with React & TailwindCSS</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;

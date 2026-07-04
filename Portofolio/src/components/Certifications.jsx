import React from "react";

const CERTS = [
  {
    image: "/cert-dicoding-js.png",
    title: "Basics of JavaScript Programming",
    issuer: "- Dicoding Indonesia",
  },
  {
    image: "/cert-sololearn.png",
    title: "Tech for Everyone",
    issuer: "- Sololearn",
  },
  {
    image: "/cert-dicoding-ai.png",
    title: "Basics of Artificial Intelligence",
    issuer: "- Dicoding Indonesia",
  },
  {
    image: "/cert-generationgirl.png",
    title: "AI Training Program",
    issuer: "- Generation Girl",
  },
  {
    image: "/cert-azure.png",
    title: "Microsoft Certified: Azure AI Fundamentals",
    issuer: "- Microsoft",
    wide: true,
  },
];

const CertCard = ({ image, title, issuer, wide }) => (
  <div className={`cert-card${wide ? " col-span-2 md:col-span-1 max-w-sm" : ""}`}>
    <img
      src={image}
      alt={title}
      className="rounded-md object-cover flex-shrink-0"
      style={{ width: wide ? 80 : 120, height: wide ? 80 : 90 }}
    />
    <div>
      <p className="text-white text-sm font-medium leading-snug">{title}</p>
      <p className="text-white/50 text-xs mt-1">{issuer}</p>
    </div>
  </div>
);

const Certifications = () => (
  <section id="certifications" className="max-w-6xl mx-auto px-8 py-12">
    <h2 className="text-center text-white text-2xl font-light mb-8 tracking-wide">Certifications</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
      {CERTS.filter((c) => !c.wide).map((c) => (
        <CertCard key={c.title} {...c} />
      ))}
      {/* Wide/single cert at bottom centered */}
      <div className="md:col-span-2 flex justify-start">
        {CERTS.filter((c) => c.wide).map((c) => (
          <CertCard key={c.title} {...c} />
        ))}
      </div>
    </div>
  </section>
);

export default Certifications;

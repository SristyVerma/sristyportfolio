"use client";

export default function AboutPage() {
  const skills = [
    "JavaScript / TypeScript",
    "React / Next.js",
    "Node.js",
    "Tailwind / CSS Animation",
    "Performance Optimization",
    "REST API Integration",
    "GitHub Collaboration",
    "Accessibility (WCAG)",
  ];

  const highlights = [
    { label: "Projects Shipped", value: "20+" },
    { label: "UI Performance Gain", value: "35%" },
    { label: "Avg. Lighthouse", value: "90+" },
  ];

  return (
    <main className="about-wrap">
      <div className="ambient ambient-1" />
      <div className="ambient ambient-2" />

      <section className="hero block">
        <p className="label">RECRUITER SNAPSHOT</p>
        <h1>
          I design <span>high-impact</span> products that users remember.
        </h1>
        <p className="lead">
          Frontend-focused developer with a product mindset — I turn business goals into
          polished, fast, and conversion-friendly interfaces.
        </p>

        <div className="highlight-row">
          {highlights.map((item) => (
            <article key={item.label} className="highlight">
              <p className="value">{item.value}</p>
              <p className="caption">{item.label}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="grid">
        <article className="card block">
          <p className="card-kicker">What I deliver</p>
          <h2>Experience</h2>
          <ul>
            <li>
              <strong>Frontend Developer</strong> — Built scalable interfaces with reusable
              component systems and clear design consistency.
            </li>
            <li>
              <strong>UI Engineer</strong> — Improved user engagement through purposeful
              motion, micro-interactions, and smoother user journeys.
            </li>
            <li>
              <strong>Freelance Delivery</strong> — Took projects from wireframe to production,
              including deployment, QA, and post-launch iteration.
            </li>
          </ul>
        </article>

        <article className="card block">
          <p className="card-kicker">How I stay sharp</p>
          <h2>Education</h2>
          <ul>
            <li>
              <strong>Bachelor&apos;s Degree</strong> — Computer Science / related technical
              discipline with strong problem-solving fundamentals.
            </li>
            <li>
              <strong>Continuous Upskilling</strong> — Focus on frontend architecture,
              accessibility, and web performance best practices.
            </li>
            <li>
              <strong>Project-based Learning</strong> — Applied modern patterns in real-world,
              recruiter-ready portfolio and client builds.
            </li>
          </ul>
        </article>
      </section>

      <section className="skills card block">
        <p className="card-kicker">Tech stack at a glance</p>
        <h2>Skills</h2>
        <div className="chips">
          {skills.map((skill) => (
            <span key={skill} className="chip">
              {skill}
            </span>
          ))}
        </div>
      </section>

      <style jsx>{`
        .about-wrap {
          min-height: 100vh;
          position: relative;
          overflow: hidden;
          padding: 3rem 1.25rem 4rem;
          color: #f7f7ff;
          background:
            radial-gradient(circle at 10% 10%, #4f46e5 0%, transparent 36%),
            radial-gradient(circle at 90% 20%, #ec4899 0%, transparent 32%),
            linear-gradient(165deg, #06060f 0%, #12122a 40%, #05050a 100%);
          font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif;
        }

        .ambient {
          position: absolute;
          width: 22rem;
          height: 22rem;
          border-radius: 999px;
          filter: blur(90px);
          opacity: 0.35;
          z-index: 0;
          animation: drift 14s ease-in-out infinite;
          pointer-events: none;
        }

        .ambient-1 {
          top: -6rem;
          left: -6rem;
          background: #7c3aed;
        }

        .ambient-2 {
          right: -8rem;
          bottom: -8rem;
          background: #f43f5e;
          animation-delay: -4s;
        }

        .block {
          position: relative;
          z-index: 2;
          animation: rise 0.9s ease both;
        }

        .hero {
          max-width: 1080px;
          margin: 0 auto 2rem;
          text-align: center;
        }

        .label {
          letter-spacing: 0.16em;
          font-weight: 800;
          font-size: 0.8rem;
          color: #a5b4fc;
          margin-bottom: 0.75rem;
        }

        h1 {
          margin: 0;
          font-size: clamp(2.2rem, 6vw, 4.3rem);
          line-height: 1.08;
          font-weight: 900;
          text-transform: uppercase;
        }

        h1 span {
          color: #f9a8d4;
          text-shadow: 0 0 24px rgba(249, 168, 212, 0.7);
        }

        .lead {
          margin: 1.2rem auto 0;
          max-width: 790px;
          font-size: clamp(1.05rem, 2.2vw, 1.25rem);
          line-height: 1.6;
          color: #d7d8ff;
          font-weight: 600;
        }

        .highlight-row {
          margin-top: 1.35rem;
          display: grid;
          grid-template-columns: repeat(1, minmax(0, 1fr));
          gap: 0.8rem;
        }

        .highlight {
          background: rgba(255, 255, 255, 0.09);
          border: 1px solid rgba(255, 255, 255, 0.28);
          border-radius: 1rem;
          padding: 0.9rem;
          transition: transform 0.28s ease, background 0.28s ease;
        }

        .highlight:hover {
          transform: translateY(-4px);
          background: rgba(255, 255, 255, 0.16);
        }

        .value {
          margin: 0;
          font-size: clamp(1.4rem, 3vw, 2rem);
          font-weight: 900;
          color: #fff;
        }

        .caption {
          margin: 0.2rem 0 0;
          color: #d6dbff;
          font-size: 0.9rem;
          letter-spacing: 0.03em;
          font-weight: 700;
          text-transform: uppercase;
        }

        .grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
          max-width: 1100px;
          margin: 0 auto;
        }

        .card {
          background: linear-gradient(145deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.05));
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 1.2rem;
          padding: 1.35rem;
          backdrop-filter: blur(8px);
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.3);
          transform: translateY(0) scale(1);
          transition: transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease;
        }

        .card:hover {
          transform: translateY(-6px) scale(1.01);
          box-shadow: 0 22px 52px rgba(0, 0, 0, 0.45);
          border-color: rgba(255, 255, 255, 0.45);
        }

        .card-kicker {
          margin: 0 0 0.45rem;
          color: #c7ceff;
          font-size: 0.78rem;
          font-weight: 800;
          letter-spacing: 0.13em;
          text-transform: uppercase;
        }

        h2 {
          margin: 0 0 0.85rem;
          font-size: clamp(1.35rem, 2.4vw, 1.85rem);
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        ul {
          margin: 0;
          padding-left: 1rem;
          display: grid;
          gap: 0.8rem;
        }

        li {
          color: #ecebff;
          line-height: 1.55;
          font-size: 1rem;
          font-weight: 500;
        }

        strong {
          color: #ffffff;
          font-weight: 800;
        }

        .skills {
          margin: 1rem auto 0;
          max-width: 1100px;
        }

        .chips {
          display: flex;
          flex-wrap: wrap;
          gap: 0.65rem;
        }

        .chip {
          padding: 0.52rem 0.85rem;
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.32);
          background: rgba(255, 255, 255, 0.1);
          font-size: 0.92rem;
          font-weight: 700;
          transition: transform 0.28s ease, background 0.28s ease;
        }

        .chip:hover {
          transform: translateY(-2px);
          background: rgba(255, 255, 255, 0.2);
        }

        .grid .card:nth-child(1) {
          animation-delay: 0.14s;
        }

        .grid .card:nth-child(2) {
          animation-delay: 0.24s;
        }

        .skills {
          animation-delay: 0.34s;
        }

        @media (min-width: 720px) {
          .highlight-row {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }

        @media (min-width: 860px) {
          .about-wrap {
            padding: 4rem 2rem 5rem;
          }

          .grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 1.2rem;
          }

          .card {
            padding: 1.6rem;
          }
        }

        @keyframes rise {
          from {
            opacity: 0;
            transform: translateY(24px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes drift {
          0%,
          100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(24px, -20px);
          }
        }
      `}</style>
    </main>
  );
}

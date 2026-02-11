"use client";

import { useEffect, useMemo, useState } from "react";

type Activity = "explorer" | "settings";
type Theme = "dark" | "light";

type FileNode = {
  id: string;
  name: string;
  type: "folder" | "file";
  children?: FileNode[];
};

const fileTree: FileNode[] = [
  {
    id: "about",
    name: "about",
    type: "folder",
    children: [
      { id: "about/intro.md", name: "intro.md", type: "file" },
      { id: "about/experience.md", name: "experience.md", type: "file" },
      { id: "about/education.md", name: "education.md", type: "file" },
    ],
  },
  {
    id: "projects",
    name: "projects",
    type: "folder",
    children: [
      { id: "projects/featured.md", name: "featured.md", type: "file" },
      { id: "projects/all-projects.md", name: "all-projects.md", type: "file" },
      { id: "projects/case-studies.md", name: "case-studies.md", type: "file" },
    ],
  },
  {
    id: "skills",
    name: "skills",
    type: "folder",
    children: [
      { id: "skills/frontend.md", name: "frontend.md", type: "file" },
      { id: "skills/backend.md", name: "backend.md", type: "file" },
      { id: "skills/tools.md", name: "tools.md", type: "file" },
      { id: "skills/devops.md", name: "devops.md", type: "file" },
    ],
  },
  {
    id: "contact",
    name: "contact",
    type: "folder",
    children: [
      { id: "contact/email.md", name: "email.md", type: "file" },
      { id: "contact/social-links.md", name: "social-links.md", type: "file" },
      { id: "contact/availability.md", name: "availability.md", type: "file" },
    ],
  },
  {
    id: "achievements",
    name: "achievements",
    type: "folder",
    children: [
      {
        id: "achievements/certifications.md",
        name: "certifications.md",
        type: "file",
      },
      { id: "achievements/awards.md", name: "awards.md", type: "file" },
      { id: "achievements/talks.md", name: "talks.md", type: "file" },
    ],
  },
  {
    id: "blogs",
    name: "blogs",
    type: "folder",
    children: [
      { id: "blogs/latest.md", name: "latest.md", type: "file" },
      { id: "blogs/writing-topics.md", name: "writing-topics.md", type: "file" },
    ],
  },
  {
    id: "resume",
    name: "resume",
    type: "folder",
    children: [{ id: "resume/resume.pdf", name: "resume.pdf", type: "file" }],
  },
  {
    id: "config",
    name: "config",
    type: "folder",
    children: [
      { id: "config/theme.json", name: "theme.json", type: "file" },
      { id: "config/settings.json", name: "settings.json", type: "file" },
    ],
  },
];

const fileContent: Record<string, string> = {
  "about/intro.md": `# Sristy\n\nFrontend Developer focused on polished UI systems and developer-focused products.\n\n- 3+ years building React and Next.js experiences\n- Strong design-to-code execution\n- Performance and accessibility first mindset`,
  "about/experience.md": `# Experience\n\n## Senior Frontend Developer\n**Product Studio** · 2022 - Present\n- Led a design system migration reducing UI bugs by 35%\n- Built reusable dashboard primitives for 8+ products\n\n## Frontend Engineer\n**Tech Agency** · 2020 - 2022\n- Delivered production apps for fintech and e-commerce clients`,
  "about/education.md": `# Education\n\nB.Tech in Computer Science\n- UI Engineering\n- Human Computer Interaction\n- Data Structures & Algorithms`,
  "projects/featured.md": `# Featured Projects\n\n1. VS Code Portfolio UI\n2. Analytics Dashboard\n3. AI Notes Workspace`,
  "projects/all-projects.md": `# All Projects\n\n- E-commerce Storefront\n- Issue Tracker\n- Team Collaboration App\n- Documentation Platform\n- Portfolio Generator`,
  "projects/case-studies.md": `# Case Studies\n\n- Improving Lighthouse score from 72 to 98\n- Reducing bundle size by 41% with code splitting\n- Increasing retention with UX onboarding`,
  "skills/frontend.md": `# Frontend Skills\n\n- React / Next.js\n- TypeScript\n- Tailwind CSS\n- Framer Motion\n- Testing Library`,
  "skills/backend.md": `# Backend Skills\n\n- Node.js\n- Express\n- REST API Design\n- PostgreSQL\n- Prisma`,
  "skills/tools.md": `# Tools\n\n- Figma\n- Git + GitHub\n- VS Code\n- Storybook\n- Postman`,
  "skills/devops.md": `# DevOps\n\n- Vercel Deployments\n- GitHub Actions\n- Docker Basics\n- Monitoring & Logging`,
  "contact/email.md": `# Email\n\nhello@sristy.dev`,
  "contact/social-links.md": `# Social\n\n- GitHub: github.com/sristy\n- LinkedIn: linkedin.com/in/sristy\n- Twitter: x.com/sristy`,
  "contact/availability.md": `# Availability\n\nOpen for remote frontend opportunities and freelance UI engineering projects.`,
  "achievements/certifications.md": `# Certifications\n\n- Meta Frontend Developer\n- Google UX Design\n- AWS Cloud Practitioner`,
  "achievements/awards.md": `# Awards\n\n- Hackathon Winner 2023\n- Best UI Implementation Award\n- Campus Innovation Grant`,
  "achievements/talks.md": `# Talks\n\n- Building scalable component libraries\n- Developer portfolios that stand out\n- Modern React performance`,
  "blogs/latest.md": `# Latest Articles\n\n- Crafting VS Code Inspired Interfaces\n- Design Tokens in Real Products\n- Better State Management Patterns`,
  "blogs/writing-topics.md": `# Writing Topics\n\n- Frontend architecture\n- Accessibility\n- Developer experience\n- Career growth`,
  "resume/resume.pdf": `PDF preview unavailable in mock editor.\n\nUse download action in real implementation.`,
  "config/theme.json": `{
  "activeTheme": "dark",
  "availableThemes": ["dark", "light"]
}`,
  "config/settings.json": `{
  "fontSize": 14,
  "wordWrap": "on",
  "minimap": false,
  "terminal.defaultProfile": "bash"
}`,
};

const terminalLines = [
  "$ whoami",
  "> Sristy - Frontend Developer",
  "",
  "$ stack --primary",
  "> React, Next.js, TypeScript, Tailwind",
  "",
  "$ projects --featured",
  "> 1) VSCode Portfolio",
  "> 2) Analytics Dashboard",
  "> 3) AI Notes Workspace",
  "",
  "$ contact --now",
  "> hello@sristy.dev",
  "> github.com/sristy",
  "> linkedin.com/in/sristy",
];

const defaultFile = "about/intro.md";

const initialExpanded = new Set(fileTree.map((node) => node.id));

function getFileName(path: string) {
  const pieces = path.split("/");
  return pieces[pieces.length - 1];
}

export default function Home() {
  const [activeActivity, setActiveActivity] = useState<Activity>("explorer");
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") {
      return "dark";
    }
    const stored = window.localStorage.getItem("portfolio-theme");
    return stored === "light" || stored === "dark" ? stored : "dark";
  });
  const [openTabs, setOpenTabs] = useState<string[]>([defaultFile]);
  const [activeTab, setActiveTab] = useState(defaultFile);
  const [expandedFolders, setExpandedFolders] = useState(initialExpanded);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    window.localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  const explorerHeader = useMemo(
    () => (activeActivity === "explorer" ? "EXPLORER" : "SETTINGS"),
    [activeActivity],
  );

  const openFile = (fileId: string) => {
    setOpenTabs((current) => (current.includes(fileId) ? current : [...current, fileId]));
    setActiveTab(fileId);
  };

  const closeTab = (fileId: string) => {
    setOpenTabs((current) => {
      const filtered = current.filter((tab) => tab !== fileId);
      if (!filtered.length) {
        setActiveTab(defaultFile);
        return [defaultFile];
      }
      if (activeTab === fileId) {
        setActiveTab(filtered[filtered.length - 1]);
      }
      return filtered;
    });
  };

  const toggleFolder = (folderId: string) => {
    setExpandedFolders((current) => {
      const next = new Set(current);
      if (next.has(folderId)) {
        next.delete(folderId);
      } else {
        next.add(folderId);
      }
      return next;
    });
  };

  const renderNode = (node: FileNode, level = 0) => {
    if (node.type === "folder") {
      const expanded = expandedFolders.has(node.id);
      return (
        <div key={node.id}>
          <button
            className="tree-item"
            style={{ paddingLeft: `${8 + level * 16}px` }}
            onClick={() => toggleFolder(node.id)}
            type="button"
          >
            <span>{expanded ? "⌄" : "›"}</span>
            <span>📁 {node.name}</span>
          </button>
          {expanded && node.children?.map((child) => renderNode(child, level + 1))}
        </div>
      );
    }

    return (
      <button
        key={node.id}
        className={`tree-item tree-file ${activeTab === node.id ? "active" : ""}`}
        style={{ paddingLeft: `${24 + level * 16}px` }}
        onClick={() => openFile(node.id)}
        type="button"
      >
        <span>📄 {node.name}</span>
      </button>
    );
  };

  return (
    <div className="ide-shell">
      <header className="top-bar">
        <div className="traffic" aria-hidden>
          <span />
          <span />
          <span />
        </div>
        <nav className="menu">
          <span>File</span>
          <span>Edit</span>
          <span>Selection</span>
          <span>View</span>
          <span>Go</span>
          <span>Run</span>
          <span>Terminal</span>
          <span>Help</span>
        </nav>
        <div className="workspace-title">sristyportfolio — portfolio</div>
      </header>

      <main className="workspace">
        <aside className="activity-bar">
          <button
            className={activeActivity === "explorer" ? "activity-item active" : "activity-item"}
            onClick={() => setActiveActivity("explorer")}
            type="button"
            title="Explorer"
          >
            🗂️
          </button>
          <button
            className={activeActivity === "settings" ? "activity-item active" : "activity-item"}
            onClick={() => setActiveActivity("settings")}
            type="button"
            title="Settings"
          >
            ⚙️
          </button>
        </aside>

        <section className="sidebar">
          <div className="panel-title">{explorerHeader}</div>
          {activeActivity === "explorer" ? (
            <div className="tree-panel">{fileTree.map((node) => renderNode(node))}</div>
          ) : (
            <div className="settings-panel">
              <p className="settings-label">Theme</p>
              <div className="theme-row">
                <button
                  className={theme === "dark" ? "theme-button active" : "theme-button"}
                  onClick={() => setTheme("dark")}
                  type="button"
                >
                  Dark
                </button>
                <button
                  className={theme === "light" ? "theme-button active" : "theme-button"}
                  onClick={() => setTheme("light")}
                  type="button"
                >
                  Light
                </button>
              </div>
              <p className="settings-help">Preference is saved for your next visit.</p>
            </div>
          )}
        </section>

        <section className="editor-area">
          <div className="tabs-row" role="tablist" aria-label="Open files">
            {openTabs.map((tab) => (
              <div key={tab} className={activeTab === tab ? "tab active" : "tab"}>
                <button
                  className="tab-trigger"
                  onClick={() => setActiveTab(tab)}
                  type="button"
                  role="tab"
                  aria-selected={activeTab === tab}
                >
                  <span className="tab-label">{getFileName(tab)}</span>
                </button>
                <button
                  className="close"
                  onClick={() => closeTab(tab)}
                  type="button"
                  aria-label={`Close ${getFileName(tab)}`}
                >
                  ×
                </button>
              </div>
            ))}
          </div>

          <article className="editor-content">
            <pre>{fileContent[activeTab]}</pre>
          </article>

          <section className="terminal">
            <div className="terminal-header">TERMINAL</div>
            <pre>{terminalLines.join("\n")}</pre>
          </section>
        </section>
      </main>
    </div>
  );
}

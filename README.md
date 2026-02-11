# VS Code Portfolio UI Architecture Plan

This project will be built as a **VS Code-inspired personal portfolio** where the interface itself tells your developer story.

## 1) Product Goal

Create a portfolio that feels like opening your real workspace:
- Activity Bar on the left (File/Explorer active by default, Settings available).
- Explorer panel with a realistic developer folder/file tree.
- Editor tabs for content pages (About, Projects, Contact, Experience, Skills, etc.).
- Bottom terminal panel with curated static output (or optional simulated command responses).
- Theme settings with dark/light modes.

---

## 2) Build Phases (Task Breakdown)

### Phase A — Core Shell Layout
- Build the VS Code frame:
  - Top title/menu bar
  - Activity bar
  - Sidebar (Explorer/Settings)
  - Editor area
  - Bottom panel (Terminal)
- Ensure responsive behavior for smaller screens.

### Phase B — Navigation & State Model
- Add app state for:
  - active activity item (`explorer`, `settings`)
  - selected file in explorer
  - opened tabs list
  - active tab
  - theme (`dark` / `light`)
  - terminal visibility
- Define clear interaction rules:
  - clicking a file opens a tab
  - clicking an open tab focuses it
  - theme change updates whole UI instantly

### Phase C — Content Architecture
- Create content files/data for all portfolio sections.
- Map each explorer file to one content renderer in editor.
- Add optional markdown support later if desired.

### Phase D — Settings + Terminal Experience
- Settings panel:
  - theme switch (dark/light)
  - maybe font size toggle (optional)
- Terminal panel:
  - static prompt + curated lines
  - optional fake commands (`help`, `projects`, `contact`) for delight

### Phase E — Polish & Accessibility
- Keyboard navigation (tab focus, enter select).
- Accessible labels/roles for explorer and tabs.
- Animations/transitions kept subtle.
- Final pass on spacing, icons, and typography.

---

## 3) Recommended Information Architecture (Explorer Tree)

Use a realistic developer portfolio tree like this:

```text
portfolio/
├── src/
│   ├── about/
│   │   ├── intro.md
│   │   ├── experience.md
│   │   └── education.md
│   ├── projects/
│   │   ├── featured.md
│   │   ├── all-projects.md
│   │   └── case-studies.md
│   ├── skills/
│   │   ├── frontend.md
│   │   ├── backend.md
│   │   ├── tools.md
│   │   └── devops.md
│   ├── contact/
│   │   ├── email.md
│   │   ├── social-links.md
│   │   └── availability.md
│   ├── achievements/
│   │   ├── certifications.md
│   │   ├── awards.md
│   │   └── talks.md
│   ├── blogs/
│   │   ├── latest.md
│   │   └── writing-topics.md
│   ├── resume/
│   │   └── resume.pdf
│   └── config/
│       ├── theme.json
│       └── settings.json
└── terminal/
    └── welcome.log
```

> In the UI, you can represent this as a JSON tree and not necessarily as real disk folders.

---

## 4) Frontend Component Architecture (Next.js + React)

Suggested component boundaries:

- `VSCodeLayout`
  - page-level wrapper containing all panes.
- `TopBar`
  - menu labels, workspace title, optional command/search box.
- `ActivityBar`
  - icons for Explorer and Settings.
- `Sidebar`
  - switches between `ExplorerPanel` and `SettingsPanel`.
- `ExplorerPanel`
  - tree view of folders/files.
- `EditorTabs`
  - opened tabs strip.
- `EditorContent`
  - renders selected content file.
- `TerminalPanel`
  - static or interactive terminal output.

### Suggested folders

```text
src/
├── app/
│   ├── page.tsx
│   └── layout.tsx
├── components/
│   ├── shell/
│   │   ├── VSCodeLayout.tsx
│   │   ├── TopBar.tsx
│   │   ├── ActivityBar.tsx
│   │   ├── Sidebar.tsx
│   │   └── TerminalPanel.tsx
│   ├── explorer/
│   │   ├── ExplorerPanel.tsx
│   │   ├── TreeNode.tsx
│   │   └── ExplorerIcons.tsx
│   ├── editor/
│   │   ├── EditorTabs.tsx
│   │   └── EditorContent.tsx
│   └── settings/
│       └── SettingsPanel.tsx
├── data/
│   ├── fileTree.ts
│   ├── fileContents.ts
│   └── terminalContent.ts
├── hooks/
│   └── usePortfolioIDEState.ts
├── types/
│   └── ide.ts
└── styles/
    └── vscode-theme.css
```

---

## 5) State & Data Contracts

Keep the state explicit and typed:

- `FileNode`
  - `id`, `name`, `type` (`folder|file`), `children?`, `contentId?`
- `OpenTab`
  - `id`, `title`, `contentId`, `isDirty?`
- `IDEState`
  - `activeActivity`
  - `expandedFolders`
  - `openTabs`
  - `activeTabId`
  - `selectedFileId`
  - `theme`
  - `terminalOpen`

This makes features easy to scale (e.g., adding Search or Git panel later).

---

## 6) Theme Strategy

- Use CSS variables for colors (`--bg-main`, `--sidebar-bg`, `--text-muted`, etc.).
- Define two variable sets: dark and light.
- Apply theme at root (`data-theme="dark|light"`).
- Save theme preference in `localStorage`.

---

## 7) Terminal Content Strategy (Static but Meaningful)

Populate terminal with story-driven lines:

```bash
$ whoami
> Sristy - Frontend Developer

$ stack --primary
> React, Next.js, TypeScript, Tailwind

$ projects --featured
> 1) VSCode Portfolio
> 2) E-commerce Dashboard
> 3) AI Notes App

$ contact --now
> email: yourname@email.com
> github: github.com/yourhandle
> linkedin: linkedin.com/in/yourhandle
```

---

## 8) MVP Checklist

- [ ] VS Code shell layout complete
- [ ] Explorer works with expandable folders
- [ ] Click file opens tab and content
- [ ] Settings panel includes dark/light toggle
- [ ] Terminal panel shows curated output
- [ ] Mobile fallback layout
- [ ] Basic accessibility pass

---

## 9) What to Build First (Execution Order)

1. Static shell layout (no logic).
2. Explorer data + file open behavior.
3. Editor tabs/content switching.
4. Theme settings and persistence.
5. Terminal content.
6. Visual polish and responsive fixes.

This gives you a fast visible result early and reduces refactor risk.

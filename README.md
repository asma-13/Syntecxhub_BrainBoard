<div align="center">

# 🧠 BrainBoard

<img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black" />
<img src="https://img.shields.io/badge/Vite-⚡_Fast-646CFF?style=for-the-badge&logo=vite&logoColor=white" />
<img src="https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" />
<img src="https://img.shields.io/badge/Lucide-Icons-F97316?style=for-the-badge&logo=lucide&logoColor=white" />
<img src="https://img.shields.io/badge/LocalStorage-Persistent-22C55E?style=for-the-badge&logo=databricks&logoColor=white" />
<img src="https://img.shields.io/badge/License-MIT-A855F7?style=for-the-badge" />

<br/>

> 🗒️ **A modern, glassmorphic notes app — capture your thoughts beautifully.**

<img src="https://img.shields.io/badge/Status-Live-brightgreen?style=flat-square" />
<img src="https://img.shields.io/badge/Internship-Syntecxhub-blue?style=flat-square" />
<img src="https://img.shields.io/badge/Task-3_Notes_App-orange?style=flat-square" />

</div>

---

## 📌 Table of Contents

- [✨ About the Project](#-about-the-project)
- [🚀 Features](#-features)
- [🖼️ Screenshots](#️-screenshots)
- [🛠️ Tech Stack](#️-tech-stack)
- [📁 File Structure](#-file-structure)
- [⚙️ Getting Started](#️-getting-started)
- [🧩 Component Breakdown](#-component-breakdown)
- [💡 Application Flow](#-application-flow)
- [📦 Dependencies](#-dependencies)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)
- [📬 Contact](#-contact)

---

## ✨ About the Project

**BrainBoard** is a sleek, fully responsive **Notes Application** built as **Task 3** during an internship at **[Syntecxhub](https://syntecxhub.com)**. It empowers users to capture, organize, search, and manage their thoughts — all with a stunning glassmorphic UI and seamless dark mode support.

No backend. No database. Just pure React magic with **localStorage persistence** — your notes are always there, even after a page refresh.

> 💡 *"Your brain, on a board."*

---

## 🚀 Features

| Feature | Description |
|---|---|
| 📝 **Create Notes** | Expand the input box, add a title & content, and save instantly |
| ✏️ **Edit Notes** | Click the edit icon on any card to modify in place |
| 🗑️ **Delete Notes** | Remove notes with the trash icon — clean and simple |
| 🔍 **Live Search** | Filter notes in real-time as you type in the search bar |
| 🌙 **Dark Mode** | Toggle between light and dark themes, preference is saved |
| 💾 **Persistent Storage** | All notes and theme preference stored in `localStorage` |
| 📱 **Fully Responsive** | Works beautifully on mobile, tablet, and desktop |
| 🪟 **Glassmorphism UI** | Modern glass-card design with custom Tailwind CSS components |
| 📅 **Auto Timestamps** | Every note displays its last updated date automatically |
| 👻 **Empty State** | Friendly ghost icon & message when no notes are found |

---

## 🖼️ Screenshots

> 📸 *Add your app screenshots here for maximum impact!*

| Light Mode | Dark Mode |
|---|---|
| *(Add screenshot)* | *(Add screenshot)* |

---

## 🛠️ Tech Stack

<div align="center">

| Technology | Role | Version |
|---|---|---|
| ⚛️ **React** | Core UI Library & State Management | v19 |
| ⚡ **Vite** | Build Tool & Dev Server | Latest |
| 🎨 **Tailwind CSS** | Utility-First Styling Framework | v4 |
| 🖼️ **Lucide React** | SVG Icon Library | Latest |
| 🗄️ **localStorage** | Client-Side Data Persistence | Native |

</div>

---

## 📁 File Structure

```
notes_app/
├── public/                 # Static assets (no module processing needed)
├── src/                    # Main React source code
│   ├── assets/             # Internal assets (images, SVGs)
│   │   └── react.svg
│   ├── components/         # Reusable React UI Components
│   │   ├── Footer.jsx      # 🔻 Bottom footer with credits & copyright
│   │   ├── Header.jsx      # 🔝 Logo, search bar & dark mode toggle
│   │   ├── NoteCard.jsx    # 🃏 Individual note with edit/delete actions
│   │   ├── NoteGrid.jsx    # 🗂️ Responsive grid container for all NoteCards
│   │   └── NoteInput.jsx   # ✍️ Expandable form to create new notes
│   ├── App.jsx             # 🧠 Central brain — all logic, state & layout
│   ├── index.css           # 🎨 Global styles, Tailwind config & animations
│   └── main.jsx            # 🚪 Entry point that mounts React to the DOM
├── .gitignore              # Git ignore rules (e.g., node_modules)
├── eslint.config.js        # Linting configuration for code quality
├── index.html              # Root HTML shell — React mounts into #root
├── package.json            # Project metadata, scripts & dependencies
├── package-lock.json       # Locked dependency versions for consistency
├── start-brainboard.bat    # 🖱️ Double-click to launch dev server (Windows)
└── vite.config.js          # Vite bundler configuration with React plugin
```

---

## ⚙️ Getting Started

### Prerequisites

Make sure you have the following installed:

- **Node.js** (v18 or higher recommended) → [Download](https://nodejs.org/)
- **npm** (comes with Node.js)
- **Git** → [Download](https://git-scm.com/)

### 🔧 Installation & Setup

**1. Clone the repository**
```bash
git clone https://github.com/YOUR_USERNAME/notes-app.git
cd notes-app
```

**2. Install dependencies**
```bash
npm install
```

**3. Start the development server**
```bash
npm run dev
```

Or on **Windows**, simply double-click:
```
start-brainboard.bat
```

**4. Open in browser**
```
http://localhost:5173
```

### 🏗️ Build for Production
```bash
npm run build
```

The optimized build output will be in the `dist/` folder, ready for deployment.

---

## 🧩 Component Breakdown

### 🧠 `App.jsx` — The Brain
The central hub of BrainBoard. Manages all state and logic:
- **`useState`** — Initializes `notes` and `darkMode` from `localStorage`, manages `searchTerm`
- **`useEffect`** — Syncs notes and dark mode preference back to `localStorage` on every change
- **CRUD** — Contains `addNote`, `deleteNote`, and `updateNote` functions
- **Live Filtering** — Dynamically filters notes based on the current search query
- **Layout** — Orchestrates `Header`, `NoteInput`, `NoteGrid`, and `Footer` in a flex layout

---

### 🔝 `Header.jsx` — Top Navigation
- Displays the **BrainBoard logo** and branding
- Houses the **live search input** — typing updates `searchTerm` in `App.jsx` instantly
- Contains the **🌙/☀️ Dark Mode toggle** button using Lucide icons

---

### ✍️ `NoteInput.jsx` — Create Notes
- Starts as a minimal collapsed textarea
- On click → **expands** to reveal a title field + "Save Note" button
- On submit → validates input, calls `onAdd(title, content)`, resets form to collapsed state

---

### 🗂️ `NoteGrid.jsx` — Note Container
- Receives the `filteredNotes` array as props
- **Empty state:** Renders a ghost 👻 icon + friendly message when no notes exist
- **Grid layout:** Responsive CSS Grid — 1 column on mobile → up to 3 columns on desktop

---

### 🃏 `NoteCard.jsx` — Individual Note
- Displays note **title**, **content**, and **last updated timestamp**
- Hover reveals **✏️ Edit** and **🗑️ Delete** action icons
- Edit mode: Replaces display text with editable input fields inline
- Save → calls `handleUpdate`, pushes changes up to `App.jsx`, exits edit mode

---

### 🔻 `Footer.jsx` — Bottom Bar
- Displays *"Powered by Asma Channa"* with a **LinkedIn link**
- Shows a **dynamic copyright year** via `new Date().getFullYear()`
- Styled as a glassmorphism pill component

---

### 🎨 `index.css` — Global Styles
- Uses **Tailwind v4's** `@import "tailwindcss"` syntax
- Defines custom **CSS theme variables**: `--color-maroon-*`, `--bg-main` gradients
- Custom **animations**: `fadeIn`, `modalScale`
- **Custom `@layer components`**: `.glass`, `.glass-card`, `.btn-primary` — reusable glassmorphic utility classes

---

## 💡 Application Flow

```
🌐 Browser Opens
      │
      ▼
📦 App.jsx loads → checks localStorage for saved notes & dark mode
      │
      ├─── 🔍 User types in Header search bar
      │         └── filteredNotes updates → NoteGrid re-renders
      │
      ├─── ✍️ User clicks NoteInput → expands → types → submits
      │         └── addNote() → notes array updates → saved to localStorage
      │
      ├─── 🃏 NoteCard hover → Edit icon clicked
      │         └── isEditing = true → inline editing → save → updateNote()
      │
      ├─── 🗑️ NoteCard hover → Trash icon clicked
      │         └── deleteNote(id) → note removed → localStorage updated
      │
      └─── 🌙 Dark mode toggle clicked
                └── darkMode flips → UI re-styles → preference saved to localStorage
```

---

## 📦 Dependencies

```json
{
  "dependencies": {
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "lucide-react": "latest"
  },
  "devDependencies": {
    "vite": "latest",
    "@vitejs/plugin-react": "latest",
    "tailwindcss": "^4.0.0",
    "eslint": "latest"
  }
}
```

---

## 🤝 Contributing

Contributions are welcome! Here's how to get involved:

1. **Fork** the repository
2. Create your feature branch: `git checkout -b feature/AmazingFeature`
3. Commit your changes: `git commit -m 'Add some AmazingFeature'`
4. Push to the branch: `git push origin feature/AmazingFeature`
5. Open a **Pull Request**

Please make sure your code follows the existing ESLint configuration and component structure.

---

## 📄 License

Distributed under the **MIT License**. See `LICENSE` for more information.

---

## 📬 Contact

<div align="center">

**Asma Channa**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/asma-channa)
[![GitHub](https://img.shields.io/badge/GitHub-Follow-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/YOUR_USERNAME)
[![Email](https://img.shields.io/badge/Email-Say_Hi!-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:your.email@example.com)

*Built with 💜 during internship at [Syntecxhub](https://syntecxhub.com)*

</div>

---

<div align="center">

⭐ **If you found BrainBoard useful, please consider giving it a star!** ⭐

*© 2025 BrainBoard — Powered by Asma Channa*

</div>

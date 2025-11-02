# 📖 Markdown Data Reader

A lightweight and flexible application built to **read and render data from Markdown (.md) files** — ideal for blogs, documentation systems, and content-driven websites.

---

## 🚀 Project Overview

This application is designed to fetch and display data stored inside Markdown files.  
It can be used to build static blogs, documentation sites, or portfolio pages without relying on a CMS.

The app parses `.md` files, extracts front matter metadata (like title, date, slug), and renders the Markdown content dynamically on the frontend.

---

## 🧩 Project Requirements

### Functional Requirements

- Read `.md` files from a local `/content` folder
- Parse front matter metadata (title, description, date, tags, etc.)
- Display Markdown content as HTML
- List and filter posts dynamically
- SEO-friendly URLs and metadata

### Technical Requirements

- **Framework:** Next.js 14
- **Markdown Parser:** gray-matter, remark, rehype
- **Styling:** Tailwind CSS
- **Deployment:** Vercel / Hostinger
- **File Structure:** Markdown files stored locally in `/content/`

---

## 🧠 Features

- Fetch and render Markdown content
- Display front matter data (title, date, author)
- SEO optimization with Next.js
- Supports code syntax highlighting
- Markdown to HTML conversion
- Lightweight and fast

---

## 🏗️ Project Structure

/src
├── app/ # Next.js app directory
├── components/ # Reusable UI components
├── lib/ # Utility functions (markdown parser, date formatter)
├── content/ # Markdown files (.md)
├── styles/ # Global styles (Tailwind)
└── public/ # Static assets

yaml
Copy code

Each Markdown file typically looks like this:

```markdown
---
title: "Understanding Next.js Markdown Parsing"
date: "2025-11-02"
tags: ["nextjs", "markdown", "tutorial"]
description: "Learn how to read and render Markdown files in a Next.js app."
---

# Introduction

Next.js makes it easy to build static pages using Markdown data...
⚙️ Installation & Setup
Prerequisites
Node.js (v18 or later)

npm or yarn

Steps
bash
Copy code

# Clone the repository

git clone https://github.com/TRISHAN00/markdown-data-reader.git

# Navigate to the project

cd markdown-data-reader

# Install dependencies

npm install

# Run the development server

npm run dev
Then open 👉 http://localhost:3000

🧩 Environment Variables
(Optional — only if you plan to fetch Markdown remotely)

env
Copy code
NEXT_PUBLIC_CONTENT_PATH=/content
🧪 Scripts
Command Description
npm run dev Run development server
npm run build Create production build
npm run start Start production server
npm run lint Run ESLint checks

📦 Dependencies
Package Purpose
gray-matter Parse front matter metadata
remark Convert Markdown to HTML
rehype Sanitize and enhance HTML
next Framework for rendering
tailwindcss Styling

📸 Example Output
Blog List Markdown Page

🧰 Technologies Used
Next.js 14 – Frontend framework

Gray-Matter – Extracts metadata from Markdown files

Remark / Rehype – Markdown to HTML conversion

Tailwind CSS – Styling

Vercel – Deployment platform

👨‍💻 Author
Trishan Saha
🌐 Portfolio
💼 LinkedIn
🐙 GitHub
📧 trishansaha43@gmail.com
```

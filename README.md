# Caleb — Data Analytics Portfolio

Personal portfolio site showcasing data analytics projects, built with Jekyll and deployed via GitHub Actions to GitHub Pages.

🔗 **[https://shazilazi.github.io/](https://shazilazi.github.io/)**

---

## About

A custom Jekyll site with no external theme — hand-built layouts, includes, and CSS.
Automatically built and deployed to GitHub Pages on every push to `main`.

<img width="1150" height="767" alt="Screenshot 2026-06-17 220049" src="https://github.com/user-attachments/assets/d93b034c-e9ec-48c2-b3c3-1390d288052f" />

## Features

- **CV download** — the About page sidebar has a "Download CV" button linking to `assets/files/caleb-trent-cv.pdf`. Replace that file with your real CV (same filename) to update it, or change the path via `site.author.cv` in `_config.yml`.
- **Project filtering** — the Projects page auto-generates a filter bar from every unique `category` used across `_projects/`. No extra config needed; add a project with a new category and a chip appears automatically.
- **Social preview image (Open Graph)** — `assets/images/og-image.png` is the default image shown when the site is shared on LinkedIn, WhatsApp, etc. It's wired up via `site.image` in `_config.yml` (used by the `jekyll-seo-tag` plugin). Individual pages or projects can override it by setting their own `image:` in front matter.

## Adding a project

Create a new file in `_projects/` named `your-project-name.md` with this front matter:

```yaml
---
layout: project
title: "Your Project Title"
summary: "One sentence describing what you built and why."
category: "Dashboard"        # e.g. Dashboard, EDA, Forecasting, Automation
date: 2024-01-01
featured: true               # show on homepage (max 3)
tools: [Python, SQL, Power BI]
link: https://github.com/...  # optional
---
```

Then write your project content below the `---` in Markdown.

## Structure
_config.yml        # site settings, author info, navigation

_layouts/          # page templates (default, project)

_includes/         # header and footer partials

_pages/            # about, projects, contact pages

_projects/         # one .md file per project

assets/css/        # all styles in style.css

assets/js/         # site behaviour (scroll effects, typewriter, filtering)

assets/images/     # og-image.png and other site images

assets/files/      # downloadable files, e.g. the CV PDF

.github/workflows/ # GitHub Actions build pipeline

## Built with

- [Jekyll](https://jekyllrb.com/)
- [GitHub Actions](https://github.com/features/actions)
- [GitHub Pages](https://pages.github.com/)
- IBM Plex Mono + Inter (Google Fonts)

# Caleb — Data Analytics Portfolio

Personal portfolio site showcasing data analytics projects, built with Jekyll and deployed via GitHub Actions to GitHub Pages.

🔗 **[https://shazilazi.github.io/](https://shazilazi.github.io/)**

---

## About

A custom Jekyll site with no external theme — hand-built layouts, includes, and CSS.
Automatically built and deployed to GitHub Pages on every push to `main`.

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

.github/workflows/ # GitHub Actions build pipeline

## Built with

- [Jekyll](https://jekyllrb.com/)
- [GitHub Actions](https://github.com/features/actions)
- [GitHub Pages](https://pages.github.com/)
- IBM Plex Mono + Inter (Google Fonts)

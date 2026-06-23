---
# layout: wraps this page in default.html
# title: appears in the browser tab as "Projects · Caleb"
# permalink: the exact URL — matches the href in your header nav
#            and the "All projects →" link on the homepage
layout: default
title: Projects
permalink: /projects/
---

<!-- style="border-bottom: none;" is an inline style override —
     normally .section has a border-bottom, but on this page it's
     the last element so the border isn't needed.
     Could also be done with a modifier class in CSS, but an
     inline override is fine for a one-off case like this. -->
<section class="section" style="border-bottom: none;">
  <div class="container">

    <div class="section__header">
      <!-- h1 here instead of h2 — this is the main heading of the page,
           so h1 is the correct choice for accessibility and SEO.
           On the homepage the section titles are h2 because the hero
           h1 is already the page's main heading. -->
      <h1 class="section__title">All projects</h1>
    </div>

    <!-- Same grid layout as the homepage featured projects section -->
    <div class="projects-grid">

      <!-- Loops through ALL projects in the _projects/ folder,
           not just featured ones. No limit — every project file
           you add to _projects/ automatically appears here. -->
      {% for project in site.projects %}

        <a href="{{ project.url }}" class="project-card">

          <span class="project-card__category">{{ project.category }}</span>
          <h2 class="project-card__title">{{ project.title }}</h2>
          <p class="project-card__summary">{{ project.summary }}</p>

          <div class="project-card__tools">
            {% for tool in project.tools %}
              <span class="tool-badge">{{ tool }}</span>
            {% endfor %}
          </div>

        </a>

      {% endfor %}
      <!-- When you add a new .md file to _projects/, Jekyll automatically
           includes it here on the next build — no changes needed to this file -->

    </div>
  </div>
</section>

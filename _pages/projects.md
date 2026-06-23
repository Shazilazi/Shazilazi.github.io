---
layout: default
title: Projects
permalink: /projects/
---

<section class="section" style="border-bottom: none;">
  <div class="container">
    <div class="section__header">
      <h1 class="section__title">All projects</h1>
    </div>
    <div class="projects-grid">
      {% for project in site.projects %}
        <a href="{{ project.url | relative_url }}" class="project-card">
          {% if project.image %}
            <div class="project-card__image">
              <img src="{{ project.image | relative_url }}" alt="{{ project.title }}" loading="lazy" />
            </div>
          {% endif %}
          <span class="project-card__category">{{ project.category | default: "Project" }}</span>
          <h2 class="project-card__title">{{ project.title }}</h2>
          <p class="project-card__summary">{{ project.summary }}</p>
          {% if project.tools %}
            <div class="project-card__tools">
              {% for tool in project.tools %}
                <span class="tool-badge">{{ tool }}</span>
              {% endfor %}
            </div>
          {% endif %}
        </a>
      {% endfor %}
    </div>
  </div>
</section>

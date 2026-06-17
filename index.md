---
layout: default
---

<!-- HERO -->
<section class="hero">
  <div class="container">
    <p class="hero__eyebrow">Data Analytics Portfolio</p>
    <h1 class="hero__title">Turning raw data into <em>clear decisions</em></h1>
    <p class="hero__sub">
      I'm {{ site.author.name }}, a data analyst based in {{ site.author.location }}.
      I specialise in exploratory analysis, dashboards, and communicating findings
      that actually get used.
    </p>
    <div class="hero__cta">
      <a href="/projects/" class="btn">View my work</a>
      <a href="/about/" class="btn" style="border-color: var(--border); color: var(--muted);">About me</a>
    </div>

    <div class="hero__stats">
      <div>
        <div class="stat__number">12+</div>
        <div class="stat__label">Projects completed</div>
      </div>
      <div>
        <div class="stat__number">5</div>
        <div class="stat__label">Tools & languages</div>
      </div>
      <div>
        <div class="stat__number">3</div>
        <div class="stat__label">Industries</div>
      </div>
    </div>
  </div>
</section>

<!-- FEATURED PROJECTS -->
<section class="section">
  <div class="container">
    <div class="section__header">
      <h2 class="section__title">Featured projects</h2>
      <a href="/projects/" style="font-size: 0.875rem; color: var(--muted);">All projects →</a>
    </div>
    <div class="projects-grid">
      {% assign featured = site.projects | where: "featured", true | limit: 3 %}
      {% for project in featured %}
        <a href="{{ project.url }}" class="project-card">
          <span class="project-card__category">{{ project.category }}</span>
          <h3 class="project-card__title">{{ project.title }}</h3>
          <p class="project-card__summary">{{ project.summary }}</p>
          <div class="project-card__tools">
            {% for tool in project.tools %}
              <span class="tool-badge">{{ tool }}</span>
            {% endfor %}
          </div>
        </a>
      {% endfor %}
    </div>
  </div>
</section>

<!-- SKILLS -->
<section class="section">
  <div class="container">
    <div class="section__header">
      <h2 class="section__title">Skills & tools</h2>
    </div>
    <div class="skills-grid">
      <div>
        <p class="skill-group__label">Languages</p>
        <div class="skill-group__items">
          <span class="tag">Python</span>
          <span class="tag">SQL</span>
          <span class="tag">R</span>
        </div>
      </div>
      <div>
        <p class="skill-group__label">Visualisation</p>
        <div class="skill-group__items">
          <span class="tag">Power BI</span>
          <span class="tag">Tableau</span>
          <span class="tag">Matplotlib</span>
          <span class="tag">Plotly</span>
        </div>
      </div>
      <div>
        <p class="skill-group__label">Data & tools</p>
        <div class="skill-group__items">
          <span class="tag">Pandas</span>
          <span class="tag">Excel</span>
          <span class="tag">BigQuery</span>
          <span class="tag">dbt</span>
        </div>
      </div>
      <div>
        <p class="skill-group__label">Methods</p>
        <div class="skill-group__items">
          <span class="tag">EDA</span>
          <span class="tag">A/B Testing</span>
          <span class="tag">Forecasting</span>
        </div>
      </div>
    </div>
  </div>
</section>

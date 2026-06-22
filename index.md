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
      <a href="{{ '/projects/' | relative_url }}" style="font-size: 0.875rem; color: var(--muted);">
        All projects →
      </a>
    </div>
    {% assign featured = site.projects | where: "featured", true %}
    <div class="projects-grid">
      {% if featured.size > 0 %}
        {% for project in featured limit:3 %}
          <a href="{{ project.url | relative_url }}" class="project-card">
            {% if project.image %}
              <div class="project-card__image">
                <img src="{{ project.image | relative_url }}" alt="{{ project.title }}" loading="lazy" />
              </div>
            {% endif %}
            <span class="project-card__category">
              {{ project.category | default: "Project" }}
            </span>
            <h3 class="project-card__title">{{ project.title }}</h3>
            <p class="project-card__summary">
              {{ project.summary }}
            </p>
            {% if project.tools %}
              <div class="project-card__tools">
                {% for tool in project.tools %}
                  <span class="tool-badge">{{ tool }}</span>
                {% endfor %}
              </div>
            {% endif %}
          </a>
        {% endfor %}
      {% else %}
        <p>No featured projects yet — check back soon.</p>
      {% endif %}
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
          <div class="skill-icon-item">
            <i class="devicon-python-plain colored"></i>
            <span>Python</span>
          </div>
          <div class="skill-icon-item">
            <i class="devicon-azuresqldatabase-plain colored"></i>
            <span>SQL</span>
          </div>
          <div class="skill-icon-item">
            <span class="tag">VBA</span>
          </div>
        </div>
      </div>
      <div>
        <p class="skill-group__label">Visualisation</p>
        <div class="skill-group__items">
          <!-- <div class="skill-icon-item">
            <i class="devicon-matplotlib-plain colored"></i>
            <span>Matplotlib</span>
          </div> -->
          <div class="skill-icon-item">
            <i class="devicon-plotly-plain colored"></i>
            <span>Plotly</span>
          </div>
          <div class="skill-icon-item">
            <i class="devicon-minitab-plain"></i>
            <span>Power BI</span>
          </div>
        </div>
      </div>
      <div>
        <p class="skill-group__label">Data & tools</p>
        <div class="skill-group__items">
          <div class="skill-icon-item">
            <i class="devicon-pandas-plain colored"></i>
            <span>Pandas</span>
          </div>
          <div class="skill-icon-item">
            <i class="devicon-azure-plain colored"></i>
            <span>Azure SQL</span>
          </div>
          <div class="skill-icon-item">
            <i class="devicon-github-plain colored"></i>
            <span>GitHub</span>
          </div>
        </div>
      </div>
      <div>
        <p class="skill-group__label">Environment</p>
        <div class="skill-group__items">
          <div class="skill-icon-item">
            <i class="devicon-jupyter-plain colored"></i>
            <span>Jupyter</span>
          </div>
          <div class="skill-icon-item">
            <i class="devicon-vscode-plain colored"></i>
            <span>VS Code</span>
          </div>
          <div class="skill-icon-item">
            <i class="devicon-anaconda-original colored"></i>
            <span>Anaconda</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

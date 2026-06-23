<!-- Front matter — tells Jekyll which layout to wrap this page in.
     Jekyll will insert this page's content into _layouts/default.html
     wherever it finds {{ content }} -->
---
layout: default
---

<!-- ============================================
     HERO SECTION
     The opening banner of the homepage.
     ============================================ -->
<section class="hero">
  <div class="container"> <!-- centres and constrains the width — defined in style.css -->

    <!-- Small label above the headline -->
    <p class="hero__eyebrow">Data Analytics Portfolio</p>

    <!-- Main headline — <em> wraps the accent-coloured phrase.
         The CSS strips the italic and colours it with --accent. -->
    <h1 class="hero__title">Turning raw data into <em>clear decisions</em></h1>

    <!-- Subtitle paragraph.
         {{ site.author.name }} and {{ site.author.location }} are Liquid tags —
         Jekyll replaces them with the values from _config.yml at build time. -->
    <p class="hero__sub">
      I'm {{ site.author.name }}, a data analyst based in {{ site.author.location }}.
      I specialise in exploratory analysis, dashboards, and communicating findings
      that actually get used.
    </p>

    <!-- CTA buttons row.
         The second button uses inline style to override the default accent border
         with a subtler --border colour, making it feel secondary. -->
    <div class="hero__cta">
      <a href="/projects/" class="btn">View my work</a>
      <a href="/about/" class="btn" style="border-color: var(--border); color: var(--muted);">About me</a>
    </div>

    <!-- Stats row — update these numbers to reflect your actual work -->
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

<!-- ============================================
     FEATURED PROJECTS SECTION
     Pulls projects from the _projects/ folder
     where featured: true is set in front matter.
     ============================================ -->
<section class="section">
  <div class="container">

    <div class="section__header">
      <h2 class="section__title">Featured projects</h2>
      <!-- | relative_url is a Jekyll filter — it prepends the baseurl if set.
           Safe to use even when baseurl is empty, as it is here. -->
      <a href="{{ '/projects/' | relative_url }}" style="font-size: 0.875rem; color: var(--muted);">
        All projects →
      </a>
    </div>

    <!-- Liquid: filters site.projects to only those with featured: true,
         stores the result in a variable called "featured" -->
    {% assign featured = site.projects | where: "featured", true %}

    <div class="projects-grid">

      <!-- Liquid: checks if any featured projects exist before rendering the grid.
           Avoids showing an empty grid if no projects are marked featured yet. -->
      {% if featured != empty %}

        <!-- Loops through featured projects, maximum 3 shown -->
        {% for project in featured limit:3 %}
          <!-- The whole card is a link to the project's individual page -->
          <a href="{{ project.url | relative_url }}" class="project-card">

            <!-- Only renders the image block if the project has an image set.
                 The " if " tag is Liquid — it checks the condition and skips
                 the block entirely if false, leaving no empty space in the HTML. -->
            {% if project.image %}
              <div class="project-card__image">
                <!-- loading="lazy" tells the browser to only load this image
                     when it's about to scroll into view — speeds up page load -->
                <img src="{{ project.image | relative_url }}" alt="{{ project.title }}" loading="lazy" />
              </div>
            {% endif %}

            <!-- | default: "Project" is a Liquid filter —
                 if category isn't set in the front matter, it falls back to "Project" -->
            <span class="project-card__category">
              {{ project.category | default: "Project" }}
            </span>

            <h3 class="project-card__title">{{ project.title }}</h3>

            <p class="project-card__summary">
              {{ project.summary }}
            </p>

            <!-- Only renders the tools row if tools are listed in the project's front matter -->
            {% if project.tools %}
              <div class="project-card__tools">
                <!-- Loops through each item in the tools array and renders a badge -->
                {% for tool in project.tools %}
                  <span class="tool-badge">{{ tool }}</span>
                {% endfor %}
              </div>
            {% endif %}

          </a>
        {% endfor %}

      {% else %}
        <!-- Shown only if no projects have featured: true yet -->
        <p>No featured projects yet — check back soon.</p>
      {% endif %}

    </div>
  </div>
</section>

<!-- ============================================
     SKILLS & TOOLS SECTION
     Static content — update the icons and labels
     to match your actual tools.
     ============================================ -->
<section class="section">
  <div class="container">

    <div class="section__header">
      <h2 class="section__title">Skills & tools</h2>
    </div>

    <!-- Four-column responsive grid — columns defined in style.css -->
    <div class="skills-grid">

      <!-- LANGUAGES GROUP -->
      <div>
        <p class="skill-group__label">Languages</p>
        <div class="skill-group__items">

          <!-- Each skill is a small card with an icon above a label.
               The <i> tag is used by Devicon — it's not italic text,
               it's an icon font element (like how Font Awesome works). -->
          <div class="skill-icon-item">
            <i class="devicon-python-plain colored"></i>
            <span>Python</span>
          </div>
          <div class="skill-icon-item">
            <i class="devicon-azuresqldatabase-plain colored"></i>
            <span>SQL</span>
          </div>
          <!-- VBA has no Devicon icon, so a plain tag badge is used instead -->
          <div class="skill-icon-item">
            <span class="tag">VBA</span>
          </div>

        </div>
      </div>

      <!-- VISUALISATION GROUP -->
      <div>
        <p class="skill-group__label">Visualisation</p>
        <div class="skill-group__items">

          <!-- HTML comments wrap the Matplotlib block — it's been
               commented out but kept in case you want to add it back.
               Anything between these markers is ignored by the browser. -->
          <!-- <div class="skill-icon-item">
            <i class="devicon-matplotlib-plain colored"></i>
            <span>Matplotlib</span>
          </div> -->

          <div class="skill-icon-item">
            <i class="devicon-plotly-plain colored"></i>
            <span>Plotly</span>
          </div>
          <!-- Note: devicon-minitab-plain is the wrong icon for Power BI —
               Minitab is a different statistics tool. Since Power BI has
               no Devicon icon, replace this with a plain tag instead:
               <span class="tag">Power BI</span> -->
          <div class="skill-icon-item">
            <i class="devicon-minitab-plain"></i>
            <span>Power BI</span>
          </div>

        </div>
      </div>

      <!-- DATA & TOOLS GROUP -->
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
          <!-- "colored" removed from GitHub icon — the brand colour is black,
               which would be invisible on the dark background -->
          <div class="skill-icon-item">
            <i class="devicon-github-plain"></i>
            <span>GitHub</span>
          </div>

        </div>
      </div>

      <!-- ENVIRONMENT GROUP -->
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
            <!-- anaconda-original is used here instead of anaconda-plain
                 because the "original" version includes the full colour logo -->
            <i class="devicon-anaconda-original colored"></i>
            <span>Anaconda</span>
          </div>

        </div>
      </div>

    </div>
  </div>
</section>

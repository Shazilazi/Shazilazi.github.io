---
# ============================================
# FRONT MATTER
# Everything between the --- lines is YAML —
# structured data Jekyll reads to build the page.
# None of this is shown directly as text on the page,
# but it's used by project.html to populate the
# header, badges, date, and image.
# ============================================

layout: project        # uses _layouts/project.html as the template

title: "Sales Dashboard & Forecasting"   # shown as the large h1 on the page
                                          # and in the browser tab

summary: "Built an end-to-end sales dashboard for a retail client, including
          a 12-week demand forecast using Python and Power BI."
# One sentence shown below the title — keep it concise and specific.
# This also appears on the project cards on the homepage and projects page.

category: "Dashboard"  # shown as the small badge above the title
                       # e.g. Dashboard, EDA, Automation, Forecasting

date: 2024-09-01       # used to display "September 2024" on the project page
                       # also controls the order projects appear if you sort by date
                       # format must be YYYY-MM-DD

featured: true         # set to true to show this on the homepage (max 3 shown)
                       # set to false or remove to only show on the projects page

tools: [Python, Power BI, SQL, pandas]
# Array of tool badges shown on the card and project page.
# Each item in square brackets becomes a separate badge.

link: https://github.com/yourusername/sales-dashboard
# Optional — renders a "View project →" button on the project page.
# Can link to GitHub, a live dashboard, a PDF report, anything.
# Remove this line entirely if there's no public link for a project.

# image: /assets/images/projects/sales-dashboard.png
# Optional — uncomment and set this to show a thumbnail on the card
# and a hero image at the top of the project page.
# Upload your image to assets/images/projects/ first.
---

## Overview
<!-- ## is a Markdown heading — Jekyll converts this to <h2> in HTML.
     Use ## for section headings throughout your project write-ups.
     The project title is already an h1, so start sections at h2. -->
Briefly describe the project here. What was the problem? Who was the
client or stakeholder? What did they need?

## The data
<!-- Each ## heading becomes a new section in the project body.
     Write in plain paragraphs — no HTML needed in .md files. -->
Where did the data come from? What shape was it in? What were the main
challenges with it (missing values, inconsistent formats, scale)?

## Approach
Walk through your methodology. What analysis did you do? What tools
and techniques did you choose and why?

<!-- Lines starting with - are Markdown bullet points.
     Jekyll converts these to <ul> and <li> tags automatically. -->
- Cleaned and normalised 3 years of transactional data from a legacy SQL database
- Built a rolling 12-week forecast using a simple exponential smoothing model
- Connected the output to a live Power BI dashboard refreshed daily via scheduled Python script

## Results
<!-- Be specific with numbers where you can — they're far more compelling
     than vague statements like "improved efficiency significantly" -->
What were the outcomes? Be specific where you can — numbers are compelling.

The dashboard reduced weekly reporting time from 4 hours to 20 minutes,
and the forecast achieved a mean absolute percentage error (MAPE) of 8.3%
over the first quarter of deployment.

## What I'd do differently
<!-- This section is optional but worth keeping — it shows self-awareness
     and maturity, which stands out to employers and clients. -->
This section is optional but shows maturity. If you were to do this
project again, what would you change?

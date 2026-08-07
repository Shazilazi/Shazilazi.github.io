---
layout: project
title: "Retail Data Analysis"
summary: "[One or two sentences: what retail dataset you analysed and what the project set out to answer — e.g. sales performance, customer behaviour, product/category trends.]"
category: "Data Analysis"
date: 2026-08-01
featured: true
priority: 1
published: true
sitemap: true
status: in-progress
tools: [Python, Pandas, Power BI, Power Query, DAX]
link: https://github.com/Shazilazi/retail-data-analysis

# Thumbnail shown on the project cards
image: /assets/images/projects/retail-data-analysis/cover.png
---

# Retail Data Analysis

> [One-line pitch — e.g. "An exploratory and reporting project analysing retail sales data to uncover trends in revenue, product performance, and customer purchasing behaviour."]

![Dashboard Overview](/assets/images/projects/retail-data-analysis/dashboard-overview.png)

---

# Overview

[2-4 sentences: where the dataset came from (e.g. a public retail sales dataset), why you chose it, and what you wanted to learn from it.]

Questions this project set out to answer:

- [e.g. Which product categories generate the most revenue?]
- [e.g. Are there seasonal or monthly sales patterns?]
- [e.g. Which customer segments or regions drive the most sales?]
- [e.g. What products are most frequently purchased together / most profitable?]

Since the underlying data is a fixed, point-in-time dataset (stored as CSV rather than refreshed from a live source), this project is structured as a completed analysis and reference piece rather than a continuously updated dashboard.

---

# Project Evolution

```text
Version 1
│
├── Raw CSV exploration in Python
└── Initial cleaning and data quality checks

        ↓

Version 2
│
├── Structured data cleaning and transformation
├── Feature engineering (e.g. derived columns, categories)
└── Early exploratory visualisations

        ↓

Current Version
│
├── Cleaned, model-ready dataset
├── Power BI dashboard for interactive reporting
├── Key metrics and trend analysis
└── Documented findings and insights
```

---

# Technology Stack

| Tool | Purpose |
|------|----------|
| Python | Data cleaning, exploration, and analysis |
| Pandas | Data wrangling and transformation |
| Power BI | Dashboard development and reporting |
| Power Query | Data cleaning and transformation |
| DAX | Measures and calculations |
| CSV | Static data storage (fixed, point-in-time dataset) |
| GitHub | Version control and project hosting |

---

# Data Collection

[Describe the dataset: source, size/shape, time period covered, and the raw fields available — e.g. transaction date, product, category, quantity, price, customer/region.]

Because the dataset is fixed once collected, no ongoing refresh pipeline was needed — the focus was on thorough cleaning and preparation rather than automation.

---

# Data Preparation

Key transformation steps included:

- [e.g. Handling missing or inconsistent values]
- [e.g. Standardising product/category names]
- [e.g. Correcting data types and date formats]
- [e.g. Removing duplicate transactions]
- [e.g. Creating derived fields, such as revenue or profit margin]

---

# Data Model

[Briefly describe the structure feeding the Power BI report — e.g. a transactions/fact table, a product dimension table, a date table, and any customer/region dimension.]

---

# Dashboard Pages

## Overview
[Key KPIs at a glance — e.g. total revenue, total units sold, average order value.]

## Sales Trends
[Time-based analysis — e.g. monthly/seasonal trends, growth over time.]

## Product Analysis
[Category and product-level breakdowns — e.g. top sellers, underperformers.]

## Customer / Regional Analysis
[If applicable — segment or geographic breakdowns.]

---

# Key Metrics / DAX Measures

- [e.g. Total Revenue]
- [e.g. Total Units Sold]
- [e.g. Average Order Value]
- [e.g. Revenue by Category]
- [e.g. Month-over-Month Growth]

---

# Results

[2-4 sentences on what the analysis revealed — the standout findings, e.g. which categories drove revenue, any surprising patterns.]

---

# Lessons Learned

- [e.g. What you learned about cleaning real-world retail data]
- [e.g. Any challenges with the dataset and how you solved them]
- [e.g. What you'd do differently next time]

---

# Future Improvements

- [e.g. Extend analysis with a live/refreshable data source]
- [e.g. Add forecasting or predictive elements]
- [e.g. Deeper customer segmentation]

---

# Gallery

## Full Dashboard
![Dashboard](/assets/images/projects/retail-data-analysis/gallery-dashboard.png)

## Overview Page
![Overview](/assets/images/projects/retail-data-analysis/gallery-overview.png)

## Product Analysis
![Product Analysis](/assets/images/projects/retail-data-analysis/gallery-product-analysis.png)

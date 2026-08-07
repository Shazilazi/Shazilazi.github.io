---
layout: project
title: "Finance Data Analysis"
summary: "[One or two sentences: what financial dataset you analysed and what the project set out to answer — e.g. spending trends, market/stock performance, financial ratios.]"
category: "Data Analysis"
date: 2026-08-01
featured: true
priority: 1
published: true
sitemap: true
status: in-progress
tools: [Python, Pandas, Power BI, Power Query, DAX]
link: https://github.com/Shazilazi/finance-data-analysis

# Thumbnail shown on the project cards
image: /assets/images/projects/finance-data-analysis/cover.png
---

# Finance Data Analysis

> [One-line pitch — e.g. "An exploratory and reporting project analysing financial data to uncover trends in performance, risk, and key financial indicators."]

![Dashboard Overview](/assets/images/projects/finance-data-analysis/dashboard-overview.png)

---

# Overview

[2-4 sentences: where the dataset came from, why you chose it, and what you wanted to learn from it.]

Questions this project set out to answer:

- [e.g. How have key metrics trended over the period covered?]
- [e.g. Which categories/accounts/assets contributed most to performance?]
- [e.g. Are there notable patterns, outliers, or risk indicators in the data?]
- [e.g. How do actuals compare against a benchmark, budget, or prior period?]

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
├── Feature engineering (e.g. derived metrics/ratios)
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

[Describe the dataset: source, size/shape, time period covered, and the raw fields available — e.g. date, account/category, transaction type, amount.]

Because the dataset is fixed once collected, no ongoing refresh pipeline was needed — the focus was on thorough cleaning and preparation rather than automation.

---

# Data Preparation

Key transformation steps included:

- [e.g. Handling missing or inconsistent values]
- [e.g. Standardising category/account names]
- [e.g. Correcting data types and date formats]
- [e.g. Removing duplicate records]
- [e.g. Creating derived fields, such as ratios or running totals]

---

# Data Model

[Briefly describe the structure feeding the Power BI report — e.g. a transactions/fact table, a category dimension table, a date table.]

---

# Dashboard Pages

## Overview
[Key KPIs at a glance — e.g. total value, net position, period-over-period change.]

## Trend Analysis
[Time-based analysis — e.g. monthly/quarterly/annual trends.]

## Category / Account Breakdown
[Category or account-level breakdowns — e.g. largest contributors, biggest movers.]

## Comparative Analysis
[If applicable — actual vs benchmark/budget, or period-over-period comparisons.]

---

# Key Metrics / DAX Measures

- [e.g. Total Value]
- [e.g. Net Change]
- [e.g. Value by Category]
- [e.g. Period-over-Period Growth]
- [e.g. Running Total]

---

# Results

[2-4 sentences on what the analysis revealed — the standout findings and any key takeaways.]

---

# Lessons Learned

- [e.g. What you learned about working with financial data]
- [e.g. Any challenges with the dataset and how you solved them]
- [e.g. What you'd do differently next time]

---

# Future Improvements

- [e.g. Extend analysis with a live/refreshable data source]
- [e.g. Add forecasting or predictive elements]
- [e.g. Deeper segmentation or ratio analysis]

---

# Gallery

## Full Dashboard
![Dashboard](/assets/images/projects/finance-data-analysis/gallery-dashboard.png)

## Overview Page
![Overview](/assets/images/projects/finance-data-analysis/gallery-overview.png)

## Trend Analysis
![Trend Analysis](/assets/images/projects/finance-data-analysis/gallery-trend-analysis.png)

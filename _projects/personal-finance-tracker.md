---
layout: project
title: "Personal Budget Dashboard"
summary: "Designed and built a personal finance reporting solution in Power BI using Google Forms and Google Sheets as a lightweight data pipeline to track household income, expenses, budgets, and spending trends."
category: "Dashboard"
date: 2026-01-01
featured: true
tools: [Power BI, Power Query, DAX, Google Sheets, Google Forms]
link: https://github.com/Shazilazi/budget-dashboard

# Thumbnail shown on the project cards
image: /assets/images/projects/budget-dashboard/cover.png
---

# Personal Budget Dashboard

> An interactive Power BI dashboard developed to help my household track income, expenses, budgets, and savings through a practical, easy-to-maintain reporting solution.

![Dashboard Overview](/assets/images/projects/budget-dashboard/dashboard-overview.png)

---

# Overview

This project began as a simple spreadsheet used to monitor household income and expenses. Initially, only a handful of spending categories were tracked, which was sufficient for day-to-day budgeting.

As more historical data became available, I wanted to answer more meaningful questions:

- Where is most of our money being spent?
- Which expenses are increasing over time?
- Are we staying within our monthly budgets?
- How much are we saving each month?
- Which categories have the greatest impact on our finances?

Rather than continually expanding the spreadsheet, I redesigned the solution into a fully interactive Power BI dashboard supported by Google Forms and Google Sheets.

Although created for personal use, the project follows many of the same principles used in professional business intelligence projects, including structured data collection, data modelling, reusable calculations, and interactive reporting.

---

# Project Evolution

One of the most rewarding aspects of this project has been watching it evolve alongside our family's needs.

```text
Version 1
│
├── Simple income tracker
├── Simple expense tracker
└── A few broad spending categories

        ↓

Version 2
│
├── Monthly reporting
├── Improved categorisation
├── Historical trend analysis
└── Better visualisations

        ↓

Current Version
│
├── Three-level category hierarchy
├── Monthly & lifetime reporting
├── Budget monitoring
├── Savings analysis
├── Interactive filtering
├── Running totals
└── Detailed spending breakdowns
```

The dashboard continues to evolve as new reporting requirements arise, making it a living project rather than a one-time exercise.

---

# Technology Stack

| Tool | Purpose |
|------|----------|
| Power BI | Dashboard development and reporting |
| Power Query | Data cleaning and transformation |
| DAX | Measures and calculations |
| Google Forms | Transaction capture |
| Google Sheets | Data storage |
| GitHub | Version control and project hosting |

---

# Data Collection

Transactions are entered manually through a Google Form, making it easy to capture purchases from a mobile phone or desktop without editing spreadsheets directly.

Google Forms automatically stores each submission in Google Sheets, which serves as the primary data source for Power BI.

Each expense record contains:

- Transaction date
- Description
- Amount
- Expense category
- Subcategory
- Third-level category

Income records use a simpler structure with a single income source category.

![Google Form](/assets/images/projects/budget-dashboard/google-form.png)

---

# Category Structure

To make reporting more meaningful, expenses are organised into a three-level hierarchy.

Example:

```text
Food
    └── Groceries
            ├── Meat
            ├── Vegetables
            └── Household Items

Transport
    └── Fuel
            ├── Petrol
            └── Diesel

Entertainment
    └── Streaming
            ├── Netflix
            └── Disney+
```

This allows spending to be analysed from a high-level category right down to specific expense types without duplicating data.

---

# Data Model

The dashboard uses a simple relational model designed to support filtering, drill-through, and time-based reporting.

The model consists of:

- Transaction table
- Date table
- Category hierarchy
- Budget information

This structure keeps calculations efficient while allowing users to drill from summary information into individual spending categories.

![Data Model](/assets/images/projects/budget-dashboard/data-model.png)

---

# Data Preparation

Power Query performs the data transformation before it reaches the reporting layer.

Key transformation steps include:

- Standardising category names
- Applying correct data types
- Formatting dates
- Removing duplicate records
- Cleaning inconsistent entries
- Preparing data for the model

![Power Query](/assets/images/projects/budget-dashboard/power-query.png)

---

# Dashboard Pages

## Executive Overview

Provides a snapshot of overall financial health.

Features include:

- Total Income
- Total Expenses
- Net Position
- Savings
- Monthly Summary
- Budget Status

![Executive Overview](/assets/images/projects/budget-dashboard/page-overview.png)

---

## Income Analysis

Shows where household income originates and how it changes over time.

Includes:

- Monthly income trends
- Income by source
- Annual comparisons
- Running totals

![Income Analysis](/assets/images/projects/budget-dashboard/page-income.png)

---

## Expense Analysis

The primary reporting page focuses on household spending.

Users can analyse expenses by:

- Category
- Subcategory
- Third-level category
- Month
- Year

Visualisations include:

- Category breakdowns
- Monthly spending trends
- Largest expenses
- Historical comparisons

![Expense Analysis](/assets/images/projects/budget-dashboard/page-expenses.png)

---

## Budget Tracking

Compares planned spending against actual expenditure.

Includes:

- Budget vs Actual
- Remaining Budget
- Overspend Indicators
- Budget Utilisation

![Budget Tracking](/assets/images/projects/budget-dashboard/page-budget.png)

---

## Savings Analysis

Tracks overall financial progress.

Visualisations include:

- Savings trend
- Income vs Expenses
- Monthly savings
- Running balance

![Savings Analysis](/assets/images/projects/budget-dashboard/page-savings.png)

---

# Key DAX Measures

Some of the calculations used throughout the dashboard include:

- Total Income
- Total Expenses
- Net Position
- Running Balance
- Monthly Income
- Monthly Expenses
- Savings
- Budget Remaining
- Budget Variance
- Average Monthly Spend

Future versions will include forecasting measures and predictive budgeting.

![DAX Measures](/assets/images/projects/budget-dashboard/dax-measures.png)

---

# Dashboard Design

The dashboard was designed around a few core principles:

- Keep navigation simple.
- Surface important KPIs immediately.
- Allow users to drill into spending behaviour.
- Minimise the effort required to review monthly finances.
- Keep the design clean and uncluttered.

---

# Results

Although this project was developed for personal use, it has become the primary tool my family uses to manage household finances.

The dashboard provides:

- A single source of truth for household finances.
- Clear visibility of spending habits.
- Budget monitoring across multiple categories.
- Historical analysis of income and expenses.
- Interactive reporting that reduces monthly financial reviews to just a few minutes.

More importantly, the project demonstrates how a simple reporting requirement can evolve into a structured business intelligence solution through iterative development.

---

# Lessons Learned

Working on this project reinforced several important principles:

- Good reporting begins with good data capture.
- Investing time in a logical category structure makes future analysis significantly easier.
- Small iterative improvements often deliver greater long-term value than attempting to build everything upfront.
- Building something that solves a real problem encourages continuous refinement and learning.

---

# Future Improvements

Planned enhancements include:

- Automatic bank transaction imports.
- AI-assisted transaction categorisation.
- Forecasting future spending using historical trends.
- Savings goal tracking.
- Investment portfolio reporting.
- Household cash flow forecasting.
- Scheduled Power BI refreshes.
- Mobile-optimised dashboard layouts.
- Automated alerts when spending exceeds budget thresholds.

---

# Gallery

## Full Dashboard

![Dashboard](/assets/images/projects/budget-dashboard/gallery-dashboard.png)

## Executive Overview

![Overview](/assets/images/projects/budget-dashboard/gallery-overview.png)

## Expense Analysis

![Expenses](/assets/images/projects/budget-dashboard/gallery-expenses.png)

## Budget Tracking

![Budget](/assets/images/projects/budget-dashboard/gallery-budget.png)

## Data Model

![Model](/assets/images/projects/budget-dashboard/gallery-model.png)

## Power Query

![Power Query](/assets/images/projects/budget-dashboard/gallery-power-query.png)

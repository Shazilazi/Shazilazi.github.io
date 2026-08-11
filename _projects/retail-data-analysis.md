---
layout: project
title: "Retail Data Analysis"
summary: "An analysis of 390K+ transactions from a UK-based online retailer, covering revenue trends, customer segmentation, churn prediction, and product cross-sell patterns, built for Power BI reporting."
category: "Data Analysis"
date: 2026-08-01
featured: true
priority: 1
published: true
sitemap: true
status: in-progress
tools: [Python, Pandas, Power BI, Power Query, DAX]
link: https://github.com/Shazilazi/retail-project

# Thumbnail shown on the project cards
image: /assets/images/projects/retail-data-analysis/cover.png
---

# Retail Data Analysis

> An exploratory and predictive analysis of a UK online retailer's transaction history, uncovering revenue trends, customer segments, churn risk, and product cross-sell patterns, and preparing the results for an interactive Power BI report.

![Dashboard Overview](/assets/images/projects/retail-data-analysis/dashboard-overview.png)

---

# Overview

This project uses the **Online Retail II** dataset (UCI Machine Learning Repository), a real transaction log from a UK-based online retailer selling mostly all-occasion giftware, largely to wholesale customers. I chose it because it's messy in realistic ways — cancellations, missing customer IDs, inconsistent entries — which made it a genuine test of a full cleaning-to-reporting pipeline rather than a pre-cleaned toy dataset.

Questions this project set out to answer:

- Which products and countries generate the most revenue, and how concentrated is that revenue?
- Are there seasonal, weekly, or time-of-day sales patterns worth planning around?
- Which customers are most valuable, and which are at risk of churning?
- Which products get purchased together, and how could that inform bundling or cross-sell?

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

The dataset covers **13 months of transactions (December 2010 – December 2011)** from a UK-based online retailer. After cleaning, it contains **392,692 transaction line items** across **18,532 invoices**, **4,338 unique customers**, **3,665 unique products**, and **37 countries**. Raw fields include invoice number, product (stock code) and description, quantity, invoice date, unit price, customer ID, and country.

Because the dataset is fixed once collected, no ongoing refresh pipeline was needed — the focus was on thorough cleaning and preparation rather than automation.

---

# Data Preparation

Key transformation steps included:

- Splitting out cancelled orders (invoice numbers prefixed "C") into a separate returns table instead of just discarding them, so return patterns could be analysed on their own
- Dropping transactions with no Customer ID, since they can't be attributed to a specific buyer
- Removing rows with zero or negative quantity/price (data entry errors and adjustments)
- Removing exact duplicate rows
- Standardising column names and data types across the two versions of the source file
- Engineering derived fields: line-level revenue, calendar breakdowns (year, month, weekday, hour), and behavioural features (recency, frequency, monetary value, customer tenure, product variety) used later for segmentation and churn modelling

---

# Data Model

The core of the model is a **Transactions fact table** at line-item grain (one row per product per invoice), joined to a **Date table** in Power BI for time intelligence. Sitting alongside it are a set of pre-aggregated tables built in Python that carry the heavier analytical logic: monthly revenue, top products, revenue by country, an RFM-scored customer table, a customer lifetime value table, cohort retention, returns by month/product, a 6-month revenue forecast, market basket association rules, and churn risk scores per customer. Power BI's job is visualization and light DAX measures on top of these; the RFM scoring, cohort math, forecasting, and churn scoring are all done upstream in Python.

---

# Dashboard Pages

## Overview
KPI cards for total revenue (**£8.89M**), average order value (**£479.56** per invoice), 4,338 unique customers, and 3,665 unique products, plus a country map — the UK accounts for **82% of revenue (£7.29M)**, with the Netherlands, Ireland, Germany, France, and Australia as the next largest markets.

## Sales Trends
Monthly revenue climbs from **£570K in December 2010 to a peak of £1.16M in November 2011**, with a clear autumn/holiday build-up from September onward. Weekly patterns show **no trading at all on Saturdays** and **Thursday as the strongest day (£1.97M)**; almost all activity happens between **9am and 3pm**. A simple linear forecast projects continued growth into the low-£1M/month range through mid-2012 — though with only 13 months of history, this trend line can't yet account for the seasonal dip seen in Jan–Feb 2011, so it should be read as a directional estimate rather than a precise prediction.

## Product Analysis
"Paper Craft, Little Birdie" (£168K) and the "Regency Cakestand 3 Tier" (£142K) are the top two products by revenue. Just **21% of products drive 80% of revenue** — a fairly concentrated catalogue. The market basket analysis surfaced strong, intuitive cross-sell pairs: Dolly Girl and Spaceboy lunch boxes are bought together far more than chance would suggest (lift ≈ 18), as are matching colourways of the Bakelike alarm clocks and Regency teacup sets (lift 11–16) — a natural case for "customers who bought this also bought" bundling.

## Customer / Regional Analysis
RFM segmentation splits the customer base into **Champions (1,267), At Risk (991), Potential Loyalists (935), Loyal Customers (845), and Lost/Hibernating (300)**. Champions carry an estimated annual CLV of **£7,706**, more than 4x the £1,934 for Lost/Hibernating customers. Revenue is similarly concentrated on the customer side — **26% of customers drive 80% of revenue**. A trained churn model (see Results) scores the full customer base as **1,103 High Risk, 1,841 Medium Risk, and 1,394 Low Risk**, giving a prioritised list for retention outreach.

---

# Key Metrics / DAX Measures

- Total Revenue
- Total Units Sold
- Average Order Value
- Revenue by Country / Product
- Month-over-Month Growth
- Customer RFM Segment
- Estimated Annual Customer Lifetime Value
- Churn Probability / Risk Band
- Return Rate

---

# Results

The business is heavily UK-concentrated (82% of revenue) and revenue is concentrated in both products (21% of SKUs drive 80% of revenue) and customers (26% of customers drive 80% of revenue) — classic Pareto behaviour, useful for prioritising inventory and account management. The return rate came out at **6.4% of gross revenue (£611K)**, with December the worst month for returns by some margin. For churn prediction, a Logistic Regression and Random Forest were trained on features built from an earlier time window and labelled using real future purchasing behaviour (avoiding target leakage): Logistic Regression reached **67.4% accuracy / 0.73 ROC-AUC**, Random Forest reached **64.1% accuracy / 0.72 ROC-AUC** but with notably higher recall (72% vs. 65%), meaning it catches more of the customers who actually go on to churn at the cost of more false positives. Feature importance showed **Monetary value, purchase quantity, and frequency mattered more to the model than recency alone** — a customer's depth of spend was a stronger churn signal than how recently they last bought.

---

# Lessons Learned

- Cancelled orders needed to be handled as their own analytical category (returns), not just discarded — dropping them silently would have hidden a real 6.4% revenue leakage
- Building churn labels from a genuinely held-out future window (rather than a recency threshold on the same data used for features) was essential to avoid a model that just re-learns its own label
- A "no Saturday trading" pattern in the weekday breakdown looked like a data quality issue at first, but turned out to be a real business hour pattern worth flagging rather than fixing
- With only 13 months of history, proper seasonal decomposition (which needs 24+ months) wasn't possible — a reminder to be upfront about what a dataset's time span can and can't support

---

# Future Improvements

- Extend the churn model with gradient boosting (e.g. XGBoost/LightGBM) and compare against the current Logistic Regression / Random Forest baseline
- Revisit the revenue forecast with a proper seasonal model (e.g. SARIMA) once more months of data are available
- Turn the market basket rules into an actual bundling/cross-sell recommendation page
- Add profit margin analysis if cost data becomes available, rather than revenue alone

---

# Gallery

## Full Dashboard
![Dashboard](/assets/images/projects/retail-data-analysis/gallery-dashboard.png)

## Overview Page
![Overview](/assets/images/projects/retail-data-analysis/gallery-overview.png)

## Product Analysis
![Product Analysis](/assets/images/projects/retail-data-analysis/gallery-product-analysis.png)

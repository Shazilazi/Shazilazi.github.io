---
layout: project
title: "Finance Data Analysis"
summary: "An analysis of 31,500+ loan applications to identify what drives credit default risk, using statistical testing and machine learning (Logistic Regression and Random Forest) to score every loan with a predicted default probability."
category: "Data Analysis"
date: 2026-08-01
featured: true
priority: 1
published: true
sitemap: true
status: in-progress
tools: [Python, Pandas, scikit-learn, SciPy, Power BI, Power Query, DAX]
link: https://github.com/Shazilazi/finance-data-analysis

# Thumbnail shown on the project cards
image: /assets/images/projects/finance-data-analysis/cover.png
---

# Finance Data Analysis

> A credit risk analysis and reporting project combining statistical testing and machine learning to identify which borrower and loan characteristics actually predict default — then scoring every loan with a model-based risk rating.

![Dashboard Overview](/assets/images/projects/finance-data-analysis/dashboard-overview.png)

---

# Overview

This project analyses a public credit risk dataset of loan applications, covering borrower demographics (age, income, home ownership, employment length), loan characteristics (amount, interest rate, grade, purpose), and credit history, to understand what separates loans that default from loans that don't — and to build a model that can predict default risk on a loan-by-loan basis.

Questions this project set out to answer:

- Which borrower and loan characteristics are statistically associated with default, and which aren't?
- How much does loan grade alone explain default risk?
- Can a machine learning model predict default better than simple rules, and how much better?
- Which segments (loan purpose, home ownership, age/income bands) carry the most risk?

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
├── Feature engineering (risk bands, debt-to-income, composite risk score)
└── Early exploratory visualisations

        ↓

Current Version
│
├── Statistical significance testing on every feature
├── Logistic Regression + Random Forest models predicting default
├── Every loan scored with a predicted default probability and risk tier
├── Cleaned, model-ready dataset exported for Power BI
├── Power BI dashboard for interactive reporting
└── Documented findings and insights
```

---

# Technology Stack

| Tool | Purpose |
|------|----------|
| Python | Data cleaning, exploration, statistical testing, and modeling |
| Pandas | Data wrangling and transformation |
| scikit-learn | Logistic Regression and Random Forest classification models |
| SciPy | Statistical significance testing (t-tests, chi-square) |
| Power BI | Dashboard development and reporting |
| Power Query | Data cleaning and transformation |
| DAX | Measures and calculations |
| CSV | Static data storage (fixed, point-in-time dataset) |
| GitHub | Version control and project hosting |

---

# Data Collection

The dataset is a public credit risk dataset of roughly 32,500 loan applications, each recording borrower details (age, income, home ownership, employment length), loan details (amount, interest rate, grade, purpose), credit history length, whether the borrower has a prior default on file, and the outcome — whether the loan defaulted (loan_status).

Because the dataset is fixed once collected, no ongoing refresh pipeline was needed — the focus was on thorough cleaning, statistical testing, and model-building rather than automation.

---

# Data Preparation

Key transformation steps included:

- Removing duplicate records and clearly invalid rows (e.g. ages over 100, employment lengths over 60 years), bringing the dataset from ~32,500 to 31,522 usable rows
- Filling missing employment length values with the overall median (2.75% of rows affected)
- Filling missing interest rate values with the median *for that loan grade* rather than a global median, since rate is driven heavily by grade (9.56% of rows affected)
- Flagging statistical outliers (via the IQR method) on income, loan amount, and employment length as a separate column rather than deleting them — about 10.8% of loans were flagged, kept in the data, and left filterable in Power BI
- Engineering age, income, credit-history, and employment-length bands for segment-level reporting
- Calculating debt-to-income percentage and an income-to-loan ratio
- Building a transparent, rule-based baseline risk score (0–100) from grade, debt-to-income, prior default flag, and credit history, to sit alongside the ML-based score for comparison

---

# Data Model

The report is built around one central loan-level table (`credit_risk_cleaned`), where each row is a single loan application with its cleaned fields, engineered bands, baseline risk score, and model-predicted default probability and risk tier. This is supported by pre-aggregated summary tables — by loan grade, loan purpose, home ownership, age × income band, and predicted risk tier — for visuals that don't need row-level detail. No date table was needed, since the dataset is a single point-in-time snapshot rather than a transaction log.

---

# Dashboard Pages

## Overview
Key portfolio KPIs at a glance: total loans, overall default rate, average interest rate, average loan amount, and the split of loans across predicted risk tiers.

## Borrower Risk Profile
Default rate broken down by age band, income band, home ownership, and employment length — where the sharpest differences by borrower profile show up.

## Loan Purpose & Pricing
Default rate and volume by loan purpose (`loan_intent`), and how interest rate and loan amount vary by loan grade.

## Model Risk Scoring
Predicted risk tier (Low / Medium / High) compared against actual default rate per tier, plus the model's feature importance ranking — a calibration check showing how well the model's risk tiers line up with what actually happened.

---

# Key Metrics / DAX Measures

- Total Loans
- Overall Default Rate %
- Average Interest Rate
- Average Loan Amount
- Default Rate by Grade
- Loans by Predicted Risk Tier
- Actual Default Rate by Predicted Risk Tier
- Average Predicted Default Probability

---

# Results

**Overall default rate:** 21.6% across 31,522 loans.

**Grade is the single strongest lever on risk, and it isn't close.** Default rate rises almost in a straight staircase from Grade A (9.6%) through Grade G (98.4%):

| Grade | Default Rate |
|-------|--------------|
| A | 9.6% |
| B | 16.0% |
| C | 20.3% |
| D | 58.8% |
| E | 64.3% |
| F | 70.3% |
| G | 98.4% |

**Every feature tested was statistically significant.** All 11 borrower and loan features (age, income, employment length, loan amount, interest rate, debt-to-income, credit history length, home ownership, loan grade, loan purpose, and prior default on file) showed a statistically significant relationship with default (p < 0.05, t-tests for numeric features, chi-square for categorical). Loan grade (χ² = 5,550) and prior default on file (χ² = 1,035) were the strongest categorical signals; interest rate (t = 60.5) and debt-to-income (t = 58.0) were the strongest numeric signals.

**Home ownership is a strong proxy for stability.** Renters and the "other" category default at ~31%, more than four times the rate of borrowers who own their home outright (6.9%), with mortgage holders in between (12.5%).

**Loan purpose matters, but less dramatically.** Debt consolidation (28.5%) and medical loans (26.6%) default most often; venture (14.7%) and education loans (17.0%) default least.

## Model Performance

Two models were trained to predict default from the borrower and loan features, evaluated on a held-out 25% test set:

| Model | Accuracy | Precision | Recall | F1 | ROC-AUC |
|-------|----------|-----------|--------|-----|---------|
| Logistic Regression | 81.4% | 54.8% | 78.2% | 64.5% | 87.1% |
| Random Forest | 89.3% | 74.3% | 77.3% | 75.8% | 92.1% |

The Random Forest outperformed Logistic Regression on every metric. The gap is most pronounced in precision (74.3% vs 54.8%): both models catch a similar share of actual defaults (recall ~77-78%), but the Random Forest does it with far fewer false alarms — meaning fewer good loans get incorrectly flagged as risky.

**What drives the model's predictions:** the top three features — debt-to-income ratio (loan_percent_income, 26.5% importance), interest rate (18.4%), and income (14.4%) — account for roughly 59% of the Random Forest's decision-making. Loan grade D and renting status were the next most influential, consistent with the segment-level findings above.

**The predicted risk tiers are well calibrated.** Splitting loans into Low / Medium / High predicted risk produced actual default rates of 0.25%, 5.7%, and 55.9% respectively — a clean, monotonic increase, which means the model's risk tiering is trustworthy enough to drive real filtering or decision rules rather than just being a black-box score.

---

# Lessons Learned

- Grade-conditional imputation (filling missing interest rate by loan grade median rather than a global median) produced more realistic values than a naive fill, since rate is tightly coupled to grade
- Flagging outliers instead of dropping them preserved the full dataset while still giving Power BI a clean way to filter them in or out
- Accuracy alone is misleading on an imbalanced target (21.6% default rate) — precision and recall told a much more useful story about the tradeoffs between the two models
- Running statistical tests before modeling built useful intuition for which features would end up mattering to the model, and mostly confirmed it

---

# Future Improvements

- Test gradient boosting models (XGBoost/LightGBM) to see if they lift performance further past the Random Forest
- Tune the classification threshold rather than using the default 0.5 cutoff, since the precision/recall tradeoff has real consequences in a credit decisioning context
- Add per-loan explainability (e.g. SHAP values) alongside the global feature importance ranking
- If a dated/vintage version of the dataset becomes available, add a time-based trend page to track how default rates shift over time

---

# Gallery

## Full Dashboard
![Dashboard](/assets/images/projects/finance-data-analysis/gallery-dashboard.png)

## Overview Page
![Overview](/assets/images/projects/finance-data-analysis/gallery-overview.png)

## Model Risk Scoring
![Model Risk Scoring](/assets/images/projects/finance-data-analysis/gallery-model-risk-scoring.png)

---
layout: project
title: "Magic: The Gathering Collection Tracker"
summary: "Built a Python-powered data pipeline and Power BI dashboard to track the value of my personal Magic: The Gathering card collection over time, using the Scryfall and MTGJSON APIs."
category: "Dashboard"
date: 2026-07-01
featured: true
tools: [Python, Scryfall API, MTGJSON, Power BI, Power Query, DAX]
link: https://github.com/YOUR-USERNAME/mtg-collection-tracker

# Thumbnail shown on the project cards
image: /assets/images/projects/mtg-collection-tracker/cover.png
---

# Magic: The Gathering Collection Tracker

> A Python-powered Power BI dashboard built to track the value of my personal Magic: The Gathering collection over time, using live card data and historical pricing.

![Dashboard Overview](/assets/images/projects/mtg-collection-tracker/dashboard-overview.png)

---

# Overview

As a Magic: The Gathering player, I wanted a simple way to keep track of my own card collection and understand its overall value. This project started as a basic record of the valuable cards in my collection, just enough to get a rough sense of what it was worth.

From there, it grew into something more structured:

- Where is most of my collection's value concentrated?
- How has the value of my collection changed over time?
- Which cards are gaining or losing value?
- How does my collection break down by set, rarity, or card type?

Rather than manually updating card prices, I built a small set of Python scripts to pull card data and pricing directly from public APIs, feeding a Power BI dashboard that tracks collection value over time.

---

# Project Evolution

```text
Version 1
│
└── Manual record of valuable cards in my collection

        ↓

Version 2
│
├── Python script using the Scryfall API
└── Automated retrieval of card information

        ↓

Current Version
│
├── Python script using the MTGJSON API for historical pricing
├── Monthly Scryfall data refresh
├── Collection value tracked over time
└── Power BI dashboard with basic analytics
```

The project is still evolving, and further analytics will be added as I explore more of what the data can show.

---

# Technology Stack

| Tool | Purpose |
|------|----------|
| Python | Data collection scripts |
| Scryfall API | Card information and metadata |
| MTGJSON | Historical card pricing |
| Power BI | Dashboard development and reporting |
| Power Query | Data cleaning and transformation |
| DAX | Measures and calculations |
| GitHub | Version control and project hosting |

---

# Data Collection

Two Python scripts handle the data collection side of the project:

**Scryfall script**
Pulls up-to-date card information (name, set, rarity, type, and other metadata) for every card in my collection. This script is designed to be run once a month to keep card details current.

**MTGJSON script**
Retrieves historical price data for each card, allowing the value of the collection to be tracked over time rather than as a single snapshot.

Together, these scripts form a lightweight data pipeline that feeds the Power BI report.

![Data Collection Scripts](/assets/images/projects/mtg-collection-tracker/data-collection.png)

---

# Data Model

The dashboard uses a simple relational model built around the collection and its pricing history.

The model consists of:

- Collection/card table
- Price history table
- Set and rarity reference data
- Date table

This structure supports drilling from overall collection value down into individual cards.

![Data Model](/assets/images/projects/mtg-collection-tracker/data-model.png)

---

# Dashboard Pages

## Collection Overview

Provides a snapshot of the collection as a whole.

Features include:

- Total collection value
- Card count
- Value by set
- Value by rarity

![Collection Overview](/assets/images/projects/mtg-collection-tracker/page-overview.png)

---

## Value Over Time

Tracks how the overall collection value changes month to month.

Includes:

- Historical value trend
- Monthly value change
- Running totals

![Value Over Time](/assets/images/projects/mtg-collection-tracker/page-value-over-time.png)

---

## Card Analysis

Allows individual cards to be analysed in more detail.

Users can explore:

- Price history per card
- Biggest gainers and losers
- Breakdown by set, rarity, and card type

![Card Analysis](/assets/images/projects/mtg-collection-tracker/page-card-analysis.png)

---

# Key DAX Measures

Some of the calculations used throughout the dashboard include:

- Total Collection Value
- Monthly Value Change
- Value by Set
- Value by Rarity
- Top Gainers
- Top Losers

---

# Results

What started as a simple list of valuable cards has become an ongoing tool for tracking the value of my Magic: The Gathering collection over time. The dashboard provides:

- A clear view of total collection value.
- Visibility into which cards and sets drive the most value.
- A monthly refresh process that keeps the data current with minimal effort.

---

# Lessons Learned

Working on this project reinforced a few things:

- Public APIs like Scryfall and MTGJSON make it possible to build meaningful personal projects without needing a paid data source.
- Separating data collection (Python) from reporting (Power BI) keeps the pipeline easy to maintain.
- Starting small and iterating works well, even for a personal hobby project.

---

# Future Improvements

Ideas for future versions include:

- Additional analytics on collection composition and trends.
- Tracking specific cards or sets of interest.
- Exploring automation of the monthly refresh process.

---

# Gallery

## Full Dashboard

![Dashboard](/assets/images/projects/mtg-collection-tracker/gallery-dashboard.png)

## Collection Overview

![Overview](/assets/images/projects/mtg-collection-tracker/gallery-overview.png)

## Value Over Time

![Value Over Time](/assets/images/projects/mtg-collection-tracker/gallery-value-over-time.png)

## Card Analysis

![Card Analysis](/assets/images/projects/mtg-collection-tracker/gallery-card-analysis.png)

## Data Model

![Model](/assets/images/projects/mtg-collection-tracker/gallery-model.png)

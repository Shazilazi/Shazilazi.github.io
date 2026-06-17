---
layout: project
title: "Sales Dashboard & Forecasting"
summary: "Built an end-to-end sales dashboard for a retail client, including a 12-week demand forecast using Python and Power BI."
category: "Dashboard"
date: 2024-09-01
featured: true
tools: [Python, Power BI, SQL, pandas]
link: https://github.com/yourusername/sales-dashboard
---

## Overview

Briefly describe the project here. What was the problem? Who was the client or stakeholder? What did they need?

## The data

Where did the data come from? What shape was it in? What were the main challenges with it (missing values, inconsistent formats, scale)?

## Approach

Walk through your methodology. What analysis did you do? What tools and techniques did you choose and why?

- Cleaned and normalised 3 years of transactional data from a legacy SQL database
- Built a rolling 12-week forecast using a simple exponential smoothing model
- Connected the output to a live Power BI dashboard refreshed daily via scheduled Python script

## Results

What were the outcomes? Be specific where you can — numbers are compelling.

The dashboard reduced weekly reporting time from 4 hours to 20 minutes, and the forecast achieved a mean absolute percentage error (MAPE) of 8.3% over the first quarter of deployment.

## What I'd do differently

This section is optional but shows maturity. If you were to do this project again, what would you change?

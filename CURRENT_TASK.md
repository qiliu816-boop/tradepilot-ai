# Current Task

## Version

V0.1

## Current Stage

Home Page Development

## Objective

Build the first polished public-facing Home page for TradePilot AI.

The page should immediately help a recruiter or potential user understand:

1. what TradePilot is,
2. what problem it solves,
3. how the product works,
4. why its AI analysis is more trustworthy than a generic chatbot,
5. how to start the demo.

---

## Page Goal

The Home page should feel like a modern B2B SaaS analytics product.

It should be professional, clean, data-focused, and suitable for an AI product portfolio.

Do not make it look like:

- a generic AI chatbot
- a crypto website
- a consumer shopping app
- an overly decorative landing page

---

## Navigation

Create a simple top navigation.

Left:

TradePilot AI

Right:

- Product
- How It Works
- Evidence
- Start Analysis

The "Start Analysis" item should visually function as the primary navigation CTA.

---

## Hero Section

### Eyebrow

AI-powered cross-border market intelligence

### Main Heading

Make smarter cross-border market decisions with evidence.

### Supporting Text

TradePilot turns fragmented competitor data, pricing signals and customer feedback into structured, evidence-backed market insights.

### Primary CTA

Start Market Analysis

Route:

/analysis

### Secondary CTA

Explore How It Works

This should scroll to the workflow section.

---

## Hero Visual

Do not use a stock image.

Create a product-style analytics preview using UI components.

The preview should visually suggest a market opportunity report.

Example content:

Market Opportunity

Women's Commuter Tote Bag

Malaysia · TikTok Shop

Opportunity Signal:
Promising

Data points:

12 Competitors
326 Reviews
RM49–RM129 Price Range

Include small visual labels demonstrating:

DATA FACT

and

AI INFERENCE

The hero visual should help communicate that TradePilot is an analytics product, not a chatbot.

---

## Problem Section

Heading:

Cross-border market research is fragmented.

Supporting copy:

Sellers often switch between marketplace listings, competitor pricing, customer reviews and spreadsheets before they can make a market decision.

Show three problem cards:

### Fragmented Data

Competitor prices, reviews and product signals are scattered across multiple sources.

### Slow Manual Research

Market research requires repetitive collection, comparison and summarisation.

### Unclear Decisions

Raw information does not automatically translate into pricing, positioning or market-entry decisions.

---

## Solution / Capabilities Section

Heading:

From scattered information to structured decisions.

Create three capability cards.

### Market Opportunity

Understand pricing ranges, demand signals and potential market-entry opportunities.

### Competitor Intelligence

Compare competitor positioning, pricing and customer feedback in one structured view.

### Evidence-backed AI

See what comes from the data and what is generated as AI interpretation.

---

## How It Works Section

Heading:

Market research in four steps.

Create a four-step workflow:

### 01 — Define

Enter the product, target market and business goal.

### 02 — Analyse

TradePilot structures competitor, pricing and customer evidence.

### 03 — Interpret

AI converts evidence into market opportunities, risks and business insights.

### 04 — Act

Receive clear recommendations for pricing, positioning and market validation.

---

## Evidence Mechanism Section

This is the most important differentiation section.

Heading:

AI insights you can trace back to evidence.

Supporting copy:

TradePilot separates observable market evidence from AI interpretation, helping users understand how conclusions are formed.

Show a visual comparison.

### DATA FACT

Median competitor price

RM79

Source:
12 competitor products

### AI INFERENCE

RM79 may represent a viable mid-market entry price.

Reasoning:
The price sits near the observed market median while leaving room to differentiate through product features.

Include a small explanatory note:

Important recommendations should be supported by observable evidence, while limitations and uncertainty remain visible.

---

## Final CTA Section

Heading:

Explore a market before making the decision.

Supporting text:

Run the TradePilot demo and see how fragmented market information becomes a structured opportunity report.

Button:

Start Market Analysis

Route:

/analysis

---

## Footer

Keep the footer minimal.

TradePilot AI

AI-powered cross-border market research assistant.

Portfolio Project · V0.1

---

## Design Direction

The design should feel like a modern B2B SaaS analytics platform.

Use:

- generous whitespace
- clear visual hierarchy
- restrained professional colours
- cards with subtle borders
- clean typography
- consistent spacing
- subtle shadows where useful
- professional data visualisation aesthetics

A blue / navy / neutral visual direction is preferred.

Avoid:

- excessive gradients
- neon colours
- glassmorphism everywhere
- excessive animation
- oversized decorative icons
- stock photography
- generic robot imagery
- unnecessary illustrations

---

## UX Requirements

The page must:

- work on desktop and mobile
- have clear CTA hierarchy
- scroll smoothly between sections
- link Start Market Analysis to `/analysis`
- preserve the existing application routing
- use reusable components where reasonable

---

## Scope Constraints

Do not:

- build the Analysis Input page
- build the Market Report page
- connect APIs
- connect an LLM
- add a database
- add authentication
- add external backend services
- redesign unrelated routes

Only build the Home page and any small reusable UI components required by the Home page.

---

## Definition of Done

The task is complete when:

- Home page has all required sections
- visual hierarchy is polished
- mobile layout is usable
- Start Market Analysis correctly opens `/analysis`
- How It Works navigation works
- existing routes are not broken
- TypeScript checks pass
- production build passes

---

## After Completion

1. Run the relevant checks.
2. Update `CHANGELOG.md`.
3. Summarize:
   - what changed
   - files modified
   - how to test
   - remaining issues
4. Stop.

Do not automatically begin the Analysis Input page.

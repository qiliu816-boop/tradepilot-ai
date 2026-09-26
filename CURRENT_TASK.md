# Current Task

## Version

V0.1

## Current Stage

AI Analysis Loading Page Development

## Objective

Build the TradePilot AI analysis loading experience.

The page should visually communicate how TradePilot transforms structured business inputs and market evidence into an evidence-backed market report.

This page is not a generic loading spinner.

It should demonstrate the product's AI workflow.

---

## Page Goal

The user should understand:

1. what TradePilot is analysing,
2. which stage of analysis is currently happening,
3. how evidence is processed before AI interpretation,
4. that the final report will distinguish data facts from AI inference.

The page should feel like a professional analytics workflow.

---

## Header

Eyebrow:

TRADEPILOT AI · MARKET ANALYSIS

Heading:

Analysing your market opportunity.

Supporting text:

TradePilot is structuring market evidence, identifying customer signals and generating evidence-backed business insights.

---

## Progress Indicator

Show the existing three-stage product flow:

01 Input
02 Analyse
03 Report

Highlight:

02 Analyse

---

## Analysis Summary

Show a compact summary of the demo scenario:

Product:
Women's Commuter Tote Bag

Market:
Malaysia

Platform:
TikTok Shop

Goal:
Market Entry

Evidence:
12 competitors · 326 reviews

This can appear as a compact horizontal card or small panel.

---

## AI Workflow

Create five analysis stages.

### Stage 1 — Reading Market Evidence

Supporting text:

Reviewing competitor products, prices and customer feedback.

Status:
Complete

---

### Stage 2 — Extracting Customer Signals

Supporting text:

Identifying recurring customer needs, pain points and purchase signals.

Status:
Complete

---

### Stage 3 — Comparing Competitors

Supporting text:

Structuring competitor positioning, pricing and product differentiation.

Status:
Processing

---

### Stage 4 — Evaluating Market Opportunity

Supporting text:

Connecting evidence to potential pricing, positioning and market-entry opportunities.

Status:
Waiting

---

### Stage 5 — Generating Recommendations

Supporting text:

Preparing evidence-backed actions, risks and limitations.

Status:
Waiting

---

## Visual Behaviour

The page should simulate analysis progress.

Use frontend-only timing.

Example:

Stage 1 complete
→ Stage 2 complete
→ Stage 3 processing
→ Stage 4 processing
→ Stage 5 processing
→ Analysis complete

Keep the total demo loading duration approximately:

4–6 seconds.

Do not use real API calls.

Do not introduce backend services.

---

## Evidence Principle

Include a compact explanatory component:

### Evidence-first analysis

Data facts are extracted before AI interpretation.

Example:

DATA FACT
Median competitor price: RM79

AI INFERENCE
RM79 may represent a viable mid-market entry point.

This should reinforce the Evidence Mechanism without duplicating the full Home page section.

---

## Completion State

When all analysis stages finish:

Change the main status to:

Analysis complete.

Supporting text:

Your evidence-backed market opportunity report is ready.

Primary button:

View Market Report

Route:

/report

Automatically navigating to `/report` is optional.

Prefer showing the button first so the user can see that analysis has completed.

---

## Visual Direction

Preserve the current TradePilot visual system.

Use:

- white / light neutral background
- navy / blue
- subtle green for completed states
- restrained borders
- clear progress states
- professional B2B SaaS styling

Avoid:

- large animated spinners
- flashy AI animations
- neon effects
- robot graphics
- excessive motion
- fake terminal/code animations

The workflow itself should be the main visual.

---

## Mobile Behaviour

On mobile:

- stack the analysis summary vertically
- keep all workflow stages readable
- preserve clear status hierarchy
- avoid horizontal overflow

---

## Scope Constraints

Do not:

- build the Market Report
- connect an LLM
- connect APIs
- connect a database
- add external services
- modify Home
- redesign Analysis Input

Use mock frontend logic only.

---

## Definition of Done

The task is complete when:

- `/loading` contains the full AI analysis workflow
- analysis stages progress automatically
- the workflow completes within approximately 4–6 seconds
- the user can see completed / processing / waiting states
- Evidence-first logic is visible
- View Market Report opens `/report`
- mobile layout works
- existing routes remain functional
- TypeScript checks pass
- production build passes
- browser runtime smoke test passes
- no blocking Console errors remain

---

## After Completion

1. Run TypeScript checks.
2. Run the production build.
3. Perform a browser runtime smoke test.
4. Verify `/loading`.
5. Verify the progress sequence.
6. Verify View Market Report opens `/report`.
7. Update CHANGELOG.md.
8. Summarize:
   - what changed
   - files modified
   - checks performed
   - remaining issues
9. Stop.

Do not automatically begin the Market Report page.

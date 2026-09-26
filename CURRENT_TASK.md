# Current Task

## Version

V0.1

## Current Stage

Final Polish & End-to-End QA

## Objective

Prepare the completed TradePilot V0.1 demo for public deployment.

Do not add new product features.

The goal is to fix visible inconsistencies, remove avoidable runtime issues, and verify the complete user journey.

---

## Task 1 — Fix Price Landscape Visual

Inspect the Market Snapshot price landscape.

The demo prices are:

RM49
RM59
RM59
RM69
RM75
RM79
RM79
RM89
RM99
RM109
RM119
RM129

The visual bar heights must correctly correspond to these values.

RM129 must visually be the highest value.

Preserve:

Median = RM79

Do not change the underlying demo data unless necessary.

---

## Task 2 — Verify Global Navigation

Verify the global navigation works correctly from every route.

Navigation items:

Product
How It Works
Evidence
Start Analysis

From non-Home routes, the first three links should correctly navigate to the appropriate Home page sections.

Expected destinations:

Product → /#product
How It Works → /#how-it-works
Evidence → /#evidence

Start Analysis → /analysis

Do not redesign the navigation.

---

## Task 3 — Fix Favicon

Resolve the existing favicon 404.

Add a simple TradePilot-compatible favicon.

Keep it minimal and consistent with the existing visual identity.

Do not introduce a branding redesign.

---

## Task 4 — Review React Router Warnings

Inspect the existing React Router build/runtime warnings.

Resolve them if they can be fixed with a small safe change.

Do not:

- upgrade the architecture unnecessarily
- change routing libraries
- refactor the entire application

If a warning cannot reasonably be removed, document it clearly in CHANGELOG.md.

---

## Task 5 — Data Consistency Audit

Verify the complete V0.1 demo uses consistent values:

Product:
Women's Commuter Tote Bag

Market:
Malaysia

Platform:
TikTok Shop

Goal:
Market Entry

Estimated Cost:
RM35

Target Price:
RM79

Competitors:
12

Reviews Analysed:
326

Observed Price Range:
RM49–RM129

Median Competitor Price:
RM79

Confirm these values remain consistent across:

- Home
- Analysis Input default scenario
- Loading
- Market Report

Do not add dynamic backend behaviour.

---

## Task 6 — End-to-End User Flow

Test:

Home

→ Start Market Analysis

→ Analysis Input

→ Generate Market Report

→ AI Analysis Loading

→ View Market Report

→ Expand View Evidence

→ Start New Analysis

→ Back to Home

All routes and interactions must work.

---

## Task 7 — Responsive QA

Verify at minimum:

375px mobile
768px tablet
1440px desktop

Check:

- no unintended horizontal page overflow
- report table remains usable
- buttons remain accessible
- labels remain readable
- navigation remains functional

---

## Final Quality Requirements

Before completion:

- TypeScript check passes
- production build passes
- all four routes render
- full user flow works
- no blocking browser Console errors
- favicon 404 is removed
- avoidable routing warnings are removed
- price chart visually matches its data
- mock-data disclaimer remains visible
- existing product scope is unchanged

---

## Scope Constraints

Do not:

- add new features
- add APIs
- add an LLM
- add a database
- add authentication
- add report export
- add report history
- redesign completed pages
- begin Case Study work
- deploy yet

Only perform final V0.1 polish and QA.

---

## After Completion

1. Run TypeScript checks.
2. Run the production build.
3. Perform browser runtime testing.
4. Complete the end-to-end flow.
5. Verify desktop/tablet/mobile layouts.
6. Update CHANGELOG.md.
7. Summarize:
   - fixes made
   - files changed
   - checks passed
   - remaining issues
8. Stop.

Do not begin deployment automatically.

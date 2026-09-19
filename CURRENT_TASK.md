# Current Task

## Version

V0.1

## Current Stage

Analysis Input Page Development

## Objective

Build the TradePilot market analysis input experience.

The page should allow a user to define:

1. the product,
2. the target market,
3. basic business inputs,
4. the market evidence used for analysis.

This is a portfolio demo.

Use realistic default values so a recruiter can immediately test the complete flow without manually entering everything.

---

## Page Goal

The page should feel like a structured market research brief, not a generic form.

The user should understand:

"What product am I analysing?"
"Where do I want to sell it?"
"What are my commercial assumptions?"
"What evidence will TradePilot use?"

---

## Page Header

Eyebrow:

TRADEPILOT AI · MARKET ANALYSIS

Heading:

Set up your market analysis.

Supporting text:

Define the product, target market and business context TradePilot should evaluate.

Include a small progress indicator:

01 Input
02 Analyse
03 Report

Highlight Input as the current step.

---

## Layout

Use a desktop two-column layout.

Left / Main Column:

Input form.

Right Column:

Analysis Summary / Research Brief.

The right-side summary should update visually based on the current form values where reasonable.

On mobile, stack the sections vertically.

---

## Section 1 — Product

Card title:

Product

Supporting text:

Tell TradePilot what product you want to evaluate.

Fields:

### Product Name

Default:

Women's Commuter Tote Bag

### Category

Default:

Bags & Accessories

Suggested options:

- Bags & Accessories
- Beauty & Personal Care
- Home & Living
- Consumer Electronics
- Fashion
- Other

### Product Description

Default:

Lightweight waterproof tote bag designed for commuting, daily use and laptop storage.

Use a textarea.

---

## Section 2 — Target Market

Card title:

Target Market

Fields:

### Country / Market

Default:

Malaysia

Suggested options:

- Malaysia
- Singapore
- Thailand
- Indonesia
- Philippines
- Vietnam

### Platform

Default:

TikTok Shop

Suggested options:

- TikTok Shop
- Shopee
- Lazada
- Amazon
- Independent Store

### Currency

Default:

MYR

Currency may update automatically based on the selected default market, but keep the implementation simple.

---

## Section 3 — Business Inputs

Card title:

Business Context

Supporting text:

Provide basic commercial assumptions for this market test.

Fields:

### Estimated Product Cost

Default:

35

Prefix:

RM

### Target Selling Price

Default:

79

Prefix:

RM

### Business Goal

Use selectable cards or radio-style options.

Options:

- Market Entry
- Product Validation
- Pricing Strategy

Default:

Market Entry

---

## Section 4 — Market Evidence

Card title:

Market Evidence

Supporting text:

TradePilot uses market evidence to support its analysis.

For V0.1, do not implement real file processing.

Instead show a preloaded demo dataset.

Display:

Sample Market Dataset

Status:

Ready

Dataset summary:

12 competitor products

326 customer reviews

Observed price range:
RM49–RM129

Source context:
TikTok Shop Malaysia

Add a small label:

DEMO DATASET

Add supporting text:

This V0.1 demo uses a curated mock dataset to demonstrate the analysis workflow.

Do not build real upload functionality yet.

You may visually show a disabled or secondary:

Upload your own dataset

control with a label:

Coming in V0.2

but it must not become part of the active workflow.

---

## Right-side Research Brief

Create a summary card titled:

Research Brief

Show:

Product

Women's Commuter Tote Bag

Market

Malaysia

Platform

TikTok Shop

Target Price

RM79

Goal

Market Entry

Evidence

12 competitors · 326 reviews

At the bottom show:

Ready for analysis

This panel should make the page feel like a professional analytics product rather than a standard web form.

---

## Primary CTA

Button:

Generate Market Report

On click:

Navigate to:

/loading

The button should be visually prominent.

Below it show a small message:

TradePilot will analyse the demo evidence and generate an evidence-backed opportunity report.

---

## Secondary Navigation

Include:

Back to Home

Do not add unnecessary buttons.

---

## Validation

Keep validation lightweight.

Required:

- Product Name
- Target Market
- Platform
- Product Cost
- Target Selling Price
- Business Goal

Do not build a complex validation library.

Simple client-side validation is enough.

---

## UX Requirements

The page must:

- work on desktop and mobile
- use the existing TradePilot visual system
- feel consistent with the Home page
- preserve all existing routes
- allow the default demo scenario to be submitted immediately
- route Generate Market Report to `/loading`

Do not require users to manually fill the form before testing the demo.

---

## Product Principle

The page should reinforce that TradePilot analyses a structured business question.

Avoid making it feel like:

- a generic AI prompt box
- a chatbot
- a long survey
- a complex enterprise form

The interaction should feel simple, guided and decision-oriented.

---

## Scope Constraints

Do not:

- connect an API
- upload real files
- parse CSV files
- connect an LLM
- build a database
- build authentication
- build the final Market Report
- build complex state management

Use local frontend state only where necessary.

---

## Definition of Done

The task is complete when:

- the Analysis Input page contains all four input sections
- realistic default demo values are populated
- the Research Brief summary is visible
- Generate Market Report routes to `/loading`
- the page works on mobile
- the Home page remains unchanged
- all four application routes remain functional
- TypeScript checks pass
- production build passes
- the page renders correctly in the browser without blocking Console errors

---

## After Completion

1. Run TypeScript checks.
2. Run the production build.
3. Perform a browser runtime smoke test.
4. Verify `/analysis` renders correctly.
5. Verify Generate Market Report opens `/loading`.
6. Update CHANGELOG.md.
7. Summarize:
   - what changed
   - files modified
   - checks performed
   - remaining issues
8. Stop.

Do not automatically begin the Loading page.

# TradePilot AI Changelog

## V0.1

### Project Setup

- GitHub repository created
- Initial README added
- Project context documentation added
- Codex working instructions added
- Current task workflow established

### Frontend Foundation

- Initialized a Vite, React, and TypeScript frontend with pnpm.
- Added a shared layout and navigation for Home, Analysis Input, AI Analysis Loading, and Market Report placeholder pages.
- Added responsive base styling, local run instructions, and a Vercel route rewrite.

### Home Page

- Built the public Home page with a report-style hero preview, problem and capability cards, four-step workflow, evidence comparison, and final analysis CTA.
- Added responsive Home page styling and section navigation while keeping the existing analysis, loading, and report routes as placeholders.

### Runtime Fix

- Replaced default React and React DOM imports with named `StrictMode` and `createRoot` imports.
- Enabled Vite dependency optimization for React and React Router so the development browser receives compatible ES modules instead of raw CommonJS files.

### Analysis Input Page

- Added the structured market analysis brief with product, target market, business context, and preloaded demo evidence sections.
- Added live Research Brief updates, lightweight required-field validation, and navigation from Generate Market Report to the existing loading route.
- Added responsive analysis page styling while preserving the Home page and other routes.

### Analysis Input Verification — 2026-09-26

- Reviewed the existing Analysis Input implementation against CURRENT_TASK.md; all requested sections, defaults, demo evidence, progress steps, and navigation were already present, so no application code changes were needed.
- Passed `pnpm exec tsc --noEmit` and `pnpm build`.
- Smoke-tested the production preview in Edge: Home, `/analysis`, `/loading`, and `/report` render, and Generate Market Report navigates to `/loading` with the default values on desktop and mobile.
- Verified required empty product name, cost, and price validation; live product, market, platform, currency, price, and goal summary updates; and desktop (1440px) and mobile (375px) rendering without horizontal overflow.
- Confirmed no blocking browser runtime errors. Existing non-blocking issues: missing `/favicon.ico` (404) and React Router `use client` build warnings.
- Preserved the Home page, Vite + TypeScript + pnpm architecture, and existing Loading and Report placeholders. No subsequent feature work started.

### AI Analysis Loading Page — 2026-09-26

- Replaced the `/loading` placeholder with a responsive five-stage analysis workflow, demo scenario summary, and the Input / Analyse / Report progress indicator.
- Added frontend-only progression from two completed evidence stages through competitor comparison, opportunity evaluation, and recommendations. Timers finish after 4.8 seconds and are cleared on unmount; entering the page starts at the top.
- Added the compact Evidence-first analysis component separating the RM79 data fact from AI inference, with a curated mock dataset label.
- Added an accessible completion announcement and View Market Report link to the existing `/report` placeholder, without automatic navigation.
- Files changed: `src/LoadingPage.tsx`, `src/loading.css`, `src/main.tsx`, and `CHANGELOG.md`. Home, Analysis Input, dependencies, and architecture remain unchanged.
- Validation passed: `pnpm exec tsc --noEmit`, `pnpm build`, and production-preview Edge smoke tests. Verified all four routes, Analysis submission to Loading, each processing state, completion in approximately five seconds, Report navigation, re-entry, and leaving during processing.
- Visually verified desktop (1440px) and mobile (375px) layouts with no horizontal overflow. No blocking runtime errors; existing favicon 404 and non-blocking React Router build warnings remain.
- Manual check: submit the default Analysis form, observe the five stages, wait for Analysis complete, then select View Market Report.
- Market Report development remains a future task; it was not started.

### Market Report Page — 2026-09-26

- Replaced the `/report` placeholder with the complete seven-section Market Opportunity Report, including the executive interpretation, market metrics, customer needs and pain points, competitor comparison, opportunities, visible limitations, recommended actions, and final Decision Summary.
- Added distinct Data Fact, Evidence, AI Inference, Business Implication, and Limitation labels. All data and example comments are explicitly presented as curated mock content; qualitative opportunity indicators are not calculated scores.
- Added a CSS price landscape using 12 mock prices with an RM79 median, proportional customer-need bars, and five featured competitor listings. Clarified that mock listing review totals differ from the 326-review analysis sample.
- Added three native expandable evidence panels with sources, supporting observations, mock comments where relevant, and links to report sections. Recommended actions link back to supporting interpretations or limitations.
- Added Start New Analysis and Back to Home navigation, responsive layouts, and a keyboard-accessible horizontally scrolling competitor table. The report explicitly uses fixed demo assumptions rather than recalculating edited inputs.
- Files changed: `src/ReportPage.tsx`, `src/reportData.ts`, `src/report.css`, `src/main.tsx`, and `CHANGELOG.md`. Existing Home, Analysis, Loading, shared styles, dependencies, and Vite + TypeScript + pnpm architecture were preserved.
- Checks passed: `pnpm exec tsc --noEmit`, `pnpm build`, and Edge production-preview runtime smoke tests. Verified all seven sections, five competitor rows, three opportunity evidence panels, four recommendations, keyboard expansion, evidence anchors, both report navigation actions, and the complete Analysis → Loading → Report flow.
- Visually reviewed desktop and mobile report sections. Checked widths of 320, 375, 768, 1024, and 1440px without horizontal page overflow; the mobile competitor table scrolls independently.
- Confirmed previous page files remained unchanged by hashes and verified `main.tsx` changed only to import and route the report. No blocking browser errors; existing favicon 404 and React Router build warnings remain non-blocking.
- Manual test: complete the default analysis flow, review the report, open View Evidence within each opportunity, follow a supporting-section link, and use Start New Analysis or Back to Home.
- No deployment or Case Study work started. A future task can be selected after review of the completed V0.1 flow.

### V0.1 Final Polish & End-to-End QA — 2026-09-26

- Fixed price-bar compression by separating labels from bar sizing and preventing flex shrink. All 12 heights now follow a common proportional scale; RM129 is highest and the RM79 median line remains aligned and readable above the bars. Underlying prices are unchanged.
- Replaced the Home preview's decorative bar values with the same existing demo prices used by the report.
- Fixed cross-route Home section navigation by scrolling to the hash target after Home renders. Verified Product → `/#product`, How It Works → `/#how-it-works`, Evidence → `/#evidence`, and Start Analysis → `/analysis` from all four routes at all three viewport sizes (48 checks).
- Reset Analysis scroll on entry so the bottom Home CTA opens the form at its beginning rather than retaining the previous page's scroll position.
- Added a minimal navy-and-white T favicon at `public/favicon.svg` and declared it in `index.html`. Verified HTTP 200 and no browser favicon 404 requests.
- Reviewed the two React Router 7.18.4 build warnings: its `index.mjs` and `dom-export.mjs` contain `use client` directives that the bundler ignores. These directives do not affect this browser-only SPA. Left dependency sources and warning reporting intact instead of suppressing diagnostics or changing routing dependencies; no runtime routing warnings were observed.
- Audited the fixed demo scenario across Home, Analysis defaults, Loading, and Report: Women's Commuter Tote Bag, Malaysia, TikTok Shop, Market Entry, RM35 cost, RM79 target/median, 12 competitors, 326 analysed reviews, and RM49–RM129 range remain consistent wherever shown. Mock-data disclaimers remain visible.
- Final checks passed: `pnpm exec tsc --noEmit` and `pnpm build`; production-preview Edge end-to-end journeys at 375px, 768px, and 1440px; all four route layouts without unintended horizontal overflow; report table scrolling; all three evidence panels using keyboard controls; both report navigation actions; loading progression and completion in approximately five seconds.
- Development runtime smoke checks passed on all four routes. Production checks recorded no console errors/warnings or failed HTTP responses. Inspected responsive screenshots and measured each bar against its price, including median alignment, at all three sizes.
- Files changed: `src/main.tsx`, `src/AnalysisPage.tsx`, `src/ReportPage.tsx`, `src/report.css`, `index.html`, `public/favicon.svg`, and `CHANGELOG.md`.
- Remaining issue: the two harmless dependency build warnings described above. No blocking issues found within the tested local Edge environment. No new features, redesign, deployment, or Case Study work performed.

# TradePilot AI — Codex Instructions

Before making any code changes:

1. Read `PROJECT_CONTEXT.md`.
2. Read `CURRENT_TASK.md`.
3. Inspect the existing repository before editing files.
4. Do not change the agreed product scope or technical stack unless explicitly requested.
5. Make the smallest working change required for the current task.

## Product Principle

TradePilot AI is an AI-powered cross-border market research assistant.

Its main product differentiation is the Evidence Mechanism:

- Separate Data Facts from AI Inferences.
- Important conclusions should be traceable to supporting evidence.
- Show limitations and external risks.
- Do not present unsupported AI conclusions as facts.

## Development Principles

This is a portfolio MVP, not a production SaaS platform.

Prioritize:

- clear product flow
- polished UI
- readable code
- reusable components
- responsive layout
- recruiter-friendly presentation
- working end-to-end demo

Do not introduce unnecessary:

- authentication
- payments
- databases
- backend complexity
- external APIs
- agent frameworks
- real-time infrastructure

unless the current task explicitly requires them.

## Working Rules

For every task:

1. Read the project context.
2. Read the current task.
3. Inspect relevant files.
4. Implement only the requested scope.
5. Run relevant checks.
6. Fix any errors introduced by the change.
7. Update `CHANGELOG.md`.
8. Summarize:
   - what changed
   - files modified
   - how to test
   - remaining issues
   - recommended next task

Do not automatically start the next feature.

Do not redesign the full application unless explicitly requested.

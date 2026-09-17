# Current Task — Milestone 3

## Goal
Make salary entries persist after browser refresh so the app feels usable before introducing a real backend.

## Scope
Implement ONE milestone only: **local persistence with localStorage**.

### Required behavior
1. Keep the existing sample salary data available on first load.
2. When a user registers a new salary entry, save it to `localStorage`.
3. On page reload, restore user-added salary entries from `localStorage`.
4. Do not duplicate the built-in sample data in `localStorage`.
5. Preserve the current home search, registration flow, company detail screen, company aggregates, and newest-first ordering.
6. Add a small clearly labeled development-only reset control that removes only user-added local salary records and returns the app to sample data. Keep it unobtrusive.
7. Handle malformed/corrupted localStorage data safely: ignore invalid data and continue loading the app instead of crashing.
8. No Supabase, backend, login, router, or new package yet.
9. Keep Korean UI and current visual style.

## Validation
- Run `npm run lint`
- Run `npm run build`
- Fix errors until both pass.
- Manually verify this flow:
  1. register one salary record
  2. refresh browser
  3. confirm the record remains
  4. open its company detail and confirm aggregates include it
  5. use reset control and confirm only added records disappear

## Git / completion rule
When Milestone 3 is fully finished and validated:
1. Commit ONLY the Milestone 3 source changes.
2. Do not commit `.appdirector/` runtime files.
3. Commit message: `milestone 3: local persistence`
4. Push to `origin/main`.
5. STOP. Do not begin Milestone 4.

## Reporting
When finished, report only:
- files changed
- features implemented
- manual persistence test result
- lint result
- build result
- commit SHA / push result

Do not start Milestone 4. Wait for user review.

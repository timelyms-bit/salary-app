# Current Task — Milestone 4

## Goal
Add an explicit salary comparison experience so users can directly compare two real salary records side by side.

## Scope
Implement ONE milestone only: **2-record salary comparison**.

### Required behavior
1. On the home salary list, allow the user to select salary records for comparison without breaking the existing card click → company detail behavior.
2. Maximum comparison selection: 2 records.
3. When 2 records are selected, show a clear `선택한 월급 비교하기` action.
4. Comparison view must show both records side by side and compare:
   - company
   - role
   - tenure
   - salary month
   - gross pay
   - net pay
   - total work hours
   - real hourly wage
5. For numeric rows, show the difference between the two values in a neutral way, e.g. `A가 320,000원 높음`, `B가 12시간 적음`, or `같음`.
6. Do not label one company/job as overall better or worse. Only show factual differences.
7. Add a clear back action from comparison view.
8. Add a clear control to clear/reset comparison selection.
9. Preserve all existing functionality:
   - search
   - salary registration
   - localStorage persistence
   - company detail and aggregates
   - newest-first ordering
   - development-only reset control
10. No backend, Supabase, login, router, payment, or new dependency in this milestone.
11. Keep Korean UI and the existing visual style. Mobile-first; desktop must remain usable.

## UX guidance
- Avoid accidental navigation when tapping the comparison selector.
- On mobile, comparison rows may stack if needed, but the two records must remain easy to distinguish.
- Use the current green accent sparingly and consistently.
- Keep the UI simple; this is MVP behavior, not final polish.

## Validation
- Run `npm run lint`.
- Run `npm run build`.
- Fix errors until both pass.
- Manually verify:
  1. select one record
  2. select a second record
  3. open comparison
  4. verify all fields and numeric differences
  5. go back
  6. clear selection
  7. confirm card click still opens company detail
  8. confirm registration and refresh persistence still work

## Git / completion rule
When Milestone 4 is fully finished and validated:
1. Commit ONLY Milestone 4 source changes.
2. Do not commit `.appdirector/` runtime files.
3. Commit message: `milestone 4: salary comparison`.
4. Push to `origin/main`.
5. STOP. Do not begin Milestone 5.

## Reporting
When finished, report only:
- files changed
- features implemented
- manual comparison test result
- lint result
- build result
- commit SHA / push result

Do not start Milestone 5. Wait for user review.

# Current Task — Milestone 2

## Goal
Add a meaningful company-detail experience on top of MVP 0.1 without adding backend/login yet.

## Scope
Implement ONE milestone only: **company detail + company-level aggregation**.

### Required behavior
1. On the home salary list, clicking/tapping a salary card opens a company detail view for that card's company.
2. Company detail view must show:
   - company name
   - number of salary records for that company
   - average gross pay
   - average net pay
   - average total work hours
   - average real hourly wage
3. Below the summary, show all salary records for that company, newest/most recently added first.
4. Add a clear back button to return to home.
5. Keep the existing home search and salary registration flow working.
6. Use the existing sample/in-memory data only. Do NOT add Supabase, login, routing packages, or any new dependency in this milestone.
7. Keep Korean UI and current visual style. Mobile-first, but desktop must remain usable.
8. Currency formatting must remain comma-separated KRW. Real hourly wage = gross pay / total work hours.

## Validation
- Run `npm run lint`
- Run `npm run build`
- Fix any errors until both pass.

## Reporting
When finished, report only:
- files changed
- features implemented
- lint result
- build result

Do not start Milestone 3. Stop after Milestone 2 is complete and wait for review.

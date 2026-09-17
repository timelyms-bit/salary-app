# Salary App Project Handoff

## Purpose
This file is the continuity anchor for future ChatGPT/Codex chats. Read this first before continuing development.

## Product
- App name (working): 월급
- Core idea: actual monthly salary comparison for production/shift workers.
- Main differentiator: company + job + tenure + gross pay + net pay + actual work hours + real hourly wage.
- Real hourly wage formula: gross pay / total work hours.
- Initial target: production/shift workers rather than all office workers.

## Current MVP 0.1
Implemented in React + Vite.

Current user flows:
1. Home screen
2. Search by company/job
3. Salary cards with sample data
4. Salary registration form
5. Auto-calculate real hourly wage
6. New salary entry appears at the top of the home list

Current registration fields:
- company
- job
- years of service
- salary month
- gross pay
- net pay
- total work hours

Current limitations:
- no backend/database yet
- no login yet
- no OCR yet
- data entered in the UI disappears after refresh
- sample data is local/front-end only

## Repository / Environment
- GitHub repository: timelyms-bit/salary-app
- Visibility: private
- Default branch: main
- Local project path: %USERPROFILE%\Documents\salary-app
- Stack: React + Vite + basic CSS
- Node.js installed
- VS Code installed
- Git and GitHub CLI installed

## Confirmed milestones / commits
- Initial salary app
- Update salary app MVP

MVP 0.1 has been built and visually confirmed running at localhost:5173.

## Development operating model
Use the same operating philosophy as the user's automated research workflow:

- GitHub = permanent development record
- APP Director = local monitor / validation / automatic recording
- ONECLICK = run/test controls
- Codex = coding labor
- User + ChatGPT = product direction and judgment

Important rule: DO NOT run endless autonomous coding.

## Review-gate rule
Development must proceed one meaningful result at a time.

Workflow:
1. User + ChatGPT decide ONE meaningful task.
2. Codex implements that task.
3. APP Director waits for edits to settle.
4. Run lint + build automatically.
5. Save validated result to GitHub.
6. STOP at READY_FOR_REVIEW.
7. User checks the important result once.
8. User says APPROVE or REQUEST CHANGES.
9. Only then continue to the next milestone.

The user does not want to monitor every small edit. The user only wants to review important outputs such as a completed screen, core feature, DB change, login, payment, or pre-release build.

## APP Director status
- Latest review-gate installer with APPROVE / REQUEST CHANGES controls: **installation confirmed by user**.
- Intended behavior: validated milestone -> READY_FOR_REVIEW -> stop -> user decision -> next milestone or correction.
- Do not assume Codex should continue autonomously beyond a review gate.

## Current next step
Before adding new architecture, verify the salary registration flow end-to-end once:
- enter sample salary data
- confirm real hourly wage calculation
- submit
- confirm the new item appears at the top of the home list

Then proceed to the next meaningful milestone only after user approval.

Likely next milestone options:
- company detail page + improved comparison/search
- Supabase real database connection
- mobile usability pass

Do not jump into backend/login/payment until the user approves the current milestone.

## Working style preference
The user is a development beginner.
- Prefer one-click .cmd installers / launchers over manual setup when practical.
- Give one action at a time.
- Avoid long theory before action.
- On success, the user can simply reply "됨" / "완료".
- Ask for screenshots only when visual judgment or error diagnosis is actually needed.

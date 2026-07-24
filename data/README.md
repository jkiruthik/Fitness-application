# Synthetic fitness data

These CSV files contain fictional data created solely for development, demonstration, and testing. They do not represent real users or product findings.

All files join on `user_id`. Dates cover 1 April–24 July 2026 and use UTC timestamps.

| File | Grain | Purpose |
| --- | --- | --- |
| `users.csv` | One row per user | Signup cohort and acquisition context |
| `workout_logs.csv` | One row per workout attempt | Completion, duration, workout type, and session timing |
| `streak_history.csv` | One row per user snapshot | Current/longest streak and recovery behaviour |
| `subscriptions.csv` | One row per subscription state | Plan, renewal, discount, downgrade, and cancellation signals |

`retained_d30` and `renewed` are synthetic outcome labels included only to let the prototype dashboard and model be exercised. Replace them with governed source data before making any business decision.

# Data dictionary

| Dataset | Field | Description |
| --- | --- | --- |
| users | `user_id` | Stable identifier used to join every dataset. |
| users | `signup_date` | User registration date in ISO `YYYY-MM-DD` format. |
| users | `acquisition_channel` | First recorded acquisition channel. |
| users | `retained_d30` | Synthetic D30 retention label; see retention definitions. |
| workout_logs | `completed_at` | Workout attempt timestamp in UTC ISO-8601 format. |
| workout_logs | `duration_minutes` | Attempt duration in whole minutes. |
| workout_logs | `completion_status` | `completed` or `skipped`. |
| streak_history | `current_streak_days` | Consecutive active days as of the snapshot date. |
| streak_history | `breaks_last_30_days` | Streak breaks in the preceding 30 days. |
| subscriptions | `renewal_cadence` | Subscription period: `monthly` or `annual`. |
| subscriptions | `used_discount` | Whether a promotion was used at renewal or purchase. |
| subscriptions | `renewed` | Synthetic renewal outcome label. |
| unified_user_retention | `subscription_status` | Latest subscription state at the analysis snapshot. |
| user_features | `completion_rate` | Completed workout attempts divided by all attempts. |
| user_features | `days_since_last_workout` | Days from the analysis date to the latest completed workout. |

Source columns are retained in the raw CSVs. Derived datasets are regenerated with `npm run build:unified` and `npm run build:features`.

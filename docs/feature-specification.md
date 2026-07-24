# Feature specification

The feature table has one row per user and is created by `npm run build:features`.

## Engagement features

- `completed_workouts_30d`: count of completed workout attempts in the observed 30-day window.
- `completion_rate`: completed attempts divided by all attempts.
- `active_minutes_30d`: total minutes from completed workouts.
- `days_since_last_workout`: days between the latest completed workout and the analysis date (24 July 2026).
- `morning_workout_share`: share of completed workouts started before 12:00 UTC.
- `current_streak_days`, `breaks_last_30_days`, and `recoveries_last_30_days`: joined streak measures.

## Subscription features

- `is_annual_plan`, `used_discount`, `downgrade_count`, and `cancellation_count` are encoded subscription signals.

The dataset is synthetic and intentionally small, so these features support prototype development only—not model performance claims.

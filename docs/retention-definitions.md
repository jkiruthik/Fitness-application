# Retention metric definitions

## Primary prototype target: D30 active retention

A user is **D30 retained** when they complete at least one workout during days 24–30 after their signup date. The target is stored as `retained_d30` (`1` retained, `0` not retained) in the prototype data.

## Secondary target: subscription renewal

A user is considered renewed when their subscription reaches its scheduled renewal and remains active. The target is stored as `renewed` (`1` renewed, `0` did not renew).

## Churn

For this prototype, a user is churned when their subscription is cancelled or they have no completed workout for 30 consecutive days after signup. In production, this must be confirmed with the Product and Growth teams and calculated from source event data.

## Important limitation

The supplied CSVs are synthetic. These definitions and labels demonstrate the pipeline only; they are not evidence of real retention behaviour.

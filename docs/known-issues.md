# Known issues and assumptions

| ID | Status | Issue | Mitigation |
| --- | --- | --- | --- |
| KI-01 | Open | All current records are synthetic and only cover 12 users. | Use only for prototype and UI validation; replace before production analysis. |
| KI-02 | Open | D30 labels are supplied for users without a full, observable 30-day window. | Recalculate labels from governed events using an eligibility cutoff. |
| KI-03 | Open | CSV parser assumes values do not contain commas or quoted newlines. | Use a production CSV parser or warehouse ingestion tool for real exports. |
| KI-04 | Open | Session timestamps are all UTC; user local time zones are unavailable. | Add a user timezone field before making time-of-day recommendations. |
| KI-05 | Open | Subscription records are a current-state snapshot, not an event history. | Ingest renewal and cancellation event timestamps for survival analysis. |

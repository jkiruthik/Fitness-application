export const retentionOverview = {
  d30Retention: "58.3%",
  renewalRate: "58.3%",
  holdoutAuc: "1.000",
};

export const cohortRetention = [
  { month: "Apr", rate: 50.0 },
  { month: "May", rate: 50.0 },
  { month: "Jun", rate: 60.0 },
  { month: "Jul", rate: 66.7 },
];

export const retentionDrivers = [
  { name: "Completion rate ≥ 80%", lift: "+41.7pp", direction: "positive" },
  { name: "Completed 3+ workouts", lift: "+41.7pp", direction: "positive" },
  { name: "Current streak ≥ 7 days", lift: "+41.7pp", direction: "positive" },
  { name: "Used discount", lift: "-29.8pp", direction: "negative" },
];

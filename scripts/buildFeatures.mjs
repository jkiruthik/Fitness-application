import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const readCsv = (file) => {
  const [header, ...rows] = fs.readFileSync(path.join(root, "data", file), "utf8").trim().split("\n");
  const columns = header.split(",");
  return rows.map((row) => Object.fromEntries(columns.map((column, index) => [column, row.split(",")[index]])));
};

const analysisDate = new Date("2026-07-24T00:00:00Z");
const users = readCsv("derived/unified_user_retention.csv");
const logs = readCsv("workout_logs.csv");
const logsByUser = new Map();
for (const log of logs) logsByUser.set(log.user_id, [...(logsByUser.get(log.user_id) || []), log]);

const header = [
  "user_id", "retained_d30", "renewed", "completed_workouts_30d", "completion_rate",
  "active_minutes_30d", "days_since_last_workout", "morning_workout_share", "current_streak_days",
  "breaks_last_30_days", "recoveries_last_30_days", "is_annual_plan", "used_discount",
  "downgrade_count", "cancellation_count",
];

const rows = users.map((user) => {
  const attempts = logsByUser.get(user.user_id) || [];
  const completed = attempts.filter((log) => log.completion_status === "completed");
  const completedTimes = completed.map((log) => new Date(log.completed_at)).sort((a, b) => b - a);
  const latest = completedTimes[0];
  const daysSinceLastWorkout = latest ? Math.floor((analysisDate - latest) / 86400000) : 30;
  const activeMinutes = completed.reduce((sum, log) => sum + Number(log.duration_minutes), 0);
  const morningCount = completed.filter((log) => new Date(log.completed_at).getUTCHours() < 12).length;
  return [
    user.user_id, user.retained_d30, user.renewed, completed.length,
    attempts.length ? (completed.length / attempts.length).toFixed(2) : "0.00",
    activeMinutes, daysSinceLastWorkout,
    completed.length ? (morningCount / completed.length).toFixed(2) : "0.00",
    user.current_streak_days, user.breaks_last_30_days, user.recoveries_last_30_days,
    user.renewal_cadence === "annual" ? 1 : 0, user.used_discount === "true" ? 1 : 0,
    user.downgrade_count, user.cancellation_count,
  ].join(",");
});

const destination = path.join(root, "data", "derived", "user_features.csv");
fs.writeFileSync(destination, [header.join(","), ...rows].join("\n") + "\n");
console.log(`Wrote ${rows.length} feature records to ${path.relative(root, destination)}`);

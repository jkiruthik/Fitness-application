import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const readCsv = (name) => {
  const [header, ...rows] = fs.readFileSync(path.join(root, "data", name), "utf8").trim().split("\n");
  const columns = header.split(",");
  return rows.map((row) => Object.fromEntries(columns.map((column, index) => [column, row.split(",")[index]])));
};

const users = readCsv("users.csv");
const streaks = new Map(readCsv("streak_history.csv").map((row) => [row.user_id, row]));
const subscriptions = new Map(readCsv("subscriptions.csv").map((row) => [row.user_id, row]));

const header = [
  "user_id", "signup_date", "acquisition_channel", "country", "retained_d30",
  "current_streak_days", "longest_streak_days", "breaks_last_30_days", "recoveries_last_30_days",
  "plan_type", "renewal_cadence", "price_tier", "used_discount", "downgrade_count",
  "cancellation_count", "subscription_status", "renewed",
];

const rows = users.map((user) => {
  const streak = streaks.get(user.user_id);
  const subscription = subscriptions.get(user.user_id);
  return [
    user.user_id, user.signup_date, user.acquisition_channel, user.country, user.retained_d30,
    streak.current_streak_days, streak.longest_streak_days, streak.breaks_last_30_days, streak.recoveries_last_30_days,
    subscription.plan_type, subscription.renewal_cadence, subscription.price_tier, subscription.used_discount,
    subscription.downgrade_count, subscription.cancellation_count, subscription.status, subscription.renewed,
  ].join(",");
});

const destination = path.join(root, "data", "derived", "unified_user_retention.csv");
fs.mkdirSync(path.dirname(destination), { recursive: true });
fs.writeFileSync(destination, [header.join(","), ...rows].join("\n") + "\n");
console.log(`Wrote ${rows.length} unified user records to ${path.relative(root, destination)}`);

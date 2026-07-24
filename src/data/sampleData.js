export const users = [
  { id: "u_001", name: "Aarav", signupDate: "2026-04-02", planType: "Premium", acquisitionChannel: "Organic" },
  { id: "u_002", name: "Meera", signupDate: "2026-04-17", planType: "Basic", acquisitionChannel: "Referral" },
  { id: "u_003", name: "Vihaan", signupDate: "2026-05-04", planType: "Premium", acquisitionChannel: "Paid social" },
  { id: "u_004", name: "Anaya", signupDate: "2026-05-21", planType: "Basic", acquisitionChannel: "Organic" },
  { id: "u_005", name: "Arjun", signupDate: "2026-06-01", planType: "Premium", acquisitionChannel: "Referral" },
];

export const workoutLogs = [
  { id: "w_01", userId: "u_001", completedAt: "2026-07-20T06:30:00Z", durationMinutes: 45, status: "completed", workoutType: "Push" },
  { id: "w_02", userId: "u_001", completedAt: "2026-07-22T06:15:00Z", durationMinutes: 50, status: "completed", workoutType: "Legs" },
  { id: "w_03", userId: "u_002", completedAt: "2026-07-03T18:00:00Z", durationMinutes: 30, status: "skipped", workoutType: "Cardio" },
  { id: "w_04", userId: "u_003", completedAt: "2026-07-21T17:30:00Z", durationMinutes: 35, status: "completed", workoutType: "Cardio" },
  { id: "w_05", userId: "u_003", completedAt: "2026-07-23T17:30:00Z", durationMinutes: 40, status: "completed", workoutType: "Push" },
  { id: "w_06", userId: "u_005", completedAt: "2026-07-22T07:00:00Z", durationMinutes: 60, status: "completed", workoutType: "Full body" },
];

export const streakHistory = [
  { userId: "u_001", asOfDate: "2026-07-24", currentStreakDays: 12, longestStreakDays: 18, breaksLast30Days: 0, recoveriesLast30Days: 1 },
  { userId: "u_002", asOfDate: "2026-07-24", currentStreakDays: 0, longestStreakDays: 4, breaksLast30Days: 3, recoveriesLast30Days: 0 },
  { userId: "u_003", asOfDate: "2026-07-24", currentStreakDays: 8, longestStreakDays: 10, breaksLast30Days: 1, recoveriesLast30Days: 1 },
  { userId: "u_004", asOfDate: "2026-07-24", currentStreakDays: 1, longestStreakDays: 3, breaksLast30Days: 2, recoveriesLast30Days: 1 },
  { userId: "u_005", asOfDate: "2026-07-24", currentStreakDays: 16, longestStreakDays: 20, breaksLast30Days: 0, recoveriesLast30Days: 0 },
];

export const subscriptions = [
  { userId: "u_001", status: "active", renewalCadence: "monthly", priceTier: "standard", usedDiscount: false, cancellationCount: 0, renewed: true },
  { userId: "u_002", status: "cancelled", renewalCadence: "monthly", priceTier: "basic", usedDiscount: true, cancellationCount: 1, renewed: false },
  { userId: "u_003", status: "active", renewalCadence: "annual", priceTier: "standard", usedDiscount: false, cancellationCount: 0, renewed: true },
  { userId: "u_004", status: "active", renewalCadence: "monthly", priceTier: "basic", usedDiscount: true, cancellationCount: 0, renewed: false },
  { userId: "u_005", status: "active", renewalCadence: "annual", priceTier: "premium", usedDiscount: false, cancellationCount: 0, renewed: true },
];

export const currentUserId = "u_001";

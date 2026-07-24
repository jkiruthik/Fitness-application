import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function RetentionCard() {
  const retentionScore = 89;

  return (
    <View style={styles.card}>
      <Text style={styles.title}>📈 Retention Prediction</Text>

      <Text style={styles.score}>{retentionScore}%</Text>

      <Text style={styles.subtitle}>
        Based on your workout consistency and activity.
      </Text>

      <View style={styles.progressBackground}>
        <View
          style={[
            styles.progressFill,
            { width: `${retentionScore}%` },
          ]}
        />
      </View>

      <View style={styles.metrics}>
        <Text>🔥 Streak: 12 Days</Text>
        <Text>🏋 Weekly Workouts: 5</Text>
        <Text>⏱ Active Minutes: 315</Text>
      </View>

      <Text style={styles.tip}>
        Keep exercising 4–5 days per week to maintain a high retention score.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 18,
    borderRadius: 12,
    marginBottom: 18,
    elevation: 3,
  },

  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },

  score: {
    fontSize: 38,
    fontWeight: "bold",
    color: "#4CAF50",
  },

  subtitle: {
    color: "#666",
    marginBottom: 15,
  },

  progressBackground: {
    height: 12,
    backgroundColor: "#ddd",
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 15,
  },

  progressFill: {
    height: "100%",
    backgroundColor: "#4CAF50",
  },

  metrics: {
    gap: 8,
  },

  tip: {
    marginTop: 15,
    color: "#555",
    fontStyle: "italic",
  },
});
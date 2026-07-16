import React from "react";
import RetentionCard from "../components/RetentionCard";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Fitness Tracker</Text>

      <Text style={styles.greeting}>
        Good Morning 👋
      </Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>🔥 Current Streak</Text>
        <Text style={styles.bigText}>12 Days</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Today's Workout</Text>

        <Text style={styles.workout}>Push Workout</Text>
        <Text>Duration: 45 min</Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>
            Start Workout
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>
          Weekly Progress
        </Text>

        <View style={styles.progressBar}>
          <View style={styles.progress} />
        </View>

        <Text>60% Completed</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>
          Subscription
        </Text>

        <Text>Premium Plan</Text>
        <Text>Next Renewal</Text>
        <Text>20 Aug 2026</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>
          Recent Activity
        </Text>

        <Text>✔ Chest Workout</Text>
        <Text>✔ Leg Day</Text>
        <Text>✔ Cardio</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    padding: 20,
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
  },

  greeting: {
    fontSize: 18,
    marginBottom: 20,
  },

  card: {
    backgroundColor: "#fff",
    padding: 18,
    borderRadius: 12,
    marginBottom: 18,
    elevation: 3,
  },

  cardTitle: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 10,
  },

  bigText: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#4CAF50",
  },

  workout: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 5,
  },

  button: {
    marginTop: 15,
    backgroundColor: "#4CAF50",
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
  },

  buttonText: {
    color: "white",
    fontWeight: "bold",
  },

  progressBar: {
    height: 12,
    backgroundColor: "#ddd",
    borderRadius: 10,
    overflow: "hidden",
    marginVertical: 10,
  },

  progress: {
    width: "60%",
    backgroundColor: "#4CAF50",
    height: "100%",
  },
});
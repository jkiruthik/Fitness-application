import React from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Fitness Tracker</Text>
      <Text style={styles.greeting}>Good morning 👋</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>🔥 Current Streak</Text>
        <Text style={styles.bigText}>12 days</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Today&apos;s Workout</Text>
        <Text style={styles.workout}>Push Workout</Text>
        <Text style={styles.bodyText}>Duration: 45 min</Text>
        <TouchableOpacity accessibilityRole="button" style={styles.button}>
          <Text style={styles.buttonText}>Start Workout</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Weekly Progress</Text>
        <View style={styles.progressBar}><View style={styles.progress} /></View>
        <Text style={styles.bodyText}>60% completed</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, paddingBottom: 32 },
  title: { color: "#162033", fontSize: 30, fontWeight: "700", marginBottom: 8 },
  greeting: { color: "#596276", fontSize: 17, marginBottom: 20 },
  card: { backgroundColor: "#FFF", borderRadius: 14, marginBottom: 16, padding: 18, shadowColor: "#25324A", shadowOpacity: 0.08, shadowRadius: 10, elevation: 2 },
  cardTitle: { color: "#162033", fontSize: 17, fontWeight: "700", marginBottom: 10 },
  bigText: { color: "#216EFD", fontSize: 32, fontWeight: "700" },
  workout: { color: "#162033", fontSize: 20, fontWeight: "600", marginBottom: 5 },
  bodyText: { color: "#596276", fontSize: 15 },
  button: { alignItems: "center", backgroundColor: "#216EFD", borderRadius: 10, marginTop: 16, padding: 13 },
  buttonText: { color: "#FFF", fontWeight: "700" },
  progressBar: { backgroundColor: "#E8EDF7", borderRadius: 99, height: 10, marginBottom: 10, overflow: "hidden" },
  progress: { backgroundColor: "#216EFD", height: "100%", width: "60%" },
});

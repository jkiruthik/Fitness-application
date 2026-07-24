import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function StatCard({ label, value, accent = "#216EFD" }) {
  return (
    <View style={styles.card}>
      <Text style={styles.label}>{label}</Text>
      <Text style={[styles.value, { color: accent }]}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: "#FFF", borderRadius: 12, flex: 1, marginHorizontal: 4, padding: 14 },
  label: { color: "#697386", fontSize: 12, lineHeight: 17 },
  value: { fontSize: 22, fontWeight: "700", marginTop: 8 },
});

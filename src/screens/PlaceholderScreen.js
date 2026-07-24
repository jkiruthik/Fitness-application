import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function PlaceholderScreen({ title, description }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.note}>This view will be populated in a later delivery.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 24 },
  title: { color: "#162033", fontSize: 28, fontWeight: "700" },
  description: { color: "#596276", fontSize: 16, lineHeight: 24, marginTop: 10 },
  note: { color: "#8A94A7", fontSize: 14, marginTop: 20 },
});

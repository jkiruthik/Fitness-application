import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const items = [
  { label: "Home", icon: "⌂" },
  { label: "Analytics", icon: "◔" },
  { label: "Streak", icon: "♨" },
  { label: "Profile", icon: "◉" },
];

export default function BottomNavigation({ activeScreen, onChange }) {
  return (
    <View style={styles.container}>
      {items.map((item) => {
        const isActive = item.label === activeScreen;
        return (
          <Pressable
            accessibilityRole="button"
            accessibilityState={{ selected: isActive }}
            key={item.label}
            onPress={() => onChange(item.label)}
            style={styles.item}
          >
            <Text style={[styles.icon, isActive && styles.active]}>{item.icon}</Text>
            <Text style={[styles.label, isActive && styles.active]}>{item.label}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderTopColor: "#E7EAF0",
    borderTopWidth: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    paddingBottom: 10,
    paddingTop: 8,
  },
  item: { alignItems: "center", minWidth: 60 },
  icon: { color: "#99A1B3", fontSize: 20, lineHeight: 22 },
  label: { color: "#99A1B3", fontSize: 11, marginTop: 2 },
  active: { color: "#216EFD", fontWeight: "700" },
});

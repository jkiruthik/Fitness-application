import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import StatCard from "../Components/StatCard";
import { cohortRetention, retentionDrivers, retentionOverview } from "../data/retentionDashboardData";

export default function AnalyticsScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Retention analytics</Text>
      <Text style={styles.subtitle}>Prototype dashboard · synthetic data only</Text>

      <View style={styles.stats}>
        <StatCard label="D30 retention" value={retentionOverview.d30Retention} />
        <StatCard label="Renewal rate" value={retentionOverview.renewalRate} accent="#07835E" />
        <StatCard label="Holdout AUC" value={retentionOverview.holdoutAuc} accent="#7C3AED" />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Retention by signup cohort</Text>
        {cohortRetention.map((cohort) => (
          <View key={cohort.month} style={styles.cohortRow}>
            <Text style={styles.cohortLabel}>{cohort.month}</Text>
            <View style={styles.track}><View style={[styles.bar, { width: `${cohort.rate}%` }]} /></View>
            <Text style={styles.rate}>{cohort.rate.toFixed(1)}%</Text>
          </View>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Top retention signals</Text>
        {retentionDrivers.map((driver) => (
          <View key={driver.name} style={styles.driverRow}>
            <Text style={styles.driverName}>{driver.name}</Text>
            <Text style={[styles.lift, driver.direction === "positive" ? styles.positive : styles.negative]}>{driver.lift}</Text>
          </View>
        ))}
      </View>

      <Text style={styles.disclaimer}>These prototype results are descriptive. Do not use them for product decisions until real source data and validation are available.</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, paddingBottom: 30 },
  title: { color: "#162033", fontSize: 28, fontWeight: "700" },
  subtitle: { color: "#8A5A00", fontSize: 13, marginBottom: 18, marginTop: 6 },
  stats: { flexDirection: "row", marginHorizontal: -4 },
  section: { backgroundColor: "#FFF", borderRadius: 14, marginTop: 18, padding: 16 },
  sectionTitle: { color: "#162033", fontSize: 16, fontWeight: "700", marginBottom: 14 },
  cohortRow: { alignItems: "center", flexDirection: "row", marginBottom: 12 },
  cohortLabel: { color: "#596276", fontSize: 13, width: 32 },
  track: { backgroundColor: "#E8EDF7", borderRadius: 99, flex: 1, height: 10, overflow: "hidden" },
  bar: { backgroundColor: "#216EFD", borderRadius: 99, height: "100%" },
  rate: { color: "#162033", fontSize: 12, fontWeight: "600", textAlign: "right", width: 48 },
  driverRow: { alignItems: "center", borderTopColor: "#EDF0F5", borderTopWidth: 1, flexDirection: "row", justifyContent: "space-between", paddingVertical: 12 },
  driverName: { color: "#344054", flex: 1, fontSize: 14, paddingRight: 8 },
  lift: { fontSize: 14, fontWeight: "700" },
  positive: { color: "#07835E" },
  negative: { color: "#C2410C" },
  disclaimer: { color: "#697386", fontSize: 12, lineHeight: 18, marginTop: 18 },
});

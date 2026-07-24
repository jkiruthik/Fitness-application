import React, { useState } from "react";
import { SafeAreaView, StatusBar, StyleSheet, View } from "react-native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import HomeScreen from "./src/screens/HomeScreen";
import AnalyticsScreen from "./src/screens/AnalyticsScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import StreakScreen from "./src/screens/StreakScreen";
import BottomNavigation from "./src/Components/BottomNavigation";

const screens = {
  Home: HomeScreen,
  Analytics: AnalyticsScreen,
  Streak: StreakScreen,
  Profile: ProfileScreen,
};

export default function App() {
  const [activeScreen, setActiveScreen] = useState("Home");
  const Screen = screens[activeScreen];

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      <ExpoStatusBar style="dark" />
      <View style={styles.content}>
        <Screen />
      </View>
      <BottomNavigation activeScreen={activeScreen} onChange={setActiveScreen} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#F6F8FC" },
  content: { flex: 1 },
});

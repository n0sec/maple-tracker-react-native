import React from "react";
import { StatusBar, StyleSheet } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import CharacterSelectionScreen from "./screens/CharacterSelectionScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DailyBossesScreen from "./screens/DailyBossesScreen";
import DailyTasksScreen from "./screens/DailyTasksScreen";
import DailyArcaneRiverScreen from "./screens/DailyArcaneRiverScreen";
import WeeklyBossesScreen from "./screens/WeeklyBossesScreen";
import WeeklyTasksScreen from "./screens/WeeklyTasksScreen";
import { CharacterContextProvider } from "./contexts/CharacterContext";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <CharacterContextProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <SafeAreaProvider>
          <StatusBar barStyle={"light-content"} backgroundColor="#f97316" />
          <NavigationContainer>
            <Drawer.Navigator initialRouteName="Character Selection">
              <Drawer.Screen
                name="Character Selection"
                component={CharacterSelectionScreen}
                options={{
                  headerStyle: styles.headerBackground,
                  headerTitleStyle: styles.headerTitle,
                }}
              />
              <Drawer.Screen
                name="Daily Bosses"
                component={DailyBossesScreen}
              />
              <Drawer.Screen name="Daily Tasks" component={DailyTasksScreen} />
              <Drawer.Screen
                name="Daily Arcane River"
                component={DailyArcaneRiverScreen}
              />
              <Drawer.Screen
                name="Weekly Bosses"
                component={WeeklyBossesScreen}
              />
              <Drawer.Screen
                name="Weekly Tasks"
                component={WeeklyTasksScreen}
              />
            </Drawer.Navigator>
          </NavigationContainer>
        </SafeAreaProvider>
      </GestureHandlerRootView>
    </CharacterContextProvider>
  );
}

const styles = StyleSheet.create({
  headerBackground: {
    backgroundColor: "#f97316",
    height: 70,
  },
  headerTitle: {
    color: "#fff",
  },
});

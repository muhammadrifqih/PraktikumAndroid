import { FontAwesome } from "@expo/vector-icons";
import { Stack, Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ headerShadowVisible: false }}>
      <Tabs.Screen name="index" options={{
        tabBarIcon: ({ color }) => (
          <FontAwesome name="home" size={18} color={color} />
        )
      }} />
      <Tabs.Screen name="about" options={{
        tabBarIcon: ({ color }) => (
          <FontAwesome name="info-circle" size={18} color={color} />
        )
      }} />
    </Tabs>
  )
}

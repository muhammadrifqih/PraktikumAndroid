import { Stack } from "expo-router";

export default function RootLayout() {
    return (
        <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="details/[id]" options={{
                headerTitle: "Detail",
                headerTransparent: false,
                headerTintColor: "#FFF",
            }} />
        </Stack>
    )
}

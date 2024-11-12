import { Tabs } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";

export default function RootLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="allocations"
        options={{
          title: "Allocations",
          headerShown: false,
          tabBarIcon: ({ color, size }) => <MaterialIcons name="account-tree" size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="accounts"
        options={{
          title: "Accounts",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="account-balance-wallet" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          href: null,
        }}
      />
    </Tabs>
  );
}

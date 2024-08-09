import { Tabs } from "expo-router";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function RootLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="allocations"
        options={{
          headerShown: false,
          title: "Allocations",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name={"account-tree"} size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="accounts"
        options={{
          title: "Accounts",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons
              name="account-balance-wallet"
              size={size}
              color={color}
            />
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

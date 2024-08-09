import { View, Text, StyleSheet } from "react-native";
import React from "react";

import AccountsList from "../components/AccountsList";

export default function AccountsScreen() {
  return (
    <View
      style={{
        gap: 5,
        padding: 5,
      }}
    >
      <View style={styles.header}>
        <Text>Name</Text>
        <Text>CAP</Text>
        <Text>TAP</Text>
      </View>

      <AccountsList />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
});

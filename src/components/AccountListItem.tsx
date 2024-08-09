import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MD2Colors } from "react-native-paper";

export default function AccountListItem() {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>Profit</Text>

      <Text style={styles.percentage}>10%</Text>

      <Text style={styles.percentage}>20%</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 5,
  },
  name: {
    fontWeight: "bold",
    fontSize: 16,
  },
  percentage: {},
});

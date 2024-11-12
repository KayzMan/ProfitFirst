import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function AccountListItem() {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>Profit</Text>

      <View style={styles.percentageWrapper}>
        <Text style={styles.percentage}>10%</Text>
        <Text style={styles.label}>cap</Text>
      </View>

      <View style={styles.percentageWrapper}>
        <Text style={styles.percentage}>20%</Text>
        <Text style={styles.label}>tap</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 10,
    paddingVertical: 25,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 10,
  },
  name: {
    fontSize: 16,
    color: "#000",
  },
  percentageWrapper: {
    alignItems: "center",
    justifyContent: "center",
    rowGap: 5,
  },
  percentage: {
    fontWeight: "bold",
    fontSize: 18,
  },
  label: {
    color: "#777",
  },
});

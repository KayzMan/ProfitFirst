import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

export default function index() {
  return (
    <View style={styles.container}>
      <Link href={"/accounts"}>Go to Accounts</Link>
      <Text>Allocations</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

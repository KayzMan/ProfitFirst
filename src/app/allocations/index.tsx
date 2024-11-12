import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";

export default function index() {
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "Allocations", headerShadowVisible: false }} />
      <Link href={"/allocations/new"}>New Allocation</Link>
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

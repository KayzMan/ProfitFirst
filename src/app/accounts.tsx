import { View, Button, StyleSheet, TextInput } from "react-native";
import { useState } from "react";

import AccountsList from "../components/AccountsList";

export default function AccountsScreen() {
  const [name, setName] = useState("");
  const [cap, setCap] = useState("");
  const [tap, setTap] = useState("");

  const createAccount = () => {
    console.warn("Creating account....", name);
  };

  return (
    <View>
      <AccountsList />

      <View style={styles.inputRow}>
        <TextInput placeholder="Name" style={styles.input} value={name} onChangeText={setName} />
        <TextInput placeholder="CAP %" style={styles.input} value={cap} onChangeText={setCap} />
        <TextInput placeholder="TAP %" style={styles.input} value={tap} onChangeText={setTap} />
      </View>

      <Button title="Add Account" onPress={createAccount} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    backgroundColor: "white",
  },
  input: {
    flex: 1,
  },
});

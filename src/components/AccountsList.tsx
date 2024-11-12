import { FlatList } from "react-native";
import React from "react";

import AccountListItem from "./AccountListItem";

export default function AccountsList() {
  return (
    <FlatList
      data={[1, 2, 3]}
      renderItem={() => <AccountListItem />}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ gap: 5, padding: 5 }}
    />
  );
}

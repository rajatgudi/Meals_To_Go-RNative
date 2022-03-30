import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

export default function App() {
  const [FocusObject, setFocusObject] = useState(null);
  return (
    <View style={styles.container}>
      {FocusObject ? (
        <Text>I have Focused Text</Text>
      ) : (
        <Text>I do Not have focused text</Text>
      )}
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

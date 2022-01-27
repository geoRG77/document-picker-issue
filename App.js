import * as DocumentPicker from "expo-document-picker";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  selectDocument = async () => {
    let file = await DocumentPicker.getDocumentAsync({
      type: "application/pdf",
      copyToCacheDirectory: true,
    });

    console.log(file.name);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Hello world!</Text>
      <Button title="Upload file" onPress={selectDocument} />
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

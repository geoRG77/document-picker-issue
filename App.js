import * as React from "react";
import * as DocumentPicker from "expo-document-picker";
import { View, StyleSheet, Button } from "react-native";

export default function App() {
  const selectDocument = async () => {
    let file = await DocumentPicker.getDocumentAsync({});
    console.log(file.name);
  };

  return (
    <View style={styles.container}>
      <Button title="Select file" onPress={selectDocument} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ecf0f1",
  },
});

import React from "react";
import {
  KeyboardAvoidingView,
  TextInput,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";

export default function App() {
  const [textInputValue, setTextInputValue] = React.useState("TextInput1");
  const [textInputValue2, setTextInputValue2] = React.useState("TextInput2");
  const [textInputValue3, setTextInputValue3] = React.useState("TextInput3");

  return (
    <TouchableWithoutFeedback
      onPress={() => Keyboard.dismiss()}
      style={{ flex: 1 }}
    >
      <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
        keyboardVerticalOffset={30} // Distance between TextInput & Keyboard
      >
        <TextInput
          value={textInputValue}
          style={{
            ...styles.textInput
          }}
          onChangeText={e => setTextInputValue(e)}
        />
        <View style={{ width: "100%", alignItems: "center" }}>
          <TextInput
            value={textInputValue2}
            style={{
              ...styles.textInput,
              marginBottom: 20
            }}
            onChangeText={e => setTextInputValue2(e)}
          />
          <TextInput
            value={textInputValue3}
            style={styles.textInput}
            onChangeText={e => setTextInputValue3(e)}
          />
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 80,
    marginBottom: 50,
    backgroundColor: "#fff",
    justifyContent: "space-between",
    alignItems: "center"
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 4,
    width: "90%",
    padding: 5
  }
});

import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { store } from "./src/rematch/store";
import AppNavigator from "./src/config/navigation/AppNavigator";

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}

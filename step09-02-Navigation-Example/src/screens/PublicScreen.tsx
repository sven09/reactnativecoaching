import React from "react";
import {
  View,
  Dimensions,
  Platform,
  Text,
  TouchableOpacity
} from "react-native";
import { isIphoneX } from "../helper";
import { useRematchDispatch, Dispatch } from "../rematch/store";

export const PublicScreen = () => {
  const loginAsync = useRematchDispatch(
    (dispatch: Dispatch) => dispatch.auth.loginAsync
  );

  return (
    <View
      style={{
        height: "100%",
        width: "100%",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <TouchableOpacity
        style={{ borderWidth: 1, borderRadius: 4, padding: 10 }}
        onPress={() => loginAsync()} // Will change screen after 2 seconds
      >
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export const PublicScreenHeader = () => {
  return (
    <View
      style={{
        width: width,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: Platform.OS === "ios" ? (isIphoneX() ? 44 : 24) : 0,
        marginTop: Platform.OS === "ios" ? 0 : -24,
        borderBottomWidth: 1,
        height: isIphoneX() ? 90 : 60,
        backgroundColor: "white"
      }}
    >
      <Text>Hello</Text>
    </View>
  );
};

const { width } = Dimensions.get("window");

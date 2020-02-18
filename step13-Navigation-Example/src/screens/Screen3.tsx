import React from "react";
import {
  View,
  Dimensions,
  Platform,
  Text,
  TouchableOpacity
} from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";
import { isIphoneX } from "../helper";

export const Screen3 = () => {
  return <View style={{}}></View>;
};

export const Screen3Header = props => {
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
      <TouchableOpacity
        style={{
          position: "absolute",
          left: 0,
          bottom: 0,
          marginLeft: 10,
          marginBottom: 10
        }}
        onPress={() => props.navigation.goBack()}
      >
        <SimpleLineIcons name="arrow-left" size={20} />
      </TouchableOpacity>
      <Text>Screen3</Text>
    </View>
  );
};

const { width } = Dimensions.get("window");

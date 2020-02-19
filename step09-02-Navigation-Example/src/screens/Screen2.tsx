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
import { useNavigation } from "@react-navigation/native";

export const Screen2 = () => {
  const navigation = useNavigation();
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
        onPress={() => navigation.navigate("screen3")}
      >
        <Text>Navigate to Screen 3</Text>
      </TouchableOpacity>
    </View>
  );
};

export const Screen2Header = props => {
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
        onPress={() => props.navigation.toggleDrawer()}
      >
        <SimpleLineIcons name="menu" size={20} />
      </TouchableOpacity>
      <Text>Screen2</Text>
    </View>
  );
};

const { width } = Dimensions.get("window");

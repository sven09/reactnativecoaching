import React from "react";
import {
  View,
  Dimensions,
  Platform,
  Text,
  TouchableOpacity
} from "react-native";
import { isIphoneX } from "../helper";
import { Dispatch, useRematchDispatch } from "../rematch/store";
import { useNavigation } from "@react-navigation/native";
import { SimpleLineIcons } from "@expo/vector-icons";

export const Screen1 = () => {
  const navigation = useNavigation();
  const logoutAsync = useRematchDispatch(
    (dispatch: Dispatch) => dispatch.auth.logoutAsync
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
        onPress={() => logoutAsync()} // Will change screen immediately
      >
        <Text>Logout</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{ borderWidth: 1, borderRadius: 4, padding: 10 }}
        onPress={() => navigation.navigate("Tab2")} // Will change screen immediately
      >
        <Text>Navigate to Tab2</Text>
      </TouchableOpacity>
    </View>
  );
};

export const Screen1Header = props => {
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
      <Text>Screen1</Text>
    </View>
  );
};

const { width } = Dimensions.get("window");

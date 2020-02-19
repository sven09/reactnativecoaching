import { Dimensions, Platform } from "react-native";

export const isIphoneX = () => {
  if (Platform.OS === "ios") {
    const { height } = Dimensions.get("window");

    return height === 812 || height === 896;
  }
  return false;
};

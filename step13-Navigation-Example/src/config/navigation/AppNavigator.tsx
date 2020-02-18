import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  createDrawerNavigator,
  DrawerContentScrollView
} from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { useSelector } from "react-redux";
import { IRootState } from "../../rematch/store";
import {
  PublicScreen,
  PublicScreenHeader,
  Screen1,
  Screen1Header,
  Screen2,
  Screen2Header,
  Screen3,
  Screen3Header
} from "../../screens";
import { Ionicons } from "@expo/vector-icons";

const PublicStack = createStackNavigator();
const MainDrawer = createDrawerNavigator();
const MainTab = createBottomTabNavigator();
const MainTabStack1 = createStackNavigator();
const MainTabStack2 = createStackNavigator();

const MainDrawerNavigator = () => {
  return (
    <MainDrawer.Navigator
      initialRouteName="ProtectedTab"
      drawerPosition="left"
      drawerStyle={{ backgroundColor: "#d2d2d2", padding: 10 }}
      drawerContent={props => {
        return (
          <DrawerContentScrollView {...props}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Tab1")}
              style={{ marginBottom: 10 }}
            >
              <Text>Navigate to Tab1</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Tab2")}
              style={{ marginBottom: 10 }}
            >
              <Text>Navigate to Tab2</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => props.navigation.toggleDrawer()}>
              <Text>Close Drawer</Text>
            </TouchableOpacity>
          </DrawerContentScrollView>
        );
      }}
    >
      <MainDrawer.Screen name="ProtectedTab" component={MainTabNavigator} />
    </MainDrawer.Navigator>
  );
};

const MainTabNavigator = () => {
  return (
    <MainTab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Tab1") {
            iconName = focused
              ? "ios-information-circle"
              : "ios-information-circle-outline";
          } else if (route.name === "Tab2") {
            iconName = focused ? "ios-list-box" : "ios-list";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        }
      })}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray"
      }}
    >
      <MainTab.Screen name="Tab1" component={MainTabStack1Navigator} />
      <MainTab.Screen name="Tab2" component={MainTabStack2Navigator} />
    </MainTab.Navigator>
  );
};

const MainTabStack1Navigator = () => {
  return (
    <MainTabStack1.Navigator>
      <MainTabStack1.Screen
        name={"screen1"}
        component={Screen1}
        options={{ header: Screen1Header }}
      />
    </MainTabStack1.Navigator>
  );
};

const MainTabStack2Navigator = () => {
  return (
    <MainTabStack2.Navigator>
      <MainTabStack2.Screen
        name={"screen2"}
        component={Screen2}
        options={{ header: Screen2Header }}
      />
      <MainTabStack2.Screen
        name={"screen3"}
        component={Screen3}
        options={{ header: Screen3Header }}
      />
    </MainTabStack2.Navigator>
  );
};

const PublicStackNavigator = () => {
  return (
    <PublicStack.Navigator>
      <PublicStack.Screen
        name={"public"}
        component={PublicScreen}
        options={{ header: PublicScreenHeader }}
      />
    </PublicStack.Navigator>
  );
};

const AppNavigator = () => {
  const isLoggedIn = useSelector((store: IRootState) => store.auth.isLoggedIn);
  return (
    <NavigationContainer>
      <MainDrawerNavigator />
      {/* {!isLoggedIn && <PublicStackNavigator />}
      {isLoggedIn && <MainDrawerNavigator />} */}
    </NavigationContainer>
  );
};

export default AppNavigator;

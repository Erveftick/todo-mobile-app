import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";
import { View, TextField, Text, Button, Image } from "react-native-ui-lib";

import HomeScreen from "../screens/HomeScreen";
import BoxScreen from "../screens/BoxScreen";
import ColorScreen from "../screens/ColorScreen";

const Tab = createBottomTabNavigator();

const tabsProps = [
  {
    name: "Home",
    iconPath: require("../../assets/home-solid.png"),
    componentName: HomeScreen,
  },
  {
    name: " ",
    iconPath: require("../../assets/plus-solid.png"),
    componentName: BoxScreen,
  },
  {
    name: "Tasks",
    iconPath: require("../../assets/tasks-solid.png"),
    componentName: ColorScreen,
  },
];

const Tabs = () => {
  const tabBlock = tabsProps.map((tab, index) => {
    return (
      <Tab.Screen
        key={tab.name}
        name={tab.name}
        component={tab.componentName}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Image
                source={tab.iconPath}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#e32f45" : "#748c94",
                }}
              />
              <Text
                style={{
                  color: focused ? "#e32f45" : "#748c94",
                  fontSize: 12,
                }}
              >
                {tab.name}
              </Text>
            </View>
          ),
        }}
      />
    );
  });

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: [
          {
            ...styles.bottomMenu,
            ...styles.shadow,
          },
          null,
        ],
      }}
    >
      {tabBlock}
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  bottomMenu: {
    position: "absolute",
    bottom: 25,
    left: 20,
    right: 20,
    elevation: 0,
    backgroundColor: "#ffffff",
    borderRadius: 15,
    height: 60,
  },
  shadow: {
    shadowColor: "#7F5DF0",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});

export default Tabs;

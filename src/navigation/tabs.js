import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";
import { View, Text, Image, TouchableOpacity } from "react-native-ui-lib";

import HomeScreen from "../screens/HomeScreen";
import TasksScreen from "../screens/TasksScreen";
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
    componentName: TasksScreen,
  },
  {
    name: "Tasks",
    iconPath: require("../../assets/tasks-solid.png"),
    componentName: ColorScreen,
  },
];

const CustomTabBarButton = ({ children, action }) => {
  return (
    <TouchableOpacity
      style={{
        top: -20,
        justifyContent: "center",
        alignItems: "center",
        ...styles.shadow,
      }}
      onPress={action}
    >
      <View
        style={{
          width: 65,
          height: 65,
          borderRadius: 35,
          backgroundColor: "#5848FF",
          ...styles.shadow,
        }}
      >
        {children}
      </View>
    </TouchableOpacity>
  );
};

const Tabs = () => {
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
      <Tab.Screen
        key="Home"
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Image
                source={require("../../assets/home-solid.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#5848FF" : "#748c94",
                }}
              />
              <Text
                style={{
                  color: focused ? "#5848FF" : "#748c94",
                  fontSize: 12,
                }}
              >
                Home
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Post"
        component={ColorScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                source={require("../../assets/plus-solid.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: "#fff",
                }}
              />
            </View>
          ),
          tabBarButton: (props) => {
            return <CustomTabBarButton {...props} />;
          },
        }}
      />
      <Tab.Screen
        key="Tasks"
        name="Tasks"
        component={TasksScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Image
                source={require("../../assets/tasks-solid.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#5848FF" : "#748c94",
                }}
              />
              <Text
                style={{
                  color: focused ? "#5848FF" : "#748c94",
                  fontSize: 12,
                }}
              >
                Tasks
              </Text>
            </View>
          ),
        }}
      />
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
      height: 8,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});

export default Tabs;

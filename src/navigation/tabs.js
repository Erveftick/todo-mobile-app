import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Platform } from "react-native";
import { View, Text } from "react-native-ui-lib";

import HomeScreen from "../screens/HomeScreen";
import TasksScreen from "../screens/TasksScreen";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faHome, faList } from "@fortawesome/free-solid-svg-icons";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  const TabScreenView = ({ name, icon, focused }) => {
    return (
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginBottom: Platform.OS === "ios" ? -30 : 0,
        }}
      >
        <FontAwesomeIcon
          icon={icon}
          resizeMode="contain"
          style={{
            width: 50,
            height: 50,
            color: focused ? "#5848FF" : "#748c94",
          }}
        />
        <Text
          style={{
            color: focused ? "#5848FF" : "#748c94",
            fontSize: 12,
          }}
        >
          {name}
        </Text>
      </View>
    );
  };

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        key="Home"
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabScreenView focused={focused} icon={faHome} name="Home" />
          ),
        }}
      />
      <Tab.Screen
        key="Tasks"
        name="Tasks"
        component={TasksScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabScreenView focused={focused} icon={faList} name="Tasks" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#7F5DF0",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 25,
  },
});

export default Tabs;

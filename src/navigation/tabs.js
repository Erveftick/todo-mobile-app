import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";
import { View, Text, TouchableOpacity } from "react-native-ui-lib";

import HomeScreen from "../screens/HomeScreen";
import TasksScreen from "../screens/TasksScreen";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faHome, faList, faPlus } from "@fortawesome/free-solid-svg-icons";

const Tab = createBottomTabNavigator();

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
  const TabScreenView = ({ name, icon, focused }) => {
    return (
      <View style={{ alignItems: "center", justifyContent: "center" }}>
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
            <TabScreenView focused={focused} icon={faHome} name="Home" />
          ),
        }}
      />
      <Tab.Screen
        key="Post"
        name="Post"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <FontAwesomeIcon
                icon={faPlus}
                resizeMode="contain"
                style={{
                  width: 50,
                  height: 50,
                  color: "#fff",
                  ...styles.shadow,
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
            <TabScreenView focused={focused} icon={faList} name="Tasks" />
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

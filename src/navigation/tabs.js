import React, { useEffect, useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Platform, Keyboard } from "react-native";
import { View, Text, TouchableOpacity, Image } from "react-native-ui-lib";

import HomeScreen from "../screens/HomeScreen";
import TasksScreen from "../screens/TasksScreen";
import CreateTaskScreen from "../screens/CreateTaskScreen";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faHome, faList, faPlus } from "@fortawesome/free-solid-svg-icons";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true); // or some other action
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false); // or some other action
      }
    );
  
    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

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

  const CreateTaskButton = ({ children, onPress }) => {
    return (
      <TouchableOpacity
        style={{
          top: -20,
          justifyContent: "center",
          alignItems: "center",
          ...styles.shadow,
        }}
        onPress={onPress}
      >
        <View
          style={{
            width: 70,
            height: 70,
            borderRadius: 35,
            backgroundColor: "#5848FF",
          }}
        >
          {children}
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          position: "absolute",
          bottom: (isKeyboardVisible ? -25 : 25),
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: "#ffffff",
          height: 60,
          borderRadius: 15,
          ...styles.shadow,
        },
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
        key="Create"
        name="Create"
        component={CreateTaskScreen}
        options={{
          tabBarIcon: () => (
            <FontAwesomeIcon
              icon={faPlus}
              resizeMode="contain"
              style={{
                width: 30,
                height: 30,
                color: "#fff",
              }}
            />
          ),
          tabBarButton: (props) => <CreateTaskButton {...props} />,
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

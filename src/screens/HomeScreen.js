import React, { useReducer } from "react";
import { StyleSheet, Animated, Dimensions } from "react-native";
import { View, Text, Button, TouchableOpacity } from "react-native-ui-lib";
import { reducer, initialState } from "./TasksScreen";
import Header from "../components/Header";
import { LinearGradient } from "expo-linear-gradient";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCheck, faPlay, faStop } from "@fortawesome/free-solid-svg-icons";

import moment from "moment";

var width = Dimensions.get("window").width; //full width
var height = Dimensions.get("window").height; //full height

const HomeScreen = ({ navigation }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const undoneTasks = state.data
    .filter((task) => task.completed == false)
    .sort((a, b) => {
      const diffA = a.time - moment().format("HH:mm");
      const diffB = b.time - moment().format("HH:mm");
      return diffA - diffB;
    });
  const doneTasks = state.data.filter((task) => task.completed == true);

  const screenData =
    undoneTasks.length !== 0
      ? { title: undoneTasks.length, subtitle: "tasks for today" }
      : { title: "Hey", subtitle: "you are free today" };

  const MainTitleText = ({ label }) => {
    return (
      <Text
        style={{
          color: "#4548FF",
          marginBottom: -15,
          fontSize: undoneTasks.length == 0 ? 54 : 128,
        }}
      >
        {label}
      </Text>
    );
  };

  const TodayCompletedTasks = () => {
    return (
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <FontAwesomeIcon style={{ color: "#73d13d" }} icon={faCheck} />
        <Text style={styles.mainLabel}>{doneTasks.length}</Text>
        <Text style={styles.mainLabel}>tasks done</Text>
      </View>
    );
  };

  const InfoPlate = () => {
    return (
      <View
        style={{
          marginHorizontal: 25,
          height: 500,
          justifyContent: "center",
        }}
      >
        <MainTitleText label={screenData.title} />
        <Text style={styles.mainTitle}>{screenData.subtitle}</Text>
        {undoneTasks.length !== 0 ? (
          <TodayCompletedTasks />
        ) : (
          <Text style={styles.mainLabel}>
            Last day you finished {doneTasks.length} tasks
          </Text>
        )}
      </View>
    );
  };

  const FacadeList = () => {
    return undoneTasks.map((task, i) => {
      return (
        <View key={i}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Tasks");
            }}
          >
            <View style={styles.listItem}>
              <Text style={i === 0 ? styles.firstListTitle : styles.listTitle}>
                {task.title}
              </Text>
              <View
                style={{
                  marginLeft: "auto",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                {i === 0 ? (
                  <>
                    <Text
                      style={i === 0 ? styles.firstListTime : styles.listTime}
                    >
                      {task.time}
                    </Text>
                    <FontAwesomeIcon
                      style={{ marginLeft: 40, color: "#4548FF" }}
                      icon={faStop}
                    />
                  </>
                ) : (
                  <FontAwesomeIcon style={{ color: "#888" }} icon={faPlay} />
                )}
              </View>
            </View>
          </TouchableOpacity>
          <View
            style={{
              borderBottomColor: "#999",
              opacity: 0.3,
              borderBottomWidth: 1,
            }}
          />
        </View>
      );
    });
  };

  const MainScreen = () => {
    const AnimatedLinearGradient =
      Animated.createAnimatedComponent(LinearGradient);

    return (
      <View style={styles.container}>
        <Header />
        <View
          style={[
            styles.circle,
            undoneTasks.length !== 0
              ? styles.hasTaskCircle
              : styles.noTaskCircle,
          ]}
        />
        <InfoPlate />
        {undoneTasks.length !== 0 ? (
          <>
            <View style={styles.nearestTaskPlate}>
              <FacadeList />
              <LinearGradient
                locations={[0.1, 0.45]}
                colors={["rgba(255,255,255,0)", "#FFF"]}
                style={styles.gradient}
              />
            </View>
          </>
        ) : (
          <Button
            outline={true}
            label={"Add a new task"}
            outlineWidth={2}
            labelStyle={{ marginVertical: 5 }}
            style={{ marginHorizontal: 25 }}
            onPress={() => {
              navigation.navigate("Tasks");
            }}
          />
        )}
      </View>
    );
  };

  return <MainScreen />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 50,
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 30,
  },
  circle: {
    width: 700,
    height: 700,
    borderRadius: 500 / 1.5,
    backgroundColor: "rgba(69, 72, 255, 0.07)",
    position: "absolute",
  },
  hasTaskCircle: {
    left: -370,
    top: 100,
  },
  noTaskCircle: {
    left: -250,
    top: -530,
  },
  mainTitle: {
    fontSize: 54,
    marginBottom: 15,
  },
  mainLabel: {
    fontSize: 20,
    color: "#888",
    marginLeft: 7,
  },
  gradient: {
    height: 150,
    width: width,
    position: "absolute",
    bottom: 0,
  },
  nearestTaskPlate: {
    backgroundColor: "#fff",
    height: 300,
    borderRadius: 30,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.56,
    shadowRadius: 16.0,

    elevation: 24,
  },
  listItem: {
    marginVertical: 20,
    marginHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  listTitle: {
    fontSize: 24,
    color: "#888",
  },
  firstListTitle: {
    color: "#4548FF",
    fontSize: 24,
    fontWeight: "bold",
  },
  firstListTime: {
    color: "#4548FF",
    fontSize: 20,
    marginLeft: 25,
  },
  listTime: {
    fontSize: 20,
    marginLeft: 25,
  },
});

export default HomeScreen;

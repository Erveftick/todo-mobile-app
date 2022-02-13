import React, { useReducer } from "react";
import { StyleSheet, FlatList } from "react-native";
import { View, Text } from "react-native-ui-lib";
import { reducer, initialState } from "./TasksScreen";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCheck, faPlay, faStop } from "@fortawesome/free-solid-svg-icons";

import moment from "moment";

const HomeScreen = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const undoneTasks = state.data
    .filter((task) => task.completed == false)
    .sort((a, b) => {
      const diffA = a.time - moment().format("HH:mm");
      const diffB = b.time - moment().format("HH:mm");
      return diffA - diffB;
    });
  const doneTasks = state.data.filter((task) => task.completed == true);

  console.log(undoneTasks);

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
          marginHorizontal: 30,
          height: 470,
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
    return (
      <View>
        <InfoPlate />
        <View style={styles.nearestTaskPlate}>
          <FacadeList />
        </View>
      </View>
    );
  };

  return <MainScreen />;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
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
  nearestTaskPlate: {
    backgroundColor: "#fff",
    height: 700,
    borderRadius: 30,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,

    elevation: 13,
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
    marginLeft: 30,
  },
  listTime: {
    fontSize: 20,
    marginLeft: 30,
  },
});

export default HomeScreen;

import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Checkbox, View, Text } from "react-native-ui-lib";
import BoxScreen from "../screens/BoxScreen";

const TaskListItem = ({ data, action }) => {
  return (
    <BoxScreen>
      <View style={{ flexDirection: "row", marginVertical: 7 }}>
        <View style={[styles.taskBox]}>
          <Text
            style={[
              styles.taskTitle,
              data.completed ? styles.completedTitle : styles.defaultTitle,
            ]}
          >
            {data.title}
          </Text>
          <Text style={[styles.taskTime]}>{data.time}</Text>
        </View>
        <Checkbox
          containerStyle={{ marginBottom: 20, marginLeft: 15 }}
          value={data.completed}
          size={30}
          onValueChange={() => action({ id: data.id })}
          style={[
            styles.checkboxStyles,
            data.completed ? styles.checkboxShadow : null,
          ]}
        />
      </View>
    </BoxScreen>
  );
};

const styles = StyleSheet.create({
  taskBox: {
    flex: 1,
    flexDirection: "column",
  },
  taskTitle: { fontSize: 16, fontWeight: "bold" },
  taskTime: { fontSize: 12, color: "#888" },
  checkboxStyles: {
    width: 30,
    height: 30,
    marginRight: 15,
  },
  defaultTitle: {
    color: "black",
    textDecorationStyle: "solid",
  },
  completedTitle: {
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
    color: "#4548FF",
  },
  checkboxShadow: {
    shadowColor: "#4548FF",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.65,
    shadowRadius: 5,
    elevation: 12,
  },
});

export default TaskListItem;

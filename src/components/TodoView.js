import React from "react";
import { StyleSheet, FlatList } from "react-native";
import { View, Text } from "react-native-ui-lib";
import TaskListItem from "../components/ListItem";
import Empty from "./Empty";

const TodoView = ({ label, data, onUpdateCheckbox, viewStyles }) => {
  const isDataEmpty = data.length === 0;

  return isDataEmpty ? (
    <View style={{ marginBottom: 30 }}>
      <Text style={[styles.todoTitle]}>{label}</Text>
      <Empty />
    </View>
  ) : (
    <View style={{ marginBottom: 30 }}>
      <Text style={[styles.todoTitle]}>{label}</Text>
      <View style={viewStyles}>
        <FlatList
          keyExtractor={(task) => task.title}
          data={data}
          renderItem={({ item }) => {
            return (
              <TaskListItem data={{ ...item }} action={onUpdateCheckbox} />
            );
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  todoTitle: {
    color: "#888",
    fontWeight: "bold",
    marginBottom: 3,
  },
});

export default TodoView;

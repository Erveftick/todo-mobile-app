import React from "react";
import { StyleSheet, FlatList, Divider } from "react-native";
import { View, Text, Colors } from "react-native-ui-lib";
import TaskListItem from "../components/ListItem";

const TodoView = ({ label, data }) => {
  return (
    <View style={{marginBottom: 50}}>
      <Text style={[styles.todoTitle]}>{label}</Text>
      <View style={{ height: 250 }}>
        <FlatList
          keyExtractor={(task) => task.title}
          data={data}
          renderItem={({ item }) => {
            return <TaskListItem {...item} />;
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

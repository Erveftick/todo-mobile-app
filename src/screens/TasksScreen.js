import React from "react";
import { StyleSheet, FlatList } from "react-native";
import { View, Text } from "react-native-ui-lib";
import TodoView from "../components/TodoView";

const TasksScreen = () => {
  const allTasks = [
    { title: "Create mobile app", time: "12:00", checked: true },
    { title: "Go to grocery shop", time: "14:00", checked: true },
    { title: "Drink coffee", time: "09:00", checked: false },
    { title: "Send dickpic to Lyosha", time: "12:00", checked: false },
    { title: "Drink 2 cup of tea", time: "17:00", checked: false },
    { title: "Cry", time: "12:00", checked: true },
    { title: "Another one", time: "12:00", checked: false },
    { title: "Create mobile app1", time: "12:00", checked: false },
    { title: "Go to grocery shop1", time: "12:00", checked: true },
    { title: "Drink coffee1", time: "12:00", checked: true },
    { title: "Send dickpic to Lyosha1", time: "12:00", checked: false },
    { title: "Drink 2 cup of tea1", time: "12:00", checked: true },
    { title: "Cry1", time: "12:00", checked: false },
    { title: "Another one1", time: "12:00", checked: true },
    { title: "24 one1", time: "12:00", checked: false },
    { title: "42 one1", time: "12:00", checked: false },
    { title: "243 one1", time: "12:00", checked: false },
  ];

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <TodoView label="To do" data={allTasks.filter(task => task.checked == false )} />
      <TodoView label="Done" data={allTasks.filter(task => task.checked == true )} />
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

export default TasksScreen;

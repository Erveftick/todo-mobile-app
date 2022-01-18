import React, { useReducer } from "react";
import { StyleSheet } from "react-native";
import { View } from "react-native-ui-lib";
import TodoView from "../components/TodoView";

const allTasks = [
  { id: 1, title: "Create mobile app", time: "12:00", completed: true },
  { id: 2, title: "Go to grocery shop", time: "14:00", completed: true },
  { id: 3, title: "Drink coffee", time: "09:00", completed: false },
  { id: 4, title: "Send dickpic to Lyosha", time: "12:00", completed: false },
  { id: 5, title: "Drink 2 cup of tea", time: "17:00", completed: false },
  { id: 6, title: "Cry", time: "12:00", completed: true },
  { id: 62, title: "Another one", time: "12:00", completed: false },
  { id: 7, title: "Create mobile app1", time: "12:00", completed: false },
  { id: 8, title: "Go to grocery shop1", time: "12:00", completed: true },
  { id: 9, title: "Drink coffee1", time: "12:00", completed: true },
  {
    id: 10,
    title: "Send dickpic to Lyosha1",
    time: "12:00",
    completed: false,
  },
  { id: 11, title: "Drink 2 cup of tea1", time: "12:00", completed: true },
  { id: 12, title: "Cry1", time: "12:00", completed: false },
  { id: 13, title: "Another one1", time: "12:00", completed: true },
  { id: 14, title: "24 one1", time: "12:00", completed: false },
  { id: 15, title: "42 one1", time: "12:00", completed: false },
  { id: 16, title: "243 one1", time: "12:00", completed: false },
];

const reducer = (state, action) => {
  return {
    ...state,
    data: state.data.map((task) => {
      if (task.id === action.payload.id) {
        console.log(action.payload);
        return { ...task, completed: !task.completed };
      } else {
        return task;
      }
    }),
  };
};

const initialState = { data: allTasks };

const TasksScreen = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <TodoView
        label="To do"
        data={state.data.filter((task) => task.completed == false)}
        onUpdateCheckbox={(id) => dispatch({ type: "SWITCH_COMPLITED", payload: id })}
      />
      <TodoView
        label="Done"
        data={state.data.filter((task) => task.completed == true)}
        onUpdateCheckbox={(id) => dispatch({ type: "SWITCH_COMPLITED", payload: id })}
      />
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

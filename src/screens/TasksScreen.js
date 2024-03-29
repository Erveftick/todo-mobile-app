import React, { useReducer, useState } from "react";
import { StyleSheet } from "react-native";
import { View, Button } from "react-native-ui-lib";
import TodoView from "../components/TodoView";
import Header from "../components/Header";

export const allTasks = [
  {
    id: 1,
    title: "Create mobile app",
    time: "12:00",
    date: "15/02/2022",
    completed: true,
    important: true,
  },
  {
    id: 2,
    title: "Go to grocery shop",
    time: "14:00",
    date: "15/02/2022",
    completed: true,
    important: true,
  },
  {
    id: 3,
    title: "Drink coffee",
    time: "09:00",
    date: "15/02/2022",
    completed: false,
    important: false,
  },
  {
    id: 4,
    title: "Drink water",
    time: "08:00",
    date: "15/02/2022",
    completed: false,
    important: false,
  },
  {
    id: 5,
    title: "Drink 2 cup of tea",
    time: "17:00",
    date: "15/02/2022",
    completed: false,
    important: false,
  },
  {
    id: 6,
    title: "Cry",
    time: "12:00",
    date: "15/02/2022",
    completed: true,
    important: false,
  },
];

export const reducer = (state, action) => {
  switch (action.type) {
    case "SWITCH_COMPLITED":
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
    case "ADD_TASK":
      console.log(action.payload);
      const { title, time, date, important } = action.payload;
      return {
        ...state,
        data: [
          ...state.data,
          {
            id: state.data.length + 1,
            title: title,
            date: date,
            time: time,
            completed: false,
            important: important,
          },
        ],
      };
  }
};

export const initialState = { data: allTasks };

const TasksScreen = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const toDoTasks = state.data
    .filter((task) => task.completed == false)
    .sort(function (a, b) {
      return a.important - b.important;
    })
    .sort(function (a, b) {
      return a.date - b.date;
    })
    .reverse();
  const doneTasks = state.data.filter((task) => task.completed == true);

  return (
    <View style={styles.container}>
      <Header />
      <View style={{ paddingHorizontal: 25, paddingVertical: 15 }}>
        <TodoView
          label="To do"
          viewStyles={{ height: 260 }}
          data={toDoTasks}
          onUpdateCheckbox={(id) =>
            dispatch({ type: "SWITCH_COMPLITED", payload: id })
          }
        />
        <TodoView
          label="Done"
          viewStyles={{ height: 260 }}
          data={doneTasks}
          onUpdateCheckbox={(id) =>
            dispatch({ type: "SWITCH_COMPLITED", payload: id })
          }
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 50,
    backgroundColor: "#fff",
  },
  todoTitle: {
    color: "#888",
    fontWeight: "bold",
    marginBottom: 3,
  },
});

export default TasksScreen;

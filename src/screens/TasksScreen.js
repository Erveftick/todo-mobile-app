import React, { useReducer, useState } from "react";
import { StyleSheet } from "react-native";
import { View, Button } from "react-native-ui-lib";
import TodoView from "../components/TodoView";
import CreateTaskDialog from "../components/CreateTaskDialog";

const allTasks = [
  { id: 1, title: "Create mobile app", time: "12:00", completed: true },
  { id: 2, title: "Go to grocery shop", time: "14:00", completed: true },
  { id: 3, title: "Drink coffee", time: "09:00", completed: false },
  { id: 4, title: "Send dickpic to Lyosha", time: "12:00", completed: false },
  { id: 5, title: "Drink 2 cup of tea", time: "17:00", completed: false },
  { id: 6, title: "Cry", time: "12:00", completed: true },
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
  { id: 17, title: "Another one", time: "12:00", completed: false },
];

const reducer = (state, action) => {
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
      const { title, time, date } = action.payload;
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
        }]
      };
  }
};

const initialState = { data: allTasks };

const TasksScreen = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isDialogVisible, setIsDialogVisible] = useState(false);
  const toDoTasks = state.data.filter((task) => task.completed == false);
  const doneTasks = state.data.filter((task) => task.completed == true);

  return (
    <View style={{ padding: 20 }}>
      <CreateTaskDialog
        isVisible={isDialogVisible}
        onClose={() => setIsDialogVisible(!isDialogVisible)}
        onAdd={(object) => {
          dispatch({ type: "ADD_TASK", payload: object })
          setIsDialogVisible(!isDialogVisible)}}
      />
      <TodoView
        label="To do"
        viewStyles={{ height: 250 }}
        data={toDoTasks}
        onUpdateCheckbox={(id) =>
          dispatch({ type: "SWITCH_COMPLITED", payload: id })
        }
      />
      <TodoView
        label="Done"
        viewStyles={{ height: 250 }}
        data={doneTasks}
        onUpdateCheckbox={(id) =>
          dispatch({ type: "SWITCH_COMPLITED", payload: id })
        }
      />
      <Button
        style={{
          position: "absolute",
          bottom: -10,
          alignItems: "center",
          justifyContent: "center",
          alignSelf: "center",
        }}
        label={"Add a new task!"}
        onPress={() => setIsDialogVisible(!isDialogVisible)}
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

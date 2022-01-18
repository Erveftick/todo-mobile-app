import React, { useState } from "react";
import { StyleSheet, Platform, FlatList } from "react-native";
import {
  View,
  TextField,
  Text,
  Colors,
  Spacings,
  Button,
  DateTimePicker,
} from "react-native-ui-lib";
import TasksScreen from "./TasksScreen";
import { DateTime } from "luxon";

const tasks = [];

const CreateTaskScreen = () => {
  const [taskTitle, setTaskTitle] = useState('');
  const [taskTime, setTaskTime] = useState(null);

  return (
    <View style={{ padding: 15 }}>
      <TextField
        placeholder="Tap me!"
        text50
        label={"Task title"}
        migrate
        value={taskTitle}
        onChangeText={newValue => setTaskTitle(newValue)}
        containerStyle={{
          marginBottom: Spacings.s5,
          marginTop: Platform.OS === "ios" ? Spacings.s3 : Spacings.s1,
        }}
        fieldStyle={styles.withUnderline}
      />
      <DateTimePicker
        mode={"time"}
        title={"Time"}
        placeholder={"Select time"}
        timeFormat={"HH:mm"}
        onChange={(newTime) => setTaskTime(newTime)}
        value={taskTime}
      />
      <Button
        label="Create a new task"
        disabled={taskTitle == "" || taskTime == null}
        onPress={() => {
          tasks.push({
            id: Math.random(),
            title: taskTitle,
            time: taskTime.toLocaleString(DateTime.TIME_24_SIMPLE),
            completed: false,
          });
          setTaskTitle("");
          setTaskTime(null);
        }}
      />
      <FlatList
        keyExtractor={(task) => task.title}
        data={tasks}
        renderItem={({ item }) => {
          return (
            <View>
              <Text>{item.id}</Text>
              <Text>{item.title}</Text>
              <Text>{item.time}</Text>
              <Text>{item.completed}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  withUnderline: {
    borderBottomWidth: 1,
    borderColor: Colors.grey40,
    paddingBottom: 4,
  },
  textStyle: {
    fontSize: 30,
  },
});

export default CreateTaskScreen;

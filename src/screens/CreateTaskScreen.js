import React, { useState } from "react";
import {
  StyleSheet,
  Platform,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import {
  View,
  Text,
  TextField,
  Colors,
  Spacings,
  Button,
  DateTimePicker,
  Checkbox,
} from "react-native-ui-lib";
import Header from "../components/Header";
import moment from "moment";

const CreateTaskScreen = () => {
  const RenderCheckbox = ({ value, changeValueFunc, label }) => {
    return (
      <Checkbox
        containerStyle={{ marginBottom: 20 }}
        size={30}
        value={value}
        onValueChange={() => {
          changeValueFunc(!value);
        }}
        label={label}
        style={[styles.checkboxStyles, value ? styles.checkboxShadow : null]}
      />
    );
  };

  const MainForm = () => {
    const [taskTitle, setTaskTitle] = useState("");
    const [taskDescr, setTaskDescr] = useState("");
    const [taskTime, setTaskTime] = useState(null);
    const [taskDate, setTaskDate] = useState(null);
    const [taskImportant, setTaskImportant] = useState(false);
    const [taskTodayDate, setTodayDate] = useState(true);

    return (
      <View style={{ marginHorizontal: 25 }}>
        <Text text60BL style={{ marginVertical: 20 }}>
          Create a new task
        </Text>
        <TextField
          placeholder="Task name"
          text50
          label={"Task title"}
          placeholderTextColor={Colors.grey40}
          floatingPlaceholderColor={Colors.grey20}
          migrate
          onChangeText={(v) => setTaskTitle(v)}
          value={taskTitle}
          containerStyle={{
            marginBottom: Spacings.s5,
            marginTop: Platform.OS === "ios" ? Spacings.s3 : Spacings.s1,
          }}
          labelStyle={{ color: Colors.grey30 }}
          fieldStyle={styles.withUnderline}
        />
        <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
          <RenderCheckbox
            label={"Today"}
            value={taskTodayDate}
            changeValueFunc={setTodayDate}
          />
          <RenderCheckbox
            label={"Important"}
            value={taskImportant}
            changeValueFunc={setTaskImportant}
          />
        </View>
        {taskTodayDate ? null : (
          <DateTimePicker
            mode={"date"}
            title={"Date"}
            placeholder={"Select date"}
            onChange={(newDate) => setTaskDate(newDate)}
            value={taskDate}
          />
        )}
        <DateTimePicker
          mode={"time"}
          title={"Time"}
          placeholder={"Select time"}
          timeFormat={"HH:mm"}
          onChange={(newTime) => setTaskTime(newTime)}
          value={taskTime}
        />
        <TextField
          placeholder="Describe what you will be doing"
          label={"Task description"}
          placeholderTextColor={Colors.grey40}
          floatingPlaceholderColor={Colors.grey20}
          migrate
          multiline
          onChangeText={(v) => setTaskDescr(v)}
          value={taskDescr}
          containerStyle={{
            marginBottom: Spacings.s5,
            marginTop: Platform.OS === "ios" ? Spacings.s3 : Spacings.s1,
          }}
          labelStyle={{ color: Colors.grey30 }}
          fieldStyle={styles.descriptionTextarea}
        />
        <Button
          label="Create a new task"
          disabled={taskTitle == "" || taskTime == null}
          style={{ marginTop: Spacings.s3 }}
          onPress={() => {
            onAdd({
              title: taskTitle,
              date: moment(taskTodayDate ? taskTime : taskDate).format(
                "DD/MM/YYYY"
              ),
              time: moment(taskTime).format("HH:mm"),
              important: taskImportant,
            });
            setTaskTitle("");
            setTaskTime(null);
            setTaskDate(null);
            setTodayDate(true);
            setTaskImportant(false);
          }}
        />
      </View>
    );
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <Header />
      <ScrollView
        style={{ flex: 1 }}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <MainForm />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 50,
    backgroundColor: "#fff",
  },
  dialogDesign: {
    backgroundColor: "#fff",
    marginBottom: 30,
    padding: 15,
    borderRadius: 15,
    zIndex: 9999,
  },
  withUnderline: {
    borderBottomWidth: 1,
    borderColor: Colors.grey40,
    paddingBottom: 4,
  },
  descriptionTextarea: {
    borderColor: Colors.grey50,
    paddingTop: 0,
    paddingBottom: 0,
    height: 100,
    flex: 1,
    marginTop: Spacings.s3,
    borderWidth: 1,
    padding: 5,
    textAlignVertical: "top",
  },
  textStyle: {
    fontSize: 30,
  },
  checkboxStyles: {
    width: 30,
    height: 30,
    margin: 0,
  },
  checkboxShadow: {
    shadowColor: "#4548FF",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.65,
    shadowRadius: 5,
    elevation: 12,
  },
});

export default CreateTaskScreen;

import React, { useState } from "react";
import { StyleSheet, Platform } from "react-native";
import {
  View,
  Text,
  TextField,
  PanningProvider,
  Colors,
  Dialog,
  Spacings,
  Button,
  DateTimePicker,
  Checkbox,
} from "react-native-ui-lib";
import moment from "moment";

const CreateTaskDialog = ({ isVisible, onClose, onAdd }) => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskTime, setTaskTime] = useState(null);
  const [taskDate, setTaskDate] = useState(null);
  const [taskImportant, setTaskImportant] = useState(false);
  const [taskTodayDate, setTodayDate] = useState(true);

  const renderPannableHeader = () => {
    return (
      <View>
        <Text text60BL style={{ marginTop: 5, marginBottom: 15 }}>
          Create a new task
        </Text>
      </View>
    );
  };

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

  return (
    <Dialog
      useSafeArea
      key={"DialogKey"}
      panDirection={PanningProvider.Directions.DOWN}
      renderPannableHeader={renderPannableHeader}
      containerStyle={styles.dialogDesign}
      visible={isVisible}
      onDismiss={onClose}
      ignoreBackgroundPress={false}
    >
      <TextField
        placeholder="e.g drink a glass of water"
        text50
        label={"Task title"}
        migrate
        value={taskTitle}
        onChangeText={(newValue) => setTaskTitle(newValue)}
        containerStyle={{
          marginBottom: Spacings.s5,
          marginTop: Platform.OS === "ios" ? Spacings.s3 : Spacings.s1,
        }}
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
    </Dialog>
  );
};

const styles = StyleSheet.create({
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

export default CreateTaskDialog;

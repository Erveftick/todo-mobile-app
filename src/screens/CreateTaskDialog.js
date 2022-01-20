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
} from "react-native-ui-lib";
import { DateTime } from "luxon";

const CreateTaskDialog = ({ isVisible, onClose, onAdd }) => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskTime, setTaskTime] = useState(null);

  const renderPannableHeader = () => {
    return (
      <View>
        <Text text60BL style={{ marginTop: 5, marginBottom: 15 }}>
          Create a new task
        </Text>
      </View>
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
            time: taskTime.toLocaleString(DateTime.TIME_24_SIMPLE),
          });
          setTaskTitle("");
          setTaskTime(null);
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
});

export default CreateTaskDialog;

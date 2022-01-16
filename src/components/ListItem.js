import React, { useState } from "react";
import { StyleSheet, Alert } from "react-native";
import {
  Checkbox,
  View,
  BorderRadiuses,
  Text,
  Button,
  ListItem,
  Colors,
} from "react-native-ui-lib";

const TaskListItem = (props) => {
  console.log(props);
  const [checkboxState, useCheckboxState] = useState(false);

  return (
    <View style={{ flexDirection: "row", marginVertical: 7 }}>
      <View style={[styles.taskBox]}>
        <Text style={[styles.taskTitle]}>{props.title}</Text>
        <Text style={[styles.taskTime]}>{props.time}</Text>
      </View>
      <Checkbox
        size={30}
        containerStyle={{ marginBottom: 20, marginLeft: 15 }}
        value={checkboxState}
        onValueChange={() => useCheckboxState(!checkboxState)}
        style={[
          styles.checkboxStyles,
          checkboxState ? styles.checkboxShadow : null,
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  taskBox: {
    flex: 1,
    flexDirection: "column",
  },
  taskTitle: { fontSize: 16, fontWeight: "bold" },
  taskTime: { fontSize: 12, color: "#888" },
  checkboxStyles: {
    width: 30,
    marginRight: 15,
  },
  checkboxShadow: {
    shadowColor: "#4548FF",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.65,
    shadowRadius: 5,
    elevation: 12,
  },
});

export default TaskListItem;

import React, { useState, useRef } from "react";
import { StyleSheet, Animated } from "react-native";
import { Checkbox, View, Text } from "react-native-ui-lib";

const TaskListItem = ({ data, action }) => {
  const [visible, setVisible] = useState(data.completed);
  const fadeAnim = useRef(new Animated.Value(1)).current;

  return (
    <Animated.View
      style={{
        opacity: fadeAnim,
      }}
    >
      <View style={{ flexDirection: "row", marginVertical: 7 }}>
        <View style={[styles.taskBox]}>
          <Text
            style={[
              styles.taskTitle,
              visible ? styles.completedTitle : styles.defaultTitle,
            ]}
          >
            {data.title}
          </Text>
          <Text style={[styles.taskTime]}>{data.time}</Text>
        </View>
        <Checkbox
          containerStyle={{ marginBottom: 20, marginLeft: 15 }}
          value={visible}
          size={30}
          onValueChange={() => {
            setVisible(!visible);
            Animated.timing(fadeAnim, {
              toValue: 0,
              duration: 1500,
              useNativeDriver: true,
            }).start();
            setTimeout(() => {
              action({ id: data.id });
            }, 1200);
          }}
          style={[
            styles.checkboxStyles,
            visible ? styles.checkboxShadow : null,
          ]}
        />
      </View>
    </Animated.View>
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
    height: 30,
    marginRight: 15,
  },
  defaultTitle: {
    color: "black",
    textDecorationStyle: "solid",
  },
  completedTitle: {
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
    color: "#4548FF",
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

import React from "react";
import { View, Text, StyleSheet } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.veiwStyle}>
      <Text>Layout will be here</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  veiwStyle: {
    borderWidth: 3,
    borderColor: "black",
    margin: 10,
  },
});

export default BoxScreen;

import React from "react";
import { StyleSheet } from "react-native";
import {View, Text} from "react-native-ui-lib";

const HomeScreen = ({ navigation }) => {

  return (
    <View>
      <Text style={styles.text}>Hello, World!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
  buttonStyle: {
    marginVertical: 10,
  },
});

export default HomeScreen;

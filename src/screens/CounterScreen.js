import React, { useReducer } from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const CounterScreen = () => {
  const reducer = (state, action) => {
    return {counter: state.counter + action.payload}
  };

  const [state, dispatch] = useReducer(reducer, { counter: 0 });

  return (
    <View>
      <Text style={styles.textStyle}>This is the counter screen</Text>
      <Text>{state.counter}</Text>
      <Button
        title="Increase"
        onPress={() => {
          dispatch({ type: "increase_counter", payload: 1 });
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
            dispatch({ type: "increase_counter", payload: -1 });
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
});

export default CounterScreen;

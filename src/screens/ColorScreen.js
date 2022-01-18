import React, { useReducer } from "react";
import { StyleSheet, View } from "react-native";
import ChangeColorButtons from "../components/ChangeColorComponent";

const ColorScreen = () => {
  const reducer = (state, action) => {
    switch (action.colorToChange) {
      case "red":
        return { ...state, red: state.red + action.amount };
      case "green":
        return { ...state, green: state.green + action.amount };
      case "blue":
        return { ...state, blue: state.blue + action.amount };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  const { red, green, blue } = state;

  return (
    <View>
      <ChangeColorButtons
        onIncrease={() => dispatch({ colorToChange: "red", amount: 15 })}
        onDecrease={() => dispatch({ colorToChange: "red", amount: -15 })}
        color="red"
      />
      <ChangeColorButtons
        onIncrease={() => dispatch({ colorToChange: "green", amount: 15 })}
        onDecrease={() => dispatch({ colorToChange: "green", amount: -15 })}
        color="green"
      />
      <ChangeColorButtons
        onIncrease={() => dispatch({ colorToChange: "blue", amount: 15 })}
        onDecrease={() => dispatch({ colorToChange: "blue", amount: -15 })}
        color="blue"
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red},${green},${blue})`,
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

export default ColorScreen;

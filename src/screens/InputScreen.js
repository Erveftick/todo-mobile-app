import React, {useState} from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const InputScreen = () => {
    const [value, setValue] = useState("");

  return (
    <View>
      <Text>Input will be here</Text>
      <TextInput 
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={value}
        onChangeText={(newValue) => setValue(newValue)}
        />
        {(value.length > 5) ? null : <Text>Wrong!</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
  },
  input: {
    margin: 15,
    fontSize: 14,
    borderColor: "black",
    borderWidth: 1,
  },
});

export default InputScreen;

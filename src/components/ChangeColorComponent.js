import React from "react";
import { Text, Button, View, Image } from "react-native";

const ChangeColorButtons = ({ color, onIncrease, onDecrease }) => {
  return (
    <View>
      <Text>{color}</Text>
      <Button
        title={`More - ${color}`}
        onPress={() => onIncrease()}
      />
      <Button
        title={`Less - ${color}`}
        onPress={() => onDecrease()}
      />
    </View>
  );
};

export default ChangeColorButtons;

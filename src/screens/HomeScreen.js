import React from "react";
import {
  FlatList,
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
} from "react-native";

const HomeScreen = ({ navigation }) => {
  const buttons = [
    { name: "Components" },
    { name: "Lists" },
    { name: "Images" },
    { name: "Counter" },
    { name: "Colors" },
    { name: "Input" },
    { name: "Layouts" },
  ];

  return (
    <View>
      <Text style={styles.text}>Hello, World!</Text>
      <FlatList
        keyExtractor={(btn) => btn.name}
        data={buttons}
        renderItem={({ item }) => {
          return (
            <Button
              title={item.name}
              onPress={() => navigation.navigate(item.name)}
            />
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
  buttonStyle: {
    marginVertical: 10,
    paddingBottom: 10,
  },
});

export default HomeScreen;

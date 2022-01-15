import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";

const ImageDetails = props => {
  return (
    <View>
      <Text style={styles.textStyle}>This is the images screen</Text>
      <Text>{props.title}</Text>
      <Text>{props.imageScore}</Text>
      <Image source={props.imageSource}/>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
});

export default ImageDetails;

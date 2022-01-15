import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import ImageDetails from "../components/ImageComponents";

const ImageScreen = () => {
  return (
    <View>
      <ImageDetails
        title="1"
		imageScore = "4"
        imageSource={require("../../assets/forest.jpg")} />
      <ImageDetails 
	  	title="2" 
		imageScore = "8"
		imageSource={require("../../assets/beach.jpg")} />
      <ImageDetails
        title="3"
		imageScore = "10"
        imageSource={require("../../assets/mountain.jpg")} />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
});

export default ImageScreen;

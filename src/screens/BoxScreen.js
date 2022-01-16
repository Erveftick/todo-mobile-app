import React, { useRef, useEffect } from 'react';
import { Animated} from 'react-native';

const BoxScreen = (props) => {
  const fadeAnim = useRef(new Animated.Value(0.3)).current 

  React.useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 1500,
        useNativeDriver: true,
      }
    ).start();
  }, [fadeAnim])

  return (
    <Animated.View
      style={{
        ...props.style,
        opacity: fadeAnim,
      }}
    >
      {props.children}
    </Animated.View>
  );
}

export default BoxScreen
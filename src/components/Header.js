import React from "react";
import { StyleSheet } from "react-native";
import { View, Text } from "react-native-ui-lib";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faThumbtack, faCheck } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
      <Text style={styles.text}>Taskerly</Text>
      <FontAwesomeIcon
        style={[
          styles.text,
          {
            transform: [{ rotateZ: "-45deg" }],
          },
        ]}
        icon={faThumbtack}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#4548FF",
    marginHorizontal: 25,
  },
});

export default Header;

import React from "react";
import { Image, View, Text } from "react-native-ui-lib";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faFolderOpen } from "@fortawesome/free-solid-svg-icons";

const Empty = ({label}) => {
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <FontAwesomeIcon
        icon={faFolderOpen}
        size={128}
        style={{ color: "#888" }}
      />
      <Text
        style={{
          fontSize: 18,
          color: '#888',
          textAlign: "center",
          justifyContent: "center",
        }}
      >
        {(label || `Oops, here is nothing!`)}
      </Text>
    </View>
  );
};

export default Empty;

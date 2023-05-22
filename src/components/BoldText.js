import React from "react";
import { Text } from "react-native";

const BoldText = (props) => {
  return (
    <Text
      {...props}
      style={{
        ...props.style,
        fontFamily: "pretendard-bold",
      }}
    >
      {props.children}
    </Text>
  );
};

export default BoldText;

import React from "react";
import { Text } from "react-native";

const ExtraBoldText = (props) => {
  return (
    <Text
      {...props}
      style={{
        ...props.style,
        fontFamily: "pretendard-light",
      }}
    >
      {props.children}
    </Text>
  );
};

export default ExtraBoldText;

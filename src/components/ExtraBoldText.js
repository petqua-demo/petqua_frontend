import React from "react";
import { Text } from "react-native";

const ExtraBoldText = (props) => {
  return (
    <Text
      {...props}
      style={{
        ...props.style,
        fontFamily: "pretendard-extraBold",
      }}
    >
      {props.children}
    </Text>
  );
};

export default ExtraBoldText;

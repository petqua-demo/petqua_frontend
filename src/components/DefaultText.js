import React from "react";
import { Text } from "react-native";

const DefaultText = (props) => {
  return (
    <Text
      {...props}
      style={{
        ...props.style,
        fontFamily: "pretendard-regular",
      }}
    >
      {props.children}
    </Text>
  );
};

export default DefaultText;

import React from "react";
import { Text } from "react-native";

const SemiBoldText = (props) => {
  return (
    <Text
      {...props}
      style={{
        ...props.style,
        fontFamily: "pretendard-semiBold",
      }}
    >
      {props.children}
    </Text>
  );
};

export default SemiBoldText;

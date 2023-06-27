import React from "react";
import { TextInput } from "react-native";

const RegularTextInput = (props) => {
  return (
    <TextInput
      {...props}
      style={{
        ...props.style,
        fontFamily: "pretendard-regular",
      }}
    >
      {props.children}
    </TextInput>
  );
};

export default RegularTextInput;

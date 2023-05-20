import { StyleSheet, Text, TextInput, Image, View } from "react-native";
import palette from "../styles/ColorPalette";

const InputBox = ({ placeholder, value, ...props }) => {
  return (
    <View style={styles.container}>
      <TextInput
        {...props}
        style={styles.textInput}
        placeholder={placeholder}
        placeholderTextColor={palette.lightGray}
        value={value}
      ></TextInput>
      <Image
        source={require("../../assets/images/clearTextInputButton.png")}
        style={styles.clearButton}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingBottom: 12,
    borderBottomWidth: 2,
    borderBottomColor: palette.mainColor,
  },
  textInput: {
    flex: 1,
    fontSize: 20,
  },
  clearButton: {
    width: 21,
    height: 21,
    marginTop: 2,
  },
});

export default InputBox;

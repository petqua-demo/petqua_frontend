import { StyleSheet, Pressable, Image, View } from "react-native";
import palette from "../styles/ColorPalette";
import TextInput from "./RegularTextInput";
import images from "../enum/Images";

const InputBox = ({ placeholder, value, clearText, ...props }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder={placeholder}
        placeholderTextColor={palette.mainGray}
        value={value}
        {...props}
      ></TextInput>
      <Pressable onPress={clearText} style={{ alignItems: "center" }}>
        <Image
          source={images.clearTextInputButton}
          style={[styles.clearButton, !value && styles.noInputValue]}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 12,
    borderBottomWidth: 2,
    borderBottomColor: palette.mainBlue,
  },
  textInput: {
    flex: 1,
    fontSize: 20,
    outline: "none",
  },
  clearButton: {
    width: 16,
    height: 16,
  },
  noInputValue: {
    width: 0,
    height: 0,
  },
});

export default InputBox;

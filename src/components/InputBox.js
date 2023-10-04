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
        placeholderTextColor={palette.gray2}
        value={value}
        {...props}
      ></TextInput>
      <Pressable onPress={clearText}>
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
  noInputValue: {
    width: 0,
    height: 0,
  },
});

export default InputBox;

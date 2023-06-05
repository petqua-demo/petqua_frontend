import { Pressable, StyleSheet } from "react-native";
import palette from "../styles/ColorPalette";
import Text from "./DefaultText";

const BlueBorderButton = ({ title, onPress, buttonStyle }) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        {
          backgroundColor: "#ffffff",
        },
        pressed && {
          backgroundColor: "#ffffff",
        },
        buttonStyle,
      ]}
      onPressOut={onPress}
    >
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 9.23,
    borderWidth: 0.91,
    borderColor: palette.mainColor,
  },
  title: {
    color: palette.mainColor,
    fontSize: 16,
  },
});

export default BlueBorderButton;

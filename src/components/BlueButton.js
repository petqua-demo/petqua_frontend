import { Text, Pressable, StyleSheet } from "react-native";
import palette from "../styles/ColorPalette";

const Button = ({ title, onPress, buttonStyle }) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        {
          backgroundColor: palette.mainColor,
        },
        pressed && {
          backgroundColor: palette.mainColor,
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
  },
  title: {
    color: "#ffffff",
    fontSize: 16,
  },
});

export default Button;
import { Pressable, StyleSheet } from "react-native";
import palette from "../styles/ColorPalette";
import MediumText from "./MediumText";

const CategoryButton = ({ title, onPress, buttonStyle }) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        {
          backgroundColor: "#ffffff",
        },
        pressed && {
          backgroundColor: palette.body1,
        },
        buttonStyle,
      ]}
      onPressOut={onPress}
    >
      <MediumText style={styles.title}>{title}</MediumText>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    borderWidth: 0.5,
    borderColor: palette.body1,
  },
  title: {
    color: palette.gray3,
    fontSize: 12,
  },
});

export default CategoryButton;

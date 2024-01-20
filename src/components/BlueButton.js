import { Pressable, StyleSheet } from "react-native";
import palette from "../styles/ColorPalette";
import BoldText from "./BoldText";

const BlueButton = ({ title, onPress }) => {
  return (
    <Pressable style={styles.button} onPressOut={onPress}>
      <BoldText style={styles.title}>{title}</BoldText>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    backgroundColor: palette.mainBlue,
  },
  title: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "500",
  },
});

export default BlueButton;

import { Pressable, StyleSheet } from "react-native";
import palette from "../styles/ColorPalette";
import MediumText from "./MediumText";

const CommunityCategoryRect = ({ title }) => {
  return (
    <Pressable style={styles.button}>
      <MediumText style={styles.title}>{title}</MediumText>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    alignSelf: "baseline",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    paddingHorizontal: 7,
    paddingVertical: 4,
    backgroundColor: palette.skyBlue,
  },
  title: {
    color: "#ffffff",
    fontSize: 14,
  },
});

export default CommunityCategoryRect;

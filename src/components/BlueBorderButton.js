import { Pressable, StyleSheet } from "react-native";
import palette from "../styles/ColorPalette";
import Text from "./DefaultText";

const BlueBorderButton = ({ onPress }) => {
  return (
    <Pressable style={styles.button} onPressOut={onPress}>
      <Text style={styles.subTitle}>펫쿠아가 처음이라면?</Text>
      <Text style={styles.title}>시작하기</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "100%",
    height: 50,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: palette.mainBlue,
    gap: 12,
  },
  subTitle: {
    color: palette.mainBlue,
    fontSize: 16,
    fontWeight: "400",
  },
  title: {
    color: palette.mainBlue,
    fontSize: 16,
    fontWeight: "700",
  },
});

export default BlueBorderButton;

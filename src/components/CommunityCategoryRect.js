import { Pressable, StyleSheet } from "react-native";
import palette from "../styles/ColorPalette";
import Text from "./DefaultText";

const CommunityCategoryRect = ({ title }) => {
  return (
    <Pressable style={styles.button}>
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    paddingHorizontal: 8,
    height: 18,
    backgroundColor: "#7DADFF",
  },
  title: {
    color: "#ffffff",
    fontSize: 10,
  },
});

export default CommunityCategoryRect;

import { View, StyleSheet } from "react-native";
import BoldText from "./BoldText";

const BlueButtonUnable = ({ title, buttonStyle }) => {
  return (
    <View style={[styles.button, buttonStyle]}>
      <BoldText style={styles.title}>{title}</BoldText>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    backgroundColor: "#ABCAFF",
  },
  title: {
    color: "#ffffff",
    fontSize: 16,
  },
});

export default BlueButtonUnable;

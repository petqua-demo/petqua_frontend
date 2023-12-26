import { Pressable, StyleSheet, View } from "react-native";
import Text from "./DefaultText";

const CommunityTopTabItem = ({ title, onPress, buttonStyle, textStyle }) => {
  return (
    <Pressable style={[styles.container, buttonStyle]} onPressOut={onPress}>
      <Text style={textStyle}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 11,
    paddingBottom: 13,
  },
});

export default CommunityTopTabItem;

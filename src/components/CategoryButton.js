import { Pressable, StyleSheet } from "react-native";
import palette from "../styles/ColorPalette";
import Text from "./DefaultText";

const CategoryButton = ({ title, onPress }) => {
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
    borderRadius: 40,
    borderWidth: 0.5,
    borderColor: palette.gray2,
    paddingHorizontal: 19,
    height: 34,
    marginRight: 6,
    // 카테고리 아이템 줄 나뉘었을 때 간격을 위해 marginBottom 설정
    marginBottom: 12,
  },
  title: {
    color: palette.gray4,
    fontSize: 14,
  },
});

export default CategoryButton;

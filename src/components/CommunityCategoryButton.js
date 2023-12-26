import { TouchableOpacity, StyleSheet } from "react-native";
import palette from "../styles/ColorPalette";
import Text from "./DefaultText";

const CommunityCategoryButton = ({ id, title, selected, onToggle }) => {
  return (
    <TouchableOpacity
      onPressOut={onToggle(id)}
      style={[
        styles.button,
        selected
          ? { backgroundColor: palette.skyBlue }
          : { backgroundColor: "#ffffff" },
      ]}
    >
      {selected ? (
        <Text style={styles.selectedTitle}>{title}</Text>
      ) : (
        <Text style={styles.title}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 40,
    borderWidth: 0.5,
    borderColor: palette.mainGray,
    paddingHorizontal: 13,
    height: 34,
    marginRight: 6,
    // 카테고리 아이템 줄 나뉘었을 때 간격을 위해 marginBottom 설정
    marginBottom: 6,
  },
  title: {
    color: palette.gray4,
    fontSize: 14,
  },
  selectedTitle: {
    color: "#ffffff",
    fontSize: 14,
  },
});

export default CommunityCategoryButton;

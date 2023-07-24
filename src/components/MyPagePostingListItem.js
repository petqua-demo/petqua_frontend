import { Pressable, Image, StyleSheet } from "react-native";
import images from "./Images";
import MediumText from "./MediumText";
import palette from "../styles/ColorPalette";

const MyPagePostingListItem = ({ title, onPress }) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Image
        source={images.myPageSettingIcon}
        style={{ width: 23, height: 23 }}
      />
      <MediumText style={styles.title}>{title}</MediumText>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    // backgroundColor: "green",
  },
  title: {
    fontSize: 16,
    color: palette.gray4,
    marginLeft: 21,
  },
});

export default MyPagePostingListItem;

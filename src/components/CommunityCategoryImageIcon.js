import { Pressable, StyleSheet, Image } from "react-native";
import palette from "../styles/ColorPalette";
import Text from "./DefaultText";

const CommunityCategoryImageIcon = ({ onPress, imageSrc, title }) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Image source={imageSrc} style={styles.iconImage}></Image>
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  iconImage: {
    width: 70,
    height: 70,
    borderRadius: 8,
  },
  title: {
    color: palette.gray4,
    fontSize: 12,
    marginTop: 12,
  },
});

export default CommunityCategoryImageIcon;

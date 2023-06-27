import { StyleSheet, TouchableOpacity } from "react-native";
import Text from "./DefaultText";

const PostingMenuItem = ({ ImageSrc, title }) => {
  return (
    <TouchableOpacity style={styles.container}>
      {ImageSrc}
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 47,
    backgroundColor: "#515151",
    borderRadius: 16,
    paddingVertical: 12,
    paddingHorizontal: 14,
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    marginLeft: 10,
    color: "#ffffff",
  },
});

export default PostingMenuItem;

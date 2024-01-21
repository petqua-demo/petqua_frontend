import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
} from "react-native";
import palette from "../styles/ColorPalette";
import images from "../enum/Images";

const CommunityTextInput = ({ onAddComment, selectedPreviousComment }) => {
  const [newComment, setNewComment] = useState("");
  const commentInputHandler = (newComment) => {
    setNewComment(newComment);
  };
  const addCommentHandler = () => {
    newComment == ""
      ? Alert.alert("", "내용을 입력해주세요.")
      : onAddComment(newComment, selectedPreviousComment);
    setNewComment("");
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputText}
        placeholder="댓글을 달아 보세요 !"
        autoCorrect={false}
        onChangeText={commentInputHandler}
        value={newComment}
      />
      <TouchableOpacity onPress={addCommentHandler}>
        <Image source={images.sendIcon} style={{ width: 18, height: 19 }} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    backgroundColor: palette.gray3,
    paddingHorizontal: 10,
    height: 40,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  inputText: {
    flex: 1,
  },
  addBtn: {
    color: "#745757",
  },
});

export default CommunityTextInput;

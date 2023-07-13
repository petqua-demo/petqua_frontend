import React from "react";
import { View } from "react-native";
import CommentComponent from "./Comment";

const CommentList = ({ Comments, onRemove, onPress }) => {
  return (
    <View>
      {Comments.map((Comment) => (
        <CommentComponent
          key={Comment.id}
          {...Comment}
          onRemove={onRemove}
          onPress={onPress}
        />
      ))}
    </View>
  );
};

export default CommentList;

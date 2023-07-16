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
import images from "./Images";

const AddCommentInput = ({ onAddComment }) => {
  const [newComment, setNewComment] = useState("");
  const [currentDate, setCurrentDate] = useState(getCurrentDateString());

  //   시간 부정확하게 받아오는 것 해결하기

  const commentInputHandler = (newComment) => {
    setNewComment(newComment);
    setDate();
  };

  const setDate = () => {
    setCurrentDate(getCurrentDateString());
  };

  const addCommentHandler = () => {
    newComment == ""
      ? Alert.alert("", "내용을 입력해주세요.")
      : onAddComment("홍길동", newComment, currentDate);
    // 사용자 이름 받아오는 건 DB 연결 후에 작업.
    setNewComment("");
  };

  function getCurrentDateString() {
    // 현재 시간 불러오기
    const date = formatDateString(new Date().getDate()); //current date
    const month = formatDateString(new Date().getMonth() + 1); //current month
    const hours = formatDateString(new Date().getHours()); //current hours
    const min = formatDateString(new Date().getMinutes()); //current minutes
    const sec = new Date().getSeconds(); //current seconds

    return month + "/" + date + " " + hours + ":" + min + ":" + sec;
  }

  function formatDateString(strDate) {
    if (strDate < 10) {
      strDate = "0" + strDate;
    }
    return strDate;
  }

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="댓글로 문의 해보세요 !"
        placeholderTextColor={palette.gray2}
        style={{ flex: 1 }}
        autoCorrect={false}
        onChangeText={commentInputHandler}
        value={newComment}
      />
      <TouchableOpacity onPress={setDate} onPressOut={addCommentHandler}>
        <Image
          source={images.sendIcon}
          style={{
            width: 22.12,
            height: 18.88,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#F3F3F3",
    borderRadius: 12,
    // marginTop: 13,
    paddingHorizontal: 14,
    paddingVertical: 18,
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

export default AddCommentInput;

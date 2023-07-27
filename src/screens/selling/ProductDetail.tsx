import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  Pressable,
  Keyboard,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import useCachedResources from "../../useCachedResources";
import { useState } from "react";
import uuid from "react-uuid";

import Text from "../../components/DefaultText";
import BoldText from "../../components/BoldText";
import palette from "../../styles/ColorPalette";
import TextInput from "../../components/RegularTextInput";
import Comment from "../../components/Comment";
import CommentReply from "../../components/CommentReply";
import AddCommentInput from "../../components/AddCommentInput";
import CommentList from "../../components/CommentList";
import images from "../../components/Images";

export default function ProductDetail({ navigation }: any) {
  const isLoaded = useCachedResources();

  const [clickImage, setClickImage] = useState(false);
  const [clickHeart, setClickHeart] = useState(false);

  // 상세페이지 이미지 클릭 핸들러
  const clickImageHandler = () => {
    if (clickImage == false) {
      setClickImage(true);
    } else {
      setClickImage(false);
    }
  };

  // 이미 있는 댓글들 (임시) 나중에 서버에서 받아오기
  const [comments, setComments] = useState([
    {
      id: uuid(),
      userName: "펫쿠아",
      textValue: "가나다라마바사 아자차카",
      time: "05/04 20:57",
    },
    {
      id: uuid(),
      userName: "박채윤",
      textValue: "가나다라마바사 아자차카",
      time: "05/04 20:57",
    },
    {
      id: uuid(),
      userName: "펫쿠아",
      textValue: "가나다라마바사 아자차카",
      time: "05/04 20:57",
    },
    {
      id: uuid(),
      userName: "박채윤",
      textValue: "가나다라마바사 아자차카",
      time: "05/04 20:57",
    },
    {
      id: uuid(),
      userName: "펫쿠아",
      textValue: "가나다라마바사 아자차카",
      time: "05/04 20:57",
    },
    {
      id: uuid(),
      userName: "박채윤",
      textValue: "가나다라마바사 아자차카",
      time: "05/04 20:57",
    },
    {
      id: uuid(),
      userName: "펫쿠아",
      textValue: "가나다라마바사 아자차카",
      time: "05/04 20:57",
    },
    {
      id: uuid(),
      userName: "박채윤",
      textValue: "가나다라마바사 아자차카",
      time: "05/04 20:57",
    },
  ] as any);

  // 댓글 추가
  const addComment = (userName: any, text: any, time: any) => {
    setComments([
      ...comments,
      { id: uuid(), userName: userName, textValue: text, time: time },
    ]);
  };

  // 댓글삭제
  const onRemove = (id: any) => (e: any) => {
    setComments(comments.filter((Comment: { id: any }) => Comment.id !== id));
  };

  // 댓글 버튼 클릭
  const onPress = (id: any) => (e: any) => {};

  // 찜 클릭시. 나중에 DB 저장하는 것 구현
  const emptyHeart = images.heartIconLightGrey;
  const filledHeart = images.heartIconFilled;

  const onClickHeart = () => {
    if (clickHeart == false) {
      setClickHeart(true);
    } else {
      setClickHeart(false);
    }
  };

  if (isLoaded) {
    return (
      <View style={styles.container}>
        <KeyboardAvoidingView
          style={styles.container}
          behavior={Platform.select({ ios: "padding" })}
        >
          <ScrollView style={{ marginBottom: 170 }}>
            <View style={styles.container}>
              <StatusBar style="auto" />

              {/* 상세페이지 제품 이미지 */}
              <Pressable onPress={clickImageHandler}>
                <Image
                  source={images.productDetailImageExample}
                  style={{ width: "100%", height: 370 }}
                />
              </Pressable>
              <View style={styles.content}>
                <View style={styles.userInfo}>
                  {/* (글 작성자) 회원 정보
                  나중에 서버에서 userInfo 받아와서 처리하기 */}
                  <Image
                    // 프로필 사진
                    source={images.itemImageExample}
                    style={styles.userProfile}
                  />
                  <BoldText style={styles.userName}>펫쿠아</BoldText>
                </View>
                {/* 상품 정보 */}
                <View style={styles.productInfo}>
                  <BoldText style={styles.productName}>구피</BoldText>
                  {/* 카테고리, 업로드 시간 정보 */}
                  <View style={{ flexDirection: "row", marginBottom: 19 }}>
                    <Text style={styles.postingDetail}>열대어/소형어</Text>
                    <Text style={styles.postingDetail}>1시간전</Text>
                  </View>
                  {/* 상품 설명 */}
                  <Text style={styles.productExplanation}>
                    구피구피구구피구피구구피구피구구피구피구구피구피구구피구피구구피구피구구피구피구구피구피구구피구피구구피구구피구피구구피구피구구피구피구구피구피구
                  </Text>
                </View>
              </View>
              {/* 구분선 */}
              <View
                style={{
                  backgroundColor: "#F4F4F4",
                  width: "100%",
                  height: 8,
                }}
              />
              {/* 댓글 목록 */}
              <View style={styles.content}>
                <BoldText style={styles.commentHeader}>댓글</BoldText>
                <CommentList
                  Comments={comments}
                  onRemove={onRemove}
                  onPress={onPress}
                />
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
        <KeyboardAvoidingView
          style={{ position: "absolute", width: "100%", bottom: 0, flex: 1 }}
          behavior={"position"}
          enabled
        >
          {/* 가격, 댓글 입력칸 컨테이너 */}
          <View style={styles.contactContainer}>
            <View style={{ flexDirection: "row" }}>
              {/* 봉달 버튼 */}
              <Pressable onPress={onClickHeart}>
                <Image
                  source={clickHeart ? filledHeart : emptyHeart}
                  style={{
                    width: 21.23,
                    height: 19.3,
                    marginLeft: 3,
                    marginTop: 9,
                  }}
                />
              </Pressable>
              <View style={{ marginLeft: 44 }}>
                <BoldText style={styles.productPrice}>12000원</BoldText>
                <BoldText style={styles.bidding}>가격제안 불가</BoldText>
              </View>
            </View>
            {/* 댓글 입력칸 */}
            <View style={styles.commentInput}>
              <AddCommentInput onAddComment={addComment} />
            </View>
          </View>
        </KeyboardAvoidingView>
        {/* 상세이미지 클릭하면 화면 꽉 채워 보여줄 이미지 */}
        {clickImage && (
          <View
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              backgroundColor: palette.gray4,
              justifyContent: "center",
            }}
          >
            <Image
              source={images.productDetailImageExample}
              style={{
                width: "100%",
                height: "100%",
                resizeMode: "contain",
              }}
            />
            {/* 닫기 버튼 */}
            <Pressable
              onPress={clickImageHandler}
              style={{ position: "absolute", right: 14, top: 60 }}
            >
              <Image
                source={images.closeButtonIconBlack}
                style={{
                  width: 40,
                  height: 40,
                }}
              />
            </Pressable>
          </View>
        )}
      </View>
    );
  } else {
    return null;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    flex: 1,
    marginHorizontal: 24,
  },
  userInfo: {
    paddingTop: 26,
    paddingBottom: 18,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 0.5,
    borderBottomColor: "#DBDBDB",
  },
  userProfile: {
    width: 43,
    height: 43,
    borderRadius: 50,
    marginRight: 17,
  },
  userName: {
    fontSize: 16,
    color: palette.gray3,
  },
  productInfo: {
    marginTop: 22,
    marginBottom: 81,
  },
  productName: {
    fontSize: 24,
    color: palette.gray3,
    marginBottom: 14,
  },
  postingDetail: {
    fontSize: 12,
    color: "#999999",
    marginRight: 17,
  },
  productExplanation: {
    fontSize: 16,
    color: palette.gray3,
    lineHeight: 26,
  },
  commentHeader: {
    fontSize: 20,
    color: palette.gray3,
    marginTop: 22,
    marginBottom: 22,
  },
  contactContainer: {
    width: "100%",
    position: "absolute",
    bottom: 0,
    paddingHorizontal: 15,
    paddingBottom: 48,
    backgroundColor: "#ffffff",
    paddingTop: 14,
    borderTopWidth: 0.5,
    borderTopColor: palette.gray2,
  },
  productPrice: {
    color: palette.gray3,
    fontSize: 16,
  },
  bidding: {
    color: "#999999",
    fontSize: 14,
    marginTop: 10,
  },
  commentInput: {
    // width: "100%",
    // backgroundColor: "#F3F3F3",
    // borderRadius: 12,
    marginTop: 13,
    // paddingHorizontal: 14,
    // paddingVertical: 18,
    // flexDirection: "row",
    // justifyContent: "space-between",
  },
});

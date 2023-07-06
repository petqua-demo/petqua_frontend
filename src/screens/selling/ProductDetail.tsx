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

import Text from "../../components/DefaultText";
import BoldText from "../../components/BoldText";
import palette from "../../styles/ColorPalette";
import TextInput from "../../components/RegularTextInput";
import Comment from "../../components/Comment";
import CommentReply from "../../components/CommentReply";

export default function ProductDetail({ navigation }: any) {
  const isLoaded = useCachedResources();

  if (isLoaded) {
    return (
      // <Pressable style={{ flex: 1 }} onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.select({ ios: "padding" })}
      >
        <ScrollView style={{ marginBottom: 70 }}>
          <View style={styles.container}>
            <StatusBar style="auto" />
            <Image
              source={require("../../../assets/images/productDetailImageExample.png")}
              style={{ width: "100%", height: 370 }}
            />
            <View style={styles.content}>
              <View style={styles.userInfo}>
                {/* 나중에 서버에서 userInfo 받아와서 처리하기 */}
                <Image
                  source={require("../../../assets/images/itemImageExample.png")}
                  style={styles.userProfile}
                />
                <BoldText style={styles.userName}>펫쿠아</BoldText>
              </View>
              <View style={styles.productInfo}>
                <BoldText style={styles.productName}>구피</BoldText>
                <View style={{ flexDirection: "row", marginBottom: 19 }}>
                  <Text style={styles.postingDetail}>열대어/소형어</Text>
                  <Text style={styles.postingDetail}>1시간전</Text>
                </View>
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
            <View style={styles.content}>
              <BoldText style={styles.commentHeader}>댓글</BoldText>
              <Comment
                userName="펫쿠아"
                commentContent="가나다라마바사 아자차카 가나다라마바사 아자차카"
                time="05/04 20:57"
                onPress={{}}
              />
              <Comment
                userName="펫쿠아"
                commentContent="가나다라마바사 아자차카"
                time="05/04 20:57"
                onPress={{}}
              />
              <CommentReply
                userName="익명 1"
                commentContent="가나다라마바사 아자차카"
                time="05/04 20:57"
                onPress={{}}
              />
              <CommentReply
                userName="익명 1"
                commentContent="가나다라마바사 아자차카"
                time="05/04 20:57"
                onPress={{}}
              />
              <Comment
                userName="펫쿠아"
                commentContent="가나다라마바사 아자차카 가나다라마바사 아자차카아자차카가나다라마바사 아자차카 가나다라마바사 아자차카아자차카"
                time="05/04 20:57"
                onPress={{}}
              />
              <Comment
                userName="펫쿠아"
                commentContent="가나다라마바사 아자차카 가나다라마바사 아자차카"
                time="05/04 20:57"
                onPress={{}}
              />
              <Comment
                userName="펫쿠아"
                commentContent="가나다라마바사 아자차카 가나다라마바사 아자차카"
                time="05/04 20:57"
                onPress={{}}
              />
              <Comment
                userName="펫쿠아"
                commentContent="가나다라마바사 아자차카 가나다라마바사 아자차카"
                time="05/04 20:57"
                onPress={{}}
              />
            </View>
          </View>
        </ScrollView>
        {/* 가격, 댓글 컨테이너 */}
        <View style={styles.contactContainer}>
          <View style={{ flexDirection: "row" }}>
            <Image
              source={require("../../../assets/images/heartIconLightGrey.png")}
              style={{
                width: 21.23,
                height: 19.3,
                marginLeft: 3,
                marginTop: 9,
              }}
            />
            <View style={{ marginLeft: 44 }}>
              <BoldText style={styles.productPrice}>12000원</BoldText>
              <BoldText style={styles.bidding}>가격제안 불가</BoldText>
            </View>
          </View>
          <View style={styles.commentInput}>
            <TextInput
              placeholder="댓글로 문의 해보세요 !"
              placeholderTextColor={palette.gray2}
              style={{ flex: 1 }}
            />
            <Image
              source={require("../../../assets/images/sendIcon.png")}
              style={{
                width: 22.12,
                height: 18.88,
              }}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
      // </Pressable>
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
    width: "100%",
    backgroundColor: "#F3F3F3",
    borderRadius: 12,
    marginTop: 13,
    paddingHorizontal: 14,
    paddingVertical: 18,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

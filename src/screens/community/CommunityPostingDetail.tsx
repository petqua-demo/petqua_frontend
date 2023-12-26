import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  Pressable,
  Keyboard,
  Image,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  FlatList,
  ScrollView,
} from "react-native";
import useCachedResources from "../../useCachedResources";
import { useCallback, useEffect, useState } from "react";
import uuid from "react-uuid";

import Text from "../../components/DefaultText";
import LightText from "../../components/LightText";
import SemiBoldText from "../../components/SemiBoldText";
import BoldText from "../../components/BoldText";
import palette from "../../styles/ColorPalette";
import images from "../../enum/Images";
import CommunityTextInput from "../../components/CommunityTextInput";
import CommunityCategoryRect from "../../components/CommunityCategoryRect";
import CategoriesTitle from "../../enum/CommunityPostingCategoriesTitle";

export default function CommunityPostingDetail({ navigation }: any) {
  const isLoaded = useCachedResources();

  const [selectedPreviousComment, setSelectedPreviousComment] = useState("");

  const addComment = (text: any, selectedPreviousComment: any) => {};

  if (isLoaded) {
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <View style={styles.container}>
          <StatusBar style="auto" />
          <View style={styles.header}>
            {/* 페이지 제목.
            상단 버튼들과 관계 없이 화면 중앙에 배치하기 위해 View로 감쌈. */}
            <View
              style={{
                width: "100%",
                position: "absolute",
                alignItems: "center",
                paddingBottom: 20,
              }}
            >
              <SemiBoldText style={{ fontSize: 18, color: palette.mainDark }}>
                커뮤니티
              </SemiBoldText>
            </View>
            <Pressable onPress={() => navigation.pop()}>
              <Image
                source={images.backButtonIcon}
                style={{ width: 24, height: 24 }}
              />
            </Pressable>
            <View style={{ flexDirection: "row" }}>
              {/* 검색 버튼 */}
              <Pressable>
                <Image
                  source={images.topSearchIcon}
                  style={{ width: 24, height: 24, marginRight: 16 }}
                />
              </Pressable>
              {/* 물봉 버튼 */}
              <Pressable>
                <Image
                  source={images.topShoppingBasketIcon}
                  style={{ width: 24, height: 24 }}
                />
              </Pressable>
            </View>
          </View>
          <SafeAreaView>
            <ScrollView>
              {/* 카테고리 분류 */}
              <View style={{ marginBottom: 20, marginHorizontal: 14 }}>
                <CommunityCategoryRect title={CategoriesTitle.disease} />
              </View>
              {/* 유저 정보 */}
              <View style={{ flexDirection: "row", marginHorizontal: 14 }}>
                <Image
                  source={images.UserImageExample}
                  style={{ width: 43, height: 43 }}
                />
                <View
                  style={{ justifyContent: "space-between", marginLeft: 12 }}
                >
                  <BoldText style={{ fontSize: 16, color: "#777777" }}>
                    펫쿠아
                  </BoldText>
                  <LightText style={{ fontSize: 16, color: palette.mainGray }}>
                    1시간전
                  </LightText>
                </View>
              </View>
              <View
                style={{
                  marginHorizontal: 14,
                  marginBottom: 20,
                  marginTop: 10,
                }}
              >
                {/* 제목 */}
                <BoldText
                  style={{ fontSize: 24, color: "#777777", marginVertical: 12 }}
                >
                  구피랑 베타랑 키우고 있습니다.
                </BoldText>
                {/* 내용 */}
                <Text style={{ fontSize: 16, color: "#777777" }}>
                  구피랑 베타 키우고 있습니다. 서로 계속 싸우는데 안 싸울 수
                  있는 팁 있을까요?
                </Text>
              </View>
              {/* 사진 */}
              <Image
                source={images.itemImageExample}
                style={{ width: "100%" }}
              />
              <View style={{ marginHorizontal: 14, marginTop: 30 }}>
                <LightText style={{ fontSize: 14, color: palette.mainGray }}>
                  조회수 12
                </LightText>
              </View>
            </ScrollView>
          </SafeAreaView>
          {/* 댓글 입력창 */}
          <View style={styles.commentInput}>
            <View style={{ width: "90%" }}>
              <CommunityTextInput
                onAddComment={addComment}
                selectedPreviousComment={selectedPreviousComment}
              />
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
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
  header: {
    flexDirection: "row",
    paddingBottom: 20,
    marginHorizontal: 18,
    marginTop: 55,
    justifyContent: "space-between",
    alignItems: "center",
  },
  commentInput: {
    backgroundColor: "#ffffff",
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 80,
    paddingVertical: 14,
    borderTopColor: "#777777",
    borderTopWidth: 0.25,
    alignItems: "center",
  },
});

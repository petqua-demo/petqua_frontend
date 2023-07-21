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

import Text from "../../components/DefaultText";
import BoldText from "../../components/BoldText";
import palette from "../../styles/ColorPalette";
import images from "../../components/Images";
import MyPageProfile from "../../components/MyPageProfile";
import MyFishbowlListItem from "../../components/MyFishbowlListItem";
import MyPagePostingListItem from "../../components/MyPagePostingListItem";

export default function MyPage({ navigation }: any) {
  const isLoaded = useCachedResources();

  if (isLoaded) {
    return (
      <Pressable style={{ flex: 1 }} onPress={() => Keyboard.dismiss()}>
        <KeyboardAvoidingView
          style={styles.container}
          behavior={Platform.select({ ios: "padding" })}
        >
          <StatusBar style="auto" />
          <View style={styles.header}>
            <Pressable>
              <Image
                source={images.closeButtonIcon}
                style={{ width: 15, height: 15, marginLeft: 24 }}
              />
            </Pressable>
            <View
              style={{
                width: "100%",
                position: "absolute",
                alignItems: "center",
              }}
            >
              <BoldText style={{ fontSize: 16, color: palette.gray3 }}>
                마이페이지
              </BoldText>
            </View>
            <Pressable>
              <Image
                source={images.myPageSettingIcon}
                style={{ width: 23, height: 24, marginRight: 21 }}
              />
            </Pressable>
          </View>
          <ScrollView>
            <View style={[styles.content, { marginTop: 50 }]}>
              {/* 프로필 */}
              <View style={styles.profileInfo}>
                <MyPageProfile ImageSrc={images.itemImageExample} />
                <BoldText style={styles.userName}>펫쿠아</BoldText>
                <Pressable style={styles.viewProfileBTN}>
                  <BoldText style={{ fontSize: 10, color: palette.gray3 }}>
                    프로필 보기
                  </BoldText>
                </Pressable>
              </View>
              {/* 등록된 어항 */}
              <View>
                <BoldText style={styles.subTitle}>등록된 어항</BoldText>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                >
                  {/* 어항 추가하기 버튼 */}
                  <Pressable>
                    <Image
                      source={images.addFishbowlBTN}
                      style={styles.fishbowlContent}
                    />
                  </Pressable>
                  {/* onPress 누르면 해당 게시글로 이동하게 하기. */}
                  <MyFishbowlListItem
                    ImageSrc={images.productDetailImageExample}
                    onPress={{}}
                    containerStyle={styles.fishbowlContent}
                  />
                  <MyFishbowlListItem
                    ImageSrc={images.productDetailImageExample}
                    onPress={{}}
                    containerStyle={styles.fishbowlContent}
                  />
                  <MyFishbowlListItem
                    ImageSrc={images.productDetailImageExample}
                    onPress={{}}
                    containerStyle={styles.fishbowlContent}
                  />
                  <MyFishbowlListItem
                    ImageSrc={images.productDetailImageExample}
                    onPress={{}}
                    containerStyle={styles.fishbowlContent}
                  />
                </ScrollView>
              </View>
            </View>
            {/* 구분선 */}
            <View style={[styles.dividingLine, { marginTop: 47 }]} />
            <View style={styles.content}>
              {/* 커뮤니티 목록 */}
              <View style={{ marginTop: 35 }}>
                <BoldText style={styles.subTitle}>커뮤니티 목록</BoldText>
                <MyPagePostingListItem title="내가 쓴 글/댓글" />
                <MyPagePostingListItem title="내가 스크랩한 글" />
              </View>
            </View>
            {/* 구분선 */}
            <View style={[styles.dividingLine, { marginVertical: 14 }]} />
            <View style={styles.content}>
              {/* 봉달목록 */}
              <View>
                <MyPagePostingListItem title="봉달 목록" />
              </View>
            </View>
            {/* 구분선 */}
            <View style={[styles.dividingLine, { marginVertical: 14 }]} />
            <View style={styles.content}>
              {/* 입양, 분양 내역 */}
              <View>
                <MyPagePostingListItem title="분양 내역" />
                <MyPagePostingListItem title="입양 내역" />
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </Pressable>
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
    height: 50,
    marginTop: 55,
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomColor: palette.gray4,
    borderBottomWidth: 0.5,
  },
  content: {
    marginHorizontal: 15,
  },
  profileInfo: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    marginBottom: 60,
  },
  userName: {
    fontSize: 24,
    color: palette.gray3,
    marginLeft: 24,
    flex: 1,
  },
  viewProfileBTN: {
    width: 64,
    height: 28,
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: palette.gray3,
    justifyContent: "center",
    alignItems: "center",
  },
  subTitle: {
    fontSize: 14,
    color: palette.gray4,
    marginBottom: 20,
  },
  fishbowlContent: {
    width: 102,
    height: 102,
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: palette.gray3,
    marginRight: 10,
  },
  dividingLine: {
    width: "100%",
    height: 1,
    backgroundColor: palette.gray1,
  },
});

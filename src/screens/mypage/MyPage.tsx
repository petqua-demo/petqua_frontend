import {
  StyleSheet,
  View,
  Pressable,
  Image,
  ScrollView,
  StatusBar,
} from "react-native";
import useCachedResources from "../../useCachedResources";
import { useState } from "react";

import BoldText from "../../components/BoldText";
import palette from "../../styles/ColorPalette";
import images from "../../enum/Images";
import MyPageProfile from "../../components/MyPageProfile";
import MyFishbowlListItem from "../../components/MyFishbowlListItem";
import MyPagePostingListItem from "../../components/MyPagePostingListItem";

export default function MyPage({ navigation }: any) {
  const isLoaded = useCachedResources();

  if (isLoaded) {
    return (
      <View style={styles.container}>
        <StatusBar />
        <View style={styles.header}>
          {/* 닫기 버튼 */}
          <Pressable>
            <Image
              source={images.closeButtonIcon}
              style={{ width: 15, height: 15, marginLeft: 24 }}
            />
          </Pressable>
          {/* 페이지 제목.
            닫기 버튼, 설정 버튼과 관계 없이 화면 중앙에 배치하기 위해 View로 감쌈. */}
          <View
            style={{
              width: "100%",
              position: "absolute",
              alignItems: "center",
            }}
          >
            <BoldText style={{ fontSize: 20, color: palette.mainDark }}>
              마이페이지
            </BoldText>
          </View>
          {/* 설정 버튼 */}
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
                <BoldText style={{ fontSize: 10, color: palette.mainDark }}>
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
                style={{ marginRight: -15 }}
              >
                {/* 어항 추가하기 버튼 */}
                <Pressable>
                  <Image
                    source={images.addFishbowlBTN}
                    style={styles.fishbowlContent}
                  />
                </Pressable>
                {/* 등록된 어항 목록 아이템.
                  onPress 누르면 해당 게시글로 이동하게 하기. */}
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
              <MyPagePostingListItem
                title="내가 쓴 글/댓글"
                onPress={() => navigation.navigate("MyPostingAndComment")}
              />
              <MyPagePostingListItem
                title="내가 스크랩한 글"
                onPress={() => navigation.navigate("MyClipping")}
              />
            </View>
          </View>
          {/* 구분선 */}
          <View style={[styles.dividingLine, { marginVertical: 14 }]} />
          <View style={styles.content}>
            {/* 봉달목록 */}
            <View>
              <MyPagePostingListItem
                title="봉달 목록"
                onPress={() => navigation.navigate("MyShoppingBasket")}
              />
            </View>
          </View>
          {/* 구분선 */}
          <View style={[styles.dividingLine, { marginVertical: 14 }]} />
          <View style={styles.content}>
            {/* 입양, 분양 내역 */}
            <View>
              <MyPagePostingListItem
                title="분양 내역"
                onPress={() => navigation.navigate("MySellingPosting")}
              />
              <MyPagePostingListItem
                title="입양 내역"
                onPress={() => navigation.navigate("MyBuying")}
              />
            </View>
          </View>
        </ScrollView>
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
  header: {
    flexDirection: "row",
    height: 50,
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomColor: palette.gray2,
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
    fontSize: 18,
    color: palette.mainDark,
    marginLeft: 24,
    flex: 1,
  },
  viewProfileBTN: {
    width: 64,
    height: 28,
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: palette.mainDark,
    justifyContent: "center",
    alignItems: "center",
  },
  subTitle: {
    fontSize: 14,
    color: palette.mainDark,
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

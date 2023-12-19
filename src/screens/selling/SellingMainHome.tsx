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
  ScrollView,
} from "react-native";
import useCachedResources from "../../useCachedResources";
import { useCallback } from "react";

import Text from "../../components/DefaultText";
import MediumText from "../../components/MediumText";
import SemiBoldText from "../../components/SemiBoldText";
import palette from "../../styles/ColorPalette";
import images from "../../enum/Images";
import CommunityCategoryList from "../../components/CommunityCategoryList";
import MainCategoryData from "../../enum/MainTropicalFishCategoryData";

export default function SellingMainHome({ navigation }: any) {
  const isLoaded = useCachedResources();

  // 한 줄에 배치하는 카테고리 수
  const numColumns = 4;

  const keyExtractor = useCallback((item: any) => item.id, []);

  if (isLoaded) {
    return (
      <Pressable style={{ flex: 1 }} onPress={() => Keyboard.dismiss()}>
        <KeyboardAvoidingView
          style={styles.container}
          behavior={Platform.select({ ios: "padding" })}
        >
          <StatusBar style="auto" />
          <View style={styles.header}>
            <View style={{ flexDirection: "row" }}>
              {/* 알림 버튼 */}
              <Pressable>
                <Image
                  source={images.topNotificationIcon}
                  style={{ width: 24, height: 24 }}
                />
              </Pressable>
            </View>
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
              <Image
                source={images.petqua_logo}
                style={{ width: 84, height: 22, marginRight: 16 }}
              />
            </View>
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
          <SafeAreaView style={{ marginBottom: 100 }}>
            <ScrollView>
              {/* 이벤트 배너. 일단 임시로 스크롤되지 않는 단일 이미지로 생성함. */}
              <Image
                source={images.productDetailImageExample}
                style={{ width: "100%", height: 280 }}
              />
              {/* 공지사항 */}
              <View style={styles.notice}>
                <MediumText style={{ fontSize: 12, color: palette.mainDark }}>
                  [공지] 펫쿠아 안전배송이 이벤트가 생성되었습니다.
                </MediumText>
              </View>
              <View style={styles.contentMargin}>
                {/* 어종 카테고리 */}
                <View style={styles.imageCategoryContainer}>
                  <CommunityCategoryList
                    CommunityCategories={MainCategoryData}
                    onPress={{}} // onPress -> 해당 글로 이동
                  />
                </View>
              </View>

              {/* 추천상품 */}
              <View style={styles.contentMargin}>
                <View style={styles.subHeader}>
                  <SemiBoldText
                    style={{ fontSize: 22, color: palette.mainDark }}
                  >
                    펫쿠아 강력 추천 !
                  </SemiBoldText>
                  <Text
                    style={{
                      fontSize: 14,
                      color: palette.mainGray,
                    }}
                  >
                    더보기 {">"}
                  </Text>
                </View>
                {/* 이 자리에 추천글 목록 넣기 */}
              </View>

              {/* 수입 입고 소식 */}
              <View style={styles.contentMargin}>
                <SemiBoldText style={{ fontSize: 22, color: palette.mainDark }}>
                  수입 입고 소식
                </SemiBoldText>
                <View style={[styles.subHeader, { marginTop: 10 }]}>
                  <Text
                    style={{
                      fontSize: 14,
                      color: palette.mainDark,
                    }}
                  >
                    업체별 입고 현황
                  </Text>
                  <Text
                    style={{
                      fontSize: 14,
                      color: palette.mainGray,
                    }}
                  >
                    더보기 {">"}
                  </Text>
                </View>
                {/* 이 자리에 수입 입고 소식 목록 넣기 */}
              </View>

              {/* 주간 인기 반려어 */}
              <View style={styles.contentMargin}>
                <SemiBoldText style={{ fontSize: 22, color: palette.mainDark }}>
                  주간 인기 반려어
                </SemiBoldText>
                <View style={[styles.subHeader, { marginTop: 10 }]}>
                  <Text
                    style={{
                      fontSize: 14,
                      color: palette.mainDark,
                    }}
                  >
                    인기 어종 순위별
                  </Text>
                  <Text
                    style={{
                      fontSize: 14,
                      color: palette.mainGray,
                    }}
                  >
                    더보기 {">"}
                  </Text>
                </View>
                {/* 이 자리에 주간 인기 반려어 목록 넣기 */}
              </View>
            </ScrollView>
          </SafeAreaView>
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
    paddingBottom: 20,
    marginHorizontal: 18,
    marginTop: 55,
    justifyContent: "space-between",
    alignItems: "center",
  },
  notice: {
    backgroundColor: "#F7F7F7",
    width: "100%",
    height: 30,
    justifyContent: "center",
    paddingHorizontal: 14,
  },
  contentMargin: {
    marginHorizontal: 20,
    marginTop: 40,
  },
  imageCategoryContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  subHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

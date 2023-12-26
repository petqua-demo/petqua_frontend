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
import SemiBoldText from "../../components/SemiBoldText";
import BoldText from "../../components/BoldText";
import palette from "../../styles/ColorPalette";
import images from "../../enum/Images";
import CategoriesTitle from "../../enum/CommunityPostingCategoriesTitle";
import CommunityCategoryImageIcon from "../../components/CommunityCategoryImageIcon";
import BestPostingList from "../../components/BestPostingList";
import CommunityCategoryList from "../../components/CommunityCategoryList";
import CategoryData from "../../enum/CommunityPostingCategoryData";
import bestPostingData from "../../enum/PostingData/BestPostingData";

export default function WaterCommunityHome({ navigation }: any) {
  const isLoaded = useCachedResources();

  // 한 줄에 배치하는 카테고리 수
  const numColumns = 4;

  const getBestPostingData = () => {
    // 데이터 가져오기
  };
  useEffect(() => {
    getBestPostingData();
  }, []);

  const keyExtractor = useCallback((item: any) => item.id, []);

  const handleCategoryPress = (title: any) => {
    navigation.navigate("CommunityCategory", { title });
  };

  if (isLoaded) {
    return (
      <Pressable style={{ flex: 1 }} onPress={() => Keyboard.dismiss()}>
        <KeyboardAvoidingView
          style={styles.container}
          behavior={Platform.select({ ios: "padding" })}
        >
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
                물생활
              </SemiBoldText>
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
              <View style={[styles.contentMargin, { marginTop: 30 }]}>
                {/* 카테고리 */}
                <View style={styles.imageCategoryContainer}>
                  <CommunityCategoryList
                    CommunityCategories={CategoryData}
                    onPress={handleCategoryPress} // onPress -> 해당 글로 이동
                  />
                </View>
              </View>
              {/* 배너 광고 */}
              <View style={styles.contentMargin}>
                <Text
                  style={{
                    fontSize: 12,
                    color: palette.mainGray,
                    marginVertical: 12,
                  }}
                >
                  펫쿠아 소식 더보기 {">"}
                </Text>
                <Image source={images.petqua_logo} style={styles.bannerAD} />
              </View>
              <View // 구분선
                style={{
                  backgroundColor: "#F5F5F5",
                  width: "120%",
                  height: 8,
                }}
              />
              {/* 인기글 */}
              <View style={styles.contentMargin}>
                <BoldText
                  style={{
                    fontSize: 14,
                    color: palette.mainDark,
                    marginTop: 25,
                  }}
                >
                  인기글
                </BoldText>
                <BestPostingList
                  BestPostings={bestPostingData}
                  onPress={{}} // onPress -> 해당 글로 이동
                />
              </View>
            </ScrollView>
          </SafeAreaView>
          <Pressable
            style={styles.postingIcon}
            onPress={() => navigation.navigate("CommunityPosting")}
          >
            <Image
              source={images.postingIcon}
              style={{ width: 57, height: 57 }}
            />
          </Pressable>
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
    justifyContent: "flex-end",
    alignItems: "center",
  },
  contentMargin: {
    marginHorizontal: 20,
  },
  imageCategoryContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  bannerAD: {
    width: "100%",
    height: 65,
    marginBottom: 30,
    borderRadius: 5,
  },
  postingIcon: {
    position: "absolute",
    right: 14,
    bottom: 14,
  },
});

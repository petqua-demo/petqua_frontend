import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Image, ScrollView, Pressable } from "react-native";
import useCachedResources from "../../useCachedResources";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Text from "../../components/DefaultText";
import palette from "../../styles/ColorPalette";
import images from "../../enum/Images";
import PostItem from "../../components/PostItem";
import { categoryFilter } from "../../utils/filter";
import { CommunityPostData } from "../../enum/CommunityData";

export default function CommunityMain({ navigation }: any) {
  const isLoaded = useCachedResources();

  const categories = [
    {
      title: "all",
      image: images.community1,
    },
    {
      title: "disease",
      image: images.community2,
    },
    {
      title: "filter",
      image: images.community3,
    },
    {
      title: "breeding",
      image: images.community4,
    },
    {
      title: "goods",
      image: images.community5,
    },
    {
      title: "species",
      image: images.community6,
    },
    {
      title: "board",
      image: images.community7,
    },
    {
      title: "column",
      image: images.community8,
    },
  ];
  const postListId = [1, 3, 7];
  const postList = [
    {
      category: "질병",
      title: "풀레드 구피 진짜 이쁘네요",
      content: "인기 많은 어종으로 유명하기는 하지...",
      imgUrl: images.communityImg9,
      date: "07/12",
      howLong: "2주전",
      comment: "129",
      heart: "9",
      scrap: "123",
    },
    {
      category: "질병",
      title: "구피랑 베테랑 키우고 있습니다.",
      content: "베타를 키우려하는데 어떻게 키우는...",
      imgUrl: null,
      date: "07/12",
      howLong: "2주전",
      comment: "129",
      heart: "9",
      scrap: "123",
    },
    {
      category: "질병",
      title: "구피랑 베테랑 계속 싸워요ㅜ",
      content: "고수님들 혹시 안싸울 수 있는 방법...",
      imgUrl: images.communityImg9,
      date: "07/12",
      howLong: "2주전",
      comment: "129",
      heart: "9",
      scrap: "123",
    },
  ];

  if (isLoaded) {
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <ScrollView>
          {/* 상단 네비 */}
          <View style={styles.topNav}>
            <Text style={styles.topNavTitle}>물생활</Text>
            <View style={styles.topNavContainer}>
              <Image
                source={images.topSearchIcon}
                style={{ width: 24, height: 24 }}
              />
              <Image
                source={images.topShoppingBasketIcon}
                style={{ width: 24, height: 24 }}
              />
            </View>
          </View>

          {/* 카테고리 */}
          <View style={styles.categoryContainer}>
            {categories.map((el, idx) => (
              <Pressable
                key={idx}
                style={styles.category}
                onPress={() =>
                  navigation.navigate("CommunityList", { category: el.title })
                }
              >
                <View style={styles.categoryImgContainer}>
                  <Image source={el.image} style={{ width: 40, height: 40 }} />
                </View>
                <Text style={styles.categoryTxt}>
                  {categoryFilter(el.title)}
                </Text>
              </Pressable>
            ))}
          </View>

          {/* 배너 광고 */}
          <View style={styles.banner}>
            <Text style={styles.bannerTxt}>펫쿠아 소식 더보기 {">"}</Text>
            <Image
              source={images.communityBanner}
              style={{
                width: "100%",
                height: 64,
                borderRadius: 8,
              }}
            />
          </View>
          {/* 인기글 */}
          <View style={styles.bestPostContainer}>
            <Text style={styles.bestPostTitle}>인기글</Text>
            {CommunityPostData.filter((el) => postListId.includes(el.id)).map(
              (el, idx) => (
                <PostItem key={idx} data={el} />
              )
            )}
          </View>
        </ScrollView>

        {/* 작성하기 버튼 */}
        <Pressable
          style={styles.postingIcon}
          onPress={() => navigation.navigate("CommunityPosting")}
        >
          <MaterialCommunityIcons
            name="pencil-outline"
            color={"white"}
            size={36}
          />
        </Pressable>
      </View>
    );
  } else {
    return null;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F3F3",
  },
  // 네비바
  topNav: {
    flexDirection: "row",
    justifyContent: "center",
    padding: 16,
    backgroundColor: "#fff",
    position: "relative",
  },
  topNavTitle: {
    color: palette.mainDark,
    fontSize: 18,
    fontWeight: "600",
  },
  topNavContainer: {
    position: "absolute",
    right: 16,
    flexDirection: "row",
    gap: 12,
  },
  // 카테고리
  categoryContainer: {
    backgroundColor: "#fff",
    flexDirection: "row",
    padding: 24,
    gap: 12,
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  category: {
    gap: 8,
    alignItems: "center",
  },
  categoryImgContainer: {
    backgroundColor: palette.skyBlueBg,
    padding: 12,
    borderRadius: 12,
  },
  categoryTxt: {
    color: palette.mainDark,
    fontSize: 12,
  },
  // 배너
  banner: {
    backgroundColor: "#fff",
    padding: 24,
    gap: 8,
    marginBottom: 8,
  },
  bannerTxt: {
    fontSize: 12,
    fontWeight: "400",
    color: palette.mainGray,
  },
  // 인기글
  bestPostContainer: {
    backgroundColor: "#fff",
    padding: 24,
  },
  bestPostTitle: {
    color: palette.mainDark,
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 16,
  },
  // 작성하기 버튼
  postingIcon: {
    position: "absolute",
    right: 24,
    bottom: 24,
    width: 56,
    height: 56,
    backgroundColor: palette.skyBlue,
    borderRadius: 28,
    justifyContent: "center",
    alignItems: "center",
  },
});

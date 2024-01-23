import {
  StyleSheet,
  View,
  Image,
  Text,
  Pressable,
  ScrollView,
  StatusBar,
} from "react-native";
import { useState } from "react";
import images from "../../enum/Images";
import palette from "../../styles/ColorPalette";
import { AntDesign } from "@expo/vector-icons";
import { CommunityPostData, SmallCategoryData } from "../../enum/CommunityData";
import PostItem from "../../components/PostItem";
import { CategoryData } from "../../enum/CommunityData";
import { categoryFilter } from "../../utils/filter";

export default function CommunityList({ navigation, route }: any) {
  const [selectedCategory, setSelectedCategory] = useState(
    route.params.category || "all"
  );
  const [selectedSmallCategory, setSelectedSmallCategory] = useState("전체");

  return (
    <View style={styles.container}>
      <StatusBar />

      {/* 상단 네비 */}
      <View style={styles.topNav}>
        <Pressable onPress={() => navigation.goBack()} style={{ width: 40 }}>
          <AntDesign name="left" size={24} color="#5F5F5F" />
        </Pressable>
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

      {/* 카테고리 스크롤 */}
      <View>
        <ScrollView
          horizontal
          contentContainerStyle={styles.categoryContainer}
          showsHorizontalScrollIndicator={false}
        >
          {CategoryData.map((el, idx) => (
            <Pressable
              key={idx}
              style={{
                ...styles.category,
                borderBottomWidth: selectedCategory === el ? 1 : 0,
              }}
              onPress={() => {
                setSelectedCategory(el);
                setSelectedSmallCategory("전체");
              }}
            >
              <Text
                style={{
                  ...styles.categoryTxt,
                  color:
                    selectedCategory === el
                      ? palette.mainDark
                      : palette.mainGray,
                }}
              >
                {categoryFilter(el)}
              </Text>
            </Pressable>
          ))}
        </ScrollView>
      </View>

      {/* 소분류 스크롤 */}
      {selectedCategory !== "all" && (
        <View style={{ backgroundColor: "white", marginBottom: 8 }}>
          <ScrollView
            horizontal
            contentContainerStyle={styles.smallCategoryContainer}
            showsHorizontalScrollIndicator={false}
          >
            {SmallCategoryData[selectedCategory].map((el, idx) => (
              <Pressable
                key={idx}
                style={{
                  ...styles.smallCategory,
                  backgroundColor:
                    selectedSmallCategory === el ? palette.skyBlue : "white",
                  borderWidth: selectedSmallCategory === el ? 0 : 1,
                }}
                onPress={() => setSelectedSmallCategory(el)}
              >
                <Text
                  style={{
                    ...styles.smallCategoryTxt,
                    color:
                      selectedSmallCategory === el ? "white" : palette.mainDark,
                  }}
                >
                  {el}
                </Text>
              </Pressable>
            ))}
          </ScrollView>
        </View>
      )}

      {/* 리스트 */}
      <ScrollView style={styles.listContainer}>
        {CommunityPostData.filter((el) => {
          if (selectedCategory === "all") {
            return true;
          } else {
            return selectedSmallCategory === "전체"
              ? el.category === selectedCategory
              : el.category === selectedCategory &&
                  el.smallCategory === selectedSmallCategory;
          }
        }).map((el, idx) => (
          <PostItem key={idx} data={el} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F3F3",
  },
  // 네비바
  topNav: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
    alignItems: "center",
    flexDirection: "row",
    gap: 12,
  },
  // 카테고리 스크롤
  categoryContainer: {
    backgroundColor: "white",
    flexDirection: "row",
    paddingHorizontal: 12,
    gap: 20,
    borderBottomColor: palette.mainGray,
    borderBottomWidth: 1,
  },
  category: {
    paddingVertical: 12,
    paddingHorizontal: 6,
    borderBottomColor: palette.mainDark,
  },
  categoryTxt: {
    color: palette.mainGray,
    fontSize: 14,
    fontWeight: "600",
  },
  // 소분류 스크롤
  smallCategoryContainer: {
    flexDirection: "row",
    padding: 12,
    gap: 8,
  },
  smallCategory: {
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 20,
    borderColor: palette.mainGray,
  },
  smallCategoryTxt: {
    fontSize: 12,
    fontWeight: "400",
  },
  // 리스트
  listContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    paddingHorizontal: 24,
  },
});

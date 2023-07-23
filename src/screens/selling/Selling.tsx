import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Pressable,
  TouchableOpacity,
} from "react-native";
import useCachedResources from "../../useCachedResources";
import { useState } from "react";

import Text from "../../components/DefaultText";
import ExtraBoldText from "../../components/BoldText";
import PostingMenuItem from "../../components/PostingMenuItem";
import SellingListItem from "../../components/SellingListItem";
import palette from "../../styles/ColorPalette";
import images from "../../components/Images";

export const Categories = {
  all: "전체",
  fish: "반려어",
  goods: "용품",
};

export default function Selling({ navigation }: any) {
  const isLoaded = useCachedResources();

  const [selectedCategory, setSelectedCategory] = useState(Categories.all);
  const [clickPostingBtn, setClickPostingBtn] = useState(false);

  const clickPostingBtnHandler = () => {
    if (clickPostingBtn == false) {
      setClickPostingBtn(true);
      // displayPostingMenu()
    } else {
      setClickPostingBtn(false);
      // alert("닫았습니다.");
    }
  };

  if (isLoaded) {
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.header}>
          <Image
            source={images.petqua_logo}
            style={{ width: 84, height: 22 }}
          />
          <View style={{ flexDirection: "row" }}>
            <Image
              source={images.topSearchIcon}
              style={{ width: 23, height: 23, marginRight: 21 }}
            />
            <Image
              source={images.topShoppingBasketIcon}
              style={{ width: 23, height: 23, marginRight: 21 }}
            />
            <Image
              source={images.topNotificationIcon}
              style={{ width: 23, height: 23 }}
            />
          </View>
        </View>
        <View style={styles.content}>
          <View style={styles.tab}>
            {/* Top tab으로 처리 안 하고 일단 Pressable, useState 이용해서 구현 */}
            <Pressable
              style={[
                selectedCategory == Categories.all
                  ? styles.selectedTabItems
                  : styles.tabItems,
              ]}
              onPress={() => {
                setSelectedCategory(Categories.all);
              }}
            >
              {/* Text에 배열로 style을 넘기면 오류가 나서 일단 다음과 같이 구현 */}
              {(selectedCategory == Categories.all && (
                <Text style={styles.selectedTabText}>{Categories.all}</Text>
              )) ||
                (selectedCategory != Categories.all && (
                  <Text style={styles.tabText}>{Categories.all}</Text>
                ))}
            </Pressable>
            <Pressable
              style={[
                selectedCategory == Categories.fish
                  ? styles.selectedTabItems
                  : styles.tabItems,
              ]}
              onPress={() => {
                setSelectedCategory(Categories.fish);
              }}
            >
              {(selectedCategory == Categories.fish && (
                <Text style={styles.selectedTabText}>{Categories.fish}</Text>
              )) ||
                (selectedCategory != Categories.fish && (
                  <Text style={styles.tabText}>{Categories.fish}</Text>
                ))}
            </Pressable>
            <Pressable
              style={[
                selectedCategory == Categories.goods
                  ? styles.selectedTabItems
                  : styles.tabItems,
              ]}
              onPress={() => {
                setSelectedCategory(Categories.goods);
              }}
            >
              {(selectedCategory == Categories.goods && (
                <Text style={styles.selectedTabText}>{Categories.goods}</Text>
              )) ||
                (selectedCategory != Categories.goods && (
                  <Text style={styles.tabText}>{Categories.goods}</Text>
                ))}
            </Pressable>
          </View>
          <View style={styles.list}>
            <SafeAreaView style={styles.listItems}>
              {/* 추후 ScrollView -> FlatList로 바꿔야 함 */}
              <ScrollView
                style={styles.scrollView}
                showsVerticalScrollIndicator={false}
              >
                <SellingListItem
                  ImageSrc={
                    <ImageBackground
                      source={images.itemImageExample}
                      style={styles.itemImage}
                      imageStyle={{ opacity: 0.2 }}
                    >
                      <ExtraBoldText
                        style={{
                          fontSize: 16,
                          color: "#ffffff",
                        }}
                      >
                        분양완료
                      </ExtraBoldText>
                    </ImageBackground>
                  }
                  title="구피구피구피구피구피구피구피구피구피구피구피구피"
                  itemCategory="열대어"
                  uploadTime="1시간전"
                  price="5000원"
                  comment="9"
                  heart="12"
                  onPress={() => navigation.navigate("ProductDetail")}
                ></SellingListItem>
                <SellingListItem
                  ImageSrc={
                    <Image
                      source={images.itemImageExample}
                      style={styles.itemImage}
                    />
                  }
                  title="구피구피구피구피"
                  itemCategory="열대어"
                  uploadTime="1시간전"
                  price="5000원"
                  comment="9"
                  heart="12"
                  onPress={() => navigation.navigate("ProductDetail")}
                ></SellingListItem>
                <SellingListItem
                  ImageSrc={
                    <Image
                      source={images.itemImageExample}
                      style={styles.itemImage}
                    />
                  }
                  title="구피구피구피구피구피구피구피"
                  itemCategory="열대어"
                  uploadTime="1시간전"
                  price="5000원"
                  comment="9"
                  heart="12"
                  onPress={() => navigation.navigate("ProductDetail")}
                ></SellingListItem>
                <SellingListItem
                  ImageSrc={
                    <Image
                      source={images.itemImageExample}
                      style={styles.itemImage}
                    />
                  }
                  title="구피구피구피구피구피구피구피구피구피구피구피구피"
                  itemCategory="열대어"
                  uploadTime="1시간전"
                  price="5000원"
                  comment="9"
                  heart="12"
                  onPress={() => navigation.navigate("ProductDetail")}
                ></SellingListItem>
                <SellingListItem
                  ImageSrc={
                    <Image
                      source={images.itemImageExample}
                      style={styles.itemImage}
                    />
                  }
                  title="구피구피구피구피구피구피구피구피구피구피구피구피"
                  itemCategory="열대어"
                  uploadTime="1시간전"
                  price="5000원"
                  comment="9"
                  heart="12"
                  onPress={() => navigation.navigate("ProductDetail")}
                ></SellingListItem>
                <SellingListItem
                  ImageSrc={
                    <Image
                      source={images.itemImageExample}
                      style={styles.itemImage}
                    />
                  }
                  title="구피구피구피구피구피구피구피구피구피구피구피구피"
                  itemCategory="열대어"
                  uploadTime="1시간전"
                  price="5000원"
                  comment="9"
                  heart="12"
                  onPress={() => navigation.navigate("ProductDetail")}
                ></SellingListItem>
                <SellingListItem
                  ImageSrc={
                    <Image
                      source={images.itemImageExample}
                      style={styles.itemImage}
                    />
                  }
                  title="구피구피구피구피구피구피구피구피구피구피구피구피"
                  itemCategory="열대어"
                  uploadTime="1시간전"
                  price="5000원"
                  comment="9"
                  heart="12"
                  onPress={() => navigation.navigate("ProductDetail")}
                ></SellingListItem>
              </ScrollView>
            </SafeAreaView>
          </View>
        </View>
        <View style={styles.floatingBTNContainer}>
          {clickPostingBtn && (
            <View style={styles.postingMenu}>
              {/* 나중에 PostingMenu도 컴포넌트로 따로 빼기 */}
              <PostingMenuItem
                ImageSrc={
                  <Image
                    source={images.clearTextInputButton}
                    style={{ width: 20, height: 20 }}
                  />
                }
                title="반려어 입/분양 등록"
                onPress={() => navigation.navigate("FishPosting")}
              />
              <PostingMenuItem
                ImageSrc={
                  <Image
                    source={images.clearTextInputButton}
                    style={{ width: 20, height: 20 }}
                  />
                }
                title="용품 입/분양 등록"
                onPress={() => navigation.navigate("GoodsPosting")}
              />
              <PostingMenuItem
                ImageSrc={
                  <Image
                    source={images.clearTextInputButton}
                    style={{ width: 20, height: 20 }}
                  />
                }
                title="어항 일기"
                onPress={() => navigation.navigate("DiaryPosting")}
              />
            </View>
          )}
          <TouchableOpacity
            activeOpacity={0.4}
            onPress={clickPostingBtnHandler}
          >
            <Image
              source={images.salesPostingIcon}
              style={styles.floatingBTN}
            />
          </TouchableOpacity>
        </View>
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
    justifyContent: "space-between",
    marginHorizontal: 24,
    marginTop: 55,
  },
  content: {},
  tab: {
    marginTop: 34,
    // marginBottom: (첫번째 아이템 marginTop: 28) - (SellingListItem 기본 간격 15)
    marginBottom: 13,
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomColor: palette.body1,
    borderBottomWidth: 0.25,
  },
  tabItems: {
    flex: 1,
    alignItems: "center",
  },
  selectedTabItems: {
    flex: 1,
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: palette.gray4,
    paddingBottom: 7,
  },
  tabText: {
    fontSize: 16,
    color: palette.body1,
  },
  selectedTabText: {
    fontSize: 16,
    color: palette.gray4,
  },
  list: {
    marginHorizontal: 24,
  },
  listItems: {},
  itemImage: {
    width: 108,
    height: 108,
    borderRadius: 8,
    backgroundColor: palette.gray4,
    justifyContent: "center",
    alignItems: "center",
  },
  scrollView: {},
  floatingBTNContainer: {
    position: "absolute",
    bottom: 0,
    right: 20,
    alignItems: "flex-end",
  },
  postingMenu: {
    width: 160,
    backgroundColor: "#515151",
    borderRadius: 16,
    marginBottom: 10,
  },
  floatingBTN: {
    width: 50,
    height: 50,
    marginBottom: 25,
  },
});

import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  Image,
  SafeAreaView,
  FlatList,
  Pressable,
  TouchableOpacity,
} from "react-native";
import useCachedResources from "../../useCachedResources";
import { useCallback, useEffect, useState } from "react";
import uuid from "react-uuid";

import Text from "../../components/DefaultText";
import PostingMenuItem from "../../components/PostingMenuItem";
import SellingListItem from "../../components/SellingListItem";
import palette from "../../styles/ColorPalette";
import images from "../../enum/Images";
import SellingProgress from "../../enum/SellingProgress";

export const Categories = {
  all: "전체",
  fish: "반려어",
  goods: "용품",
};

export default function Selling({ navigation }: any) {
  const isLoaded = useCachedResources();

  const [selectedCategory, setSelectedCategory] = useState(Categories.all);
  // floating button (상품 판매하기) 에 대한 useState
  const [clickPostingBtn, setClickPostingBtn] = useState(false);

  const clickPostingBtnHandler = () => {
    if (clickPostingBtn == false) {
      setClickPostingBtn(true);
    } else {
      setClickPostingBtn(false);
    }
  };

  // 나중에 DB 연결 후 posting 목록 가져오기
  const [allData, setAllData] = useState([
    {
      id: uuid(),
      imageSrc: images.itemImageExample,
      progress: SellingProgress.ing,
      title: "구피구피구피구피구피구피구피구피구피구피구피구피",
      itemCategory: "열대어",
      howLong: "1시간전",
      price: "5000원",
      comment: "9",
      shoppingBasket: "12",
      onPress: {},
    },
    {
      id: uuid(),
      imageSrc: images.itemImageExample,
      progress: SellingProgress.sold,
      title: "구피구피구피구피구피구피구피구피구피구피구피구피",
      itemCategory: "열대어",
      howLong: "1시간전",
      price: "5000원",
      comment: "9",
      shoppingBasket: "12",
      onPress: {},
    },
    {
      id: uuid(),
      imageSrc: images.itemImageExample,
      progress: SellingProgress.none,
      title: "구피구피구피구피구피구피구피구피구피구피구피구피",
      itemCategory: "열대어",
      howLong: "1시간전",
      price: "5000원",
      comment: "9",
      shoppingBasket: "12",
      onPress: {},
    },
    {
      id: uuid(),
      imageSrc: images.itemImageExample,
      progress: SellingProgress.none,
      title: "구피구피구피구피구피구피구피구피구피구피구피구피",
      itemCategory: "열대어",
      howLong: "1시간전",
      price: "5000원",
      comment: "9",
      shoppingBasket: "12",
      onPress: {},
    },
    {
      id: uuid(),
      imageSrc: images.itemImageExample,
      progress: SellingProgress.none,
      title: "구피구피구피구피구피구피구피구피구피구피구피구피",
      itemCategory: "열대어",
      howLong: "1시간전",
      price: "5000원",
      comment: "9",
      shoppingBasket: "12",
      onPress: {},
    },
    {
      id: uuid(),
      imageSrc: images.itemImageExample,
      progress: SellingProgress.none,
      title: "구피구피구피구피구피구피구피구피구피구피구피구피",
      itemCategory: "열대어",
      howLong: "1시간전",
      price: "5000원",
      comment: "9",
      shoppingBasket: "12",
      onPress: {},
    },
    {
      id: uuid(),
      imageSrc: images.itemImageExample,
      progress: SellingProgress.none,
      title: "구피구피구피구피구피구피구피구피구피구피구피구피",
      itemCategory: "열대어",
      howLong: "1시간전",
      price: "5000원",
      comment: "9",
      shoppingBasket: "12",
      onPress: {},
    },
  ]);

  const getAllData = () => {
    // 데이터 가져오기
  };
  useEffect(() => {
    getAllData();
  }, []);

  const [fishData, setFishData] = useState([
    {
      id: uuid(),
      imageSrc: images.itemImageExample,
      progress: SellingProgress.sold,
      title: "구피구피구피구피구피구피구피구피구피구피구피구피",
      itemCategory: "열대어",
      howLong: "1시간전",
      price: "5000원",
      comment: "9",
      shoppingBasket: "12",
      onPress: {},
    },
    {
      id: uuid(),
      imageSrc: images.itemImageExample,
      progress: SellingProgress.none,
      title: "구피구피구피구피구피구피구피구피구피구피구피구피",
      itemCategory: "열대어",
      howLong: "1시간전",
      price: "5000원",
      comment: "9",
      shoppingBasket: "12",
      onPress: {},
    },
  ]);

  const [goodsData, setGoodsData] = useState([]);

  // 카테고리 버튼 선택할 때마다 가져오는 Data 설정하기
  const [selectedData, setSelectedData] = useState(allData);

  const renderItem = useCallback(
    ({ item }: { item: any }) => (
      <SellingListItem
        id={item.id}
        imageSrc={item.imageSrc}
        progress={item.progress}
        title={item.title}
        itemCategory={item.itemCategory}
        howLong={item.howLong}
        price={item.price}
        comment={item.comment}
        shoppingBasket={item.shoppingBasket}
        onPress={{}}
      />
    ),
    []
  );
  const keyExtractor = useCallback((item: any) => item.id, []);

  if (isLoaded) {
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.header}>
          {/* 펫쿠아 로고 */}
          <Image
            source={images.petqua_logo}
            style={{ width: 84, height: 22 }}
          />
          {/* 검색, 봉달, 알림 아이콘 */}
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
          {/* 전체, 반려어, 용품 나누는 상단 탭.
            Top tab으로 처리 안 하고 일단 Pressable, useState 이용해서 구현 */}
          <View style={styles.tab}>
            {/* 전체 */}
            <Pressable
              style={[
                selectedCategory == Categories.all
                  ? styles.selectedTabItems
                  : styles.tabItems,
              ]}
              onPress={() => {
                [setSelectedCategory(Categories.all), setSelectedData(allData)];
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
            {/* 반려어 */}
            <Pressable
              style={[
                selectedCategory == Categories.fish
                  ? styles.selectedTabItems
                  : styles.tabItems,
              ]}
              onPress={() => {
                [
                  setSelectedCategory(Categories.fish),
                  setSelectedData(fishData),
                ];
              }}
            >
              {(selectedCategory == Categories.fish && (
                <Text style={styles.selectedTabText}>{Categories.fish}</Text>
              )) ||
                (selectedCategory != Categories.fish && (
                  <Text style={styles.tabText}>{Categories.fish}</Text>
                ))}
            </Pressable>
            {/* 용품 */}
            <Pressable
              style={[
                selectedCategory == Categories.goods
                  ? styles.selectedTabItems
                  : styles.tabItems,
              ]}
              onPress={() => {
                [
                  setSelectedCategory(Categories.goods),
                  setSelectedData(goodsData),
                ];
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
          {/* 판매중인 상품들 목록 */}
          <View style={styles.list}>
            <SafeAreaView style={styles.listItems}>
              <FlatList
                data={selectedData}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
              />
            </SafeAreaView>
          </View>
        </View>
        {/* floating button (상품 판매하기 버튼), 세부 메뉴 */}
        <View style={styles.floatingBTNContainer}>
          {clickPostingBtn && ( // 버튼을 누르면 메뉴 펼치기
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
          {/* 상품 판매하기 버튼 */}
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

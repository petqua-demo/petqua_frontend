import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  Pressable,
  SafeAreaView,
  FlatList,
} from "react-native";
import useCachedResources from "../../useCachedResources";
import { useCallback, useEffect, useState } from "react";
import uuid from "react-uuid";

import images from "../../enum/Images";
import Text from "../../components/DefaultText";
import palette from "../../styles/ColorPalette";
import BoldText from "../../components/BoldText";
import SellingListItem from "../../components/SellingListItem";
import SellingProgress from "../../enum/SellingProgress";

export const Categories = {
  all: "전체",
  ing: "예약중",
  bought: "입양완료",
};

export default function MyBuying({ navigation }: any) {
  const isLoaded = useCachedResources();

  const [selectedCategory, setSelectedCategory] = useState(Categories.all);

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
  ]);

  const getAllData = () => {
    // 데이터 가져오기
  };
  useEffect(() => {
    getAllData();
  }, []);

  const [ingData, setIngData] = useState([
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
  ]);

  const [boughtData, setBoughtData] = useState([]);

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
        // onPress -> 해당 글로 이동
      />
    ),
    []
  );
  const keyExtractor = useCallback((item: any) => item.id, []);

  if (isLoaded) {
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        {/* 페이지 제목 */}
        <View style={styles.header}>
          <BoldText style={styles.headerText}>입양 내역</BoldText>
        </View>
        {/* 전체, 예약중, 입양완료 나누는 상단 탭.
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
            {/* 선택된 탭은 Text style 바꾸기.
            Text에 배열로 style을 넘기면 오류가 나서 일단 다음과 같이 구현. */}
            {(selectedCategory == Categories.all && (
              <Text style={styles.selectedTabText}>{Categories.all}</Text>
            )) ||
              (selectedCategory != Categories.all && (
                <Text style={styles.tabText}>{Categories.all}</Text>
              ))}
          </Pressable>
          {/* 예약중 */}
          <Pressable
            style={[
              selectedCategory == Categories.ing
                ? styles.selectedTabItems
                : styles.tabItems,
            ]}
            onPress={() => {
              [setSelectedCategory(Categories.ing), setSelectedData(ingData)];
            }}
          >
            {(selectedCategory == Categories.ing && (
              <Text style={styles.selectedTabText}>{Categories.ing}</Text>
            )) ||
              (selectedCategory != Categories.ing && (
                <Text style={styles.tabText}>{Categories.ing}</Text>
              ))}
          </Pressable>
          {/* 입양완료 */}
          <Pressable
            style={[
              selectedCategory == Categories.bought
                ? styles.selectedTabItems
                : styles.tabItems,
            ]}
            onPress={() => {
              [
                setSelectedCategory(Categories.bought),
                setSelectedData(boughtData),
              ];
            }}
          >
            {(selectedCategory == Categories.bought && (
              <Text style={styles.selectedTabText}>{Categories.bought}</Text>
            )) ||
              (selectedCategory != Categories.bought && (
                <Text style={styles.tabText}>{Categories.bought}</Text>
              ))}
          </Pressable>
        </View>
        {/* 입양내역 리스트 */}
        <SafeAreaView style={styles.content}>
          {(selectedData.length == 0 && ( // Data가 없는 경우
            <View
              style={{
                width: "100%",
                height: "78%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <BoldText style={{ fontSize: 14, color: palette.gray3 }}>
                입양중인 물고기가 없어요.
              </BoldText>
            </View>
          )) ||
            (selectedData.length != 0 && ( // Data가 있는 경우
              <FlatList
                data={selectedData}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
              />
            ))}
        </SafeAreaView>
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
    justifyContent: "center",
    alignItems: "center",
    marginTop: 60,
  },
  headerText: {
    fontSize: 16,
    color: palette.mainColor,
  },
  tab: {
    marginTop: 34,
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
  content: {
    marginHorizontal: 15,
  },
});

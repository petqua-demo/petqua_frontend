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
} from "react-native";
import useCachedResources from "../../useCachedResources";
import { useCallback, useEffect, useState } from "react";
import uuid from "react-uuid";

import Text from "../../components/DefaultText";
import BoldText from "../../components/BoldText";
import palette from "../../styles/ColorPalette";
import images from "../../enum/Images";
import CommunityPostingItem from "../../components/CommunityPostingItem";
import CommunityPostingCategories from "../../enum/CommunityPostingCategories";

export default function WaterCommunityHome({ navigation }: any) {
  const isLoaded = useCachedResources();

  // 나중에 DB 연결 후 인기글 목록 가져오기
  const [bestPostingData, setBestPostingData] = useState([
    {
      id: uuid(),
      category: CommunityPostingCategories.disease,
      title: "구피100마리",
      content:
        "가나다라마바사 아자차카가나다라마바사 아자차카가나다라마바사 ...",
      date: "07/12",
      howLong: "2주전",
      comment: "129",
      heart: "9",
      scrap: "123",
      onPress: {},
    },
    {
      id: uuid(),
      category: CommunityPostingCategories.disease,
      title: "구피100마리",
      content:
        "가나다라마바사 아자차카가나다라마바사 아자차카가나다라마바사 ...",
      date: "07/12",
      howLong: "2주전",
      comment: "129",
      heart: "9",
      scrap: "123",
      onPress: {},
    },
    {
      id: uuid(),
      category: CommunityPostingCategories.goods,
      title: "구피100마리",
      content:
        "가나다라마바사 아자차카가나다라마바사 아자차카가나다라마바사 ...",
      date: "07/12",
      howLong: "2주전",
      comment: "129",
      heart: "9",
      scrap: "123",
      onPress: {},
    },
    {
      id: uuid(),
      category: CommunityPostingCategories.disease,
      title: "구피100마리",
      content:
        "가나다라마바사 아자차카가나다라마바사 아자차카가나다라마바사 ...",
      date: "07/12",
      howLong: "2주전",
      comment: "129",
      heart: "9",
      scrap: "123",
      onPress: {},
    },
    {
      id: uuid(),
      category: CommunityPostingCategories.disease,
      title: "구피100마리",
      content:
        "가나다라마바사 아자차카가나다라마바사 아자차카가나다라마바사 ...",
      date: "07/12",
      howLong: "2주전",
      comment: "129",
      heart: "9",
      scrap: "123",
      onPress: {},
    },
    {
      id: uuid(),
      category: CommunityPostingCategories.goods,
      title: "구피100마리",
      content:
        "가나다라마바사 아자차카가나다라마바사 아자차카가나다라마바사 ...",
      date: "07/12",
      howLong: "2주전",
      comment: "129",
      heart: "9",
      scrap: "123",
      onPress: {},
    },
  ]);

  const getBestPostingData = () => {
    // 데이터 가져오기
  };
  useEffect(() => {
    getBestPostingData();
  }, []);

  const renderItem = useCallback(
    ({ item }: { item: any }) => (
      <CommunityPostingItem
        id={item.id}
        category={item.category}
        title={item.title}
        content={item.content}
        date={item.date}
        howLong={item.howLong}
        comment={item.comment}
        heart={item.heart}
        scrap={item.scrap}
        onPress={{}}
        // onPress -> 해당 글로 이동
      />
    ),
    []
  );
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
            {/* 페이지 제목.
            우측 상단 버튼과 관계 없이 화면 중앙에 배치하기 위해 View로 감쌈. */}
            <View
              style={{
                width: "100%",
                position: "absolute",
                alignItems: "center",
              }}
            >
              <BoldText style={{ fontSize: 16, color: palette.gray3 }}>
                커뮤니티
              </BoldText>
            </View>
            <View style={{ flexDirection: "row", marginRight: 18 }}>
              {/* 검색 버튼 */}
              <Pressable>
                <Image
                  source={images.topSearchIcon}
                  style={{ width: 23, height: 23, marginRight: 21 }}
                />
              </Pressable>
              {/* 알림 버튼 */}
              <Pressable>
                <Image
                  source={images.topNotificationIcon}
                  style={{ width: 23, height: 23 }}
                />
              </Pressable>
            </View>
          </View>
          <View style={styles.content}>
            {/* 카테고리 */}
            <View style={styles.imageCategoryContainer}></View>
            {/* 배너 광고 */}
            <View></View>
            {/* 구분선 */}
            <View
              style={{
                backgroundColor: "#F5F5F5",
                width: "100%",
                height: 1,
              }}
            />
            {/* 인기글 */}
            <SafeAreaView style={{ marginTop: 25, marginBottom: 50 }}>
              <FlatList
                data={bestPostingData}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
              >
                <BoldText style={{ fontSize: 14, color: palette.gray4 }}>
                  인기글
                </BoldText>
              </FlatList>
              {/* /> */}
            </SafeAreaView>
          </View>
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
    justifyContent: "flex-end",
    alignItems: "center",
    borderBottomColor: palette.gray4,
    borderBottomWidth: 0.5,
  },
  content: {
    marginHorizontal: 15,
    marginTop: 26,
    marginBottom: 60,
  },
  imageCategoryContainer: {},
});

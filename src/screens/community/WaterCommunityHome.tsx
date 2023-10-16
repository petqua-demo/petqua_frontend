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
import BoldText from "../../components/BoldText";
import palette from "../../styles/ColorPalette";
import images from "../../enum/Images";
import CommunityPostingItem from "../../components/CommunityPostingItem";
import CommunityPostingCategories from "../../enum/CommunityPostingCategories";
import CommunityCategoryImageIcon from "../../components/CommunityCategoryImageIcon";
import CommunityCategoryList from "../../components/CommunityCategoryList";

export default function WaterCommunityHome({ navigation }: any) {
  const isLoaded = useCachedResources();

  // 한 줄에 배치하는 카테고리 수
  const numColumns = 4;

  // 커뮤니티 카테고리 목록
  const CategoryData = [
    {
      imageSrc: images.itemImageExample,
      title: CommunityPostingCategories.disease,
    },
    {
      imageSrc: images.itemImageExample,
      title: CommunityPostingCategories.introductory,
    },
    {
      imageSrc: images.itemImageExample,
      title: CommunityPostingCategories.waterManagement,
    },
    {
      imageSrc: images.itemImageExample,
      title: CommunityPostingCategories.species,
    },
    {
      imageSrc: images.itemImageExample,
      title: CommunityPostingCategories.goods,
    },
    {
      imageSrc: images.itemImageExample,
      title: CommunityPostingCategories.raise,
    },
    {
      imageSrc: images.itemImageExample,
      title: CommunityPostingCategories.report,
    },
    {
      imageSrc: images.itemImageExample,
      title: CommunityPostingCategories.other,
    },
  ];

  const CategoryItem = ({
    onPress,
    imageSrc,
    title,
  }: {
    onPress: any;
    imageSrc: any;
    title: any;
  }) => (
    <CommunityCategoryImageIcon
      onPress={onPress}
      imageSrc={imageSrc}
      title={title}
    />
  );

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
          <SafeAreaView style={{ marginTop: 25, marginBottom: 50 }}>
            <ScrollView style={styles.content}>
              {/* 카테고리 */}
              <View style={styles.imageCategoryContainer}>
                <CommunityCategoryList
                  CommunityCategories={CategoryData}
                  onPress={{}} // onPress -> 해당 글로 이동
                />
              </View>
              {/* 배너 광고 */}
              <Image source={images.petqua_logo} style={styles.bannerAD} />
              {/* 구분선 */}
              <View
                style={{
                  backgroundColor: "#F5F5F5",
                  width: "120%",
                  height: 1,
                  marginHorizontal: -15,
                }}
              />
              {/* 인기글 */}
              <BoldText style={{ fontSize: 14, color: palette.gray4 }}>
                인기글
              </BoldText>
              <FlatList
                data={bestPostingData}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
              />
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
  imageCategoryContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  bannerAD: {
    width: "100%",
    height: 65,
    marginTop: 31,
    marginBottom: 28,
    borderRadius: 5,
  },
});

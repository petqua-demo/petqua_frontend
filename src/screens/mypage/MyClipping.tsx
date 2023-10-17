import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  Pressable,
  SafeAreaView,
  ScrollView,
  FlatList,
} from "react-native";
import useCachedResources from "../../useCachedResources";
import { useCallback, useEffect, useState } from "react";
import uuid from "react-uuid";

import palette from "../../styles/ColorPalette";
import Text from "../../components/DefaultText";
import BoldText from "../../components/BoldText";
import CommunityPostingItem from "../../components/CommunityPostingItem";
import CommunityCategoryButton from "../../components/CommunityCategoryButton";
import CommunityPostingCategoriesTitle from "../../enum/CommunityPostingCategoriesTitle";

export default function MyClipping({ navigation }: any) {
  const isLoaded = useCachedResources();
  const [category, setCategory] = useState("");

  // 나중에 DB 연결 후 posting 목록 가져오기
  const [data, setData] = useState([
    {
      id: uuid(),
      category: CommunityPostingCategoriesTitle.disease,
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
      category: CommunityPostingCategoriesTitle.disease,
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
      category: CommunityPostingCategoriesTitle.goods,
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

  const getData = () => {
    // 데이터 가져오기
  };
  useEffect(() => {
    getData();
  }, []);

  // 카테고리 버튼 선택할 때마다 가져오는 Data 설정하기
  const [selectedData, setSelectedData] = useState(data);

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
      <View style={styles.container}>
        <StatusBar style="auto" />
        {/* 페이지 제목 */}
        <View style={styles.header}>
          <BoldText style={styles.headerText}>내가 스크랩한 글</BoldText>
        </View>
        <SafeAreaView style={styles.content}>
          {/* 카테고리 */}
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{ marginRight: -15 }}
          >
            <CommunityCategoryButton
              title={CommunityPostingCategoriesTitle.all}
              onPress={() => setCategory(CommunityPostingCategoriesTitle.all)}
            />
            <CommunityCategoryButton
              title={CommunityPostingCategoriesTitle.disease}
              onPress={() =>
                setCategory(CommunityPostingCategoriesTitle.disease)
              }
            />
            <CommunityCategoryButton
              title={CommunityPostingCategoriesTitle.waterManagement}
              onPress={() =>
                setCategory(CommunityPostingCategoriesTitle.waterManagement)
              }
            />
            <CommunityCategoryButton
              title={CommunityPostingCategoriesTitle.species}
              onPress={() =>
                setCategory(CommunityPostingCategoriesTitle.species)
              }
            />
            <CommunityCategoryButton
              title={CommunityPostingCategoriesTitle.goods}
              onPress={() => setCategory(CommunityPostingCategoriesTitle.goods)}
            />
            <CommunityCategoryButton
              title={CommunityPostingCategoriesTitle.raise}
              onPress={() => setCategory(CommunityPostingCategoriesTitle.raise)}
            />
            <CommunityCategoryButton
              title={CommunityPostingCategoriesTitle.feed}
              onPress={() => setCategory(CommunityPostingCategoriesTitle.feed)}
            />
            <CommunityCategoryButton
              title={CommunityPostingCategoriesTitle.free}
              onPress={() => setCategory(CommunityPostingCategoriesTitle.free)}
            />
          </ScrollView>
          {/* 내가 스크랩한 글 리스트 */}
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
                스크랩한 글이 없어요.
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
    marginBottom: 30,
    paddingBottom: 27,
    borderBottomWidth: 0.5,
    borderBottomColor: palette.gray2,
  },
  headerText: {
    fontSize: 16,
    color: palette.mainColor,
  },
  content: {
    marginHorizontal: 15,
  },
});

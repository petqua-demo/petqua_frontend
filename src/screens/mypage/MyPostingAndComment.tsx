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

import Text from "../../components/DefaultText";
import palette from "../../styles/ColorPalette";
import BoldText from "../../components/BoldText";
import CommunityPostingItem from "../../components/CommunityPostingItem";

export const Categories = {
  all: "전체",
  posting: "글",
  comment: "댓글",
};

export default function MyPostingAndComment({ navigation }: any) {
  const isLoaded = useCachedResources();

  const [selectedCategory, setSelectedCategory] = useState(Categories.all);

  // 나중에 DB 연결 후 posting 목록 가져오기
  const [allData, setAllData] = useState([
    {
      id: uuid(),
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

  const getAllData = () => {
    // 데이터 가져오기
  };
  useEffect(() => {
    getAllData();
  }, []);

  const [postingData, setPostingData] = useState([
    {
      id: uuid(),
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

  const [commentData, setCommentData] = useState([]);

  // 카테고리 버튼 선택할 때마다 가져오는 Data 설정하기
  const [selectedData, setSelectedData] = useState(allData);

  const renderItem = useCallback(
    ({ item }: { item: any }) => (
      <CommunityPostingItem
        id={item.id}
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
          <BoldText style={styles.headerText}>내가 쓴 글/댓글</BoldText>
        </View>
        {/* 전체, 글, 댓글 나누는 상단 탭.
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
          {/* 글 */}
          <Pressable
            style={[
              selectedCategory == Categories.posting
                ? styles.selectedTabItems
                : styles.tabItems,
            ]}
            onPress={() => {
              [
                setSelectedCategory(Categories.posting),
                setSelectedData(postingData),
              ];
            }}
          >
            {(selectedCategory == Categories.posting && (
              <Text style={styles.selectedTabText}>{Categories.posting}</Text>
            )) ||
              (selectedCategory != Categories.posting && (
                <Text style={styles.tabText}>{Categories.posting}</Text>
              ))}
          </Pressable>
          {/* 댓글 */}
          <Pressable
            style={[
              selectedCategory == Categories.comment
                ? styles.selectedTabItems
                : styles.tabItems,
            ]}
            onPress={() => {
              [
                setSelectedCategory(Categories.comment),
                setSelectedData(commentData),
              ];
            }}
          >
            {(selectedCategory == Categories.comment && (
              <Text style={styles.selectedTabText}>{Categories.comment}</Text>
            )) ||
              (selectedCategory != Categories.comment && (
                <Text style={styles.tabText}>{Categories.comment}</Text>
              ))}
          </Pressable>
        </View>
        {/* 내가 쓴 글/댓글 리스트 */}
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
                작성한 글이 없어요.
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

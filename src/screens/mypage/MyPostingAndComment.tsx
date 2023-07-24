import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Pressable } from "react-native";
import useCachedResources from "../../useCachedResources";
import { useState } from "react";

import Text from "../../components/DefaultText";
import palette from "../../styles/ColorPalette";
import BoldText from "../../components/BoldText";

export const Categories = {
  all: "전체",
  posting: "글",
  comment: "용품",
};

export default function MyPostingAndComment({ navigation }: any) {
  const isLoaded = useCachedResources();

  const [selectedCategory, setSelectedCategory] = useState(Categories.all);

  if (isLoaded) {
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.header}>
          <BoldText style={styles.headerText}>내가 쓴 글/댓글</BoldText>
        </View>
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
              selectedCategory == Categories.posting
                ? styles.selectedTabItems
                : styles.tabItems,
            ]}
            onPress={() => {
              setSelectedCategory(Categories.posting);
            }}
          >
            {(selectedCategory == Categories.posting && (
              <Text style={styles.selectedTabText}>{Categories.posting}</Text>
            )) ||
              (selectedCategory != Categories.posting && (
                <Text style={styles.tabText}>{Categories.posting}</Text>
              ))}
          </Pressable>
          <Pressable
            style={[
              selectedCategory == Categories.comment
                ? styles.selectedTabItems
                : styles.tabItems,
            ]}
            onPress={() => {
              setSelectedCategory(Categories.comment);
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
        <View style={styles.content}>{/* Flatlist로 구현 */}</View>
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

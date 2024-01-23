import {
  StyleSheet,
  View,
  Text,
  Pressable,
  Image,
  ScrollView,
  TextInput,
  StatusBar,
} from "react-native";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import palette from "../../styles/ColorPalette";
import images from "../../enum/Images";
import { CommunityPostData } from "../../enum/CommunityData";
import { categoryFilter } from "../../utils/filter";
import { useState } from "react";

export default function CommunityDetail({ navigation, route }: any) {
  const data = CommunityPostData.filter((el) => el.id === route.params.id)[0];
  const [comment, setComment] = useState("");

  return (
    <View style={styles.container}>
      <StatusBar />
      <ScrollView style={{ width: "100%" }}>
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

        {/* 글 내용 */}
        <View style={styles.conentContainer}>
          <View style={styles.category}>
            <Text style={styles.categoryTxt}>
              {categoryFilter(data.category)}
            </Text>
          </View>
          <View style={styles.writerContainer}>
            {data.imgUrl && (
              <Image source={images.profile} style={styles.profile} />
            )}
            <View style={{ gap: 8 }}>
              <Text style={styles.writer}>{data.writer}</Text>
              <Text style={styles.howLong}>{data.howLong}</Text>
            </View>
          </View>
          <Text style={styles.title}>{data.title}</Text>
          <Text style={styles.content}>{data.content}</Text>
          {data.imgUrl && <Image source={data.imgUrl} style={styles.img} />}
          <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
            <AntDesign name="hearto" color={palette.mainGray} size={14} />
            <Text style={styles.like}>좋아요 {data.heart}</Text>
          </View>
        </View>

        {/* 댓글입력창 */}
        <View style={styles.cmtContainer}>
          <View style={styles.cmtInputContainer}>
            <TextInput
              style={styles.cmtInput}
              placeholder="댓글을 달아 보세요!"
              placeholderTextColor={palette.mainGray}
              value={comment}
              onChangeText={setComment}
            />
            <Pressable onPress={() => setComment("")}>
              <Ionicons
                name="send-outline"
                size={20}
                color={palette.mainDark}
              />
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
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
  // 글 내용
  conentContainer: {
    backgroundColor: "white",
    padding: 16,
    gap: 12,
  },
  category: {
    alignSelf: "flex-start",
    backgroundColor: "#ECF3FF",
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderRadius: 4,
  },
  categoryTxt: {
    color: palette.skyBlue,
    fontSize: 12,
  },
  writerContainer: {
    flexDirection: "row",
    marginVertical: 8,
    gap: 8,
    alignItems: "center",
  },
  profile: { width: 44, height: 44 },
  writer: {
    fontSize: 16,
    fontWeight: "700",
    color: "#777",
  },
  howLong: { fontSize: 12, fontWeight: "400", color: palette.mainGray },
  title: {
    color: "#777",
    fontSize: 24,
    fontWeight: "700",
  },
  content: {
    fontSize: 16,
    fontWeight: "400",
    color: "#777",
    lineHeight: 24,
  },
  img: {
    width: "100%",
    aspectRatio: 1,
  },
  like: {
    fontSize: 14,
    fontWeight: "400",
    color: palette.mainGray,
  },
  // 댓글입력창
  cmtContainer: {
    backgroundColor: "white",
    padding: 12,
  },
  cmtInputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 12,
    backgroundColor: palette.gray3,
    gap: 8,
    padding: 12,
  },
  cmtInput: {
    flex: 1,
    fontSize: 14,
    fontWeight: "400",
    color: palette.mainDark,
  },
});

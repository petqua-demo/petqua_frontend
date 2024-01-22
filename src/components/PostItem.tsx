import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import { AntDesign, EvilIcons } from "@expo/vector-icons";

import palette from "../styles/ColorPalette";
import { useNavigation } from "@react-navigation/native";
import { categoryFilter } from "../utils/filter";

const PostItem = ({ data }: any) => {
  const navigation = useNavigation<any>();
  function truncateString(content: string, maxLen: number) {
    if (content.length > maxLen) {
      return content.substring(0, maxLen) + "...";
    } else {
      return content;
    }
  }

  return (
    <Pressable
      style={styles.container}
      onPress={() => {
        navigation.navigate("CommunityDetail", { id: data.id });
      }}
    >
      <View style={styles.category}>
        <Text style={styles.categoryTxt}>{categoryFilter(data.category)}</Text>
      </View>
      <View style={styles.contentContainer}>
        <View style={{ gap: 8 }}>
          <Text style={styles.blackTxt}>{truncateString(data.title, 16)}</Text>
          <Text style={{ ...styles.grayTxt, fontSize: 14 }}>
            {truncateString(data.content, 18)}
          </Text>
        </View>
        {data.imgUrl && <Image source={data.imgUrl} style={styles.image} />}
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.btmTxtContainer}>
          <Text style={styles.grayTxt}>{data.date}</Text>
          <View
            style={{ width: 1, height: 8, backgroundColor: palette.mainGray }}
          />
          <Text style={styles.grayTxt}>{data.howLong}</Text>
        </View>
        <View style={styles.btmTxtContainer}>
          <EvilIcons name="comment" color={palette.mainGray} size={14} />
          <Text style={styles.grayTxt}>{data.comment}</Text>
          <AntDesign name="hearto" color={palette.mainGray} size={14} />
          <Text style={styles.grayTxt}>{data.heart}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default PostItem;

const styles = StyleSheet.create({
  container: { paddingVertical: 16, width: "100%", gap: 8 },
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
  contentContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  image: {
    width: 64,
    height: 64,
    borderRadius: 8,
  },
  blackTxt: {
    color: palette.mainDark,
    fontSize: 16,
  },
  grayTxt: {
    color: palette.mainGray,
    fontSize: 12,
  },
  btmTxtContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
});

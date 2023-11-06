import { Pressable, StyleSheet, Image, View } from "react-native";
import Text from "./DefaultText";
import SemiBoldText from "./SemiBoldText";
import LightText from "./LightText";
import palette from "../styles/ColorPalette";
import images from "../enum/Images";
import CommunityCategoryRect from "./CommunityCategoryRect";

const CommunityPostingItem = ({
  id,
  category,
  title,
  content,
  date,
  howLong,
  comment,
  heart,
  scrap,
  onPress,
}) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <View>
        {/* 카테고리 분류 */}
        <View style={{ marginBottom: 7 }}>
          <CommunityCategoryRect title={category} />
        </View>
        {/* main info - title, content */}
        <SemiBoldText style={styles.titleText} numberOfLines={2}>
          {title}
        </SemiBoldText>
        <Text style={styles.mainText} numberOfLines={1}>
          {content}
        </Text>
      </View>
      <View style={[styles.subInfo, { marginTop: 17 }]}>
        <View style={styles.subInfo}>
          <Text style={styles.textSubInfo}>{date}</Text>
          {/* 구분선 */}
          <View style={styles.dividingLine} />
          <Text style={styles.textSubInfo}>{howLong}</Text>
        </View>
        <View style={styles.subInfo}>
          <Image
            source={images.commentIcon}
            style={{ width: 20, height: 15, marginRight: 4 }}
          />
          <LightText
            style={{
              fontSize: 14,
              color: palette.mainGray,
              marginRight: 13,
            }}
          >
            {comment}
          </LightText>
          <Image
            source={images.heartIcon}
            style={{ width: 18, height: 16, marginRight: 4 }}
          />
          <LightText
            style={{
              fontSize: 14,
              color: palette.mainGray,
              marginRight: 13,
            }}
          >
            {heart}
          </LightText>
          <Image
            source={images.scrapIcon}
            style={{ width: 10.5, height: 15, marginRight: 4 }}
          />
          <LightText
            style={{
              fontSize: 14,
              color: palette.mainGray,
            }}
          >
            {scrap}
          </LightText>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    width: "100%",
    backgroundColor: "#ffffff",
    borderBottomWidth: 0.5,
    borderBottomColor: palette.gray3,
  },
  titleText: {
    fontSize: 18,
    color: palette.mainDark,
    marginBottom: 10,
  },
  mainText: {
    fontSize: 14,
    color: palette.mainGray,
  },
  subInfo: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  textSubInfo: {
    fontSize: 14,
    color: palette.mainGray,
  },
  dividingLine: {
    width: 0.5,
    height: 11,
    backgroundColor: palette.mainGray,
    marginHorizontal: 12,
  },
});

export default CommunityPostingItem;

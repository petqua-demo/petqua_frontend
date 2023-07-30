import { Pressable, StyleSheet, Image, View } from "react-native";
import Text from "./DefaultText";
import BoldText from "./BoldText";
import LightText from "./LightText";
import palette from "../styles/ColorPalette";
import images from "../enum/Images";

const CommunityPostingItem = ({
  id,
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
      <BoldText style={styles.mainText}>{title}</BoldText>
      <LightText style={styles.mainText}>{content}</LightText>
      <View style={[styles.subInfo, { marginTop: 6 }]}>
        <View style={styles.subInfo}>
          <Text style={styles.textSubInfo}>{date}</Text>
          {/* 구분선 */}
          <View style={styles.dividingLine} />
          <Text style={styles.textSubInfo}>{howLong}</Text>
        </View>
        <View style={styles.subInfo}>
          <Image
            source={images.commentIcon}
            style={{ width: 15, height: 13, marginRight: 4 }}
          />
          <LightText
            style={{
              fontSize: 12,
              color: palette.gray4,
              marginRight: 13,
            }}
          >
            {comment}
          </LightText>
          <Image
            source={images.heartIcon}
            style={{ width: 14, height: 13, marginRight: 4 }}
          />
          <LightText
            style={{
              fontSize: 12,
              color: palette.gray4,
              marginRight: 13,
            }}
          >
            {heart}
          </LightText>
          <Image
            source={images.scrapIcon}
            style={{ width: 10, height: 13, marginRight: 4 }}
          />
          <LightText
            style={{
              fontSize: 12,
              color: palette.gray4,
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
    paddingVertical: 25,
    width: "100%",
    backgroundColor: "#ffffff",
    borderBottomWidth: 0.5,
    borderBottomColor: palette.gray2,
  },
  mainText: {
    fontSize: 16,
    color: palette.gray3,
    marginBottom: 14,
  },
  subInfo: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  textSubInfo: {
    fontSize: 12,
    color: palette.gray4,
  },
  dividingLine: {
    width: 0.5,
    height: 11,
    backgroundColor: "#000000",
    marginHorizontal: 12,
  },
});

export default CommunityPostingItem;

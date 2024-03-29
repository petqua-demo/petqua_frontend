import {
  Pressable,
  StyleSheet,
  Image,
  ImageBackground,
  View,
} from "react-native";

import Text from "./DefaultText";
import BoldText from "./BoldText";
import ExtraBoldText from "./BoldText";
import LightText from "./LightText";
import palette from "../styles/ColorPalette";
import images from "../enum/Images";
import SellingProgress from "../enum/SellingProgress";

const SellingListItem = ({
  id,
  imageSrc,
  progress,
  title,
  itemCategory,
  howLong,
  price,
  comment,
  shoppingBasket,
  onPress,
}) => {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.container}>
        {(progress != SellingProgress.none && (
          <ImageBackground
            source={imageSrc}
            style={styles.itemImage}
            imageStyle={{ opacity: 0.2 }}
          >
            <ExtraBoldText
              style={{
                fontSize: 16,
                color: "#ffffff",
              }}
            >
              {progress}
            </ExtraBoldText>
          </ImageBackground>
        )) || <Image source={imageSrc} style={styles.itemImage} />}
        <View style={styles.itemInfo}>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.itemDetail}>
            <Text style={styles.itemDetailContent}>{itemCategory}</Text>
            <Text style={styles.itemDetailContent}>{howLong}</Text>
          </View>
          <BoldText style={{ fontSize: 16, color: palette.body1 }}>
            {price}
          </BoldText>
        </View>
        {/* response는 absolute position이기 때문에 itemInfo와 분리 */}
        <View style={styles.response}>
          <Image source={images.commentIcon} style={styles.responseIcon} />
          <LightText
            style={{ fontSize: 12, color: palette.gray4, marginRight: 10 }}
          >
            {comment}
          </LightText>
          <Image source={images.heartIcon} style={styles.responseIcon} />
          <LightText style={{ fontSize: 12, color: palette.gray4 }}>
            {shoppingBasket}
          </LightText>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    flexDirection: "row",
    width: "100%",
  },
  itemImage: {
    width: 108,
    height: 108,
    borderRadius: 8,
    backgroundColor: palette.gray4,
    justifyContent: "center",
    alignItems: "center",
  },
  itemInfo: {
    marginLeft: 16,
    marginTop: 3,
    flexShrink: 1,
    flex: 1,
  },
  title: {
    fontSize: 16,
    color: palette.gray3,
    marginRight: 24,
    lineHeight: 26,
  },
  itemDetail: {
    flexDirection: "row",
    marginTop: 8,
    marginBottom: 10,
  },
  itemDetailContent: {
    color: palette.body1,
    fontSize: 12,
    marginRight: 16,
    includeFontPadding: false,
  },
  response: {
    flexDirection: "row",
    justifyContent: "flex-end",
    position: "absolute",
    width: "100%",
    bottom: 19,
  },
  responseIcon: {
    width: 15,
    height: 13,
    marginRight: 4,
  },
});

export default SellingListItem;

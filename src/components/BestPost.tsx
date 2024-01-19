import { View, Text, Image, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import palette from "../styles/ColorPalette";

const BestPost = ({ data }: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.category}>{data.category}</View>
      <View style={styles.contentContainer}>
        <View style={{ gap: 8 }}>
          <Text style={styles.blackTxt}>{data.title}</Text>
          <Text style={{ ...styles.grayTxt, fontSize: 14 }}>
            {data.content}
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
          <Icon name="hearto" color={palette.mainGray} size={14} />
          <Text style={styles.grayTxt}>{data.heart}</Text>
        </View>
      </View>
    </View>
  );
};

export default BestPost;

const styles = StyleSheet.create({
  container: { paddingVertical: 16, width: "100%", gap: 8 },
  category: {
    width: "fit-content",
    backgroundColor: "#ECF3FF",
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderRadius: 4,
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

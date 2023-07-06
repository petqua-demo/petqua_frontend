import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import Text from "./DefaultText";
import BoldText from "./BoldText";
import MediumText from "./MediumText";
import palette from "../styles/ColorPalette";

const Comment = ({ userName, commentContent, time, onPress }) => {
  return (
    <View>
      {/* 구분선 */}
      <View
        style={{
          flex: 1,
          height: 0.5,
          backgroundColor: "#C9C9C9",
          marginLeft: -6,
          marginRight: -6,
        }}
      />
      <View style={styles.container}>
        <View style={styles.userInfo}>
          <Image
            source={require("../../assets/images/itemImageExample.png")}
            style={styles.userProfile}
          />
          <BoldText style={styles.userName}>{userName}</BoldText>
        </View>
        <MediumText style={styles.commentContent}>{commentContent}</MediumText>
        <Text style={styles.time}>{time}</Text>
        <View style={styles.responseContainer}>
          <Image
            source={require("../../assets/images/commentIconLightGrey.png")}
            style={styles.responseIcon}
          />
          <Image
            source={require("../../assets/images/recommendIcon.png")}
            style={[styles.responseIcon, { marginBottom: 1 }]}
          />
          <Image
            source={require("../../assets/images/besidesIcon.png")}
            style={[
              styles.responseIcon,
              { paddingHorizontal: 17, borderRightWidth: 0 },
            ]}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingTop: 16,
    paddingBottom: 22,
    backgroundColor: "#ffffff",
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  userProfile: {
    width: 37,
    height: 37,
    borderRadius: 50,
    marginRight: 9,
  },
  userName: {
    fontSize: 16,
    color: palette.gray3,
  },
  commentContent: {
    fontSize: 16,
    color: palette.gray3,
    marginTop: 8,
    marginLeft: 46,
  },
  time: {
    fontSize: 12,
    color: palette.gray2,
    marginTop: 18,
    marginLeft: 46,
  },
  responseContainer: {
    backgroundColor: "#F3F3F3",
    borderRadius: 5,
    height: 24,
    position: "absolute",
    top: 16,
    right: 3,
    flexDirection: "row",
    alignItems: "center",
  },
  responseIcon: {
    height: 10,
    resizeMode: "contain",
    paddingHorizontal: 12,
    borderRightWidth: 0.5,
    borderRightColor: "#737373",
  },
});

export default Comment;

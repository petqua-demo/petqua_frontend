import { Pressable, Image, StyleSheet } from "react-native";
import images from "./Images";

const MyPageProfile = ({ ImageSrc }) => {
  return (
    <Pressable style={{ width: 67, height: 67 }}>
      <Image source={ImageSrc} style={styles.userProfile} />
      <Image
        source={images.takeProfilePictureIcon}
        style={styles.getPhotosIcon}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  userProfile: {
    width: 67,
    height: 67,
    borderRadius: 50,
    marginRight: 24,
  },
  getPhotosIcon: {
    position: "absolute",
    right: 2,
    bottom: 0,
    width: 20,
    height: 20,
  },
});

export default MyPageProfile;

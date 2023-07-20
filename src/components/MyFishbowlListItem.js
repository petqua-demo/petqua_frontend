import { Pressable, Image } from "react-native";

const MyFishbowlListItem = ({ ImageSrc, onPress, containerStyle }) => {
  return (
    <Pressable onPress={onPress}>
      <Image source={ImageSrc} style={containerStyle} />
    </Pressable>
  );
};

export default MyFishbowlListItem;

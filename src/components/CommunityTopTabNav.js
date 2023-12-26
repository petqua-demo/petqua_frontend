import { View } from "react-native";
import CommunityPostingItem from "./CommunityPostingItem";

const CommunityTopTabNav = ({ onPress }) => {
  return (
    <View>
      {BestPostings.map((BestPosting) => (
        <CommunityPostingItem
          key={BestPosting.id}
          {...BestPosting}
          onPress={onPress}
        />
      ))}
    </View>
  );
};

export default CommunityTopTabNav;

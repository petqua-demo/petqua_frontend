import { FlatList } from "react-native";
import CommunityCategoryImageIcon from "./CommunityCategoryImageIcon";

const CategoryItem = ({ onPress, imageSrc, title }) => (
  <CommunityCategoryImageIcon
    onPress={() => onPress(title)}
    imageSrc={imageSrc}
    title={title}
  />
);

const numColumns = 4;

const CommunityCategoryList = ({ CommunityCategories, onPress }) => {
  return (
    <FlatList
      data={CommunityCategories}
      renderItem={({ item }) => (
        <CategoryItem
          onPress={onPress}
          imageSrc={item.imageSrc}
          title={item.title}
        />
      )}
      showsVerticalScrollIndicator={false}
      numColumns={numColumns}
      scrollEnabled={false}
      columnWrapperStyle={{ justifyContent: "space-between" }}
    />
  );
};

export default CommunityCategoryList;

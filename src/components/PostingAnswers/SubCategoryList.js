import React from "react";
import { View, StyleSheet } from "react-native";
import CommunityCategoryButton from "../CommunityCategoryButton";

const SubCategoryList = ({ subCategories, onToggle }) => {
  return (
    <View style={styles.container}>
      {subCategories.map((sub) => (
        <CommunityCategoryButton key={sub.id} {...sub} onToggle={onToggle} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});

export default SubCategoryList;

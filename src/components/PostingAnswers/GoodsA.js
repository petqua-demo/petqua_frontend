import { View, StyleSheet } from "react-native";
import CommunityCategoryButton from "../CommunityCategoryButton";

const GoodsA = () => {
  return (
    <View style={styles.container}>
      <CommunityCategoryButton title={"전체"} onPress={{}} />
      <CommunityCategoryButton title={"수조"} onPress={{}} />
      <CommunityCategoryButton title={"여과기"} onPress={{}} />
      <CommunityCategoryButton title={"히터"} onPress={{}} />
      <CommunityCategoryButton title={"조명"} onPress={{}} />
      <CommunityCategoryButton title={"바닥재"} onPress={{}} />
      <CommunityCategoryButton title={"사료"} onPress={{}} />
      <CommunityCategoryButton title={"기타"} onPress={{}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});

export default GoodsA;

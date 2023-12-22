import { View, StyleSheet } from "react-native";
import CommunityCategoryButton from "../CommunityCategoryButton";

const WaterManagementA = () => {
  return (
    <View style={styles.container}>
      <CommunityCategoryButton title={"전체"} onPress={{}} />
      <CommunityCategoryButton title={"녹조"} onPress={{}} />
      <CommunityCategoryButton title={"백탁현상"} onPress={{}} />
      <CommunityCategoryButton title={"비린내"} onPress={{}} />
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

export default WaterManagementA;

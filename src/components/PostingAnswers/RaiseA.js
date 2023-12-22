import { View, StyleSheet } from "react-native";
import CommunityCategoryButton from "../CommunityCategoryButton";

const RaiseA = () => {
  return (
    <View style={styles.container}>
      <CommunityCategoryButton title={"전체"} onPress={{}} />
      <CommunityCategoryButton title={"물잡이"} onPress={{}} />
      <CommunityCategoryButton title={"합사"} onPress={{}} />
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

export default RaiseA;

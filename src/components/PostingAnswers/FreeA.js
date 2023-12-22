import { View, StyleSheet } from "react-native";
import CommunityCategoryButton from "../CommunityCategoryButton";

const FreeA = () => {
  return (
    <View style={styles.container}>
      <CommunityCategoryButton title={"전체"} onPress={{}} />
      <CommunityCategoryButton title={"일상"} onPress={{}} />
      <CommunityCategoryButton title={"추천"} onPress={{}} />
      <CommunityCategoryButton title={"꿀팁"} onPress={{}} />
      <CommunityCategoryButton title={"모임"} onPress={{}} />
      <CommunityCategoryButton title={"수조자랑"} onPress={{}} />
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

export default FreeA;

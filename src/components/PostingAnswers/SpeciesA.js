import { View, StyleSheet } from "react-native";
import CommunityCategoryButton from "../CommunityCategoryButton";

const SpeciesA = () => {
  return (
    <View style={styles.container}>
      <CommunityCategoryButton title={"전체"} onPress={{}} />
      <CommunityCategoryButton title={"열대어"} onPress={{}} />
      <CommunityCategoryButton title={"해수어"} onPress={{}} />
      <CommunityCategoryButton title={"기수어"} onPress={{}} />
      <CommunityCategoryButton title={"대형어"} onPress={{}} />
      <CommunityCategoryButton title={"새우"} onPress={{}} />
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

export default SpeciesA;

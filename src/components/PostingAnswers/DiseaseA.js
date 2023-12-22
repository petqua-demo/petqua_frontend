import { View, StyleSheet } from "react-native";
import CommunityCategoryButton from "../CommunityCategoryButton";

const DiseaseA = () => {
  return (
    <View style={styles.container}>
      <CommunityCategoryButton title={"모르겠어요"} onPress={{}} />
      <CommunityCategoryButton title={"백점병"} onPress={{}} />
      <CommunityCategoryButton title={"배마름병"} onPress={{}} />
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

export default DiseaseA;

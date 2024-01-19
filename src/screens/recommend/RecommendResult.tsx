import { StyleSheet, View, Text, Image, ScrollView } from "react-native";
import images from "../../enum/Images";
import palette from "../../styles/ColorPalette";

export default function RecommendResult({ route }: any) {
  return (
    <View style={styles.container}>
      <ScrollView style={{ width: "100%", paddingBottom: 16 }}>
        <View style={styles.banner}>
          <Text style={styles.bannerTxt}>
            {route.params.fish1}, {route.params.fish2}의{"\n"}합사 가능 여부를
            알려드릴게요!
          </Text>
          <View style={styles.circleBox}>
            <Image
              source={images.safeCircle}
              style={{ width: "85%", aspectRatio: 1.3 }}
            />
          </View>
        </View>
        <View style={{ height: 220 }} />
        <View style={styles.barBox}>
          <Text style={styles.barBoxTxt}>합사 분석 결과</Text>
          <Image source={images.safeBar} style={{ width: 274, height: 120 }} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  banner: {
    width: "100%",
    height: 240,
    paddingVertical: 36,
    paddingHorizontal: 20,
    backgroundColor: palette.blue,
    position: "relative",
  },
  bannerTxt: {
    color: "white",
    fontSize: 22,
    fontWeight: "700",
    lineHeight: 36,
    letterSpacing: -1.4,
  },
  circleBox: {
    paddingVertical: 28,
    position: "absolute",
    top: 150,
    left: "2.5%",
    backgroundColor: "white",
    width: "95%",
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  barBox: {
    backgroundColor: "white",
    width: "95%",
    marginHorizontal: "2.5%",
    borderRadius: 24,
    padding: 24,
  },
  barBoxTxt: {
    color: palette.mainBlue,
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 24,
  },
});

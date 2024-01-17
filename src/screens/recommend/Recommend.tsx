import {
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import images from "../../enum/Images";
import { useState } from "react";
import palette from "../../styles/ColorPalette";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

export default function Recommend() {
  const navigation = useNavigation<any>();
  const [fish1, setFish1] = useState("");
  const [fish2, setFish2] = useState("");

  const handleButtonPress = () => {
    navigation.navigate("RecommendResult");
  };

  return (
    <View style={styles.container}>
      <ScrollView style={{ width: "100%" }}>
        <View style={styles.banner}>
          <Text style={styles.bannerTxt}>
            합사할 어종을 입력하면{"\n"}합사 가능 여부를 알려드릴게요!
          </Text>
          <View style={styles.box}>
            <Image
              source={images.recommend}
              style={{ width: 150, height: 150 }}
            />
            <View style={styles.inputContainer}>
              <Text style={styles.inputTxt}>합사 어종1</Text>
              <TextInput
                style={styles.input}
                placeholder="합사할 어종을 입력해 주세요"
                onChangeText={(txt) => setFish1(txt)}
                value={fish1}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.inputTxt}>합사 어종2</Text>
              <TextInput
                style={styles.input}
                placeholder="합사할 어종을 입력해 주세요"
                onChangeText={(txt) => setFish2(txt)}
                value={fish2}
              />
            </View>
          </View>
        </View>
        <View style={{ height: 380 }} />
      </ScrollView>

      <TouchableOpacity
        style={{
          ...styles.button,
          backgroundColor: fish1 && fish2 ? palette.skyBlue : palette.mainGray,
        }}
        onPress={handleButtonPress}
      >
        <Text style={styles.buttonTxt}>합사 결과 보기</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    alignItems: "center",
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
  box: {
    position: "absolute",
    top: 150,
    left: "2.5%",
    backgroundColor: "white",
    width: "95%",
    borderRadius: 24,
    paddingVertical: 40,
    paddingHorizontal: 16,
    gap: 32,
    alignItems: "center",
  },
  inputContainer: {
    width: "100%",
    gap: 8,
  },
  inputTxt: {
    color: palette.gray2,
    fontSize: 14,
  },
  input: {
    width: "100%",
    paddingHorizontal: 12,
    paddingVertical: 16,
    backgroundColor: palette.gray1,
    borderRadius: 8,
  },
  button: {
    width: "95%",
    borderRadius: 8,
    paddingVertical: 16,
    marginBottom: 8,
  },
  buttonTxt: {
    color: "white",
    fontWeight: "600",
    fontSize: 16,
    textAlign: "center",
  },
});

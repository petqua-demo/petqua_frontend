import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, TextInput, Image } from "react-native";
import useCachedResources from "../../useCachedResources";
import { useState } from "react";

import Text from "../../components/DefaultText";
import BlueButton from "../../components/BlueButton";
import BlueBorderButton from "../../components/BlueBorderButton";
import BoldText from "../../components/BoldText";
import palette from "../../styles/ColorPalette";

export default function App({ navigation }: any) {
  const isLoaded = useCachedResources();
  const [phoneNum, setPhoneNum] = useState("");

  if (isLoaded) {
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.content}>
          <BoldText style={styles.subtitle}>로그인</BoldText>
          <Text style={styles.command}>휴대폰번호를{"\n"}입력해주세요</Text>
          <View style={styles.inputItem}>
            {/* <Text style={styles.textInputTitle}>휴대폰번호</Text> */}
            <View style={styles.inputBox}>
              <TextInput
                style={styles.textInput}
                placeholder="휴대폰번호"
                placeholderTextColor={palette.lightGray}
                keyboardType="numeric"
                returnKeyType="done"
                value={phoneNum}
                onChangeText={(phoneNum) => setPhoneNum(phoneNum)}
              ></TextInput>
              <Image
                source={require("../../../assets/images/clearTextInputButton.png")}
                style={styles.clearButton}
              />
              {/* clear button 눌렀을 때는 키보드 안 사라지게 하는 코드 추가하기 */}
            </View>
          </View>
          <View style={styles.buttonBox}>
            <BlueButton
              title="로그인"
              onPress={() => {}}
              buttonStyle={{ width: "100%", height: 50 }}
            ></BlueButton>
            <BlueBorderButton
              title="회원가입"
              onPress={() => navigation.navigate("Join")}
              buttonStyle={{ width: "100%", height: 50 }}
            ></BlueBorderButton>
          </View>
        </View>
      </View>
    );
  } else {
    return null;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    marginHorizontal: 24,
  },
  command: {
    fontSize: 28,
    marginTop: 40,
    lineHeight: 40,
    marginBottom: 29,
  },
  subtitle: {
    fontSize: 24,
    marginTop: 70,
  },
  inputItem: {
    marginTop: 41,
  },
  textInputTitle: {
    marginBottom: 13,
    fontSize: 12,
    color: palette.lightGray,
  },
  inputBox: {
    flexDirection: "row",
    paddingBottom: 12,
    borderBottomWidth: 2,
    borderBottomColor: palette.mainColor,
  },
  textInput: {
    flex: 1,
    fontSize: 20,
  },
  clearButton: {
    width: 21,
    height: 21,
    marginTop: 2,
  },
  buttonBox: {
    marginTop: 82,
    justifyContent: "space-between",
    height: 112,
  },
});

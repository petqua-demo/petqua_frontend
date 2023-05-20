import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Pressable, Keyboard } from "react-native";
import useCachedResources from "../../useCachedResources";
import { useState } from "react";

import Text from "../../components/DefaultText";
import BlueButton from "../../components/BlueButton";
import InputBox from "../../components/InputBox";
import palette from "../../styles/ColorPalette";

export default function Join({ navigation }: any) {
  const isLoaded = useCachedResources();
  const [phoneNum, setPhoneNum] = useState("");
  const [verificationNum, setVerificationNum] = useState("");

  if (isLoaded) {
    return (
      <Pressable style={{ flex: 1 }} onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
          <StatusBar style="auto" />
          <View style={styles.content}>
            <Text style={styles.command}>휴대폰번호를{"\n"}입력해주세요</Text>
            <View style={styles.inputItem}>
              <Text style={styles.textInputTitle}>인증번호</Text>
              <InputBox
                placeholder="인증번호"
                keyboardType="numeric"
                returnKeyType="done"
                value={verificationNum}
                onChangeText={(verificationNum: any) =>
                  setVerificationNum(verificationNum)
                }
                clearText={() => setVerificationNum("")}
              />
              {/* clear button 눌렀을 때는 키보드 안 사라지게 하는 코드 추가하기 */}
            </View>
            <View style={styles.inputItem}>
              <Text style={styles.textInputTitle}>휴대폰번호</Text>
              <InputBox
                placeholder="휴대폰번호"
                keyboardType="numeric"
                returnKeyType="done"
                value={phoneNum}
                onChangeText={(phoneNum: any) => setPhoneNum(phoneNum)}
                clearText={() => setPhoneNum("")}
              />
            </View>
          </View>
          <View style={styles.buttonBox}>
            <BlueButton
              title="인증번호 받기"
              onPress={() => {}}
              buttonStyle={{ width: "100%", height: 50 }}
            ></BlueButton>
          </View>
        </View>
      </Pressable>
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
    flex: 1,
  },
  command: {
    fontSize: 28,
    marginTop: 130,
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
  buttonBox: {
    justifyContent: "flex-end",
    marginBottom: 50,
    marginHorizontal: 24,
  },
});

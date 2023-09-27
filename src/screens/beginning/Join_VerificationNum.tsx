import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Pressable, Keyboard } from "react-native";
import useCachedResources from "../../useCachedResources";
import { useState } from "react";

import Text from "../../components/DefaultText";
import BoldText from "../../components/BoldText";
import BlueButton from "../../components/BlueButton";
import InputBox from "../../components/InputBox";
import palette from "../../styles/ColorPalette";

// 인증번호 입력 창에서는 핸드폰번호를 다시 입력할 수 있게 하는 버튼이 없어서
// 뒤로가기를 하면 핸드폰번호 입력 창으로 돌아갈 수 있도록 화면 분리함.
export default function Join_VerificationNum({ navigation }: any) {
  const isLoaded = useCachedResources();
  const [verificationNum, setVerificationNum] = useState("");
  const [clickVerifyBtn, setClickVerifyBtn] = useState(false);

  // 휴대폰번호 입력 -> 확인 버튼 클릭 시
  const onClick = () => {};

  if (isLoaded) {
    return (
      <Pressable style={{ flex: 1 }} onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
          <StatusBar style="auto" />
          <View style={styles.content}>
            <Text style={styles.command}>인증번호를{"\n"}입력해주세요</Text>
            <View style={styles.inputItem}>
              {clickVerifyBtn && (
                <Text style={styles.textInputTitle}>인증번호</Text>
              )}
              <InputBox
                placeholder="4자리 숫자"
                keyboardType="numeric"
                maxLength={4}
                returnKeyType="done"
                value={verificationNum}
                onChangeText={(phoneNum: any) => setVerificationNum(phoneNum)}
                clearText={() => setVerificationNum("")}
              />
            </View>
            <BoldText style={styles.resendBtn}>인증 문자가 안 와요</BoldText>
          </View>
          <View style={styles.buttonBox}>
            <BlueButton
              title="확인"
              onPress={() => onClick()}
              buttonStyle={{ width: "100%", height: 50 }}
            />
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
    color: palette.gray2,
  },
  resendBtn: {
    paddingHorizontal: 15,
    paddingVertical: 9,
    color: palette.gray3,
    fontSize: 14,
    backgroundColor: "#F2F3F3",
    borderRadius: 5,
  },
  buttonBox: {
    justifyContent: "flex-end",
    marginBottom: 50,
    marginHorizontal: 24,
  },
});

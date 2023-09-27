import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Pressable, Keyboard } from "react-native";
import useCachedResources from "../../useCachedResources";
import { useState } from "react";

import Text from "../../components/DefaultText";
import BlueButton from "../../components/BlueButton";
import InputBox from "../../components/InputBox";
import palette from "../../styles/ColorPalette";

// 인증번호 입력 창에서는 핸드폰번호를 다시 입력할 수 있게 하는 버튼이 없어서
// 뒤로가기를 하면 핸드폰번호 입력 창으로 돌아갈 수 있도록 화면 분리함.
export default function Join_PhoneNum({ navigation }: any) {
  const isLoaded = useCachedResources();
  const [phoneNum, setPhoneNum] = useState("");
  const [clickVerifyBtn, setClickVerifyBtn] = useState(false);

  // 휴대폰번호 입력 -> 확인 버튼 클릭 시
  const onClick = () => {};

  if (isLoaded) {
    return (
      <Pressable style={{ flex: 1 }} onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
          <StatusBar style="auto" />
          <View style={styles.content}>
            <Text style={styles.command}>휴대폰 번호를{"\n"}입력해주세요</Text>
            <View style={styles.inputItem}>
              {phoneNum != "" ? (
                <Text style={styles.textInputTitle}>휴대폰번호</Text>
              ) : (
                // 입력칸 위 "휴대폰 번호" 글자 생성 시 입력칸 밀리는 현상 방지, 미리 공간 할당하기
                <Text style={styles.textInputTitle2}></Text>
              )}
              <InputBox
                placeholder="휴대폰번호"
                keyboardType="numeric"
                maxLength={13}
                returnKeyType="done"
                value={phoneNum}
                onChangeText={(value: any) => setPhoneNum(value)}
                clearText={() => setPhoneNum("")}
              />
            </View>
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
    marginBottom: 20,
  },
  inputItem: {
    marginTop: 41,
  },
  textInputTitle: {
    marginBottom: 13,
    fontSize: 12,
    color: palette.gray2,
  },
  textInputTitle2: {
    width: 0,
    marginBottom: 13,
    fontSize: 12,
    color: palette.gray2,
  },
  buttonBox: {
    justifyContent: "flex-end",
    marginBottom: 50,
    marginHorizontal: 24,
  },
});

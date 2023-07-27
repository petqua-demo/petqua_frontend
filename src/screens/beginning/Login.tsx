import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Pressable, Keyboard } from "react-native";
import useCachedResources from "../../useCachedResources";
import { useState } from "react";

import Text from "../../components/DefaultText";
import BlueButton from "../../components/BlueButton";
import BlueBorderButton from "../../components/BlueBorderButton";
import BoldText from "../../components/BoldText";
import InputBox from "../../components/InputBox";

export default function Login({ navigation }: any) {
  const isLoaded = useCachedResources();
  const [phoneNum, setPhoneNum] = useState("");

  if (isLoaded) {
    return (
      <Pressable style={{ flex: 1 }} onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
          <StatusBar style="auto" />
          <View style={styles.content}>
            {/* 페이지 제목 */}
            <BoldText style={styles.subtitle}>로그인</BoldText>
            {/* 안내 문구 */}
            <Text style={styles.command}>휴대폰번호를{"\n"}입력해주세요</Text>
            {/* 휴대폰 번호 입력 칸 */}
            <View style={styles.inputItem}>
              <InputBox
                placeholder="휴대폰번호"
                keyboardType="numeric"
                returnKeyType="done"
                value={phoneNum}
                onChangeText={(phoneNum: any) => setPhoneNum(phoneNum)}
                clearText={() => setPhoneNum("")}
              />
            </View>
            {/* 로그인, 회원가입 버튼 */}
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
  buttonBox: {
    marginTop: 82,
    justifyContent: "space-between",
    height: 112,
  },
});

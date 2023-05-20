import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Pressable, Keyboard } from "react-native";
import useCachedResources from "../../useCachedResources";
import { useState } from "react";

import Text from "../../components/DefaultText";
import BlueButton from "../../components/BlueButton";
import BlueBorderButton from "../../components/BlueBorderButton";
import BoldText from "../../components/BoldText";
import InputBox from "../../components/InputBox";

export default function App({ navigation }: any) {
  const isLoaded = useCachedResources();
  const [phoneNum, setPhoneNum] = useState("");

  if (isLoaded) {
    return (
      <Pressable style={{ flex: 1 }} onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
          <StatusBar style="auto" />
          <View style={styles.content}>
            <BoldText style={styles.subtitle}>로그인</BoldText>
            <Text style={styles.command}>휴대폰번호를{"\n"}입력해주세요</Text>
            <View style={styles.inputItem}>
              {/* <Text style={styles.textInputTitle}>휴대폰번호</Text> */}
              <InputBox
                placeholder="휴대폰번호"
                keyboardType="numeric"
                returnKeyType="done"
                value={phoneNum}
                onChangeText={(phoneNum: any) => setPhoneNum(phoneNum)}
              />
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
  // textInputTitle: {
  //   marginBottom: 13,
  //   fontSize: 12,
  //   color: palette.lightGray,
  // },
  buttonBox: {
    marginTop: 82,
    justifyContent: "space-between",
    height: 112,
  },
});

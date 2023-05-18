import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, TextInput } from "react-native";
import useCachedResources from "../../useCachedResources";
import { useState } from "react";

import Text from "../../components/DefaultText";
import BlueButton from "../../components/BlueButton";
import BlueBorderButton from "../../components/BlueBorderButton";
import BoldText from "../../components/BoldText";
import palette from "../../styles/ColorPalette";

export default function App() {
  const isLoaded = useCachedResources();
  const [phoneNum, setPhoneNum] = useState("");

  if (isLoaded) {
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <StatusBar style="auto" />
          <BoldText style={styles.subtitle}>로그인</BoldText>
          <Text style={{ fontSize: 28, marginTop: 40, lineHeight: 40 }}>
            휴대폰 번호를{"\n"}입력해주세요
          </Text>
          <TextInput
            style={styles.inputBox}
            onChangeText={(text) => setPhoneNum(text)}
            placeholder="휴대폰 번호"
            clearButtonMode="while-editing"
          ></TextInput>
          <View style={styles.buttonBox}>
            <BlueButton
              title="로그인"
              onPress={() => {}}
              buttonStyle={{ width: "100%", height: 50 }}
            ></BlueButton>
            <BlueBorderButton
              title="회원가입"
              onPress={() => {}}
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
  subtitle: {
    fontSize: 24,
    marginTop: 70,
  },
  inputBox: {
    marginTop: 70,
    fontSize: 20,
    paddingBottom: 12,
    borderBottomWidth: 2,
    borderBottomColor: palette.mainColor,
  },
  buttonBox: {
    marginTop: 82,
    justifyContent: "space-between",
    height: 112,
  },
});

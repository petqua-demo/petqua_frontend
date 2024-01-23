import { StyleSheet, View, StatusBar } from "react-native";
import useCachedResources from "../../useCachedResources";
import { useState } from "react";

import Text from "../../components/DefaultText";
import BlueButton from "../../components/BlueButton";
import BlueBorderButton from "../../components/BlueBorderButton";
import BoldText from "../../components/BoldText";
import InputBox from "../../components/InputBox";
import { useNavigation } from "@react-navigation/native";

export default function Login() {
  const navigation = useNavigation<any>();
  const isLoaded = useCachedResources();
  const [phoneNum, setPhoneNum] = useState("");

  if (isLoaded) {
    return (
      <View style={styles.container}>
        <StatusBar />
        <View style={styles.content}>
          <BoldText style={styles.title}>로그인</BoldText>
          <Text style={styles.subTitle}>휴대폰번호를{"\n"}입력해주세요</Text>

          <View style={styles.inputContainer}>
            <InputBox
              placeholder="휴대폰번호"
              keyboardType="numeric"
              returnKeyType="done"
              value={phoneNum}
              onChangeText={(phoneNum: any) => setPhoneNum(phoneNum)}
              clearText={() => setPhoneNum("")}
            />
          </View>

          <View style={styles.buttonBox}>
            <BlueButton
              title="로그인"
              onPress={() => navigation.navigate("BottomTabNav")}
            ></BlueButton>
            <BlueBorderButton
              onPress={() => navigation.navigate("Join")}
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
    paddingTop: 80,
    backgroundColor: "#fff",
  },
  content: {
    marginHorizontal: 24,
  },
  title: {
    fontSize: 28,
  },
  subTitle: {
    fontSize: 24,
    marginTop: 40,
    lineHeight: 40,
    marginBottom: 28,
  },
  inputContainer: {
    marginTop: 40,
  },
  buttonBox: {
    marginTop: 80,
    justifyContent: "space-between",
    height: 112,
  },
});

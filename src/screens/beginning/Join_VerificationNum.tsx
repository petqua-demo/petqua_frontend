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
  const [displayInputTitle, setDisplayInputTitle] = useState(false);

  // 인증번호 textInput에 placeholder로 들어갈 텍스트
  const placeholderText = {
    defaultText: "4자리 숫자",
    warningText: "잘못된 인증번호입니다.",
  };

  const [placeholder, setPlaceholder] = useState(placeholderText.defaultText);
  const [placeholderTextColor, setPlaceholderTextColor] = useState(
    palette.mainGray
  );
  // 인증번호 재전송 modal창 띄울 것인지 boolean 값
  const [displayModal, setDisplayModal] = useState(false);

  const onChangeInputText = (value: any) => {
    setVerificationNum(value);
  };

  // 인증번호 입력 -> 확인 버튼 클릭 시
  const onClick = () => {
    console.log(verificationNum);
    // 인증번호 일치하는지 확인
    // 아직 인증번호 생성 방법에 대해 백엔드와 논의된 바 x.
    // 임시로 4자리 숫자이기만 하면 넘어가도록 해놓음.
    let rightNumber = false;
    verificationNum.length == 4 ? (rightNumber = true) : (rightNumber = false);
    console.log(rightNumber);
    // 인증번호가 틀리면 경고 메시지 띄우기
    if (!rightNumber) {
      setVerificationNum(""); // 번호 지우기
      setPlaceholder(placeholderText.warningText);
      setPlaceholderTextColor(palette.warning);
    } else {
      // 인증번호가 올바르면 가입 완료
      navigation.navigate("Welcome");
    }
  };

  const onFocusTextInput = () => {
    // textInput에 onFocus되면 placeholder 없애기
    setPlaceholder("");
    // 한 번 textInput에 onFocus되고 나면 계속 InputTitle 띄워놓기
    setDisplayInputTitle(true);
  };

  if (isLoaded) {
    return (
      <Pressable style={{ flex: 1 }} onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
          <StatusBar style="auto" />
          <View style={styles.content}>
            <Text style={styles.command}>인증번호를{"\n"}입력해주세요</Text>
            <View style={styles.inputItem}>
              {displayInputTitle ? (
                <Text style={styles.textInputTitle}>인증번호</Text>
              ) : (
                // 입력칸 위 "인증 번호" 글자 생성 시 입력칸 밀리는 현상 방지, 미리 공간 할당하기
                <Text style={styles.textInputTitle2}></Text>
              )}
              <InputBox
                placeholder={placeholder}
                placeholderTextColor={placeholderTextColor}
                keyboardType="numeric"
                maxLength={4}
                returnKeyType="done"
                value={verificationNum}
                onChangeText={(value: any) => onChangeInputText(value)}
                clearText={() => setVerificationNum("")}
                onFocus={onFocusTextInput}
              />
            </View>
            <View style={styles.resendRequestContainer}>
              <BoldText style={styles.resendRequest}>
                인증 문자가 안 와요
              </BoldText>
            </View>
          </View>
          <View style={styles.buttonBox}>
            <BlueButton
              title="확인"
              onPress={() => onClick()}
              buttonStyle={{ width: "100%", height: 50, borderRadius: 0 }}
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
    color: palette.mainGray,
  },
  resendRequestContainer: {
    alignSelf: "flex-start",
    marginTop: 24,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: "#F2F3F3",
    borderRadius: 5,
  },
  resendRequest: {
    fontSize: 14,
    color: "#777777",
  },
  buttonBox: {
    justifyContent: "flex-end",
  },
});

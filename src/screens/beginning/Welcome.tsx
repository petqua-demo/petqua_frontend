import { StyleSheet, View } from "react-native";
import { useEffect } from "react";

import Text from "../../components/DefaultText";
import ExtraBoldText from "../../components/ExtraBoldText";
import palette from "../../styles/ColorPalette";

const Welcome = ({ navigation }: any) => {
  useEffect(() => {
    setTimeout(() => {
      // 1초 지나면 홈 화면으로 넘어가기
      // stack에 쌓여있던 beggining 폴더 페이지들 clear
      navigation.reset({ routes: [{ name: "BottomTabNav" }] });
    }, 1000);
  });

  return (
    <View style={styles.container}>
      <Text style={styles.join}>회원가입 완료!</Text>
      <ExtraBoldText style={styles.welcome}>
        펫쿠아에 오신 걸{"\n"}환영합니다!
      </ExtraBoldText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  join: {
    fontSize: 16,
    color: palette.mainDark,
    marginBottom: 16,
  },
  welcome: {
    fontSize: 34,
    color: palette.mainBlue,
    textAlign: "center",
  },
});

export default Welcome;

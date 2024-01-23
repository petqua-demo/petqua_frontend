import { StyleSheet, View, Image } from "react-native";
import { useEffect } from "react";

import ExtraBoldText from "../../components/ExtraBoldText";
import palette from "../../styles/ColorPalette";
import images from "../../enum/Images";

const Welcome = ({ navigation }: any) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.reset({ routes: [{ name: "Login" }] });
    }, 1000);
  });

  return (
    <View style={styles.container}>
      <Image source={images.logo} style={{ width: 120, height: 120 }} />
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
    gap: 20,
  },
  welcome: {
    fontSize: 32,
    color: palette.mainBlue,
    textAlign: "center",
  },
});

export default Welcome;

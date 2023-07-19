import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  Pressable,
  Keyboard,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import useCachedResources from "../../useCachedResources";
import { useState } from "react";

import Text from "../../components/DefaultText";
import BoldText from "../../components/BoldText";
import palette from "../../styles/ColorPalette";
import images from "../../components/Images";

export default function FishPosting({ navigation }: any) {
  const isLoaded = useCachedResources();

  if (isLoaded) {
    return (
      <Pressable style={{ flex: 1 }} onPress={() => Keyboard.dismiss()}>
        <KeyboardAvoidingView
          style={styles.container}
          behavior={Platform.select({ ios: "padding" })}
        >
          <StatusBar style="auto" />
          <View style={styles.header}>
            <Pressable>
              <Image
                source={images.closeButtonIcon}
                style={{ width: 15, height: 15, marginLeft: 24 }}
              />
            </Pressable>
            <View
              style={{
                width: "100%",
                position: "absolute",
                alignItems: "center",
              }}
            >
              <BoldText style={{ fontSize: 16, color: palette.gray3 }}>
                마이페이지
              </BoldText>
            </View>
            <Pressable>
              <Image
                source={images.myPageSettingIcon}
                style={{ width: 23, height: 24, marginRight: 21 }}
              />
            </Pressable>
          </View>
          <ScrollView style={styles.content}>
            {/* 프로필 */}
            <View style={styles.profileInfo}></View>
            {/* 등록된 어항 */}
            <View>
              <BoldText style={{ fontSize: 14, color: palette.gray4 }}>
                등록된 어항
              </BoldText>
              <ScrollView style={styles.myFishList}></ScrollView>
            </View>
            {/* 커뮤니티 목록 */}
            <View>
              <BoldText style={{ fontSize: 14, color: palette.gray4 }}>
                커뮤니티 목록
              </BoldText>
              {/* 커뮤니티 목록 컴포넌트로 만들어 넣기 */}
            </View>
            {/* 봉달목록 */}
            <View></View>
            {/* 입양, 분양 내역 */}
            <View></View>
          </ScrollView>
        </KeyboardAvoidingView>
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
  header: {
    flexDirection: "row",
    height: 50,
    marginTop: 55,
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomColor: palette.gray4,
    borderBottomWidth: 0.5,
  },
  content: {
    marginHorizontal: 15,
    marginTop: 50,
  },
  profileInfo: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
  },
  myFishList: {
    flexDirection: "row",
  },
});

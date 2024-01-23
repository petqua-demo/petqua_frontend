import {
  StyleSheet,
  View,
  Pressable,
  Keyboard,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
} from "react-native";
import useCachedResources from "../../useCachedResources";
import { useState } from "react";

import Text from "../../components/DefaultText";
import BoldText from "../../components/BoldText";
import palette from "../../styles/ColorPalette";
import TextInput from "../../components/RegularTextInput";
import BlueButton from "../../components/BlueButton";
import images from "../../enum/Images";
import SemiBoldText from "../../components/SemiBoldText";

export default function CommunityPosting({ navigation }: any) {
  const isLoaded = useCachedResources();
  const [category, setCategory] = useState("");

  if (isLoaded) {
    return (
      <View style={styles.container}>
        <StatusBar />
        {/* 상단 바 (닫기 버튼, 게시판 선택) */}
        <View
          style={{
            ...styles.header,
            alignItems: "center",
            padding: 14,
          }}
        >
          <Pressable onPress={() => navigation.goBack()}>
            <Image
              source={images.closeButtonIcon}
              style={{ width: 24, height: 24 }}
            />
          </Pressable>
          {/* 게시판 선택 */}
          <Pressable style={styles.categorySelection}>
            <SemiBoldText style={{ fontSize: 18, color: palette.mainDark }}>
              게시판선택
            </SemiBoldText>
            <Image
              source={images.dropDownButtonIcon}
              style={{ width: 12, height: 6, marginLeft: 10 }}
            />
          </Pressable>
          <View style={{ width: 24, height: 24 }} />
        </View>
        <ScrollView style={{ marginBottom: 70, marginHorizontal: 14 }}>
          {/* ****************************** 카테고리별 상단에 띄워야 할 것들 추가하기 */}
          {/* 제목 */}
          <View style={styles.header}>
            <BoldText
              style={{ fontSize: 16, color: palette.gray2, marginRight: 28 }}
            >
              제목
            </BoldText>
            <TextInput
              style={styles.textInput}
              placeholder="제목을 입력해주세요"
              placeholderTextColor={palette.mainGray}
            />
          </View>
          {/* 사진 가져오기 */}
          <Pressable style={styles.takePhotoBtn}>
            <Image
              source={images.takePhotoIcon}
              style={{ width: 32, height: 28 }}
            />
            <Text style={styles.photoNum}>
              0/10
              {/* ************************************* 사진 개수대로 숫자 바뀌게 만들기 */}
            </Text>
          </Pressable>
          {/* 선택된 사진들 */}
          <View style={{ marginBottom: 16 }}>
            {/* 컴포넌트로 사진 목록 따로 만들어 넣기 */}
          </View>
          {/* 내용 */}
          <TextInput
            style={styles.textInput}
            placeholder="내용을 입력해주세요"
            placeholderTextColor={palette.mainGray}
            multiline={true}
          />
        </ScrollView>
        {/* 등록하기 버튼 */}
        <View style={{ padding: 12 }}>
          <BlueButton
            title="등록하기"
            onPress={() => {}}
            buttonStyle={{
              width: "100%",
              height: 50,
              position: "absolute",
              bottom: 45,
            }}
          />
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
  header: {
    flexDirection: "row",
    height: 50,
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomColor: palette.gray2,
    borderBottomWidth: 0.5,
  },
  categorySelection: {
    flexDirection: "row",
    // width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    color: palette.mainDark,
  },
  takePhotoBtn: {
    marginTop: 16,
    marginBottom: 8,
    width: 60,
    height: 60,
    paddingTop: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: palette.skyBlue,
    alignItems: "center",
    justifyContent: "center",
  },
  photoNum: {
    fontSize: 10,
    color: palette.skyBlue,
    marginTop: 4,
  },
});

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
import TextInput from "../../components/RegularTextInput";
import BlueButton from "../../components/BlueButton";
import CategoryButton from "../../components/SellingCategoryButton";
import images from "../../enum/Images";
import Categories from "../../enum/DiaryCategories";

export default function DiaryPosting({ navigation }: any) {
  const isLoaded = useCachedResources();
  const [category, setCategory] = useState("");

  if (isLoaded) {
    return (
      <Pressable style={{ flex: 1 }} onPress={() => Keyboard.dismiss()}>
        <KeyboardAvoidingView
          style={styles.container}
          behavior={Platform.select({ ios: "padding" })}
        >
          <ScrollView style={{ marginBottom: 70 }}>
            <StatusBar style="auto" />
            <View style={styles.header}>
              {/* 닫기 버튼 */}
              <Pressable>
                <Image
                  source={images.closeButtonIcon}
                  style={{ width: 15, height: 15, marginLeft: 24 }}
                />
              </Pressable>
              {/* 페이지 제목.
              닫기 버튼과 관계 없이 화면 중앙에 배치하기 위해 View로 감쌈. */}
              <View
                style={{
                  width: "100%",
                  position: "absolute",
                  alignItems: "center",
                }}
              >
                <BoldText style={{ fontSize: 16 }}>어항 일기</BoldText>
              </View>
            </View>
            <ScrollView style={styles.content}>
              {/* 사진 */}
              <View>
                <View style={{ flexDirection: "row" }}>
                  <BoldText style={styles.subTitle}>사진</BoldText>
                  <Text
                    style={{
                      color: palette.body1,
                      fontSize: 16,
                      marginLeft: 5,
                    }}
                  >
                    (선택)
                  </Text>
                </View>
                {/* 피그마에 이미지 목록들 어떻게 띄울지 제시되어있지 않아서 일단 View로 임시 처리 */}
                <View style={styles.photoList}>
                  <Image
                    source={images.takePhotoIcon}
                    style={{ width: 54, height: 54, marginTop: 23 }}
                  />
                </View>
              </View>
              {/* 글 제목 */}
              <View style={{ marginTop: 60 }}>
                <BoldText style={styles.subTitle}>글 제목</BoldText>
                <TextInput
                  style={styles.textInput}
                  placeholder="제목을 입력해주세요"
                  placeholderTextColor={palette.gray3}
                  // value={value}
                />
              </View>
              {/* 카테고리 입력 */}
              <View style={{ marginTop: 60 }}>
                <BoldText style={styles.subTitle}>카테고리 입력</BoldText>
                <View style={styles.categoryContainer}>
                  <CategoryButton
                    title={Categories.disease}
                    onPress={() => setCategory(Categories.disease)}
                  />
                  <CategoryButton
                    title={Categories.medicine}
                    onPress={() => setCategory(Categories.medicine)}
                  />
                  <CategoryButton
                    title={Categories.changeWater}
                    onPress={() => setCategory(Categories.changeWater)}
                  />
                  <CategoryButton
                    title={Categories.buyingGoods}
                    onPress={() => setCategory(Categories.buyingGoods)}
                  />
                  <CategoryButton
                    title={Categories.buyingFish}
                    onPress={() => setCategory(Categories.buyingFish)}
                  />
                </View>
              </View>
              {/* 상세글 입력 */}
              <View style={{ marginTop: 40, marginBottom: 70 }}>
                <BoldText style={styles.subTitle}>상세글 입력</BoldText>
                <TextInput
                  style={styles.postingDetailInput}
                  multiline={true}
                  placeholder="오늘 나의 어항상태는 어떤가요 ?"
                  placeholderTextColor={palette.gray3}
                />
              </View>
            </ScrollView>
          </ScrollView>
          {/* 등록하기 버튼 */}
          <View style={{ marginHorizontal: 24 }}>
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
    alignItems: "center",
    borderBottomColor: palette.gray2,
    borderBottomWidth: 1,
  },
  content: {
    marginHorizontal: 24,
    marginTop: 38,
  },
  subTitle: {
    color: palette.gray3,
    fontSize: 16,
  },
  photoList: {},
  textInput: {
    flex: 1,
    fontSize: 16,
    height: 48,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#D9D9D9",
    paddingHorizontal: 15,
    marginTop: 11,
  },
  categoryContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 13,
  },
  postingDetailInput: {
    flex: 1,
    fontSize: 16,
    height: 330,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#D9D9D9",
    paddingHorizontal: 15,
    // textInput이 multiline 모드일 때 paddingVertical은 적용되지 않음. paddingTop/Bottom 각각 값 넣어 해결
    paddingTop: 12,
    paddingBottom: 12,
    marginTop: 11,
    textAlignVertical: "top",
  },
});

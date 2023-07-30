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
import { CheckBox } from "react-native-elements";
import { useState } from "react";

import Text from "../../components/DefaultText";
import BoldText from "../../components/BoldText";
import MediumText from "../../components/MediumText";
import palette from "../../styles/ColorPalette";
import TextInput from "../../components/RegularTextInput";
import CategoryButton from "../../components/SellingCategoryButton";
import BlueButton from "../../components/BlueButton";
import images from "../../enum/Images";
import Categories from "../../enum/GoodsCategories";

export default function GoodsPosting({ navigation }: any) {
  const isLoaded = useCachedResources();
  const [checkBox, setCheckBox] = useState(false);
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
                <BoldText style={{ fontSize: 16 }}>용품 입/분양 등록</BoldText>
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
              <View style={{ marginTop: 38 }}>
                <BoldText style={styles.subTitle}>글 제목</BoldText>
                <TextInput
                  style={styles.textInput}
                  placeholder="제목을 입력해주세요"
                  placeholderTextColor={palette.gray3}
                  // value={value}
                />
              </View>
              {/* 분양 가격 */}
              <View style={{ marginTop: 44 }}>
                <BoldText style={styles.subTitle}>분양 가격</BoldText>
                <View style={styles.priceContainer}>
                  <TextInput
                    style={{ fontSize: 20, flex: 0.8 }}
                    // 백슬래시 대신 원화 표기방법 알아보기
                    placeholder="$"
                    placeholderTextColor={palette.gray2}
                    keyboardType="numeric"
                    returnKeyType="done"
                  />
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    {/* 책임분양 체크박스 */}
                    <CheckBox
                      checkedIcon={
                        // 체크한 경우
                        <Image
                          source={images.selectedCheckbox}
                          style={{ width: 21, height: 21 }}
                        />
                      }
                      uncheckedIcon={
                        // 체크하지 않은 경우
                        <Image
                          source={images.notSelectedCheckbox}
                          style={{ width: 21, height: 21 }}
                        />
                      }
                      checked={checkBox}
                      onPress={() => setCheckBox(checkBox ? false : true)}
                      containerStyle={{ marginRight: 0, marginVertical: -10 }}
                    />
                    <Text style={{ fontSize: 14, color: palette.gray4 }}>
                      나눔
                    </Text>
                  </View>
                </View>
              </View>
              {/* 카테고리 입력 */}
              <View style={{ marginTop: 38 }}>
                <BoldText style={styles.subTitle}>카테고리 입력</BoldText>
                <View style={styles.categoryContainer}>
                  <CategoryButton
                    title={Categories.waterTank}
                    onPress={() => setCategory(Categories.waterTank)}
                  />
                  <CategoryButton
                    title={Categories.filter}
                    onPress={() => setCategory(Categories.filter)}
                  />
                  <CategoryButton
                    title={Categories.heater}
                    onPress={() => setCategory(Categories.heater)}
                  />
                  <CategoryButton
                    title={Categories.light}
                    onPress={() => setCategory(Categories.light)}
                  />
                  <CategoryButton
                    title={Categories.flooring}
                    onPress={() => setCategory(Categories.flooring)}
                  />
                  <CategoryButton
                    title={Categories.hideout}
                    onPress={() => setCategory(Categories.hideout)}
                  />
                  <CategoryButton
                    title={Categories.ornament}
                    onPress={() => setCategory(Categories.ornament)}
                  />
                  <CategoryButton
                    title={Categories.feed}
                    onPress={() => setCategory(Categories.feed)}
                  />
                  <CategoryButton
                    title={Categories.waterQuality}
                    onPress={() => setCategory(Categories.waterQuality)}
                  />
                  <CategoryButton
                    title={Categories.filterMedia}
                    onPress={() => setCategory(Categories.filterMedia)}
                  />
                  <CategoryButton
                    title={Categories.other}
                    onPress={() => setCategory(Categories.other)}
                  />
                </View>
              </View>
              {/* 상세글 입력 */}
              <View style={{ marginTop: 31, marginBottom: 70 }}>
                <BoldText style={styles.subTitle}>상세글 입력</BoldText>
                <TextInput style={styles.postingDetailInput} multiline={true} />
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
  priceContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    borderBottomColor: "#DBDBDB",
    borderBottomWidth: 0.5,
    paddingVertical: 11,
    marginTop: 13,
    justifyContent: "space-between",
  },
  categoryContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 13,
  },
  category: {
    width: 67,
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

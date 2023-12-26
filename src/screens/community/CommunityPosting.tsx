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
  Modal,
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
import CommunityTitle from "../../enum/CommunityPostingCategoriesTitle";
import Questions from "../../enum/PostingQnA/Questions";
import DiseaseA from "../../enum/PostingQnA/DiseaseA";
import RaiseA from "../../enum/PostingQnA/RaiseA";
import WaterManagementA from "../../enum/PostingQnA/WaterManagementA";
import GoodsA from "../../enum/PostingQnA/GoodsA";
import SpeciesA from "../../enum/PostingQnA/SpeciesA";
import FreeA from "../../enum/PostingQnA/FreeA";
import SubCategoryList from "../../components/PostingAnswers/SubCategoryList";

export default function CommunityPosting({ navigation }: any) {
  const isLoaded = useCachedResources();
  const [category, setCategory] = useState("게시판 선택");
  const [question, setQuestion] = useState("");
  const [subCategories, setSubCategories] = useState(DiseaseA);

  const onToggle = (id: any) => (e: any) => {
    const selected = subCategories.map((sub) =>
      sub.id === id ? { ...sub, selected: !sub.selected } : sub
    );
    setSubCategories(selected);
  };

  const [displayModal, setDisplayModal] = useState(false); // 카테고리 선택 모달창 띄울 것인지 여부

  const changeCategory = (newCategory: any) => {
    setCategory(newCategory);
    changeQnA(newCategory);
    setDisplayModal(false);
  };

  const changeQnA = (newCategory: String) => {
    switch (newCategory) {
      case CommunityTitle.disease:
        setQuestion(Questions.diseaseQ);
        setSubCategories(DiseaseA);
        break;
      case CommunityTitle.waterManagement:
        setQuestion(Questions.waterManagementQ);
        setSubCategories(WaterManagementA);
        break;
      case CommunityTitle.raise:
        setQuestion(Questions.raiseQ);
        setSubCategories(RaiseA);
        break;
      case CommunityTitle.goods:
        setQuestion(Questions.goodsQ);
        setSubCategories(GoodsA);
        break;
      case CommunityTitle.species:
        setQuestion(Questions.speciesQ);
        setSubCategories(SpeciesA);
        break;
      case CommunityTitle.free:
        setQuestion(Questions.freeQ);
        setSubCategories(FreeA);
        break;
    }
  };

  const finish = () => {};

  if (isLoaded) {
    return (
      <Pressable style={{ flex: 1 }} onPress={() => Keyboard.dismiss()}>
        <KeyboardAvoidingView
          style={styles.container}
          behavior={Platform.select({ ios: "padding" })}
        >
          <StatusBar style="auto" />
          {/* 모달 뒷배경 어둡게 처리하는 것 때문에 이중으로 모달 사용.
          슬라이드 모달 안에 View로 배경 처리하면 어두운 배경이 같이 슬라이딩됨.  */}
          <Modal
            transparent={true}
            visible={displayModal}
            onRequestClose={() => {
              setDisplayModal(!displayModal);
            }}
          >
            {/* 반투명 배경 */}
            <View
              style={styles.translucentBackground}
              onTouchEnd={() => setDisplayModal(false)} // 모달 바깥 부분 클릭 시 모달 닫기
            >
              {/* 카테고리 선택 모달 */}
              <Modal
                animationType="fade"
                transparent={true}
                visible={displayModal}
              >
                <View
                  style={styles.modalContainer}
                  onTouchEnd={(e) => e.stopPropagation()} // 이벤트 버블링 방지 (모달 클릭해도 모달 닫히는 현상 방지)
                >
                  <View
                    style={[styles.categoryTitleBorder, { borderTopWidth: 0 }]}
                  >
                    <Text style={{ fontSize: 20, color: palette.mainGray }}>
                      게시판 선택
                    </Text>
                  </View>
                  <View
                    style={styles.categoryTitleBorder}
                    onTouchEnd={() => changeCategory(CommunityTitle.disease)}
                  >
                    <Text style={styles.categoryTitle}>
                      {CommunityTitle.disease}
                    </Text>
                  </View>
                  <View
                    style={styles.categoryTitleBorder}
                    onTouchEnd={() =>
                      changeCategory(CommunityTitle.waterManagement)
                    }
                  >
                    <Text style={styles.categoryTitle}>
                      {CommunityTitle.waterManagement}
                    </Text>
                  </View>
                  <View
                    style={styles.categoryTitleBorder}
                    onTouchEnd={() => changeCategory(CommunityTitle.raise)}
                  >
                    <Text style={styles.categoryTitle}>
                      {CommunityTitle.raise}
                    </Text>
                  </View>
                  <View
                    style={styles.categoryTitleBorder}
                    onTouchEnd={() => changeCategory(CommunityTitle.goods)}
                  >
                    <Text style={styles.categoryTitle}>
                      {CommunityTitle.goods}
                    </Text>
                  </View>
                  <View
                    style={styles.categoryTitleBorder}
                    onTouchEnd={() => changeCategory(CommunityTitle.species)}
                  >
                    <Text style={styles.categoryTitle}>
                      {CommunityTitle.species}
                    </Text>
                  </View>
                  <View
                    style={styles.categoryTitleBorder}
                    onTouchEnd={() => changeCategory(CommunityTitle.free)}
                  >
                    <Text style={styles.categoryTitle}>
                      {CommunityTitle.free}
                    </Text>
                  </View>
                </View>
              </Modal>
            </View>
          </Modal>

          {/* 상단 바 (닫기 버튼, 게시판 선택) */}
          <View
            style={[
              styles.header,
              {
                marginTop: 55,
                paddingHorizontal: 14,
              },
            ]}
          >
            {/* 게시판 선택 */}
            <Pressable style={styles.categorySelection}>
              <SemiBoldText
                style={{ fontSize: 18, color: palette.mainDark }}
                onPress={() => {
                  setDisplayModal(true);
                }}
              >
                {category}
              </SemiBoldText>
              <Image
                source={images.dropDownButtonIcon}
                style={{ width: 12, height: 6, marginLeft: 10 }}
              />
            </Pressable>
            {/* 게시판 선택의 width가 100%로 되어 있어서 x 버튼을 눌러도 게시판 선택이 나오는 문제 생김.
            x 버튼의 레이어를 위로 올려주기 위해 코드 뒤로 빼줌 */}
            {/* 닫기 버튼 */}
            <Pressable onPress={() => navigation.pop()}>
              <Image
                source={images.closeButtonIcon}
                style={{ width: 24, height: 24 }}
              />
            </Pressable>
          </View>
          <ScrollView
            style={{ marginBottom: 100, marginHorizontal: 14 }}
            showsVerticalScrollIndicator={false}
          >
            {/* 카테고리별 상단에 띄우는 질문들 */}
            {/* 카테고리가 선택되었을 때만 띄우기 */}
            {category != "게시판 선택" ? (
              <View style={styles.requestQnAContainer}>
                <Text
                  style={{
                    fontSize: 12,
                    color: palette.gray2,
                    marginBottom: 7,
                  }}
                >
                  {question}
                </Text>
                <SubCategoryList
                  subCategories={subCategories}
                  onToggle={onToggle}
                />
              </View>
            ) : (
              <View></View>
            )}
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
                maxLength={25}
              />
            </View>
            {/* 사진 가져오기 */}
            <Pressable style={styles.takePhotoBtn}>
              <Image
                source={images.takePhotoIcon}
                style={{ width: 58, height: 58 }}
              />
            </Pressable>
            {/* 선택된 사진들 */}
            <View style={{ marginBottom: 16 }}>
              {/* 컴포넌트로 사진 목록 따로 만들어 넣기 */}
            </View>
            {/* 내용 */}
            <TextInput
              style={styles.textInput}
              placeholder={
                "즐거운 물생활을 만들어 나가세요 :)\n타인에게 불쾌감을 주는 글은 제제될 수 있습니다."
              }
              placeholderTextColor={palette.mainGray}
              multiline={true}
              scrollEnabled={false}
            />
          </ScrollView>
          {/* 등록하기 버튼 */}
          <View style={{ marginHorizontal: 14 }} onTouchEnd={finish}>
            <BlueButton
              title="등록하기"
              onPress={() => navigation.navigate("CommunityPostingDetail")}
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
    alignItems: "center",
    borderBottomColor: palette.gray2,
    borderBottomWidth: 0.5,
  },
  categorySelection: {
    flexDirection: "row",
    // 같은 줄의 버튼에 관계없이 중앙 정렬 될 수 있도록 아래와 같이 style 적용.
    width: "100%",
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 14,
    // 상단 바에 들어가는 padding 때문에 왼쪽으로 쏠리는 현상 발생하여
    // marginLeft로 위치 조정. (categorySelection View가 가운데로 오도록)
  },
  requestQnAContainer: {
    paddingTop: 16,
    paddingBottom: 10,
    borderBottomColor: palette.gray2,
    borderBottomWidth: 0.5,
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    color: palette.mainDark,
  },
  takePhotoBtn: {
    marginTop: 16,
    marginBottom: 8,
  },
  photoNum: {
    fontSize: 10,
    color: palette.skyBlue,
    marginTop: 4,
  },

  // Modal 관련 style
  translucentBackground: {
    flex: 1,
    backgroundColor: "#000000",
    opacity: 0.5,
  },
  modalContainer: {
    marginTop: 100,
    marginHorizontal: 30,
    backgroundColor: "#fff",
    borderRadius: 20,
  },
  categoryTitleBorder: {
    width: "100%",
    borderTopColor: "#D3D3D3",
    borderTopWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
  },
  categoryTitle: {
    fontSize: 20,
    color: palette.mainDark,
  },
});

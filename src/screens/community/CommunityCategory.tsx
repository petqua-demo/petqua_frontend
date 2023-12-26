import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  Image,
  SafeAreaView,
  Pressable,
  ScrollView,
} from "react-native";
import useCachedResources from "../../useCachedResources";
import { useCallback, useEffect, useState } from "react";

import SemiBoldText from "../../components/SemiBoldText";
import palette from "../../styles/ColorPalette";
import images from "../../enum/Images";
import CategoriesTitle from "../../enum/CommunityPostingCategoriesTitle";
import CommunityTopTabItem from "../../components/CommunityTopTabItem";
import BestPostingList from "../../components/BestPostingList";
import DiseaseA from "../../enum/PostingQnA/DiseaseA";
import RaiseA from "../../enum/PostingQnA/RaiseA";
import WaterManagementA from "../../enum/PostingQnA/WaterManagementA";
import GoodsA from "../../enum/PostingQnA/GoodsA";
import SpeciesA from "../../enum/PostingQnA/SpeciesA";
import FreeA from "../../enum/PostingQnA/FreeA";
import SubCategoryList from "../../components/PostingAnswers/SubCategoryList";
import allData from "../../enum/PostingData/AllPostingData";
import diseaseData from "../../enum/PostingData/DiseasePostingData";
import goodsData from "../../enum/PostingData/GoodsPostingData";
import waterManagementData from "../../enum/PostingData/WaterManagementPostingData";
import raiseData from "../../enum/PostingData/RaisePostingData";
import freeData from "../../enum/PostingData/FreePostingData";
import speciesData from "../../enum/PostingData/SpeciesPostingData";

const findMatchingTitle = (title: any): string => {
  const selectedTitle = title.title; // 'title' 속성 추출

  console.log("Selected Title:", selectedTitle);

  switch (selectedTitle) {
    case "전체":
      console.log("Matched: 전체");
      return CategoriesTitle.all;
    case "질병":
      console.log("Matched: 질병");
      return CategoriesTitle.disease;
    case "여과/수질":
      console.log("Matched: 여과/수질");
      return CategoriesTitle.waterManagement;
    case "사육/번식":
      console.log("Matched: 사육/번식");
      return CategoriesTitle.raise;
    case "용품/사료":
      console.log("Matched: 용품/사료");
      return CategoriesTitle.goods;
    case "어종":
      console.log("Matched: 어종");
      return CategoriesTitle.species;
    case "자유게시판":
      console.log("Matched: 자유게시판");
      return CategoriesTitle.free;
    default:
      console.log("No match found");
      return CategoriesTitle.all; // 처리되지 않은 경우에 대한 기본값
  }
};

export default function CommunityCategory({ navigation, route }: any) {
  const isLoaded = useCachedResources();

  const selectedTitle = route.params;
  console.log(selectedTitle);

  const [selectedTab, setSelectedTab] = useState(CategoriesTitle.all);
  const [subCategories, setSubCategories] = useState(DiseaseA);

  useEffect(() => {
    setSelectedTab(findMatchingTitle(selectedTitle));
  }, [selectedTitle]);

  console.log(selectedTab);

  const getAllData = () => {
    // 데이터 가져오기
  };
  useEffect(() => {
    getAllData();
  }, []);

  // 각 탭의 전체 데이터
  const [tabData, setTabData] = useState(allData);
  // 현재 불러올 Data 설정하기
  const [selectedData, setSelectedData] = useState(allData);
  // 선택된 subCategory 저장
  const [selectedSubCategories, setSelectedSubCategories] = useState([{}]);

  const onToggle = (id: any) => (e: any) => {
    // subCategory 클릭시 선택/선택 해제 전환
    const selected = subCategories.map((sub) =>
      sub.id === id ? { ...sub, selected: !sub.selected } : sub
    );
    setSubCategories(selected);

    // 선택된 subCategories 저장
    const updatedSelectedSubCategories = selected.filter((sub) => sub.selected);
    setSelectedSubCategories(updatedSelectedSubCategories);

    // 선택한 subCategory에 따라 띄울 데이터 필터링
    if (updatedSelectedSubCategories.length > 0) {
      // 선택된 subCategories가 있는 경우
      const filteredData = tabData.filter((item) => {
        return updatedSelectedSubCategories.some(
          (selectedSubCategory) =>
            item.subCategory === selectedSubCategory.title
        );
      });
      setSelectedData(filteredData);
    } else {
      // 선택된 subCategory가 없는 경우 모든 데이터를 보여줄 수 있도록 설정
      setSelectedData(tabData);
    }
  };

  const keyExtractor = useCallback((item: any) => item.id, []);

  if (isLoaded) {
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.header}>
          <Pressable onPress={() => navigation.pop()}>
            <Image
              source={images.backButtonIcon}
              style={{ width: 24, height: 24 }}
            />
          </Pressable>
          {/* 페이지 제목.
            상단 버튼들과 관계 없이 화면 중앙에 배치하기 위해 View로 감쌈. */}
          <View
            style={{
              width: "100%",
              position: "absolute",
              alignItems: "center",
              paddingBottom: 20,
            }}
          >
            <SemiBoldText style={{ fontSize: 18, color: palette.mainDark }}>
              커뮤니티
            </SemiBoldText>
          </View>
          <View style={{ flexDirection: "row" }}>
            {/* 검색 버튼 */}
            <Pressable>
              <Image
                source={images.topSearchIcon}
                style={{ width: 24, height: 24, marginRight: 16 }}
              />
            </Pressable>
            {/* 물봉 버튼 */}
            <Pressable>
              <Image
                source={images.topShoppingBasketIcon}
                style={{ width: 24, height: 24 }}
              />
            </Pressable>
          </View>
        </View>
        <View>
          {/* 스크롤뷰의 height를 content에 딱 맞게 해주기 위해 View로 감쌈 */}
          {/* 상단 탭 */}
          <SafeAreaView style={{ marginBottom: 160 }}>
            <ScrollView
              style={styles.CommunityTopTabNav}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <CommunityTopTabItem
                title={CategoriesTitle.all}
                onPress={() => {
                  setSelectedTab(CategoriesTitle.all);
                  setTabData(allData);
                  setSelectedData(allData);
                }}
                // changeCategory 메소드에 setSelectedTab을 넣으면 아래 buttonStyle이 적용 안 되는 문제가 있어서 onPress에 넣어줌.
                buttonStyle={
                  selectedTab == CategoriesTitle.all ? styles.selectedTab : {}
                }
                textStyle={
                  selectedTab == CategoriesTitle.all
                    ? styles.selectedTabText
                    : styles.defaultTabItemText
                }
              />
              <CommunityTopTabItem
                title={CategoriesTitle.disease}
                onPress={() => {
                  setSelectedTab(CategoriesTitle.disease);
                  setTabData(diseaseData);
                  setSelectedData(diseaseData);
                  setSubCategories(DiseaseA);
                }}
                buttonStyle={
                  selectedTab == CategoriesTitle.disease
                    ? styles.selectedTab
                    : {}
                }
                textStyle={
                  selectedTab == CategoriesTitle.disease
                    ? styles.selectedTabText
                    : styles.defaultTabItemText
                }
              />
              <CommunityTopTabItem
                title={CategoriesTitle.waterManagement}
                onPress={() => {
                  setSelectedTab(CategoriesTitle.waterManagement);
                  setTabData(waterManagementData);
                  setSelectedData(waterManagementData);
                  setSubCategories(WaterManagementA);
                }}
                buttonStyle={
                  selectedTab == CategoriesTitle.waterManagement
                    ? styles.selectedTab
                    : {}
                }
                textStyle={
                  selectedTab == CategoriesTitle.waterManagement
                    ? styles.selectedTabText
                    : styles.defaultTabItemText
                }
              />
              <CommunityTopTabItem
                title={CategoriesTitle.raise}
                onPress={() => {
                  setSelectedTab(CategoriesTitle.raise);
                  setTabData(raiseData);
                  setSelectedData(raiseData);
                  setSubCategories(RaiseA);
                }}
                buttonStyle={
                  selectedTab == CategoriesTitle.raise ? styles.selectedTab : {}
                }
                textStyle={
                  selectedTab == CategoriesTitle.raise
                    ? styles.selectedTabText
                    : styles.defaultTabItemText
                }
              />
              <CommunityTopTabItem
                title={CategoriesTitle.goods}
                onPress={() => {
                  setSelectedTab(CategoriesTitle.goods);
                  setTabData(goodsData);
                  setSelectedData(goodsData);
                  setSubCategories(GoodsA);
                }}
                buttonStyle={
                  selectedTab == CategoriesTitle.goods ? styles.selectedTab : {}
                }
                textStyle={
                  selectedTab == CategoriesTitle.goods
                    ? styles.selectedTabText
                    : styles.defaultTabItemText
                }
              />
              <CommunityTopTabItem
                title={CategoriesTitle.species}
                onPress={() => {
                  setSelectedTab(CategoriesTitle.species);
                  setTabData(speciesData);
                  setSelectedData(speciesData);
                  setSubCategories(SpeciesA);
                }}
                buttonStyle={
                  selectedTab == CategoriesTitle.species
                    ? styles.selectedTab
                    : {}
                }
                textStyle={
                  selectedTab == CategoriesTitle.species
                    ? styles.selectedTabText
                    : styles.defaultTabItemText
                }
              />
              <CommunityTopTabItem
                title={CategoriesTitle.free}
                onPress={() => {
                  setSelectedTab(CategoriesTitle.free);
                  setTabData(freeData);
                  setSelectedData(freeData);
                  setSubCategories(FreeA);
                }}
                buttonStyle={
                  selectedTab == CategoriesTitle.free ? styles.selectedTab : {}
                }
                textStyle={
                  selectedTab == CategoriesTitle.free
                    ? styles.selectedTabText
                    : styles.defaultTabItemText
                }
              />
            </ScrollView>
            {/* 세부 카테고리 필터 */}
            {selectedTab != CategoriesTitle.all ? (
              <View style={styles.subCategoriesContainer}>
                <SubCategoryList
                  subCategories={subCategories}
                  onToggle={onToggle}
                />
              </View>
            ) : (
              <View></View>
            )}
            <ScrollView
              style={styles.contentMargin}
              showsVerticalScrollIndicator={false}
            >
              <BestPostingList
                BestPostings={selectedData}
                onPress={{}} // onPress -> 해당 글로 이동
              />
            </ScrollView>
          </SafeAreaView>
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
    paddingBottom: 20,
    marginHorizontal: 18,
    marginTop: 55,
    justifyContent: "space-between",
    alignItems: "center",
  },
  CommunityTopTabNav: {
    borderBottomColor: palette.gray3,
    borderBottomWidth: 1,
    paddingLeft: 5,
  },
  selectedTab: {
    borderBottomColor: palette.black,
    borderBottomWidth: 1,
  },
  selectedTabText: {
    color: palette.mainDark,
  },
  defaultTabItemText: {
    color: palette.mainGray,
  },
  subCategoriesContainer: {
    borderBottomColor: "#F8F8F8",
    borderBottomWidth: 6,
    paddingTop: 12,
    paddingBottom: 5,
    paddingLeft: 14,
  },
  contentMargin: {
    marginHorizontal: 20,
  },
});

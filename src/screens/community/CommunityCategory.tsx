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
import uuid from "react-uuid";

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

export default function CommunityCategory({ navigation }: any) {
  const isLoaded = useCachedResources();

  const [selectedTab, setSelectedTab] = useState(CategoriesTitle.all);
  const [subCategories, setSubCategories] = useState(DiseaseA);

  // 나중에 DB 연결 후 posting 목록 가져오기
  const [allData, setAllData] = useState([
    {
      id: uuid(),
      category: CategoriesTitle.disease,
      subCategory: "백점병",
      title: "구피랑 베타랑 키우고 있습니다.",
      content:
        "베타를 키우려하는데 어떻게 키우는지 잘 모르겠습니다. 고수님들 도와주세요.",
      imgSrc: images.itemImageExample,
      date: "07/12",
      howLong: "2주전",
      comment: "129",
      heart: "9",
      scrap: "123",
    },
    {
      id: uuid(),
      category: CategoriesTitle.disease,
      subCategory: "모르겠어요",
      title: "구피랑 베타랑 서로 계속 싸워요ㅜ",
      content:
        "구피랑 베타 키우고 있습니다. 서로 계속 싸우는데 안 싸울 수 있는 팁 있을까요?",
      date: "07/12",
      howLong: "2주전",
      comment: "129",
      heart: "9",
      scrap: "123",
    },
    {
      id: uuid(),
      category: CategoriesTitle.goods,
      subCategory: "수조",
      title: "구피랑 베타랑 서로 계속 싸워요ㅜ",
      content:
        "구피랑 베타 키우고 있습니다. 서로 계속 싸우는데 안 싸울 수 있는 팁 있을까요?",
      imgSrc: images.itemImageExample,
      date: "07/12",
      howLong: "2주전",
      comment: "129",
      heart: "9",
      scrap: "123",
    },
    {
      id: uuid(),
      category: CategoriesTitle.disease,
      subCategory: "모르겠어요",
      title: "구피랑 베타랑 서로 계속 싸워요ㅜ",
      content:
        "구피랑 베타 키우고 있습니다. 서로 계속 싸우는데 안 싸울 수 있는 팁 있을까요?",
      date: "07/12",
      howLong: "2주전",
      comment: "129",
      heart: "9",
      scrap: "123",
    },
    {
      id: uuid(),
      category: CategoriesTitle.goods,
      subCategory: "여과기",
      title: "구피랑 베타랑 서로 계속 싸워요ㅜ",
      content:
        "구피랑 베타 키우고 있습니다. 서로 계속 싸우는데 안 싸울 수 있는 팁 있을까요?",
      date: "07/12",
      howLong: "2주전",
      comment: "129",
      heart: "9",
      scrap: "123",
    },
  ]);

  const getAllData = () => {
    // 데이터 가져오기
  };
  useEffect(() => {
    getAllData();
  }, []);

  const [diseaseData, setDiseaseData] = useState([
    {
      id: uuid(),
      category: CategoriesTitle.disease,
      subCategory: "백점병",
      title: "구피랑 베타랑 키우고 있습니다.",
      content:
        "베타를 키우려하는데 어떻게 키우는지 잘 모르겠습니다. 고수님들 도와주세요.",
      imgSrc: images.itemImageExample,
      date: "07/12",
      howLong: "2주전",
      comment: "129",
      heart: "9",
      scrap: "123",
    },
    {
      id: uuid(),
      category: CategoriesTitle.disease,
      subCategory: "모르겠어요",
      title: "구피랑 베타랑 서로 계속 싸워요ㅜ",
      content:
        "구피랑 베타 키우고 있습니다. 서로 계속 싸우는데 안 싸울 수 있는 팁 있을까요?",
      date: "07/12",
      howLong: "2주전",
      comment: "129",
      heart: "9",
      scrap: "123",
    },
    {
      id: uuid(),
      category: CategoriesTitle.disease,
      subCategory: "모르겠어요",
      title: "구피랑 베타랑 서로 계속 싸워요ㅜ",
      content:
        "구피랑 베타 키우고 있습니다. 서로 계속 싸우는데 안 싸울 수 있는 팁 있을까요?",
      date: "07/12",
      howLong: "2주전",
      comment: "129",
      heart: "9",
      scrap: "123",
    },
  ]);

  const [goodsData, setGoodsData] = useState([
    {
      id: uuid(),
      category: CategoriesTitle.goods,
      subCategory: "수조",
      title: "구피랑 베타랑 서로 계속 싸워요ㅜ",
      content:
        "구피랑 베타 키우고 있습니다. 서로 계속 싸우는데 안 싸울 수 있는 팁 있을까요?",
      imgSrc: images.itemImageExample,
      date: "07/12",
      howLong: "2주전",
      comment: "129",
      heart: "9",
      scrap: "123",
    },
    {
      id: uuid(),
      category: CategoriesTitle.goods,
      subCategory: "여과기",
      title: "구피랑 베타랑 서로 계속 싸워요ㅜ",
      content:
        "구피랑 베타 키우고 있습니다. 서로 계속 싸우는데 안 싸울 수 있는 팁 있을까요?",
      date: "07/12",
      howLong: "2주전",
      comment: "129",
      heart: "9",
      scrap: "123",
    },
  ]);

  const [waterManagementData, setWaterManagementData] = useState([]);
  const [raiseData, setRaiseData] = useState([]);
  const [speciesData, setSpeciesData] = useState([]);
  const [freeData, setFreeData] = useState([]);

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

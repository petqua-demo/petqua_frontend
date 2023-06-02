import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
} from "react-native";
import useCachedResources from "../../useCachedResources";
import { useState } from "react";

import Text from "../../components/DefaultText";
import ExtraBoldText from "../../components/BoldText";
import MediumText from "../../components/MediumText";
import CategoryButton from "../../components/CategoryButton";
import SellingListItem from "../../components/SellingListItem";
import palette from "../../styles/ColorPalette";

export default function Selling({ navigation }: any) {
  const isLoaded = useCachedResources();

  if (isLoaded) {
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.header}>
          <Image
            source={require("../../../assets/images/petqua_logo.png")}
            style={{ width: 84, height: 22 }}
          />
          <View style={{ flexDirection: "row" }}>
            <Image
              source={require("../../../assets/images/searchIcon.png")}
              style={{ width: 18, height: 20, marginRight: 21 }}
            />
            <Image
              source={require("../../../assets/images/shoppingBasketIcon.png")}
              style={{ width: 22, height: 23, marginRight: 21 }}
            />
            <Image
              source={require("../../../assets/images/notificationIcon.png")}
              style={{ width: 18, height: 24 }}
            />
          </View>
        </View>
        <View style={styles.content}>
          <View style={styles.tab}>
            <View style={[styles.tabItems, { marginLeft: 41 }]}>
              <Text style={{ width: 38, textAlign: "center" }}>전체</Text>
            </View>
            <View style={styles.tabItems}>
              <Text style={{ width: 58, textAlign: "center" }}>반려어</Text>
            </View>
            <View style={[styles.tabItems, { marginRight: 41 }]}>
              <Text style={{ width: 38, textAlign: "center" }}>용품</Text>
            </View>
          </View>
          <View style={styles.list}>
            <SafeAreaView style={styles.listItems}>
              {/* 추후 ScrollView -> FlatList로 바꿔야 함 */}
              <ScrollView
                style={styles.scrollView}
                showsVerticalScrollIndicator={false}
              >
                <SellingListItem
                  ImageSrc={
                    <ImageBackground
                      source={require("../../../assets/images/itemImageExample.png")}
                      style={styles.itemImage}
                      imageStyle={{ opacity: 0.2 }}
                    >
                      <ExtraBoldText
                        style={{
                          fontSize: 16,
                          color: "#ffffff",
                        }}
                      >
                        분양완료
                      </ExtraBoldText>
                    </ImageBackground>
                  }
                  title="구피구피구피구피구피구피구피구피구피구피구피구피"
                  itemCategory="열대어"
                  uploadTime="1시간전"
                  price="5000원"
                  comment="9"
                  heart="12"
                ></SellingListItem>
                <SellingListItem
                  ImageSrc={
                    <Image
                      source={require("../../../assets/images/itemImageExample.png")}
                      style={styles.itemImage}
                    />
                  }
                  title="구피구피구피구피"
                  itemCategory="열대어"
                  uploadTime="1시간전"
                  price="5000원"
                  comment="9"
                  heart="12"
                ></SellingListItem>
                <SellingListItem
                  ImageSrc={
                    <Image
                      source={require("../../../assets/images/itemImageExample.png")}
                      style={styles.itemImage}
                    />
                  }
                  title="구피구피구피구피구피구피구피"
                  itemCategory="열대어"
                  uploadTime="1시간전"
                  price="5000원"
                  comment="9"
                  heart="12"
                ></SellingListItem>
                <SellingListItem
                  ImageSrc={
                    <Image
                      source={require("../../../assets/images/itemImageExample.png")}
                      style={styles.itemImage}
                    />
                  }
                  title="구피구피구피구피구피구피구피구피구피구피구피구피"
                  itemCategory="열대어"
                  uploadTime="1시간전"
                  price="5000원"
                  comment="9"
                  heart="12"
                ></SellingListItem>
                <SellingListItem
                  ImageSrc={
                    <Image
                      source={require("../../../assets/images/itemImageExample.png")}
                      style={styles.itemImage}
                    />
                  }
                  title="구피구피구피구피구피구피구피구피구피구피구피구피"
                  itemCategory="열대어"
                  uploadTime="1시간전"
                  price="5000원"
                  comment="9"
                  heart="12"
                ></SellingListItem>
                <SellingListItem
                  ImageSrc={
                    <Image
                      source={require("../../../assets/images/itemImageExample.png")}
                      style={styles.itemImage}
                    />
                  }
                  title="구피구피구피구피구피구피구피구피구피구피구피구피"
                  itemCategory="열대어"
                  uploadTime="1시간전"
                  price="5000원"
                  comment="9"
                  heart="12"
                ></SellingListItem>
                <SellingListItem
                  ImageSrc={
                    <Image
                      source={require("../../../assets/images/itemImageExample.png")}
                      style={styles.itemImage}
                    />
                  }
                  title="구피구피구피구피구피구피구피구피구피구피구피구피"
                  itemCategory="열대어"
                  uploadTime="1시간전"
                  price="5000원"
                  comment="9"
                  heart="12"
                ></SellingListItem>
              </ScrollView>
            </SafeAreaView>
          </View>
        </View>
        <View style={styles.bottomNav}>
          {/* 얘는 컴포넌트로 따로 만드는 게 나을듯. */}
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
    justifyContent: "space-between",
    marginHorizontal: 24,
    marginTop: 55,
  },
  content: {},
  tab: {
    marginTop: 34,
    marginBottom: 13,
    // (첫번째 아이템 marginTop: 28) - (SellingListItem 기본 간격 15)
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomColor: palette.body1,
    borderBottomWidth: 0.25,
  },
  tabItems: {
    borderBottomWidth: 1,
    borderBottomColor: palette.gray4,
    paddingBottom: 7,
  },
  list: {
    marginHorizontal: 24,
  },
  listItems: {},
  itemImage: {
    width: 108,
    height: 108,
    borderRadius: 8,
    backgroundColor: palette.gray4,
    justifyContent: "center",
    alignItems: "center",
  },
  scrollView: {},
  bottomNav: {},
});

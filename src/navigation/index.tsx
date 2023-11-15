import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Image } from "react-native";
import useCachedResources from "../useCachedResources";

import images from "../enum/Images";
// import Join from "../screens/beginning/Join";
import Join_PhoneNum from "../screens/beginning/Join_PhoneNum";
import Join_VerificationNum from "../screens/beginning/Join_VerificationNum";
import Welcome from "../screens/beginning/Welcome";
import Login from "../screens/beginning/Login";
import Selling from "../screens/selling/Selling";
import FishPosting from "../screens/posting/FishPosting";
import GoodsPosting from "../screens/posting/GoodsPosting";
import DiaryPosting from "../screens/posting/DiaryPosting";
import ProductDetail from "../screens/selling/ProductDetail";
import MyPage from "../screens/mypage/MyPage";
import MyPostingAndComment from "../screens/mypage/MyPostingAndComment";
import MyClipping from "../screens/mypage/MyClipping";
import MyShoppingBasket from "../screens/mypage/MyShoppingBasket";
import MySellingPosting from "../screens/mypage/MySellingPosting";
import MyBuying from "../screens/mypage/MyBuying";
import WaterCommunityHome from "../screens/community/WaterCommunityHome";

const Stack = createNativeStackNavigator();

export default function Navigation() {
  const isLoaded = useCachedResources();
  if (isLoaded) {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Join_PhoneNum"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Login" component={Login} />
          {/* <Stack.Screen name="Join" component={Join} /> */}
          <Stack.Screen name="Join_PhoneNum" component={Join_PhoneNum} />
          <Stack.Screen
            name="Join_VerificationNum"
            component={Join_VerificationNum}
          />
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="BottomTabNav" component={BottomTabNav} />
          <Stack.Screen name="FishPosting" component={FishPosting} />
          <Stack.Screen name="GoodsPosting" component={GoodsPosting} />
          <Stack.Screen name="DiaryPosting" component={DiaryPosting} />
          <Stack.Screen name="ProductDetail" component={ProductDetail} />
          <Stack.Screen name="MyPage" component={MyPage} />
          <Stack.Screen
            name="MyPostingAndComment"
            component={MyPostingAndComment}
          />
          <Stack.Screen name="MyClipping" component={MyClipping} />
          <Stack.Screen name="MyShoppingBasket" component={MyShoppingBasket} />
          <Stack.Screen name="MySellingPosting" component={MySellingPosting} />
          <Stack.Screen name="MyBuying" component={MyBuying} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  } else {
    return null;
  }
}

const BottomTab = createBottomTabNavigator();
// 해결해야 할 것들: 탭 아이템들 간격 피그마와 맞추기, 탭에 shadow 넣기
const BottomTabNav = () => (
  <BottomTab.Navigator
    initialRouteName="Selling"
    screenOptions={{
      headerShown: false,
      tabBarHideOnKeyboard: true,
      tabBarStyle: styles.tabBar,
    }}
  >
    <BottomTab.Screen
      name="Selling"
      component={Selling}
      options={{
        tabBarLabel: "홈",
        tabBarLabelStyle: styles.tabBarLable,
        tabBarIcon: ({ focused }) => {
          return (
            <Image
              source={focused ? images.selectedHomeIcon : images.bottomHomeIcon}
              style={{ width: 23, height: 22 }}
            />
          );
        },
      }}
    />
    {/* 나중에 연결 Component 바꿀 예정. 테스트를 위해 임시 Component 연결. */}
    <BottomTab.Screen
      name="Login"
      component={Login}
      options={{
        tabBarLabel: "검색",
        tabBarLabelStyle: styles.tabBarLable,
        tabBarIcon: ({ focused }) => {
          return (
            <Image
              source={
                focused ? images.bottomSearchIcon : images.bottomSearchIcon
              }
              style={{ width: 20, height: 22 }}
            />
          );
        },
      }}
    />
    <BottomTab.Screen
      name="WaterCommunityHome"
      component={WaterCommunityHome}
      options={{
        tabBarLabel: "물생활",
        tabBarLabelStyle: styles.tabBarLable,
        tabBarIcon: ({ focused }) => {
          return (
            <Image
              source={
                focused
                  ? images.bottomWaterCommunityIcon
                  : images.bottomWaterCommunityIcon
              }
              style={{ width: 22, height: 20 }}
            />
          );
        },
      }}
    />
    <BottomTab.Screen
      name="MyPage"
      component={MyPage}
      options={{
        tabBarLabel: "마이쿠아",
        tabBarLabelStyle: styles.tabBarLable,
        tabBarIcon: ({ focused }) => {
          return (
            <Image
              source={
                focused ? images.selectedMyPageIcon : images.bottomMyPageIcon
              }
              style={{ width: 22, height: 22 }}
            />
          );
        },
      }}
    />
  </BottomTab.Navigator>
);

const styles = StyleSheet.create({
  tabBar: {
    height: 90,
    paddingTop: 15,
    paddingLeft: 30,
    paddingRight: 30,
    backgroundColor: "#ffffff",
    // shadow 아직 안 넣음
  },
  tabBarLable: {
    fontFamily: "pretendard-medium",
    fontSize: 10,
    color: "#333333",
  },
});

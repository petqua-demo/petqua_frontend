import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Image } from "react-native";
import useCachedResources from "../useCachedResources";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";

import palette from "../styles/ColorPalette";
import images from "../enum/Images";
// import Join from "../screens/beginning/Join";
import Join_PhoneNum from "../screens/beginning/Join_PhoneNum";
import Join_VerificationNum from "../screens/beginning/Join_VerificationNum";
import Welcome from "../screens/beginning/Welcome";
import Login from "../screens/beginning/Login";
import Main from "../screens/selling/Main";
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
import CommunityPosting from "../screens/community/CommunityPosting";
import SellingListPerCategory from "../screens/selling/SellingListPerCategory";
import Recommend from "../screens/recommend/Recommend";
import RecommendResult from "../screens/recommend/RecommendResult";

const Stack = createNativeStackNavigator();

export default function Navigation() {
  const isLoaded = useCachedResources();
  if (isLoaded) {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Welcome"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Recommend" component={Recommend} />
          <Stack.Screen name="Join_PhoneNum" component={Join_PhoneNum} />
          <Stack.Screen
            name="Join_VerificationNum"
            component={Join_VerificationNum}
          />
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="BottomTabNav" component={BottomTabNav} />
          <Stack.Screen name="CommunityPosting" component={CommunityPosting} />
          <Stack.Screen
            name="SellingListPerCategory"
            component={SellingListPerCategory}
          />

          {/* 피봇팅 전 페이지들 */}
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

const BottomTabNav = () => (
  <BottomTab.Navigator
    initialRouteName="Main"
    screenOptions={{
      headerShown: false,
      tabBarHideOnKeyboard: true,
      tabBarStyle: styles.tabBar,
      tabBarItemStyle: styles.tabBarItem,
      tabBarLabelStyle: styles.tabBarLabel,
      tabBarIconStyle: styles.tabBarIcon,
    }}
  >
    <BottomTab.Screen
      name="Main"
      component={Main}
      options={{
        tabBarLabel: "홈",
        tabBarIcon: ({ focused }) =>
          focused ? (
            <Ionicons name="home-sharp" size={24} color={palette.mainDark} />
          ) : (
            <Ionicons name="home-outline" size={24} />
          ),
      }}
    />
    <BottomTab.Screen
      name="SellingListPerCategory"
      component={SellingListPerCategory}
      options={{
        tabBarLabel: "검색",
        tabBarIcon: ({ focused }) =>
          focused ? (
            <Ionicons name="search" size={24} color={palette.mainDark} />
          ) : (
            <Ionicons name="search-outline" size={24} />
          ),
      }}
    />
    <BottomTab.Screen
      name="Recommend"
      component={RecommendStackScreen}
      options={{
        tabBarLabel: "추천",
        tabBarIcon: ({ focused }) =>
          focused ? (
            <AntDesign name="star" size={24} color={palette.mainDark} />
          ) : (
            <AntDesign name="staro" size={24} />
          ),
      }}
    />
    <BottomTab.Screen
      name="WaterCommunityHome"
      component={WaterCommunityHome}
      options={{
        tabBarLabel: "물생활",
        tabBarIcon: ({ focused }) =>
          focused ? (
            <Ionicons name="chatbubbles" size={24} color={palette.mainDark} />
          ) : (
            <Ionicons name="chatbubbles-outline" size={24} />
          ),
      }}
    />
    <BottomTab.Screen
      name="MyPage"
      component={MyPage}
      options={{
        tabBarLabel: "마이페이지",
        tabBarIcon: ({ focused }) =>
          focused ? (
            <Ionicons name="person" size={24} color={palette.mainDark} />
          ) : (
            <Ionicons name="person-outline" size={24} />
          ),
      }}
    />
  </BottomTab.Navigator>
);

const RecommendStack = createStackNavigator();

const RecommendStackScreen = () => (
  <RecommendStack.Navigator>
    <RecommendStack.Screen
      name="Recommend"
      component={Recommend}
      options={{
        headerShown: false,
      }}
    />
    <RecommendStack.Screen
      name="RecommendResult"
      component={RecommendResult}
      options={{
        title: "RecommendResult",
      }}
    />
  </RecommendStack.Navigator>
);

const styles = StyleSheet.create({
  tabBar: {
    boxShadow: "0px 4px 25px 0px rgba(0, 0, 0, 0.08)",
    border: "none",
    height: 68,
  },
  tabBarItem: {
    marginVertical: 16,
  },
  tabBarIcon: {
    width: 24,
    height: 24,
    marginBottom: 6,
  },
  tabBarLabel: {
    fontSize: 10,
    fontWeight: "400",
    color: palette.mainDark,
  },
});

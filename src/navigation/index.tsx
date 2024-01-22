import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";
import useCachedResources from "../useCachedResources";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import palette from "../styles/ColorPalette";

import Welcome from "../screens/beginning/Welcome";
import Login from "../screens/beginning/Login";
import Join from "../screens/beginning/Join";
import Join_PhoneNum from "../screens/beginning/Join_PhoneNum";
import Join_VerificationNum from "../screens/beginning/Join_VerificationNum";
import Main from "../screens/selling/Main";
import MyPage from "../screens/mypage/MyPage";
import CommunityMain from "../screens/community/CommunityMain";
import CommunityPosting from "../screens/community/CommunityPosting";
import SellingListPerCategory from "../screens/selling/SellingListPerCategory";
import Recommend from "../screens/recommend/Recommend";
import RecommendResult from "../screens/recommend/RecommendResult";
import CommunityList from "../screens/community/CommunityList";
import CommunityDetail from "../screens/community/CommunityDetail";
import Search from "../screens/selling/Search";

const Stack = createNativeStackNavigator();

export default function Navigation() {
  const isLoaded = useCachedResources();
  if (isLoaded) {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="BottomTabNav"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Join" component={Join} />
          <Stack.Screen name="Join_PhoneNum" component={Join_PhoneNum} />
          <Stack.Screen
            name="Join_VerificationNum"
            component={Join_VerificationNum}
          />
          <Stack.Screen name="BottomTabNav" component={BottomTabNav} />
          <Stack.Screen name="CommunityPosting" component={CommunityPosting} />
          <Stack.Screen
            name="SellingListPerCategory"
            component={SellingListPerCategory}
          />
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
      name="Search"
      component={Search}
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
      name="Community"
      component={CommunityStackScreen}
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
const CommunityStack = createStackNavigator();

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
        headerShown: false,
      }}
    />
  </RecommendStack.Navigator>
);

const CommunityStackScreen = () => (
  <CommunityStack.Navigator>
    <CommunityStack.Screen
      name="CommunityMain"
      component={CommunityMain}
      options={{
        headerShown: false,
      }}
    />
    <CommunityStack.Screen
      name="CommunityList"
      component={CommunityList}
      options={{
        headerShown: false,
      }}
    />
    <CommunityStack.Screen
      name="CommunityDetail"
      component={CommunityDetail}
      options={{
        headerShown: false,
      }}
    />
  </CommunityStack.Navigator>
);

const styles = StyleSheet.create({
  tabBar: {
    boxShadow: "0px 4px 25px 0px rgba(0, 0, 0, 0.08)",
    border: "none",
    height: 76,
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

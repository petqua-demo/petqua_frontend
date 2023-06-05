import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Image } from "react-native";
import useCachedResources from "../useCachedResources";

import Join from "../screens/beginning/Join";
import Login from "../screens/beginning/Login";
import Selling from "../screens/selling/Selling";

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
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Join" component={Join} />
          <Stack.Screen name="BottomTabNav" component={BottomTabNav} />
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
    {/* 나중에 연결 Component 바꿀 예정. 테스트를 위해 임시 Component 연결. */}
    <BottomTab.Screen
      name="Login"
      component={Login}
      options={{
        tabBarLabel: "추천",
        tabBarLabelStyle: styles.tabBarLable,
        tabBarIcon: ({ focused }) => {
          return (
            <Image
              source={
                focused
                  ? require("../../assets/images/selectedStarIcon.png")
                  : require("../../assets/images/starIcon.png")
              }
              style={{ width: 25.01, height: 24.02 }}
            />
          );
        },
      }}
    />
    <BottomTab.Screen
      name="Selling"
      component={Selling}
      options={{
        tabBarLabel: "홈",
        tabBarLabelStyle: styles.tabBarLable,
        tabBarIcon: ({ focused }) => {
          return (
            <Image
              source={
                focused
                  ? require("../../assets/images/selectedHomeIcon.png")
                  : require("../../assets/images/homeIcon.png")
              }
              style={{ width: 20, height: 22 }}
            />
          );
        },
      }}
    />
    {/* 나중에 연결 Component 바꿀 예정. 테스트를 위해 임시 Component 연결. */}
    <BottomTab.Screen
      name="Join"
      component={Join}
      options={{
        tabBarLabel: "마이쿠아",
        tabBarLabelStyle: styles.tabBarLable,
        tabBarIcon: ({ focused }) => {
          return (
            <Image
              source={
                focused
                  ? require("../../assets/images/selectedMyPageIcon.png")
                  : require("../../assets/images/myPageIcon.png")
              }
              style={{ width: 22, height: 21 }}
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
    paddingLeft: 66,
    paddingRight: 60,
    backgroundColor: "#ffffff",
    // shadow 아직 안 넣음
  },
  tabBarLable: {
    fontFamily: "pretendard-medium",
    fontSize: 10,
    color: "#333333",
  },
});

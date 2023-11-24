import React from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { WebView } from "react-native-webview";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  webbiew: {
    flex: 1,
    width: "100%",
    height: 300,
  },
});

const SellingListPerCategory = () => {
  return (
    <SafeAreaView style={styles.container}>
      <WebView
        style={styles.webbiew}
        source={{
          uri: "https://petqua.github.io/petqua_frontend_webview/",
        }}
      />
    </SafeAreaView>
  );
};

export default SellingListPerCategory;

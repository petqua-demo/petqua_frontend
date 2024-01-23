import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { WebView } from "react-native-webview";

// const windowWidth = Dimensions.get("window").width;
// const windowHeight = Dimensions.get("window").height;

const SellingListPerCategory = () => {
  return (
    <SafeAreaView style={styles.container}>
      <WebView
        style={styles.webView}
        source={{
          uri: "https://petqua1.github.io/petqua_frontend_webview/",
        }}
      />
    </SafeAreaView>
  );
};

export default SellingListPerCategory;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  webView: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
});

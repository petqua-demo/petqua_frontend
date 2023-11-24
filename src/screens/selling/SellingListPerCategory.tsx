import { WebView } from "react-native-webview";

const SellingListPerCategory = () => {
  return (
    <WebView
      source={{ uri: "https://petqua.github.io/petqua_frontend_webview/" }}
      //   originWhitelist={[
      //     "https://*",
      //     "http://*",
      //     "file://*",
      //     "sms://*",
      //     "intent://*",
      //   ]}
    />
  );
};

export default SellingListPerCategory;

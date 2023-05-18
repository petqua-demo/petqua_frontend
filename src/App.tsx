import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, View } from "react-native";

// navigation
import Navigation from "./navigation";

export default function App() {
  return <Navigation />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

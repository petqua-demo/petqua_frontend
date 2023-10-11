import React from "react";
import { StyleSheet, View, Image } from "react-native";
import images from "../enum/Images";
import Text from "./DefaultText";

const UseAgreementListItem = ({ id, title, checked, onPress, onToggle }) => {
  return (
    <View style={styles.container}>
      <View onTouchEnd={onToggle(id)}>
        {checked ? (
          <Image
            source={images.useAgreementCheckBoxChecked}
            style={styles.checkbox}
          />
        ) : (
          <Image
            source={images.useAgreementCheckBoxUnchecked}
            style={styles.checkbox}
          />
        )}
      </View>
      {checked ? (
        // Text에 onPress 넘길 시 오류나서 View로 감싸줌
        <View onPress={onPress}>
          <Text style={styles.checkedText}>{title}</Text>
        </View>
      ) : (
        <View onPress={onPress}>
          <Text style={styles.uncheckedText}>{title}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  checkbox: {
    width: 28,
    height: 28,
    marginRight: 10,
  },
  checkedText: {
    fontSize: 14,
    color: "#333333",
  },
  uncheckedText: {
    fontSize: 14,
    color: "#999999",
  },
});

export default UseAgreementListItem;

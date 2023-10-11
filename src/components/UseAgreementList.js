import { View } from "react-native";
import UseAgreementListItem from "./UseAgreementListItem";

const UseAgreementList = ({ UseAgreements, onPress, onToggle }) => {
  return (
    <View>
      {UseAgreements.map((UseAgreement) => (
        <UseAgreementListItem
          key={UseAgreement.id}
          {...UseAgreement}
          onPress={onPress}
          onToggle={onToggle}
        />
      ))}
    </View>
  );
};

export default UseAgreementList;

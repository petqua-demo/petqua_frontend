import { View } from "react-native";

const UseAgreementList = ({ UseAgreements, onPress, onToggle }) => {
  return (
    <View>
      {UseAgreements.map((UseAgreement) => (
        <TodoListItem
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

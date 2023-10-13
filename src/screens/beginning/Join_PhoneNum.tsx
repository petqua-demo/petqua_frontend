import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  Pressable,
  Keyboard,
  Modal,
  Image,
} from "react-native";
import useCachedResources from "../../useCachedResources";
import { useState } from "react";
import uuid from "react-uuid";

import Text from "../../components/DefaultText";
import BlueButton from "../../components/BlueButton";
import InputBox from "../../components/InputBox";
import palette from "../../styles/ColorPalette";
import UseAgreementList from "../../components/UseAgreementList";
import UseAgreementsTitle from "../../enum/UseAgreementsTitle";
import images from "../../enum/Images";
import BoldText from "../../components/BoldText";
import BlueButtonUnable from "../../components/BlueButtonUnable";

// 인증번호 입력 창에서는 핸드폰번호를 다시 입력할 수 있게 하는 버튼이 없어서
// 뒤로가기를 하면 핸드폰번호 입력 창으로 돌아갈 수 있도록 화면 분리함.
export default function Join_PhoneNum({ navigation }: any) {
  const isLoaded = useCachedResources();
  const [phoneNum, setPhoneNum] = useState("");
  const [displayInputTitle, setDisplayInputTitle] = useState(false);

  // 휴대폰번호 textInput에 placeholder로 들어갈 텍스트
  const placeholderText = {
    defaultText: "휴대폰번호",
    warningText: "잘못된 번호 형식입니다.",
  };

  const [placeholder, setPlaceholder] = useState(placeholderText.defaultText);
  const [placeholderTextColor, setPlaceholderTextColor] = useState(
    palette.gray2
  );

  const onFocusTextInput = () => {
    // textInput에 onFocus되면 placeholder 없애기
    setPlaceholder("");
    // 한 번 textInput에 onFocus되고 나면 계속 InputTitle 띄워놓기
    setDisplayInputTitle(true);
  };

  // 휴대폰번호 입력시 자동 하이픈(-) 생성
  const autoHyphen = (value: any) => {
    setPhoneNum(
      value
        .replace(/[^0-9]/g, "")
        .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, "$1-$2-$3")
        .replace(/(\-{1,2})$/g, "")
    );
  };

  // 휴대폰번호 입력 -> 확인 버튼 클릭 시
  const onClick = () => {
    console.log(phoneNum);
    // xxx-xxxx-xxxx 형식 맞는지 확인
    let regexp = /^01(?:0|1|[6-9])-(?:\d{3}|\d{4})-\d{4}$/;
    let rightRegexp = regexp.test(phoneNum);
    console.log(rightRegexp);
    // 형식이 틀리면 경고 메시지 띄우기
    if (!rightRegexp) {
      setPhoneNum(""); // 번호 지우기
      setPlaceholder(placeholderText.warningText);
      setPlaceholderTextColor(palette.warning);
      setDisplayModal(false);
    } else {
      // 형식이 올바르면 약관 동의 Modal 띄우기
      setDisplayModal(true);
    }
  };

  const [displayModal, setDisplayModal] = useState(false); // 약관 설명 모달창 띄울 것인지 여부
  const [agreeOKBtnClickable, setAgreeOKBtnClickable] = useState(false); // 모달 확인 버튼 활성화 여부

  // 이용약관 리스트
  const [UseAgreements, setUseAgreements] = useState([
    {
      id: uuid(),
      title: UseAgreementsTitle.required,
      checked: false,
    },
    {
      id: uuid(),
      title: UseAgreementsTitle.requiredIdentificationService,
      checked: false,
    },
    {
      id: uuid(),
      title: UseAgreementsTitle.personalizedService,
      checked: false,
    },
    { id: uuid(), title: UseAgreementsTitle.marketingInfo, checked: false },
  ]);

  // 모두 동의 체크 여부
  const [allChecked, setAllChecked] = useState(false);

  // 모두 동의하기 클릭 시
  const agreeAll = () => {
    const check = UseAgreements.map((UseAgreement) => {
      return { ...UseAgreement, checked: !allChecked };
    });
    setUseAgreements(check);
    setAllChecked(!allChecked);
    // 확인 버튼 활성화할 것인지
    onToggleOKBtn(check);
  };

  const onToggle = (id: any) => (e: any) => {
    // 선택한 항목의 id 받아와서 해당 항목 체크
    const check = UseAgreements.map((UseAgreement) =>
      UseAgreement.id === id
        ? { ...UseAgreement, checked: !UseAgreement.checked }
        : UseAgreement
    );
    setUseAgreements(check);

    // 체크가 안 된 항목의 개수 확인
    var unchecked = 0;
    check.map((UseAgreement) =>
      UseAgreement.checked ? unchecked : unchecked++
    );
    // 체크가 안 된 항목이 없으면 모두 동의도 체크되게 하기
    if (unchecked == 0) setAllChecked(true);
    // 모두 동의였는데 어떤 항목을 체크 해제할 경우 모두 동의 체크박스 해제
    else setAllChecked(false);

    // 확인 버튼 활성화할 것인지
    onToggleOKBtn(check);
  };

  const onToggleOKBtn = (
    check: { id: string; title: string; checked: boolean }[]
  ) => {
    // 필수 항목 중 체크가 안 된 것의 개수 확인
    var uncheckedRequired = 0;
    check.map((UseAgreement) => {
      // title이 (선택) > 로 끝나지 않은 것들 중 (즉, 필수인 것들 중)
      if (!UseAgreement.title.endsWith("(선택) >")) {
        // check되어있지 않으면 uncheckedRequired + 1
        if (!UseAgreement.checked) uncheckedRequired++;
      }
    });
    console.log(uncheckedRequired);
    // 필수 항목이 모두 체크되어 있으면 확인 버튼 활성화
    if (uncheckedRequired == 0) setAgreeOKBtnClickable(true);
    else setAgreeOKBtnClickable(false);
  };

  if (isLoaded) {
    return (
      <Pressable style={{ flex: 1 }} onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
          <StatusBar style="auto" />
          {/* 모달 뒷배경 어둡게 처리하는 것 때문에 이중으로 모달 사용.
          슬라이드 모달 안에 View로 배경 처리하면 어두운 배경이 같이 슬라이딩됨.  */}
          <Modal
            transparent={true}
            visible={displayModal}
            onRequestClose={() => {
              setDisplayModal(!displayModal);
            }}
          >
            {/* 반투명 배경 */}
            <View
              style={styles.translucentBackground}
              onTouchEnd={() => setDisplayModal(false)} // 모달 바깥 부분 클릭 시 모달 닫기
            >
              {/* 약관동의 모달 */}
              <Modal
                animationType="slide"
                transparent={true}
                visible={displayModal}
              >
                <View
                  style={styles.modalContainer}
                  onTouchEnd={(e) => e.stopPropagation()} // 이벤트 버블링 방지 (모달 클릭해도 모달 닫히는 현상 방지)
                >
                  {/* 모두 동의 */}
                  <View
                    onTouchEnd={() => agreeAll()}
                    style={styles.allAgreeContainer}
                  >
                    {allChecked ? (
                      <Image
                        source={images.useAgreementBigCheckBoxChecked}
                        style={{ width: 48, height: 48, marginRight: 18 }}
                      />
                    ) : (
                      <Image
                        source={images.useAgreementBigCheckBoxUnchecked}
                        style={{ width: 48, height: 48, marginRight: 18 }}
                      />
                    )}
                    <BoldText style={{ fontSize: 16 }}>
                      약관에 모두 동의
                    </BoldText>
                  </View>

                  {/* 약관 리스트 */}
                  <View style={{ marginHorizontal: 8 }}>
                    <UseAgreementList
                      UseAgreements={UseAgreements}
                      onPress={{}} // onPress는 title 누르면 약관 내용 화면으로 이동
                      onToggle={onToggle} // onToggle은 체크박스 선택/해제
                    />
                  </View>

                  {/* 확인 버튼 */}
                  <View style={{ marginTop: 24 }}>
                    {agreeOKBtnClickable ? (
                      <BlueButton
                        title="확인"
                        onPress={{}}
                        buttonStyle={{ width: "100%", height: 50 }}
                      />
                    ) : (
                      <BlueButtonUnable
                        title="확인"
                        buttonStyle={{ width: "100%", height: 50 }}
                      />
                    )}
                  </View>
                </View>
              </Modal>
            </View>
          </Modal>

          <View style={styles.content}>
            <Text style={styles.command}>휴대폰 번호를{"\n"}입력해주세요</Text>
            <View style={styles.inputItem}>
              {displayInputTitle ? (
                <Text style={styles.textInputTitle}>휴대폰번호</Text>
              ) : (
                // 입력칸 위 "휴대폰 번호" 글자 생성 시 입력칸 밀리는 현상 방지, 미리 공간 할당하기
                <Text style={styles.textInputTitle2}></Text>
              )}
              <InputBox
                placeholder={placeholder}
                placeholderTextColor={placeholderTextColor}
                keyboardType="numeric"
                maxLength={13}
                returnKeyType="done"
                value={phoneNum}
                onChangeText={(value: any) => autoHyphen(value)}
                clearText={() => setPhoneNum("")}
                onFocus={onFocusTextInput}
              />
            </View>
          </View>
          <View style={styles.buttonBox}>
            <BlueButton
              title="확인"
              onPress={() => onClick()}
              buttonStyle={{ width: "100%", height: 50 }}
            />
          </View>
        </View>
      </Pressable>
    );
  } else {
    return null;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  translucentBackground: {
    flex: 1,
    backgroundColor: "#000000",
    opacity: 0.5,
  },
  modalContainer: {
    width: "100%",
    position: "absolute",
    bottom: 0,
    backgroundColor: "#fff",
    paddingTop: 24,
    paddingHorizontal: 15,
    paddingBottom: 50,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  allAgreeContainer: {
    marginHorizontal: 6,
    marginBottom: 26,
    paddingVertical: 18,
    paddingHorizontal: 14,
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: palette.lightGray,
    backgroundColor: "#ffffff",
  },
  content: {
    marginHorizontal: 24,
    flex: 1,
  },
  command: {
    fontSize: 28,
    marginTop: 130,
    lineHeight: 40,
    marginBottom: 20,
  },
  inputItem: {
    marginTop: 41,
  },
  textInputTitle: {
    marginBottom: 13,
    fontSize: 12,
    color: palette.gray2,
  },
  textInputTitle2: {
    width: 0,
    marginBottom: 13,
    fontSize: 12,
    color: palette.gray2,
  },
  buttonBox: {
    justifyContent: "flex-end",
    marginBottom: 50,
    marginHorizontal: 24,
  },
});

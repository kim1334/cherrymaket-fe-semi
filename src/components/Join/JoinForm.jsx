import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
  joinThunk,
  idCheckThunk,
  emailCheckThunk,
  emailAuthThunk,
  resetJoinState,
} from "../../redux/modules/joinSlice";
import { useNavigate } from "react-router-dom";
import { useDaumPostcodePopup } from "react-daum-postcode";
import { Btn } from "../../elements/Btn";
import { Input } from "../../elements/Input";
import {
  StRow,
  LabelWrapper,
  InputWrapper,
  BtnWrapper,
  Validation,
  SubmitBtnWrapper,
} from "./Style";
import Agreement from "./Agreement";
import { instance } from "../../redux/modules/instance";

function JoinForm() {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const [zipcode, setZipCode] = useState([]);



  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
    contact: "",
    gender: "",
    birthdate: "",
    address: "",
    detailAddress: "",
    serviceAgreement: false,
    privacyAgreement: false,
    marketingAgreement: false,
  });


  const { name, email, password, confirmPw, contact, gender, birthdate, address, detailAddress, serviceAgreement, privacyAgreement, marketingAgreement } = userInfo;
  // const handleInput = (e) => {
  //   const { name, value } = e.target;
  //   setUserInfo({ ...userInfo, [name]: value });
  // };
  const handleInput = (e) => {
    const { name, value } = e.target;

    // 연락처 필드 변경 시
    if (name.startsWith('contact')) {
      const newContactInfo = {
        ...userInfo,
        [name]: value
      };

      // 모든 연락처 필드가 채워져 있으면 contact를 업데이트
      if (newContactInfo.contact1 && newContactInfo.contact2 && newContactInfo.contact3) {
        const newContact = `${newContactInfo.contact1}-${newContactInfo.contact2}-${newContactInfo.contact3}`;
        newContactInfo.contact = newContact;
      }

      setUserInfo(newContactInfo);
    }
    // 생년월일 필드 변경 시
    else if (name === 'birthYear' || name === 'birthMonth' || name === 'birthDay') {
      const newBirthInfo = {
        ...userInfo,
        [name]: value
      };

      // 모든 생년월일 필드가 채워져 있으면 birthdate를 업데이트
      if (newBirthInfo.birthYear && newBirthInfo.birthMonth && newBirthInfo.birthDay) {
        const newBirthdate = `${newBirthInfo.birthYear}-${newBirthInfo.birthMonth.padStart(2, '0')}-${newBirthInfo.birthDay.padStart(2, '0')}`;
        newBirthInfo.birthdate = newBirthdate;
      }

      setUserInfo(newBirthInfo);
    }
    // 그 외의 모든 필드
    else {
      setUserInfo({ ...userInfo, [name]: value });
    }
  };

  console.log(userInfo)
  console.log(userInfo.serviceAgreement)
  console.log(userInfo.privacyAgreement)
  console.log(userInfo.marketingAgreement)


  // ! ------------ 여기부터 유효성 검사 로직 -----------------
  // 유효성 검사 룰
  //const userIdRegEx = /^[a-zA-Z0-9]{4,8}$/; // ID >> 숫자 및 알파벳만 가능(4~8글자)
  const passwordRegEx = /^(?=.*[a-zA-Z])(?=.*[A-Z])((?=.*\d)|(?=.*\W)).{6,20}$/; // Password >> 6~20글자 , 최소 1개 이상의 숫자 또는 특수문자 포함
  //const nickNameRegEx = /^[가-힣a-zA-Z]{4,8}$/; // 닉네임 >> 한글 및 영문만 가능(4~8글자)
  const emailRegEx = /^[a-z0-9_+.-]+@([a-z0-9-]+\.)+[a-z0-9]{2,4}$/; // 이메일 >>

  // 인풋에 들어온 내용이 valid한가?(참/거짓)
  const [isIdValid, setIsIdValid] = useState(false);
  const [isPwValid, setIsPwValid] = useState(false);
  const [isConfirmPwValid, setIsConfirmPwValid] = useState(false);
  const [isNickNameValid, setIsNickNameValid] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isNameValid, setIsNameValid] = useState(false);

  // 유효성 검증 문구를 보여주는 useState모음
  const [pwRuleDesc, setPwRuleDesc] = useState("");
  const [ConfirmPwRuleDesc, setConfirmPwRuleDesc] = useState("");
  const [emailRuleDesc, setEmailRuleDesc] = useState("");
  const [nameRuleDesc, setNameRuleDesc] = useState("");

  // ID 유효성 검증 이벤트함수
  // const userIdValidation = () => {
  //   if (userIdRegEx.test(userId)) {
  //     setIsIdValid(true);
  //     setIdRuleDesc("");
  //   } else {
  //     setIsIdValid(false);
  //     setIdRuleDesc("4자 이상 8자 이하의 영문 및 숫자를 조합");
  //   }
  // };

  // 패스워드 유효성 검증 이벤트함수
  const passwordValidation = () => {
    if (passwordRegEx.test(password)) {
      setIsPwValid(true);
      setPwRuleDesc("");
    } else {
      setIsPwValid(false);
      setPwRuleDesc(
        "6자 이상 20자 이하의 영문 및 최소 1개이상의 대문자/숫자/특수문자의 조합"
      );
    }
  };

  // 패스워드 재확인 유효성 검증 이벤트함수
  const confirmPwValidation = () => {
    if (confirmPw === password) {
      setIsConfirmPwValid(true);
      setConfirmPwRuleDesc("");
    } else {
      setIsConfirmPwValid(false);
      setConfirmPwRuleDesc("동일한 비밀번호를 입력");
    }
  };

  const nameValidation = () => {
    const nameRegEx = /^[가-힣]{2,5}$/; // 이름은 한글만 가능하고 2자에서 5자까지 허용
    if (nameRegEx.test(userInfo.name)) {
      setIsNameValid(true);
      setNameRuleDesc("");
    } else {
      setIsNameValid(false);
      setNameRuleDesc("이름은 2자에서 5자 사이의 한글만 가능합니다.");
    }
  };

  // 이메일 유효성 검증 이벤트함수
  const emailValidation = () => {
    if (emailRegEx.test(email)) {
      setIsEmailValid(true);
      setEmailRuleDesc("");
    } else {
      setIsEmailValid(false);
      setEmailRuleDesc("이메일 형식으로 입력해 주세요.");
    }
  };
  // ! ------------ 여기부터 중복 확인 로직 -----------------
  const isIdUsable = useSelector((state) => state.join.isIdUsable);
  const isEmailUsable = useSelector((state) => state.join.isEmailUsable);

  // 아이디 중복 확인 함수
  // const userIdCheck = () => {
  //   if (userId === "") {
  //     alert("4자 이상 8자 이하의 영문 및 숫자를 조합");
  //   } else {
  //     if (isIdValid) {
  //       dispatch(idCheckThunk(userId));
  //     } else {
  //       alert(idRuleDesc);
  //     }
  //   }
  // };

  // 이메일 중복 확인 함수
  const emailCheck = () => {
    if (email === "") {
      alert("이메일 형식으로 입력해 주세요.");
    } else {
      if (isEmailValid) {

        dispatch(emailCheckThunk(email));

      } else {
        alert("");
      }
    }
  };

  // 모달창 로직(기본값이 false, 버튼 클릭시 true로 변경되면서 팝업)
  const [modal, setModal] = useState(false);

  const showModal = () => {
    setModal(!modal);
  };

  // ! ----------- 카카오 우편번호 API ------------------------------
  const scriptUrl =
    "//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";
  const open = useDaumPostcodePopup(scriptUrl);

  const handleComplete = (data) => {
    let fullAddress = data.address;
    let extraAddress = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }

    // console.log(fullAddress); // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
    fullAddress = fullAddress + detailAddress;
    console.log(data?.zonecode);
    setZipCode(data.zonecode);
    setUserInfo({ ...userInfo, address: fullAddress }); // 가져온 fullAddress를 state에 저장!
  };

  const handleClick = () => {
    open({ onComplete: handleComplete });
  };
  // console.log(userInfo);

  // ! ------------------ 가입하기 버튼 --------------------------
  // 모든 항목을 만족했을 때만 submit!
  const SubmitData = async (e) => {
    e.preventDefault();
     if (
       userInfo.name.length > 0 &&
       userInfo.address.length > 0 &&
      isPwValid &&
      isConfirmPwValid &&
      isEmailValid === true
     ) {
      if (isEmailUsable) {
        try {
          // 회원가입 요청을 dispatch하고 완료될 때까지 기다립니다.
          await dispatch(
            joinThunk({
              name, email, password, contact, gender, birthdate, zipcode, address, detailAddress, serviceAgreement, privacyAgreement, marketingAgreement
            })
          );

          addAddressData();
  

        } catch (error) {
          // joinThunk에서 발생한 에러를 처리합니다.
          alert('회원가입 요청 중 에러가 발생했습니다.');
        }
      } else {
        alert("중복검사를 실시해주세요.");
      }
    } else {
      alert("모든 항목을 작성해주세요.");
    }
  };

  const addAddressData = async () => {
    try {
      const transformedPayload = {
        name: name, 
        address: address, 
        addressDetail: detailAddress, 
        isDefault: "TRUE", 
        zipcode: zipcode,
      };

      console.log(transformedPayload)

      const addressAdd = await instance.post(`/customer/address/add-on-signup?accountEmail=${email}`, transformedPayload);
      console.log("추가 요청 성공:", addressAdd.data);
    } catch (error) {
      
      alert("배송지 추가 실패")
    }
  };


  const isJoinSucceed = useSelector((state) => state.join.isJoinSucceed);
  useEffect(() => {
    if (isJoinSucceed) {
      dispatch(resetJoinState());
      nav("/login");
    }
  }, [isJoinSucceed]);
  // ! ------------ 여기부터 뷰 -----------------
  return (
    <div>
      <StRow>
        <LabelWrapper>
          <label>
            이름
            <span>*</span>
          </label>
        </LabelWrapper>
        <InputWrapper>
          <Input
            type="text"
            name="name"
            value={name}
            onChange={handleInput}
            placeholder="이름을 입력해주세요"
            autoComplete="off"
            onKeyUp={nameValidation}
          />
            <Validation>
            <p>{nameRuleDesc}</p>
          </Validation>
        </InputWrapper>
        <BtnWrapper />
      </StRow>
      <StRow>
        <LabelWrapper>
          <label>
            이메일
            <span>*</span>
          </label>
        </LabelWrapper>
        <InputWrapper>
          <Input
            type="text"
            name="email"
            value={userInfo.email}
            onChange={handleInput}
            placeholder="이메일을 입력해주세요"
            autoComplete="off"
            onKeyUp={emailValidation}
          />
          <Validation>
            <p>{emailRuleDesc}</p>
          </Validation>
        </InputWrapper>
        <BtnWrapper visibility="visible">
          <Btn
            type="button"
            onClick={() => {
              emailCheck();
              // SendEamilAuth();
            }}
            disabled={isEmailUsable}
          >
            중복확인
          </Btn>
        </BtnWrapper>
        {/* --------- 모달창 ------------- */}
        {/* {modal ? (
          <Modal modal={modal} setModal={setModal}>
            {emailRuleDesc}
          </Modal>
        ) : null} */}
      </StRow>
      <StRow>
        <LabelWrapper>
          <label>
            비밀번호
            <span>*</span>
          </label>
        </LabelWrapper>
        <InputWrapper>
          <Input
            type="password"
            name="password"
            value={password}
            onChange={handleInput}
            placeholder="비밀번호를 입력해주세요"
            autoComplete="off"
            onKeyUp={passwordValidation}
            maxLength="21"
          />
          <Validation>
            <p>{pwRuleDesc}</p>
          </Validation>
        </InputWrapper>
        <BtnWrapper />
      </StRow>
      <StRow>
        <LabelWrapper>
          <label>
            비밀번호확인
            <span>*</span>
          </label>
        </LabelWrapper>
        <InputWrapper>
          <Input
            type="password"
            name="confirmPw"
            value={confirmPw}
            onChange={handleInput}
            placeholder="비밀번호를 한번 더 입력해주세요"
            autoComplete="off"
            onKeyUp={confirmPwValidation}
            maxLength="21"
          />
          <Validation>
            <p>{ConfirmPwRuleDesc}</p>
          </Validation>
        </InputWrapper>
        <BtnWrapper />
      </StRow>

      <StRow>
        <LabelWrapper>
          <label>
            주소
            <span>*</span>
          </label>
        </LabelWrapper>
        <InputWrapper>
          <Input
            type="text"
            name="address"
            value={address}
            onChange={handleInput}
            placeholder="주소 검색을 해주세요"
            autoComplete="off"
            disabled
          />
          <Validation></Validation>
          <Input
            type="text"
            name="detailAddress"
            value={detailAddress}
            onChange={handleInput}
            placeholder="나머지 주소를 입력해주세요"
            autoComplete="off"
          />
          <Validation>
            <span>배송지에 따라 상품 정보가 달라질 수 있습니다.</span>
          </Validation>
        </InputWrapper>
        <BtnWrapper visibility="visible">
          <Btn
            width="100%"
            fontSize="14px"
            fontWeight="500"
            type="button"
            onClick={handleClick}
          >
            <SearchImg
              src="https://res.kurly.com/pc/service/cart/2007/ico_search.svg"
              alt="돋보기"
            />
            주소검색
          </Btn>
        </BtnWrapper>
        {/* --------- 모달창 ------------- */}
        {/* {modal ? (
          <Modal modal={modal} setModal={setModal}>
            {emailRuleDesc}
          </Modal>
        ) : null} */}
      </StRow>
      <StRow>
        <LabelWrapper>
          <label>
            연락처
            <span>*</span>
          </label>
        </LabelWrapper>
        <InputWrapper>
          <FlexContainer>
            <Input1 placeholder="000" name="contact1" maxLength={3} autoComplete="off" onChange={handleInput} />
            <Separator></Separator>
            <Input1 placeholder="0000" name="contact2" maxLength={4} autoComplete="off" onChange={handleInput} />
            <Separator></Separator>
            <Input1 placeholder="0000" name="contact3" maxLength={4} autoComplete="off" onChange={handleInput} />
          </FlexContainer>

          {/* <Input
            type="text"
            name="contact"
            value={contact}
            onChange={handleInput}
            placeholder="010 - 0000 - 0000"
            autoComplete="off"
          /> */}
          <Validation>
          </Validation>
        </InputWrapper>
        <BtnWrapper />
      </StRow>
      <StRow>
        <LabelWrapper>
          <label>성별
            <span>*</span>
          </label>
        </LabelWrapper>
        <InputWrapper>
          <RadioLabel>
            <RadioInput
              type="radio"
              name="gender"
              value="MALE"
              checked={gender === 'MALE'}
              onChange={handleInput}
            />
            <CheckBoxSpan>
              <CheckBoxDiv></CheckBoxDiv>
            </CheckBoxSpan>
            &nbsp;&nbsp;&nbsp;남자
          </RadioLabel>
          <RadioLabel>
            <RadioInput
              type="radio"
              name="gender"
              value="FEMALE"
              checked={gender === 'FEMALE'}
              onChange={handleInput}
            />
            <CheckBoxSpan>
              <CheckBoxDiv></CheckBoxDiv>
            </CheckBoxSpan>
            &nbsp;&nbsp;&nbsp;여자
          </RadioLabel>
        </InputWrapper>
      </StRow>
      <StRow>
        <LabelWrapper>
          <label>
            생년월일
            <span>*</span>
          </label>
        </LabelWrapper>
        <InputWrapper>

          <FlexContainer>
            <Input1 placeholder="YYYY" name="birthYear" maxLength={4} autoComplete="off" onChange={handleInput} />
            <Separator></Separator>
            <Input1 placeholder="MM" name="birthMonth" maxLength={2} autoComplete="off" onChange={handleInput} />
            <Separator></Separator>
            <Input1 placeholder="DD" name="birthDay" maxLength={2} autoComplete="off" onChange={handleInput} />
          </FlexContainer>

          {/* <Input
      type="text"
      name="birthdate"
      //value={birthdate}
      onChange={handleInput}
      placeholder="YYYY - MM - DD"
      autoComplete="off"
      maxLength={10}
    /> */}
          <Validation>
            {/* <span> - 포함 10글자</span> */}
          </Validation>
        </InputWrapper>
        <BtnWrapper />
      </StRow>
      <Line />
      <Agreement
onServiceAgreementChange={(checked) =>
  setUserInfo((prevUserInfo) => ({ ...prevUserInfo, serviceAgreement: checked }))
}
onPrivacyAgreementChange={(checked) =>
  setUserInfo((prevUserInfo) => ({ ...prevUserInfo, privacyAgreement: checked }))
}
onMarketingAgreementChange={(checked) =>
  setUserInfo((prevUserInfo) => ({ ...prevUserInfo, marketingAgreement: checked }))
}
      />
      <SubmitBtnWrapper>
        <SubmitBtm
          onClick={SubmitData}
          disabled={
            !(
              userInfo.name.length > 0 &&
              userInfo.address.length > 0 &&
              isPwValid &&
              isConfirmPwValid &&
              isEmailValid &&
              isEmailUsable &&
              userInfo.serviceAgreement &&
              userInfo.privacyAgreement &&
              userInfo.marketingAgreement &&
              userInfo.gender.length > 0 && 
              userInfo.birthdate.length > 0 && 
              userInfo.contact.length > 0 
            )
          }
        >
          가입하기
        </SubmitBtm>
      </SubmitBtnWrapper>
    </div>
  );
}
export default JoinForm;

const SubmitBtm = styled.button`
width: 240px;
height: 56px;
border-radius: 4px;
color: white;
background-color: rgb(149, 5, 38);
font-size: 14px;
font-weight: 500;
display: block;
padding: 0px 10px;
margin: 0px;
text-align: center;
cursor: pointer;
background-color: ${(props) => (props.disabled ? "rgb(221, 221, 221)" : "rgb(149, 5, 38)")};
cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
`;

const FlexContainer = styled.div`
  flex: 1 1 0%;
   display: flex; /* 추가: flex-container로 만듭니다. */
  justify-content: center; /* 추가: 중앙 정렬합니다. */
  align-items: center; /* 추가: 수직 정렬합니다. */
  border: 1px solid rgb(221, 221, 221);
  border-radius: 4px;
`;

const InputContainer = styled.div`
  height: 44px;
  display: flex;
  align-items: center;
  width: 100%;
  border: 1px solid rgb(204, 204, 204);
  border-radius: 3px;
  padding: 0px 15px;
`;

const Input1 = styled.input`
  width: 100%;
  height: 40px;
  padding: 0px 11px 1px 15px;
  border: none;
  border-radius: 4px;
  font-weight: 400;
  font-size: 14px;
  line-height: 38px;
  color: rgb(51, 51, 51);
  outline: none;
  box-sizing: border-box;
  flex: 1;
  text-align: center;
  &:last-child {
    margin-right: 0; /* 추가: 마지막 요소는 여백을 없앱니다. */
  }
    &::placeholder {
    text-align: center;
  }
`;

const Separator = styled.span`
  font-size: 14px;
  color: rgb(204, 204, 204);
  text-align: center;
  line-height: 40px;
  position: relative;
  height: 40px;
  padding-bottom: 0px;
  padding: 0 5px;
  &::after {
    content: "/";
  }
`;


const Line = styled.div`
  padding: 10px 0px;
  border-bottom: 1px solid rgb(51, 51, 51);
`;

const SearchImg = styled.img`
  display: inline-block;
  width: 20px;
  height: 20px;
  margin-right: 4px;
  vertical-align: middle;
`;

const RadioLabel = styled.label`
  /* 라디오 버튼 스판(span)의 기본 스타일 */
  position: relative;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  padding: 12px 0px 9px;
  margin-right: 20px; /* 라디오 버튼 간격 */
  cursor: pointer;

  /* 선택된 라디오 버튼의 스판(span) 스타일 */
  input[type="radio"]:checked + span {
    background-color: rgb(149, 5, 38);
  }
`;

const RadioInput = styled.input`
  /* 라디오 버튼의 인풋(input) 요소 스타일 (숨겨진 스타일) */
  overflow: hidden;
  position: absolute;
  width: 1px;
  height: 1px;
  clip: rect(0px, 0px, 0px, 0px);
  margin-right: 10px;
`;

const CheckBoxSpan = styled.span`
  /* 라디오 버튼 스판(span)의 스타일 */
  min-width: 24px;
  min-height: 24px;
  display: inline-block;
  position: relative;
  border-radius: 50%;

  /* 기본 배경색 */
  background-color: white;
  border: 1px solid rgb(221, 221, 221);
`;

const CheckBoxDiv = styled.div`
  width: 10px;
  height: 10px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background-color: white;
`;



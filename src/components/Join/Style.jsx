import styled from "styled-components";

export const StRow = styled.div`
  display: inline-flex;
  width: 100%;
  padding: 10px 20px;
`;

export const LabelWrapper = styled.div`
  display: block;
  width: 139px;
  padding-top: 12px;
  & label {
    color: rgb(51, 51, 51);
    font-size: 12px;
    line-height: 20px;
  }
  & span {
    color: #ee6a7b;
  }
`;

export const InputWrapper = styled.div`
  flex: 1 1 0%;
  position: relative;
`;

export const BtnWrapper = styled.div`
  width: 120px;
  margin-left: 8px;
  visibility: ${(props) => props.visibility || "hidden"};
`;

export const Validation = styled.div`
  padding: 10px 0;
  & p {
    font-size: ${(props) => props.fontSize || "13px"};
    color: ${(props) => props.color || " rgb(240, 63, 64)"};
    margin-top: -4px;
  }

  & span {
    display: block;
    /* margin-top: 10px; */
    font-size: 12px;
    line-height: 18px;
    color: rgb(102, 102, 102);
  }
`;
export const SubmitBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  border-top: 1px solid rgb(247, 247, 247);
  padding: 40px 0px;
`;

export const LabelWrapper1 = styled.div`
  display: block;
  width: 139px;
  padding-top: 12px;
  & label {
    color: rgb(51, 51, 51);
    font-size: 12px;
    line-height: 20px;
  }
  & span {
    color: #ee6a7b;
  }
`;

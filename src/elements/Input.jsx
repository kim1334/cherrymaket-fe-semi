import styled from "styled-components";

export const Input = styled.input`
  height: ${(props) => props.height || "44px"};
  width: ${(props) => props.width || "100%"};
  padding: 0px 11px 1px 15px;
  border-radius: 4px;
  border: 1px solid rgb(221, 221, 221);
  font-weight: 400;
  font-size: ${(props) => props.fontSize || "16px"};
  line-height: 1.5;
  color: rgb(51, 51, 51);
  outline: none;
  box-sizing: border-box;

  &:focus {
    outline: 1px solid;
  }
`;

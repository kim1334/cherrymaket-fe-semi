import React from "react";
import styled from "styled-components";

export const Btn = (props) => {
  const p = props;
  return (
    <StBtn
      // 버튼 속성
      type={p.type}
      value={p.value}
      onClick={p.onClick}
      disabled={p.disabled}
      // 버튼 css
      width={p.width}
      height={p.height}
      border={p.border}
      color={p.color}
      backgroundColor={p.backgroundColor}
      font-size={p.fontSize}
      font-weight={p.fontWeight}
    >
      {p.children}
    </StBtn>
  );
};

const StBtn = styled.button`
  width: ${(p) => p.width || "120px"};
  height: ${(p) => p.height || "44px"};

  border-radius: 4px;
  border: ${(p) => p.border || "1px solid #5f0080"};
  color: ${(p) => p.color || "#5f0080"};
  background-color: ${(p) => p.backgroundColor || "white"};

  font-size: ${(p) => p.fontSize || "14px"};
  font-weight: ${(p) => p.fontWize || 500};

  display: ${(p) => p.display || "block"};

  padding: 0px 10px;
  margin: 0;
  text-align: center;
  cursor: pointer;

  &:disabled {
    border: 1px solid rgb(221, 221, 221);
    color: rgb(221, 221, 221);
    cursor: default;
  }
`;

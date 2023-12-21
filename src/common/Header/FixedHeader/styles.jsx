import styled from "styled-components";

export const FixedHeaderWrap = styled.div`
  
  min-width: 1050px;
  letter-spacing: -0.3px;
  background-color: rgb(255, 255, 255);
  box-shadow: rgb(0 0 0 / 7%) 0px 3px 4px 0px;
  width: 100%;
  position: fixed;
  z-index: 101;
  top: 0px;
  left: 0px;
  -webkit-box-pack: start;
  justify-content: flex-start;
`;

export const FixedHeaderLeft = styled.div`
  position: relative;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: flex-start;
  width: 1050px;
  height: 56px;
  margin: 0px auto;
`;

export const FixedInput = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  padding-left: 14px;
  border-radius: 6px;
  box-shadow: rgb(247 247 247) 0px 0px 0px 1px inset;
  position: fixed;
  z-index: 102;
  top: 10px;
  width: 220px;
  height: 36px;
  border: none;
  background-color: rgb(247, 247, 247);
  /* left: 1150px;
  margin-left: -405px; */

  @media (min-width: 1050px) {
    left: 50%;
    margin-left: 150px;
  }

  left: 50%;
  margin-left: 120px;
  input {
    width: 300px;
    background-color: inherit;
    border: none;
    outline: none;
    /* font-size: 16px; */
    letter-spacing: -0.33px;
  }
  button {
    position: relative;
    height: 30px;
    right: 15px;
    top: 0px;
    width: 40px;
    background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTI0IDI0SDZWNmgxOHoiLz4KICAgICAgICA8cGF0aCBkPSJNMjIuNSAyMi41aC0xNXYtMTVoMTV6Ii8+CiAgICAgICAgPGcgc3Ryb2tlPSIjMzMzIiBzdHJva2UtbGluZWNhcD0ic3F1YXJlIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuNiI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0xOC44MjUgMTMuMzUyYzAgMS43MjUtLjc1IDMuMjI1LTEuOTUgNC4yLS45NzUuODI1LTIuMTc1IDEuMjc1LTMuNTI1IDEuMjc1YTUuNDU3IDUuNDU3IDAgMCAxLTUuNDc1LTUuNDc1IDUuNDU3IDUuNDU3IDAgMCAxIDUuNDc1LTUuNDc1YzMtLjA3NSA1LjQ3NSAyLjQgNS40NzUgNS40NzV6TTIxLjM3NSAyMS4zNzVsLTMuNzUtMy43NSIvPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg==)
      0px 0px no-repeat;
  }
`;

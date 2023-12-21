import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { GoPencil } from "react-icons/go";
import styled from "styled-components";
import axios from 'axios';
import { useEffect, useState } from 'react';

const AddressBox = (props) => {


    return (

        <Li>
        <div style={{ display: "flex" }}>
          <LabelDiv>
            <label style={{ boxSizing: "border-box", margin: "0px" }} />
            <Input type="checkbox"></Input>
            <div style={{ marginRight: "12px" }}>
              <StyledIcon />
            </div>
          </LabelDiv>
          <AdressDiv>
          {props.item.default && ( 
            <DefaultAddress>기본배송지</DefaultAddress>
          )}
            {props.item.address}<br />
            <div style={{marginTop:"5px"}}>{props.item.addressDetail}</div>
          </AdressDiv>
          <Info style={{ flexBasis: "120px" }}>{props.item.name}</Info>
          <Info style={{ flexBasis: "100px" }}>010-4288-1828</Info>
          <Info style={{ flexBasis: "100px" }}>
            <div>
              <span style={{color:"rgb(149, 5, 38)"}}>샛별배송</span>
            </div>
          </Info>
          <Info style={{ flexBasis: "60px" }}>
            <UpdateBtn>
              <GoPencil />
            </UpdateBtn>
          </Info>
        </div>
      </Li>

    )
}
export default AddressBox;



const Li = styled.li`
  border-bottom: 1px solid rgb(244, 244, 244);
`;

const Input = styled.input`
  overflow: hidden;
  position: absolute;
  clip: rect(0px, 0px, 0px, 0px);
  clip-path: inset(50%);
  width: 1px;
  height: 1px;
  box-sizing: border-box;
  padding: 0;
`;

export const StyledIcon = styled(IoCheckmarkCircleOutline)`
  width: 24px;
  height: 24px;
  vertical-align: middle;
  overflow: hidden;
  fill: none;
`;

const LabelDiv = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  text-align: center;
  min-height: 49px;
  padding: 0px;
  margin: 20px 0px;
  color: rgb(51, 51, 51);
  letter-spacing: -0.3px;
  flex-basis: 60px;
`;

const AdressDiv = styled.div`
  -webkit-box-align: center;
  align-items: center;
  min-height: 49px;
  padding: 0px;
  margin: 20px 0px;
  color: rgb(51, 51, 51);
  letter-spacing: -0.3px;
  flex: 1 1 0%;
  -webkit-box-pack: start;
  justify-content: start;
  font-size: 16px;
  text-align: left;
`;

const DefaultAddress = styled.div`
  display: block;
  width: 74px;
  height: 22px;
  margin-bottom: 7px;
  border-radius: 11px;
  background-color: rgb(247, 247, 247);
  font-weight: 700;
  font-size: 12px;
  color: rgb(102, 102, 102);
  line-height: 22px;
  letter-spacing: 0px;
  text-align: center;
  box-shadow: rgb(149, 5, 38) 0px 1px 2px 0px;
`;

const Info = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  text-align: center;
  min-height: 49px;
  padding: 0px;
  margin: 20px 0px;
  color: rgb(51, 51, 51);
  letter-spacing: -0.3px;
`;

const UpdateBtn = styled.button`
  overflow: visible;
  background-color: transparent;
  border: none;
  text-transform: none;
  -webkit-appearance: button;
  cursor: pointer;
  font-size: 14px;
  color: #333;
  border-radius: 0;
`;
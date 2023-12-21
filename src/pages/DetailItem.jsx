import React from "react";
import Header from "../common/Header/Header";
import DetailItemBoard from "../components/DetailItem/DetailItemBoard";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
const DetailItem = () => {
  const {goodsCode} = useParams();

  useEffect(() => {
    console.log(goodsCode);
  } , [goodsCode]);
    return (
      <>
        <Header />
          <DetailItemBoard />
      </>
    );
  };
  
  export default DetailItem;
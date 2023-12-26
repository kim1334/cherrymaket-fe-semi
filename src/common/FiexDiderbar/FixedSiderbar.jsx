import win from "global";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getFromLocalStorage } from "../../components/Main/FixedCard";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

const FixedSiderbar = () => {
  const [isFixed, setIsFixed] = useState(false);
  const [savedItems, setSavedItems] = useState([]);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isScrollUpDisabled, setIsScrollUpDisabled] = useState(true);
  const [isScrollDownDisabled, setIsScrollDownDisabled] = useState(true);

  useEffect(() => {
    const items = getFromLocalStorage('clickedItem') || [];
    setSavedItems(items);
  }, []);



  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const triggerPosition = 300; // 고정 시작 위치

      if (scrollY > triggerPosition) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const handleScrollUp = () => {
    const productDiv = document.getElementById("productDiv");
    if (productDiv) {
      productDiv.scrollTop -= 50; // 조절 가능한 값
      setScrollPosition(productDiv.scrollTop);


    }
  };

  const handleScrollDown = () => {
    const productDiv = document.getElementById("productDiv");
    if (productDiv) {
      productDiv.scrollTop += 50; // 조절 가능한 값
      setScrollPosition(productDiv.scrollTop);

    }
  };
  return (
    <>
      <Container isFixed={isFixed}>
        <Warpper>
          <ImgDiv>
            <A>
              <Span1>
                <Span2>
                  <Img src="https://res.kurly.com/main/banners/deliveryInfo.jpg"></Img>
                </Span2>
              </Span1>
            </A>
          </ImgDiv>
          <BtnDiv>
            <BtnA>
              <Link to="/cart">
                <BtnItem>장바구니</BtnItem>
              </Link>
            </BtnA>
            <BtnA>
              <Link to="/newest">
                <BtnItem>베스트</BtnItem>
              </Link>
            </BtnA>
          </BtnDiv>
          {savedItems.length > 0 && (
            <>
              <ScrollButton
                onClick={handleScrollUp}

              >
                <FaArrowUp />
              </ScrollButton>
              <ProcudtDiv id="productDiv">
                <div style={{ paddingTop: "10px" }}>최근 본 상품</div>
                {savedItems.map((item, index) => (
                  <React.Fragment key={index}>
                    <ProductItem key={index}>
                      <Ul>
                        <Li>
                          <ProductA>
                            <Span1>
                              <Span2>
                                <Link to={`/detailitem/${item}`}>
                                  <Img
                                    src={`https://kr.object.ncloudstorage.com/cherry-product/${item}/${item}_0.png`}
                                    key={index}
                                  />
                                </Link>
                              </Span2>
                            </Span1>
                          </ProductA>
                        </Li>
                      </Ul>
                    </ProductItem>
                  </React.Fragment>
                ))}
              </ProcudtDiv>
              <ScrollButton
                onClick={handleScrollDown}

              >
                <FaArrowDown />
              </ScrollButton>
            </>
          )}

        </Warpper>
      </Container>
    </>
  );
};

export default FixedSiderbar;

const ProductA = styled.a`
  display: block;
  height: 80px;
  margin: 2px 0px;
`;

const Li = styled.li`
  display: list-item;
  text-align: -webkit-match-parent;
`;

const Ul = styled.ul`
  list-style-type: none;
  position: relative;
  top: 0px;
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  transition: top 0.2s ease 0s;
`;

const ProductItem = styled.div`
  overflow: hidden;
  margin-top: 6px;
`;

const BtnItem = styled.div`
  height: 29px;
  padding-top: 5px;
  text-align: center;
  border-bottom: 1px solid rgb(221, 221, 221);
  color: black;
`;

const BtnA = styled.a`
  background-color: transparent;
  text-decoration: none;
  color: inherit;
`;

const Img1 = styled.img`
  inset: 0px;
  box-sizing: border-box;
  padding: 0px;
  border: none;
  margin: auto;
  display: block;
  height: 80px;
  width: 60px;
  height: auto;
  min-width: 100%;
  max-width: 100%;
  min-height: 100%;
  max-height: 100%;
  object-fit: cover;
`;

const Img = styled.img`
  inset: 0px;
  box-sizing: border-box;
  padding: 0px;
  border: none;
  margin: auto;
  display: block;
  width: 100%;
  height: auto;
  min-width: 100%;
  max-width: 100%;
  min-height: 100%;
  max-height: 100%;
`;

const Span2 = styled.span`
  box-sizing: border-box;
  display: block;
  width: initial;
  height: initial;
  background: none;
  opacity: 1;
  border: 0px;
  margin: 0px;
  padding: 0px;
  max-width: 100%;
`;

const Span1 = styled.span`
  box-sizing: border-box;
  display: inline-block;
  overflow: hidden;
  width: initial;
  height: initial;
  background: none;
  opacity: 1;
  border: 0px;
  margin: 0px;
  padding: 0px;
  position: relative;
  max-width: 100%;
`;

const A = styled.a`
  background-color: transparent;
  text-decoration: none;
  color: inherit;
`;

const ProcudtDiv = styled.div`
  margin-top: 8px;
  border: 1px solid rgb(221, 221, 221);
  background-color: rgb(255, 255, 255);
  text-align: center;
  font-weight: 500;
  overflow: hidden;
  position: relative;
  max-height: 300px;
`;


const ScrollButton = styled.button`
color: black;
border: none;
padding: 3px 5px;
margin-top: 5px;
cursor: pointer;
color: #CDCDCD;
position: relative;
left: 50%;
transform: translateX(-50%);
`;

const BtnDiv = styled.div`
  width: 80px;
  border-width: 1px 1px 0px;
  border-top-style: solid;
  border-right-style: solid;
  border-left-style: solid;
  border-top-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-image: initial;
  border-bottom-style: initial;
  border-bottom-color: initial;
  background-color: rgb(255, 255, 255);
`;

const ImgDiv = styled.div`
  height: 120px;
  margin-bottom: 7px;
  background-size: cover;
`;

const Container = styled.div`
position: fixed;
top: 600px; /* Adjust this value based on your design */
right: 20px;
bottom: 0; /* Keep this as 0 to make it stretch till the bottom */
z-index: 1;
height : 600px;
${(props) => props.isFixed && `
    position: fixed;
    top: 100px; /* 고정시킬 위치 조절 */
`}
`;

const Warpper = styled.div`
width: 80px;
font - size: 12px;
line - height: 16px;
color: rgb(51, 51, 51);
letter - spacing: -0.3px;
/* Add other styles as needed */
`;
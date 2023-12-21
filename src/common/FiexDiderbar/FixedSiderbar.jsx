import styled from "styled-components";

const FixedSiderbar = () => {
  return (
    <>
      <Container>
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
              <BtnItem>등급별 혜택</BtnItem>
            </BtnA>
            <BtnA>
              <BtnItem>레시피</BtnItem>
            </BtnA>
          </BtnDiv>
          <ProcudtDiv>
            <button type="button" style={{ width: "100%" }}></button>
            최근 본 상품
            <ProductItme>
              <Ul>
                <Li>
                  <ProductA>
                    <Span1>
                      <Span2>
                        <Img1 src="https://product-image.kurly.com/cdn-cgi/image/width=120,height=156,fit=crop,quality=85/product/image/0b18df9b-7f8f-4381-9109-c599af7ef33d.jpg"></Img1>
                      </Span2>
                    </Span1>
                  </ProductA>
                </Li>
                <Li>
                  <ProductA>
                    <Span1>
                      <Span2>
                        <Img1 src="https://product-image.kurly.com/cdn-cgi/image/width=120,height=156,fit=crop,quality=85/product/image/3b9d5614-a213-4d02-b625-72ff7064f73c.jpeg"></Img1>
                      </Span2>
                    </Span1>
                  </ProductA>
                </Li>
                <Li>
                  <ProductA>
                    <Span1>
                      <Span2>
                        <Img1 src="https://img-cf.kurly.com/cdn-cgi/image/width=120,height=156,fit=crop,quality=85/shop/data/goods/1653036594968l0.jpeg"></Img1>
                      </Span2>
                    </Span1>
                  </ProductA>
                </Li>
              </Ul>
            </ProductItme>
            <button type="button"></button>
          </ProcudtDiv>
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

const ProductItme = styled.div`
  max-height: 209px;
  overflow: hidden;
  margin-top: 6px;
`;

const BtnItem = styled.div`
  height: 29px;
  padding-top: 5px;
  text-align: center;
  border-bottom: 1px solid rgb(221, 221, 221);
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
  position: absolute;
  top: 70px;
  right: 20px;
  bottom: -236px;
  z-index: 1;
  margin-top: 236px;
  overflow: hidden;
`;

const Warpper = styled.div`
position: fixed;
  top: 50%;
  transform: translateY(-50%);
  width: 80px;
  font-size: 12px;
  line-height: 16px;
  color: rgb(51, 51, 51);
  letter-spacing: -0.3px;
  right: 20px;
`;

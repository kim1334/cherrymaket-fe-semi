import React from 'react';
import Grid from './Grid';
import styled from 'styled-components';

const Footer = () => {
  return (
    <React.Fragment>
      <hr style={{width: "98%", border: "1px solid lightgray", marginBottom: "45px"}}/>
      <Grid>
        <GridSt>
          <WrapSt>
            <p style={{fontSize: "20px", fontWeight: "bold", marginLeft: "10px"}}>고객 행복 센터</p>
            <div>
              <span style={{fontSize: "40px", fontWeight: "bold", marginLeft: "10px"}}>1644-1107</span>
              <span style={{fontSize: "15px", marginLeft: "10px", color: "gray"}}>365 고객센터 (오전 7시 - 오후 7시)</span>
            </div>
            <ButtonDiv>
              <div>
                <button>카카오톡 문의</button>
                <span style={{fontSize: "15px", marginLeft: "10px", color: "gray"}}>365 고객센터 (오전 7시 - 오후 7시)</span>
              </div>
              <div>
                <button>1:1 문의</button>
                <span style={{fontSize: "15px", marginLeft: "10px", color: "gray"}}>24시간 접수 가능</span>
              </div>
              <div>
                <button>대량주문 문의</button>
                <span style={{fontSize: "15px", marginLeft: "10px", color: "gray"}}>비회원일 경우 메일로 문의 바랍니다.</span>
              </div>
            </ButtonDiv>
          </WrapSt>
          <WrapSt1>
            <UlSt>
              <li>컬리소개</li>
              <li>컬리소개영상</li>
              <li>인재채용</li>
              <li>이용약관</li>
              <li>개인정보처리방침</li>
              <li>이용안내</li>
            </UlSt>
            <BottomSt>
              <span style={{fontSize: "15px"}}>법인명(상호):주식회사 컬리 | 사업자등록번호 : 261-81-23567</span>
              <a href='https://www.ftc.go.kr/bizCommPop.do?wrkr_no=2618123567&apv_perm_no='>사업자정보확인</a><br/>
              <span style={{fontSize: "15px"}}>통신판매업 : 제 2018-서울강남-01646 호 | </span>
              <span style={{fontSize: "15px"}}>개인정보보호책임자 : 이원준</span><br/>
              <span style={{fontSize: "15px"}}>주소 : 서울특별시 강남구 테헤란로 133, 18층(역삼동) | </span>
              <span style={{fontSize: "15px"}}>대표이사 : 김슬아</span><br/>
              <span style={{fontSize: "15px"}}>입점문의 : </span>
              <a href='https://docs.google.com/forms/d/e/1FAIpQLScLB7YkGJwNRzpGpp0gbR1i4C1_uvTEFj43SFfJ_XEadTn3gQ/viewform'>입점문의하기 | </a>
              <span style={{fontSize: "15px"}}>마케팅 제휴 : </span>
              <a href='mailto:business@kurlycorp.com'>business@kurlycorp.com</a><br/>
              <span style={{fontSize: "15px"}}>채용문의 : </span>
              <a href='mailto:recruit@kurlycorp.com'>recruit@kurlycorp.com</a><br/>
              <span style={{fontSize: "15px"}}>팩스: 070 - 7500 - 6098 | </span>
              <span style={{fontSize: "15px"}}>이메일 : </span>
              <a href='mailto:help@kurlycorp.com'>help@kurlycorp.com</a><br/>
              <span style={{fontSize: "15px"}}>대량주문 문의 : </span>
              <a href='mailto:kurlygift@kurlycorp.com'>kurlygift@kurlycorp.com</a><br/>
            </BottomSt>

            <UlSt1>
              <li><img src="https://res.kurly.com/pc/ico/1810/ico_instagram.png" alt="마켓컬리 인스타그램 바로가기"/></li>
              <li><img src="https://res.kurly.com/pc/ico/1810/ico_fb.png" alt="마켓컬리 페이스북 바로가기"/></li>
              <li><img src="https://res.kurly.com/pc/ico/1810/ico_blog.png" alt="마켓컬리 블로그 바로가기"/></li>
              <li><img src="https://res.kurly.com/pc/ico/1810/ico_naverpost.png" alt="마켓컬리 포스트 바로가기"/></li>
              <li><img src="https://res.kurly.com/pc/ico/1810/ico_youtube.png" alt="마켓컬리 유튜브 바로가기"/></li>
            </UlSt1>
          </WrapSt1>
        </GridSt>
        <FooterSt>
          마켓컬리에서 판매되는 상품 중에는 마켓컬리에 입점한 개별 판매자가 판매하는 마켓플레이스(오픈마켓) 상품이 포함되어 있습니다.<br/>
          마켓플레이스(오픈마켓) 상품의 경우 컬리는 통신판매중개자로서 통신판매의 당사자가 아닙니다. 컬리는 해당 상품의 주문, 품질, 교환/환불 등 의무와 책임을 부담하지 않습니다.<br/><br/>
          © KURLY CORP. ALL RIGHTS RESERVED
        </FooterSt>
      </Grid>
    </React.Fragment>
  )
}

const GridSt = styled.div`
  /* background-color: green; */
  width: 100%;
  display: flex;
  flex-direction: row;
  font-family: 'Noto Sans KR', sans-serif;
`

const WrapSt = styled.div`
  /* background-color: yellow; */
  width: 700px;
  min-height: 350px;
  margin: auto;
  padding: 0px 0px 0px 70px;
`

const WrapSt1 = styled.div`
  /* background-color: yellow; */
  width: 900px;
  min-height: 350px;
  margin: auto;
`

const ButtonDiv = styled.div`
  display: flex;
  flex-direction: column;
  
  button {
    width: 160px;
    height: 50px;
    margin: 10px 0px 10px 20px;
    border: 1px solid lightgray;
    background: white;
  }
`

const UlSt = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0px;
  padding-bottom: 2px;
  height: 33px;
  list-style-type: none;
`

const UlSt1 = styled.ul`
  display: flex;
  align-items: center;
  justify-content: left;
  /* margin: 2px; */
  padding: 30px 0px 0px 30px;
  padding-bottom: 2px;
  height: 33px;
  list-style-type: none;

  & li {
    margin-right: 10px;
  }
`

const BottomSt = styled.div`
  color: gray;
  padding: 0px 0px 30px 33px;

  a {
    text-decoration-line: none;
  }
`

const FooterSt = styled.ul`
  background-color: #F2F2F2;
  height: 50px;
  text-align: center;
  padding: 30px;
  font-size: 10px;
  color: gray;
`
export default Footer;
import styled from "styled-components";


const WriteReview = () => {

    return (
        <>
            <section style={{display: 'block'}}>
                <article style={{padding: '22px 0px 40px 3px'}}>
                <ArticleUl>
                    <ArticleLi>주간 베스트 후기로 선정 시 5,000원 추가 적립</ArticleLi>
                    <ArticleLi>사진후기 100원, 글후기 50원 적립(퍼플, 더피플은 2배 적립)</ArticleLi>
                    <ArticleLi>멤버십 구독 시, 별도 혜택 적용으로 일반 적립</ArticleLi>
                    <ArticleLi>동일 상품의 후기는 월 1회만 적립금을 지급 해드립니다.</ArticleLi>
                    <ArticleLi>후기 작성 후 일주일 이내에 적립금이 지급됩니다.</ArticleLi>
                </ArticleUl>
                <ArticleBtn>자세히 보기</ArticleBtn>
                </article>
                <Div1>
                    <CountSpan>총 1개</CountSpan>
                    <GuideBtn><span>작성 시 유의사항</span><GuideIcon></GuideIcon></GuideBtn>
                    <Div2>
                        <A>
                            <ImgSpan>
                            <Img src="https://img-cf.kurly.com/cdn-cgi/image/width=120,height=156,fit=crop,quality=85/shop/data/goods/1607314173577l0.jpg"></Img>
                            </ImgSpan>
                        </A>
                        <p>
                            <a>
                            <TitleSpan>[상하목장]맛있으면 0칼로리 우유</TitleSpan>
                            </a>
                            <span>
                               2023.11.19 배송완료
                            </span>
                        </p>
                        <P>
                            <span>12.10까지 작성 가능</span>
                        </P>
                        <ReivewBtn>후기작성</ReivewBtn>
                    </Div2>
                </Div1>
            </section>
        
        </>
    )

}

export default WriteReview;

export const Div1 = styled.div`
position: relative;
    width: 100%;
    min-height: 600px;
    border-top: 1px solid rgb(51, 51, 51);
    margin-top: 30px;
`;

const ArticleUl = styled.ul`
    list-style-type: none;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    color: rgb(102, 102, 102);
`

const ArticleLi = styled.li`
    position: relative;
    padding-left: 11px;
    font-weight: 400;
    color: rgb(153, 153, 153);
    &::before {
        content: "";
        position: absolute;
        left: 1px;
        top: -1px;
        width: 10px;
        height: 21px;
        background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMyIgaGVpZ2h0PSIzIiB2aWV3Qm94PSIwIDAgMyAzIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNMi45NTYgMS41OTZDMi45NTYgMC45MTIgMi4zOTIgMC4zNDggMS42OTYgMC4zNDhDMS4wMTIgMC4zNDggMC40NDggMC45MTIgMC40NDggMS41OTZDMC40NDggMi4yOTIgMS4wMTIgMi44NDQgMS42OTYgMi44NDRDMi4zOTIgMi44NDQgMi45NTYgMi4yOTIgMi45NTYgMS41OTZaIiBmaWxsPSIjOTk5OTk5Ii8+Cjwvc3ZnPgo=) 50% 50% no-repeat;
        line-height: 21px;
      }
`;

const ArticleBtn = styled.button`
font-weight: 500;
font-size: 14px;
line-height: 16px;
text-decoration-line: underline;
color: rgb(76, 76, 76);
margin-top: 6px;
margin-left: 11px;
background-color: transparent;
`;

export const CountSpan = styled.span`
position: absolute;
    top: -38px;
    left: 0px;
    font-size: 14px;
    font-weight: 500;
    line-height: 17px;
`;

export const GuideBtn = styled.button`
position: absolute;
top: -38px;
right: 3px;
display: flex;
-webkit-box-pack: center;
justify-content: center;
-webkit-box-align: center;
align-items: center;
font-weight: 500;
font-size: 14px;
line-height: 14px;
color: rgb(153, 153, 153);
background-color: transparent;
`;

export const GuideIcon = styled.span`
display: inline-block;
width: 20px;
height: 20px;
margin-top: 2px;
background: url(https://res.kurly.com/mobile/ico/2010/ico_question_v2.svg) 100% 50% / 20px 20px no-repeat;
vertical-align: top;
`;

const Div2 = styled.div`
display: grid;
    grid-template-columns: 72px 400px 1fr 96px;
    -webkit-box-align: center;
    align-items: center;
    column-gap: 20px;
    width: 100%;
    padding: 20px 20px 19px;
    border-bottom: 1px solid rgb(244, 244, 244);
    font-size: 14px;
    line-height: 19px;
    color: rgb(153, 153, 153);
`;

const A = styled.a`
position: relative;
overflow: hidden;
border-radius: 6px;
width: 72px;
height: 72px;
`;

const ImgSpan = styled.span`
box-sizing: border-box;
display: block;
overflow: hidden;
width: initial;
height: initial;
background: none;
opacity: 1;
border: 0px;
margin: 0px;
padding: 0px;
position: absolute;
inset: 0px;
}
`

const Img = styled.img`
position: absolute;
    inset: 0px;
    box-sizing: border-box;
    padding: 0px;
    border: none;
    margin: auto;
    display: block;
    width: 0px;
    height: 0px;
    min-width: 100%;
    max-width: 100%;
    min-height: 100%;
    max-height: 100%;
    object-fit: cover;
`;

const TitleSpan = styled.span`
height: 21px;
    margin: -1px 0px 2px;
    font-size: 16px;
    font-weight: 500;
    line-height: 21px;
    color: rgb(51, 51, 51);
    cursor: pointer;
    text-overflow: ellipsis;
    display: -webkit-box;
    overflow: hidden;
    word-break: break-all;
    white-space: normal;
    -webkit-line-clamp: 1;
`;

const P = styled.p`
display: flex;
    flex-direction: column;
    -webkit-box-align: end;
    align-items: end;
    color: rgb(102, 102, 102);
`;

const ReivewBtn = styled.button`
width: 96px;
height: 36px;
border-radius: 3px;
border: 1px solid rgb(221, 221, 221);
font-size: 12px;
font-weight: 500;
line-height: 16px;
text-align: center;
color: rgb(51, 51, 51);
background-color: transparent;
`;
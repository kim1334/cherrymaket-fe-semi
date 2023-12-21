import React from 'react';
import { useState } from 'react';
import Menu from './Menu';
import styled from 'styled-components';
import { FlexWrapper,
    PrevButton,
    NextButton,
    ButtonWrapper,
    Container,
    TitleWraper,
    Title,
    TitleHead,
    TitleSpan,
    SubTitle,
} from './Style';

const OPTIONS = [
    {value : "전체", name : "전체"},
    {value : "배송", name : "배송"},
    {value : "상품", name : "상품"},
    {value : "회원", name : "회원"},
];
const SelectBox = ({options, onChange}) => {
    return (
        <select onChange = {onChange} style={{ 
            display: "block",
            width: "170px",
            height: "40px",
            padding: "0px 15px",
            margin: "0px",
            border: "1px solid rgb(238, 238, 238)",
            borderRadius: "0px",
            appearance: "none",
            background: "white",
            fontSize: "14px",
            color: "rgb(102, 102, 102)",
            outline: "none",
            cursor: "pointer",
            
        }}>
            {options.map((option) => (
                <option style = {{
                }}
                   key = {option.value} value={option.value}>{option.name}</option>
            ))}
        </select>
    );
};  



const faqs = [
    {
        id: 1,
        category: "배송",
        title: "배송비는 얼마인가요 ?",
        content: "배송비는 3000원입니다. 주문 금액이 일정 금액 이상인 경우 무료배송이 제공됩니다. 자세한 내용은 배송정책을 참조해주세요.",
    },
    {
        id: 2,
        category: "상품",
        title: "낚지볶음은 어떻게 조리하나요 ?",
        content: "낚지볶음은 5분간 볶아주세요. 중불에서 약간의 식용유와 간장, 설탕, 고추장을 넣고 볶아내면 맛있게 즐길 수 있습니다. 다양한 조리법을 시도해보세요!",
    },
    {
        id: 3,
        category: "결제",
        title: "어떤 결제 수단을 사용할 수 있나요 ?",
        content: "다양한 결제 수단을 제공하고 있습니다. 주문 시에는 신용카드, 계좌이체, 휴대폰 소액결제 등 다양한 옵션 중에서 선택할 수 있습니다. 편리한 결제 수단을 이용해 주세요.",
    },
    {
        id: 4,
        category: "회원 가입",
        title: "회원 가입은 필수인가요?",
        content: "회원 가입은 선택 사항이지만, 회원 가입 시 다양한 혜택과 할인을 받을 수 있습니다. 또한, 주문 및 배송 상태를 확인할 수 있는 등의 편리한 기능을 이용할 수 있습니다. 회원 가입을 통해 더 많은 혜택을 누려보세요!",
    },
    {
        id: 5,
        category: "환불",
        title: "상품을 받은 후 환불이 가능한가요?",
        content: "상품을 받은 후 7일 이내에는 환불이 가능합니다. 단, 상품이 사용되지 않았고 원래 포장이 그대로 유지된 경우에만 가능합니다. 환불 정책을 자세히 읽어보고 문의사항이 있으면 고객센터로 문의해주세요.",
    },
    {
        id: 6,
        category: "고객센터",
        title: "고객센터 연락처는 무엇인가요?",
        content: "고객센터로는 123-456-7890으로 연락하실 수 있습니다. 운영 시간은 평일 09:00 ~ 18:00이며, 주말 및 공휴일에는 휴무일입니다. 문의사항이 있으면 언제든지 연락해주세요.",
    },
    {
        id: 7,
        category: "상품",
        title: "상품의 유통기한은 어떻게 확인하나요?",
        content: "상품의 유통기한은 상품 포장에 표기되어 있습니다. 상품을 받아보신 후에는 반드시 유통기한을 확인하시고, 가능한 빠르게 소비해주시기를 권장합니다.",
    },
    // 추가적인 더미 데이터 추가 가능
];

const FaqDetail = styled.div`
        position: relative;
        display: ${({isOpen}) => (isOpen ? "block" : "none")};
        background-color: #f8f8f8;
        border-bottom: 1px solid rgb(244, 244, 244); 
        padding: 30px 30px 30px 70px;
        text-align: left;
        color: rgb(76, 76, 76);
        white-space: pre-line;
    `;




const FaqBoard = () => {
    
        const [isOpen, setIsOpen] = useState(null);
        const [selectCategory, setSelectCategory] = useState("전체");

        
        const toggleFaq = (index) => {
            setIsOpen(isOpen === index ? null : index);          
        };
        
        const handleCategory = (e) => {
            setSelectCategory(e.target.value);
        };

        const filteredFaqs = selectCategory === "전체" ? faqs : faqs.filter((faq) => faq.category === selectCategory);


    
    return (
        <>
            <FlexWrapper>
                <Menu />
                <Container>
                    <TitleWraper>
                        <Title>
                            <TitleHead>자주하는 질문</TitleHead>
                            <TitleSpan>고객님들께서 자주 하시는 질문들을 모두 모았습니다.</TitleSpan>
                        </Title>
                        <SelectBox options={OPTIONS} onChange = {handleCategory} />
                    </TitleWraper>
                    <SubTitle>     
                        <SubTitleNo>번호</SubTitleNo>
                        <SubTitleCategory>카테고리</SubTitleCategory>
                        <SubTitleLine>제목</SubTitleLine>
                    </SubTitle>
                    <UlWrapper>
                     
                        {filteredFaqs.map((faq, index) => (
                            <LiWrapper key={faq.id}>
                                <DivWrapper>
                                    <DivNo>{faq.id}</DivNo>
                                    <DivCategory>{faq.category}</DivCategory>
                                    <DivTitle onClick={() => toggleFaq(index)}>
                                        { faq.title }
                                    </DivTitle>
                                </DivWrapper>
                                <FaqDetail isOpen={isOpen === index}>
                                    <div><Answer/>{faq.content}</div>
                                </FaqDetail>
                            </LiWrapper>
                        ))}
                        
                    </UlWrapper>
                                {/* {notices.map((notice) => (
                                    <tr key={notice.id}>
                                        <td>{notice.id}</td>
                                        <td>{notice.title}</td>
                                        <td>{notice.writer}</td>
                                        <td>{notice.createdAt}</td>
                                        <td>{notice.view}</td>
                                    </tr>
                                ))} */}
                    <ButtonWrapper>
                        <div>
                            <PrevButton></PrevButton>
                            <NextButton></NextButton>
                        </div>
                    </ButtonWrapper>

                </Container>
            </FlexWrapper>  
            
        </>
    );

    
};

export default FaqBoard;

export const SubTitleNo = styled.th`
    flex-basis: 70px;
    text-align: center;
    line-height: 20px;
    font-weight: 400;
    color: rgb(51, 51, 51);
`;

export const SubTitleCategory = styled.th`
    flex-basis: 135px;
    text-align: center;
    line-height: 20px;
    font-weight: 400;
    color: rgb(51, 51, 51);
`;

export const SubTitleLine = styled.th`
    -webkit-box-flex: 1;
    flex-grow: 1;
    text-align: center;
    line-height: 20px;
    font-weight: 400;
    color: rgb(51, 51, 51);
`;
export const UlWrapper = styled.ul`
    display: flex;
    flex-direction: column;
    font-size: bold;
    list-style-type: none;
`;

export const LiWrapper = styled.li`
    display: list-item;
    text-align: -webkit-match-parent;
    cursor: pointer;
    list-style: none;
`;

export const DivWrapper = styled.div`
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid rgb(244, 244, 244);
`;
export const DivNo = styled.div`
    text-align: center;
    padding: 20px 0px;
    color: rgb(76, 76, 76);
    flex-basis: 70px;
`;

export const DivCategory = styled.div`
    text-align: center;
    padding: 20px 0px;
    color: rgb(76, 76, 76);
    flex-basis: 135px;
`;

export const DivTitle = styled.div`
    padding: 20px 0px 20px 20px;
    color: rgb(76, 76, 76);
    flex: 1 1 0%;
    text-align: left;
`;

export const Answer = styled.div`
    display: inline-block;
    content: "";
    top: 30px;
    padding-left: 30px;
    width: 24px;
    height: 12px;
    background: url(https://res.kurly.com/images/common/icon_faq.gif) 0px 0px no-repeat;
`;




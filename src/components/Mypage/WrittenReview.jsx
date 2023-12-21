
import styled from 'styled-components';
import {
    CountSpan,
    GuideBtn,
    GuideIcon,
} from './WriteReview.jsx';


const WrittenReview = (props) => {

    
    return (
        <>
 
            <Div2>
                <Div3>
                    <div style={{display:'flex', flexDirection: 'column'}}>
                        <A><TitleSpan>[kim`s butcher]맛있으면 0칼로리 삼겹살</TitleSpan></A>
                        <DateDiv><DateSpan>{props.item.createDate} 작성</DateSpan></DateDiv>
                    </div>
                </Div3>
                <UpdateBtn type='button'>후기수정</UpdateBtn>
                <ContentDiv>
                    <div style={{boxSizing: 'border-box', margin:'0'}}>
                        <ContentP>{props.item.content}</ContentP>
                    </div>
                    <Div4></Div4>
                </ContentDiv>
            </Div2>

        
        </>
    )

}

export default WrittenReview;

const Div1 = styled.div`
position: relative;
width: 100%;
min-height: 600px;
border-top: 1px solid rgb(51, 51, 51);
margin-top: 69px;
`;

const Div2 = styled.div`
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 20px 30px 20px 20px;
    border-bottom: 1px solid rgb(244, 244, 244);
`;

const Div3 = styled.div`
display: flex;
-webkit-box-align: center;
align-items: center;
gap: 20px;
`;

const A = styled.a`
background-color: transparent;
    text-decoration: none;
    color: inherit;
`;

const TitleSpan = styled.span`
max-width: 400px;
padding-top: 1px;
font-weight: 500;
font-size: 16px;
line-height: 21px;
display: -webkit-box;
overflow: hidden;
word-break: break-all;
white-space: normal;
-webkit-line-clamp: 1;
-webkit-box-orient: vertical;
`;

const DateDiv = styled.div`
position: relative;
display: flex;
flex-direction: row;
padding-top: 3px;
-webkit-box-align: center;
align-items: center;
`;

const DateSpan = styled.span`
font-size: 14px;
    line-height: 19px;
    color: rgb(153, 153, 153);
`;

const UpdateBtn = styled.button`
    width: 96px;
    height: 36px;
    border-radius: 3px;
    border: 1px solid rgb(221, 221, 221);
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    text-align: center;
    margin-left: auto;
    background-color: transparent;
`;

const ContentDiv = styled.div`
display: flex;
flex-direction: column;
width: 100%;
margin-top: 14px;
font-size: 14px;
font-weight: 400;
line-height: 21px;
`;

const ContentP = styled.p`
height: auto;
font-size: 14px;
font-weight: 400;
line-height: 21px;
color: rgb(51, 51, 51);
display: -webkit-box;
overflow: hidden;
-webkit-line-clamp: 3;
-webkit-box-orient: vertical;
word-break: break-all;
white-space: pre-wrap;
`;

const Div4 = styled.div`
display: flex;
    -webkit-box-pack: start;
    justify-content: start;
    -webkit-box-align: center;
    align-items: center;
    padding-top: 10px;
    gap: 10px;
`;
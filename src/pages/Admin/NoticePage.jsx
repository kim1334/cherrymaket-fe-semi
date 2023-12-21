import {
    FlexWrapper,
    Container,
    Wrapper,
} from './style.jsx'
import AdminHader from './AdminHader';

const NoticePage = () => {

    return (

        <FlexWrapper>
        <AdminHader />
            <Container>
                <Wrapper>
                    
                    <h1>게시판 여기다가 막 하면 됨</h1>

                </Wrapper>
            </Container>
    </FlexWrapper>
    
    )

}

export default NoticePage;
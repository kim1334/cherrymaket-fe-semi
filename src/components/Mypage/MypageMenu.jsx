
import {
    Container,
    Title,
    Customerul,
    Customerli,
    Customera
} from '../CustomerService/Menu';
import { Link } from 'react-router-dom';


const MypageMenu = () => {  

    return (
        <>
            <Container>
                <Title style={{color:'rgb(149, 5, 38)'}}><h2>마이체리</h2></Title>
                <Customerul>
                    <ul style={{listStyle : 'none'}}>
                        <Customerli>
                            <li><Link to="/mypage/order">주문내역</Link></li>
                            <li><Link to="/mypage/pick">찜한상품</Link></li>
                            <li><Link to="/mypage/address">배송지관리</Link></li>
                            <li><Link to="/mypage/review">상품후기</Link></li>
                            <li><Link to="/mypage/inquiry/products">상품문의</Link></li>
                            <li><Link to="/mypage/point">적립금</Link></li>
                            <li><Link to="/mypage/coupon">쿠폰</Link></li>
                            <li><Link to="/mypage/info">개인정보수정</Link></li>
                        </Customerli>
                    </ul>
                </Customerul>
                <Customera>
                    <Link>
                        <div>
                            <span>도움이 필요하신가요?</span>
                            <span>1:1 문의하기</span>
                        </div>
                    </Link>
                </Customera>
            </Container>
        </>
    )
}

export default MypageMenu;


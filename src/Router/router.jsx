import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "../pages/Main";
import Join from "../pages/Join";
import Login from "../pages/Login";
import Cart from "../pages/Cart";
import Admin from "../pages/Admin/Admin";
import Detail from "../pages/Detail";
import Newest from "../pages/Newest";
import Order from "../pages/Order";
import Mypage from "../pages/Mypages/Mypage";
import Kakao from "../components/Callback/Kakao";
import Naver from "../components/Callback/Naver";
import Notice from "../pages/Notice";
import Faq from "../pages/Faq";
import Qna from "../pages/Qna";
import QnaInsert from "../pages/QnaInsert";
import TossPay from "../components/Order/TossPay";
import { SuccessPage } from "../pages/Success";
import { FailPage } from "../pages/Fail";
import Pick from "../pages/Mypages/Pick";
import Coupon from "../pages/Mypages/Coupon";
import MyInfo from "../pages/Mypages/MyInfo";
import ProductInquiry from "../pages/Mypages/ProductInquiry";
import Review from "../pages/Mypages/Review";
import MypageAddress from "../pages/Mypages/MypageAddress";
import Point from '../pages/Mypages/Point';
import MyOrderDetail from '../pages/Mypages/MyOrderDetail';
import MyOrder from "../pages/Mypages/MyOrder";
import BestItem from "../pages/BestItem";
import DetailItem from "../pages/DetailItem";
import QnaUpdate from "../pages/QnaUpdate";
import ProductPage from "../pages/Admin/ProductPage";
import PaymentPage from "../pages/Admin/PaymentPage";
import NoticePage from "../pages/Admin/NoticePage";
const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="auth/kakao/callback" element={<Kakao />} />
          <Route path="auth/naver/callback" element={<Naver />} />
          <Route path="/join" element={<Join />} />
          <Route path="/detail/:productId" element={<Detail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/newest" element={<Newest />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/order" element={<Order />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/mypage/order" element={<MyOrder />} />
          <Route path="/mypage/pick" element={<Pick />} />
          <Route path="/mypage/Coupon" element={<Coupon />} />
          <Route path="/mypage/info" element={<MyInfo />} />
          <Route path="/mypage/address" element={<MypageAddress />} />
          <Route path="/mypage/inquiry/products" element={<ProductInquiry />} />
          <Route path="/mypage/review" element={<Review />} />
          <Route path="/mypage/point" element={<Point />} />
          <Route path="/mypage/myorderdetail/:orderCode" element={<MyOrderDetail />} />
          <Route path="/notice" element={<Notice />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/qna" element={<Qna />} />
          <Route path="/qnaInsert" element={<QnaInsert />} />
          <Route path="/sandbox" element={<TossPay />} />
          <Route path="/sandbox/success" element={<SuccessPage />} />
          <Route path="/sandbox/fail" element={<FailPage />} />
          <Route path="/qnaUpdate" element={<QnaUpdate />} />
          <Route path="/bestitem" element={<BestItem />} />
          <Route path="/detailitem/:goodsCode" element={<DetailItem />} />
          <Route path="/admin/product" element={<ProductPage />} />
          <Route path="/admin/payment" element={<PaymentPage />} />
          <Route path="/admin/Notice" element={<NoticePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;

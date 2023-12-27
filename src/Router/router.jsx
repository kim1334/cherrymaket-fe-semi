import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "../pages/Main";
import Join from "../pages/Join";
import Login from "../pages/Login";
import Cart from "../pages/Cart";
import Admin from "../pages/Admin/Admin";
import Newest from "../pages/Newest";
import Order from "../pages/Order";
import Notice from "../pages/Notice";
import Faq from "../pages/Faq";
import Qna from "../pages/Qna";
import QnaInsert from "../pages/QnaInsert";
import TossPay from "../components/Order/TossPay";
import { SuccessPage } from "../pages/Success";
import { FailPage } from "../pages/Fail";
import BestItem from "../pages/BestItem";
import DetailItem from "../pages/DetailItem";
import QnaUpdate from "../pages/QnaUpdate";
import CompletePayment from '../pages/CompletePayment';
import Categories from "../pages/Categories";
import SearchPage from '../pages/SearchPage';
import {KAKAO_AUTH_URL} from "../components/OAuth/OAuth";
import OAuth2RedirectHandler from "../components/OAuth/OAuth2RedirectHandeler";
import { Suspense } from "react";
import MypageRoutes from './MypageRoutes';
import AdminRoutes from './AdminRoutes';
const Router = () => {
  return (
    <>
      <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/join" element={<Join />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/newest" element={<Newest />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/order" element={<Order />} />
          {AdminRoutes()}
          {MypageRoutes()}
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
          <Route path="/order/completepayment/:orderCode" element={<CompletePayment />} />
          <Route path="/category/:categoryId" element={<Categories />} />
          <Route path="/search/:name" element={<SearchPage />} />
          <Route path="/oauth" element={<KAKAO_AUTH_URL/>} />
          <Route path="/oauth/callback/kakao" element={<OAuth2RedirectHandler/>} />
        </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
};

export default Router;

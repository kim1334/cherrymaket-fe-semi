import React, { lazy } from 'react';
import { Route } from 'react-router-dom';

const Mypage = lazy(() => import('../pages/Mypages/Mypage'));
const MyOrder = lazy(() => import('../pages/Mypages/OrderHistory'));
const Pick = lazy(() => import('../pages/Mypages/Pick'));
const Coupon = lazy(() => import('../pages/Mypages/Coupon'));
const MyInfo = lazy(() => import('../pages/Mypages/MyInfo'));
const MypageAddress = lazy(() => import('../pages/Mypages/MypageAddress'));
const ProductInquiry = lazy(() => import('../pages/Mypages/ProductInquiry'));
const Review = lazy(() => import('../pages/Mypages/Review'));
const Point = lazy(() => import('../pages/Mypages/Point'));
const MyOrderDetail = lazy(() => import('../pages/Mypages/MyOrderDetail'));

const MypageRoutes = () => {
  return (
    <>
      <Route path="/mypage" element={<Mypage />} />
      <Route path="/mypage/order" element={<MyOrder />} />
      <Route path="/mypage/pick" element={<Pick />} />
      <Route path="/mypage/coupon" element={<Coupon />} />
      <Route path="/mypage/info" element={<MyInfo />} />
      <Route path="/mypage/address" element={<MypageAddress />} />
      <Route path="/mypage/inquiry/products" element={<ProductInquiry />} />
      <Route path="/mypage/review" element={<Review />} />
      <Route path="/mypage/point" element={<Point />} />
      <Route path="/mypage/myorderdetail/:orderCode" element={<MyOrderDetail />} />
    </>
  );
};

export default MypageRoutes;

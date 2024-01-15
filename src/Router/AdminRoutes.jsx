import React, { lazy } from 'react';
import { Route } from 'react-router-dom';

const Admin = lazy(() => import('../pages/Admin/Admin'));
const ProductPage = lazy(() => import('../pages/Admin/ProductPage'));
const PaymentPage = lazy(() => import('../pages/Admin/PaymentPage'));
const NoticePage = lazy(() => import('../pages/Admin/NoticePage'));

const AdminRoutes = () => {
  return (
    <>
      <Route path="/admin" element={<Admin />} />
      <Route path="/admin/product" element={<ProductPage />} />
      <Route path="/admin/payment" element={<PaymentPage />} />
      <Route path="/admin/notice" element={<NoticePage />} />
    </>
  );
};

export default AdminRoutes;

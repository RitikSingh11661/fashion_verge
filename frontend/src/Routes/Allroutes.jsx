import { Route, Routes } from "react-router-dom";
import Pages from "../Wrappers/UserWrapper";
import { PrivateRoute } from "./PrivateRoute";
import {Admin} from "../Pages/Admin"

export const Allroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Pages.HomepageLayout />} />
      <Route path="/products" element={<Pages.ProductsLayout />} />
      <Route path="/login" element={<Pages.LoginLayout />} />
      <Route path="/signup" element={<Pages.SignupLayout />} />
      <Route path="/admin" element={<PrivateRoute><Admin/></PrivateRoute>} />
      <Route path="/cart" element={<PrivateRoute><Pages.CartLayout /></PrivateRoute>} />
      <Route path="/orders" element={<PrivateRoute><Pages.OrdersLayout /></PrivateRoute>} />
      <Route path="/product/:id" element={<Pages.SingleProductLayout />} />
      <Route path="/wishlist" element={<PrivateRoute><Pages.WishlistLayout /></PrivateRoute>} />
      <Route path="/payment" element={<PrivateRoute><Pages.PaymentLayout /></PrivateRoute>} />
      <Route path="*" element={<Pages.NotFoundLayout />} />
    </Routes>
  );
}
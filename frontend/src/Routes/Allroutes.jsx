import { Route, Routes } from "react-router-dom";
// import Pages from "../wrappers/userWrapper";
// import { Admin } from "../pages/Admin";
import { PrivateRoute } from "./PrivateRoute";
import { Homepage } from "../Pages/Homepage";
import Login from './../Pages/Login';
import Signup from './../Pages/Signup';
import { Admin } from './../Pages/Admin';
import { NotFound } from './../Pages/NoteFound';
import Payment from './../Pages/Payment/Payment';
import ProductPage from './../Pages/ProductPage';
import SingleProduct from "../Pages/Singleproductpage";


export const Allroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/admin" element={<Admin/>} />
      <Route path="/payment" element={<Payment/>} />
      <Route path="/products" element={<ProductPage/>} />
      <Route path="/products/:id" element={<SingleProduct/>} />
      <Route path="*" element={<NotFound/>} />
    </Routes>
  );
}
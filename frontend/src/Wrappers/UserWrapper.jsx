import NavTop from '../Components/NavTop';
import Navbar from '../Components/NavBarF';
import { Homepage } from '../Pages/Homepage';
import Payment from '../Pages/Payment/Payment';
import { NotFound } from '../Pages/NoteFound';
import Footer from '../Components/Footer';
import ProductPageAn from '../Pages/ProductPageAn';
import Login from '../Pages/Login';
import Signup from '../Pages/Signup';
import Cart from '../Pages/Cart';
import { Orders } from '../Pages/Orders';
import SingleProduct from '../Pages/Singleproductpage';
import Whishlist from '../Pages/Whishlist';

const withLayout = (WrappedComponent) => {
  return () => (
    <>
      <NavTop/>
      <Navbar/>
      <WrappedComponent />
      <Footer/>
    </>
  );
};

const Pages= {
  HomepageLayout: withLayout(Homepage),
  ProductsLayout: withLayout(ProductPageAn),
  LoginLayout: withLayout(Login),
  SignupLayout: withLayout(Signup),
  CartLayout: withLayout(Cart),
  OrdersLayout: withLayout(Orders),
  SingleProductLayout: withLayout(SingleProduct),
  WishlistLayout: withLayout(Whishlist),
  PaymentLayout: withLayout(Payment),
  NotFoundLayout: withLayout(NotFound),
};

export default Pages;
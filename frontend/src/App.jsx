import './App.css';
import Footer from './Components/Footer';
import MainRoutes from './Components/MainRoutes';
import Navbar from './Components/NavBarF';
import NavTop from './Components/NavTop';
import { Homepage } from './Pages/Homepage';
import SingleProduct from './Pages/Singleproductpage';


function App() {
  return (
    <div className="App">
      <NavTop/>
      <Navbar/>
      <MainRoutes/>
      <Footer/>
    </div>
  );
}

export default App;
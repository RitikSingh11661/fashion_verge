import './App.css';
import Footer from './Components/Footer';
import MainRoutes from './Components/MainRoutes';
import Navbar from './Components/NavBarF';
import NavTop from './Components/NavTop';
import { Homepage } from './Pages/Homepage';
import SingleProduct from './Pages/Singleproductpage';
import { Allroutes } from './Routes/Allroutes';


function App() {
  return (
    <div className="App">
      <NavTop/>
      <Navbar/>
      {/* <MainRoutes/> */}
      <Allroutes/>
      <Footer/>
    </div>
  );
}

export default App;
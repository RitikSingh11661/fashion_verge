import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/NavBarF';
import NavTop from './Components/NavTop';
import { Homepage } from './Pages/Homepage';
import SingleProduct from './Pages/Singleproductpage';


function App() {
  return (
    <div className="App">
      <h1>Homepage</h1>
      <SingleProduct/>
      <Footer/>
    </div>
  );
}

export default App;
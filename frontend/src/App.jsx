import './App.css';
import Navbar from './Components/NavBarF';
import NavTop from './Components/NavTop';
import { Homepage } from './Pages/Homepage';
import SingleProduct from './Pages/Singleproductpage';

function App() {
  return (
    <div className="App">
      {/* <h1>Homepage</h1> */}
       <NavTop/>
       <Navbar/>
       <Homepage/>
      <h1>Homepage</h1>
      <SingleProduct/>
    </div>
  );
}

export default App;
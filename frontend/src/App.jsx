import './App.css';
import Navbar from './Components/NavBarF';
import NavTop from './Components/NavTop';
import SingleProduct from './Pages/Singleproductpage';

function App() {
  return (
    <div className="App">
      {/* <h1>Homepage</h1> */}
       <NavTop/>
       <Navbar/>
      <h1>Homepage</h1>
      <SingleProduct/>
    </div>
  );
}

export default App;
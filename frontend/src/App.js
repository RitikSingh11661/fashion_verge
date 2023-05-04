import './App.css';
import Navbar from './Components/Navbar';
import SingleProduct from './Pages/Singleproductpage';

function App() {
  return (
    <div className="App">
      {/* <h1>Homepage</h1> */}
      <Navbar/>
      <h1>Homepage</h1>
      <SingleProduct/>
    </div>
  );
}

export default App;

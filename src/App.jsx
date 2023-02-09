import './App.css';
import Basket from './components/Basket/Basket';
import Carousel from './components/Carousel/Carousel';
import Categories from './components/Categories/Categories';
import Navbar from './components/Navbar/Navbar';
import Register from './components/Register/Register';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Carousel />
      <Categories />
      <Register />
      <Basket />
    </div>
  );
}

export default App;

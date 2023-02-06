import './App.css';
import Carousel from './components/Carousel/Carousel';
import Categories from './components/Categories/Categories';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Carousel />
      <Categories />

    </div>
  );
}

export default App;

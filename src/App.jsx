import './App.css';
import * as React from 'react';
import Navbar from './components/Navbar/Navbar';
import Register from './components/Register/Register';
import { StateContext } from './context';
import Basket from './components/Basket/Basket';
import EditUserInfo from './components/UserInfo/EditUserInfo'
import Footer from './components/Footer/Footer';
import Home from './page/Home/Home';
import Zakaz from './page/Zakaz/Zakaz';
import Katalog from './page/Katalog/Katalog';
import ProductDetail from './page/ProductDetail/ProductDetail';
import { Route, Routes, } from 'react-router-dom';
import Products from './page/Products/Products';
import axios from 'axios';
import Discount from './components/discount/Discount';

function App() {

  const [userInfo, setUserInfo] = React.useState({})
  const [category, setCategory] = React.useState([])
  const [products, setProducts] = React.useState([])
  const [basket, setBasket] = React.useState([])

  const [isLoading, setIsLoading] = React.useState(true)

  const productsInfo = async () => {
    await axios.get('https://askona.herokuapp.com/api/v1/product/')
      .then((res) => {
        setProducts(res.data)
        setIsLoading(false)
      })
      .catch((err) => console.log(err))
  }
  React.useEffect(() => {
    productsInfo()
  }, [])




  const [openEditUser, setOpenEditUser] = React.useState(false)
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false)

  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  return (
    <StateContext.Provider value={{ basket, setBasket, isLoading, open, handleOpen, setOpen, toggleDrawer, state, handleClose, category, setCategory, userInfo, setUserInfo, openEditUser, setOpenEditUser, products, setProducts }}>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/ProductDetail/:id' element={<ProductDetail />} />
          <Route path='/Zakaz' element={<Zakaz />} />
          <Route path='/Katalog' element={<Katalog />} />
        </Routes>
        <Register />
        <EditUserInfo />
        <Basket />
        <Discount />
        {/* <Order /> */}
        <Footer />
      </div>
    </StateContext.Provider>
  );
}

export default App;

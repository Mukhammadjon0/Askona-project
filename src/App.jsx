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
import Discount from './components/discount/Discount'
import ChangePassword from './components/UserInfo/ChangePassword';

function App() {
  const [userData, setUserData] = React.useState(JSON.parse(localStorage.getItem("userData")) || {})
  const [userInfo, setUserInfo] = React.useState({})
  const [category, setCategory] = React.useState([])
  const [basket, setBasket] = React.useState([])
  const [openEditUser, setOpenEditUser] = React.useState(false)
  const [openChangePassword, setOpenChangePassword] = React.useState(false)
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
  React.useEffect(() => {
    localStorage.setItem("userData", JSON.stringify(userData))
  }, [userData])

  return (
    <StateContext.Provider value={{ basket, userData, setUserData, setBasket, open, openChangePassword, setOpenChangePassword, handleOpen, setOpen, toggleDrawer, state, handleClose, category, setCategory, userInfo, setUserInfo, openEditUser, setOpenEditUser }}>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/productdetail/:id' element={<ProductDetail />} />
          <Route path='/zakaz' element={<Zakaz />} />
          <Route path='/katalog' element={<Katalog />} />
        </Routes>
        <Register />
        <EditUserInfo />
        <ChangePassword />
        <Basket />
        <Discount />
        {/* <Order /> */}
        <Footer />
      </div>
    </StateContext.Provider>
  );
}

export default App;

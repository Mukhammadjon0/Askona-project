import './App.css';
import * as React from 'react';
import Register from './components/Register/Register';
import { StateContext } from './context';
import Basket from './components/Basket/Basket';
import EditUserInfo from './components/UserInfo/EditUserInfo'
import Footer from './components/Footer/Footer';
import Home from './page/Home/Home';
import Zakaz from './page/Zakaz/Zakaz';
import ProductDetail from './page/ProductDetail/ProductDetail';
import { Route, Routes, } from 'react-router-dom';
import Products from './page/Products/Products';
import ChangePassword from './components/UserInfo/ChangePassword';
import Header from './components/Header/Header';
import Nav from './components/Navbar/Nav';
import ScrollTop from './components/ScrollTop/ScrollTop';
import Aksi from './page/Aksi/Aksi';

function App() {
  const [userData, setUserData] = React.useState(JSON.parse(localStorage.getItem("userData")) || {})
  const [userInfo, setUserInfo] = React.useState({})
  const [openEditUser, setOpenEditUser] = React.useState(false)
  const [openChangePassword, setOpenChangePassword] = React.useState(false)
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false)

  const [state, setState] = React.useState({
    right: false,
  });
  const handleOpenBasket = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  React.useEffect(() => {
    localStorage.setItem("userData", JSON.stringify(userData))
  }, [userData])

  return (
    <StateContext.Provider value={{ userData,setUserData, open, openChangePassword, setOpenChangePassword, handleOpenBasket, handleOpen, setOpen, state, setState, handleClose, userInfo, setUserInfo, openEditUser, setOpenEditUser }}>
      <div className="App">
        <Header />
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/productdetail/:id' element={<ProductDetail />} />
          <Route path='/zakaz' element={<Zakaz />} />
          <Route path='/aksi' element={<Aksi />} />
        </Routes>
        <Register />
        <EditUserInfo />
        <ChangePassword />
        <Basket setState={setState} state={state} />
        <Footer />
        <ScrollTop />
      </div>
    </StateContext.Provider>
  );
}

export default App;

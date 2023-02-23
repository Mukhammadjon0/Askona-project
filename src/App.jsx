import './App.css';
import * as React from 'react';
import Navbar from './components/Navbar/Navbar';
import Register from './components/Register/Register';
import { StateContext } from './context';
import Cancel from './assets/icon/cancel.svg'
import Prod from './assets/img/router.png'
import BasketComponent from './components/Basket/BasketComponent'
import { AiFillQuestionCircle } from 'react-icons/ai';
import Recommended from './components/Basket/Recommended';
import Box from '@mui/material/Box';
import Basket from './components/Basket/Basket';
import EditUserInfo from './components/UserInfo/EditUserInfo'
import Footer from './components/Footer/Footer';
import BasketTop from './components/BasketTop/BasketTop';
import Sidebar from './components/Sidebar/Sidebar';
import Home from './page/Home/Home';
import Zakaz from './page/Zakaz/Zakaz';
import Katalog from './page/Katalog/Katalog';
import ProductDetail from './page/ProductDetail/ProductDetail';
import { Route, Routes } from 'react-router-dom';
import Products from './page/Products/Products';

function App() {
  const [userInfo, setUserInfo] = React.useState({})
  const [openEditUser, setOpenEditUser] = React.useState(false)

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false)



  const basket = [
    { image: Prod, title: 'Анатомический матрас Askona Benefit', price: 48900, oldPrice: 97800, id: 1 },
    { image: Prod, title: 'Анатомический матрас Askona Benefit', price: 48900, oldPrice: 97800, id: 2 },
  ]

  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };


  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 'auto' }}
      role="presentation"
    >

      <div className='bg-white w-[604px] h-screen '>
        <div className="flex justify-between items-center px-6 py-6 border-b-[1px] border-gray-300">
          <h1 className='font-semibold text-3xl'>В корзине {basket.length} товара</h1>
          <button onClick={toggleDrawer(anchor, false)}>
            <img src={Cancel} alt="icon" />
          </button>
        </div>
        <div className="divide-y px-6">
          {basket.map(basketProd => <BasketComponent key={basketProd.id} {...basketProd} />)}
        </div>
        <div className="flex flex-row justify-between px-6 py-5 border-t-[1px] border-gray-300">
          <h1 className='font-bold text-xl text-black'>Итого:</h1>
          <span className='text-[#00B6C9] font-bold text-xl'>127 BYN</span>
        </div>
        <div className=" w-full px-6">
          <div className="bg-gray-200 px-3 py-2 rounded flex flex-row items-center gap-3">
            <h1 className='font-semibold text-base text-[#00B6C9]'>Будет начисленно 149 бонусов за этот заказ</h1>
            <AiFillQuestionCircle className='text-[#00B6C9]' />
          </div>
        </div>
        <div className="flex px-6 py-6 flex-row justify-between">
          <button className='text-gray-500 text-base px-16 border-[1px] border-gray-500 py-2 rounded'>Купить в 1 клик</button>
          <button className='text-white bg-[#00B6C9] text-base px-16 py-2 rounded'>Оформить заказ</button>
        </div>
        <div className="flex flex-row items-center p-6 justify-between">
          <h1 className='font-bold text-2xl text-black'>С этим товаром покупают</h1>
        </div>
        <Recommended />
      </div>

    </Box>

  );
  return (
    <StateContext.Provider value={{ open, handleOpen, setOpen, toggleDrawer, state, list, basket, handleClose, userInfo, setUserInfo, openEditUser, setOpenEditUser }}>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/ProductDetail' element={<ProductDetail />} />
          <Route path='/Zakaz' element={<Zakaz />} />
          <Route path='/Katalog' element={<Katalog />} />
        </Routes>
        <Register />
        <EditUserInfo />
        <Basket />
        <Footer />
      </div>
    </StateContext.Provider>
  );
}

export default App;

import './App.css';
import * as React from 'react';
import Register from './components/Register/Register';
import { StateContext } from './context';
import Basket from './components/Basket/Basket';
import EditUserInfo from './components/UserInfo/EditUserInfo'
import Footer from './components/Footer/Footer';
import Home from './page/Home/Home';
import ProductDetail from './page/ProductDetail/ProductDetail';
import { Route, Routes, } from 'react-router-dom';
import Products from './page/Products/Products';
import ChangePassword from './components/UserInfo/ChangePassword';
import Nav from './components/Navbar/Nav';
import ScrollTop from './components/ScrollTop/ScrollTop';
import Aksi from './page/Aksi/Aksi';
import MenuBar from './components/MenuBar/MenuBar';
import Search from './components/Search/Search';
import LikedMobile from './components/Liked/LikedMobile';
import Location from './components/Location/Location';
import TelNumbers from './components/TelNumbers/TelNumbers';
import axios from 'axios';
import ProductCtg from './page/Products/ProductCtg';
import SubCategory from './components/SubCategory/SubCategory';

function App() {
  const [userData, setUserData] = React.useState(JSON.parse(localStorage.getItem("userData")) || {})
  const [userInfo, setUserInfo] = React.useState({})
  const [openEditUser, setOpenEditUser] = React.useState(false)
  const [openChangePassword, setOpenChangePassword] = React.useState(false)
  const [telInfo, setTelInfo] = React.useState(false)
  const [open, setOpen] = React.useState(false);

  const [lang, setLang] = React.useState('ru')
  const [page1Lang, setPage1Lang] = React.useState([])
  const [page2Lang, setPage2Lang] = React.useState()

  const [showSubCtg, setShowSubCtg] = React.useState({
    top: false,
  });

  // const [subCtg_id, setSubCtg_id] = React.useState()
  const [subCtg_id, setSubCtg_id] = React.useState(JSON.parse(localStorage.getItem("subCtg_id")) || "")
  // const [type, setType] = React.useState('')
  const [type, setType] = React.useState(JSON.parse(localStorage.getItem("type")) || "")

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
    localStorage.setItem("type", JSON.stringify(type))
    localStorage.setItem("subCtg_id", JSON.stringify(subCtg_id))
  }, [userData, type, subCtg_id])

  React.useEffect(() => {
    const body = {
      method: "page1",
      params: {
        lan: lang
      }
    }
    axios.post('https://api.basito.uz/apps/api/v1/pages/', body)
      .then(res => {
        setPage1Lang(res?.data?.data)
      })
      .catch((err) => console.log(err))
  }, [lang])

  React.useEffect(() => {
    const body = {
      method: "page2",
      params: {
        lan: lang
      }
    }
    axios.post('https://api.basito.uz/apps/api/v1/pages/', body)
      .then(res => {
        setPage2Lang(res?.data?.data)
      })
      .catch((err) => console.log(err))
  }, [lang])

  return (
    <StateContext.Provider value={{ type, setType, subCtg_id, setSubCtg_id, page2Lang, lang, setLang, showSubCtg, setShowSubCtg, telInfo, setTelInfo, userData, setUserData, open, openChangePassword, setOpenChangePassword, handleOpenBasket, handleOpen, setOpen, state, setState, handleClose, userInfo, setUserInfo, openEditUser, setOpenEditUser }}>
      <div className="App">
        <Nav language={page1Lang?.header} />
        <div className="w-full container desktop:hidden tablet:hidden mobile:flex justify-center mt-2">
          <Search />
        </div>
        <SubCategory />
        <Routes>
          <Route path='/' element={<Home language={page1Lang?.page} />} />
          <Route path='/products/:id' element={<Products />} />
          <Route path='/productCtg/:id' element={<ProductCtg />} />
          <Route path='/location' element={<Location />} />
          <Route path='/liked' element={<LikedMobile language={page1Lang?.header} />} />
          <Route path='/productdetail/:id' element={<ProductDetail />} />
          <Route path='/aksi' element={<Aksi />} />
        </Routes>
        <Register />
        <EditUserInfo language={page1Lang?.header} />
        <ChangePassword language={page1Lang?.header} />
        <Basket setState={setState} state={state} language={page1Lang?.header} />
        <Footer language={page1Lang?.footer} />
        <ScrollTop />
        <TelNumbers />
        <MenuBar language={page1Lang?.header} />
      </div>
    </StateContext.Provider>
  );
}

export default App;

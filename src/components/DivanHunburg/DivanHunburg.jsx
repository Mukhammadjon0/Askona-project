import React, { useContext } from 'react'
import span from "../../assets/img/span.png"
import undov from "../../assets/img/undov.png"
import Knopka from "../../assets/img/Knopka2.png"
import Image from "../../assets/img/Image.png"
import Frame from "../../assets/img/Frame.png"
import Frame1 from "../../assets/img/Frame2.png"
import Frame2 from "../../assets/img/Frame (1).png"
import Frame3 from "../../assets/img/Frame (2).png"
import Group from "../../assets/img/Group.png"
import { Box, Drawer } from '@mui/material'
import { StateContext } from '../../context'
import Sidebar from '../Sidebar/Sidebar'
import { Link, useNavigate } from 'react-router-dom'
import { AiOutlineHeart } from 'react-icons/ai'
import { useAddProductToBasketMutation } from '../../services/basketApi'
import { useGetCommentsQuery } from '../../services/commentApi'
function DivanHunburg({ data, setState, state }) {

  const { data: comments = [] } = useGetCommentsQuery(data.id)

  const [addProduct] = useAddProductToBasketMutation()
  const { userData, handleOpen } = useContext(StateContext)
  const navigate = useNavigate()


  const handleAddProduct = (productId) => {
    addProduct(productId)
  }
  const addToBasket = () => {
    if (userData.token) {
      handleAddProduct(data.id)
    }
    else handleOpen()
  }
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };
  return (
    <div>
      <div className='w-full'>
        <div className="flex justify-end">
          <AiOutlineHeart className="text-gray-500 hover:text-red-500 text-2xl cursor-pointer" />
        </div>
        <h1 className="font-extrabold text-3xl">
          {data.name}
        </h1>
        <p className="text-gray-400 mt-2">Код товара: {data.code}</p>
        <h2 className="flex font-semibold mt-4">
          <span className="text-[#FF0064] mr-2">До конца акции осталось: </span>
          <span>3 дня 10:16:31</span>
        </h2>
        <div className="flex items-end mt-4">
          <h2 className="text-[#00B9C0] font-semibold text-2xl mr-7">
            {data.price} BYN
          </h2>
          <p className="font-normal text-gray-400 line-through mr-7">
            97 800 BYN
          </p>
          <img src={span} alt="" />
        </div>
        <div className="flex justify-between mt-2">
          <div className="flex">
            <p className="text-gray-400 mr-1">Рассрочка от </p>
            <p className="underline"> {data.credit} BYN</p>
          </div>
          <p className='decoration-dotted'>Оплатить частями</p>
        </div>
        <div className="flex mt-2">
          <img src={undov} alt="" />
          <p className="mx-1 font-semibold">+ {data.bonus} </p>
          <p className="text-gray-400">Бонусных баллов за покупку</p>
        </div>
        <div className="mt-9">
          <h1>Размер спального места:</h1>
          <select className="h-10 flex justify-between border-2 border-solid border-gray-300 items-center px-2 rounded mt-3 w-full outline-[#00B6C9]">
            <option>120x200</option>
            <option>140x200</option>
            <option>160x200</option>
            <option>180x200</option>
            <option>200x200</option>
          </select>
        </div>
        <div className="mt-7">
          <h1>Ткань:</h1>
          <div className="h-10 flex justify-between border-2 border-solid border-gray-300 items-center px-2 rounded mt-3">
            <div className="flex items-center">
              <img className="mr-2" src={Image} alt="" />
              <h2>Sky Velvet 99</h2>
            </div>
            <img src={Knopka} alt="" />
          </div>
          <div>
            <button className="h-10 w-[100%] bg-gray flex justify-center border-2 border-solid  border-gray-300 items-center px-2 rounded mt-5 bg-">Изменить конфигурацию</button>
            <div className="flex justify-between mt-2">
              <button onClick={addToBasket} className="w-[47%] rounded bg-[#00B9C0] text-white py-2">
                В корзину
              </button>
              <button onClick={() => navigate('/zakaz')} className="w-[47%] border-2 border-solid  border-gray-300 py-2 rounded">
                Купить в 1 клик
              </button>
            </div>
          </div>

          <div>
            <div className="mt-10 flex items-center justify-between border-b border-solid border-gray-300 pb-5 ">
              <Link to={'/'}>
                <div className="flex items-center">
                  <img className="mr-2" src={Frame} alt="" />
                  <h2>Мы рекомендуем к товару</h2>
                </div>
              </Link>
              <img src={Knopka} alt="" />
            </div>

            {["right"].map((anchor) => (
              <React.Fragment key={anchor}>
                <button onClick={toggleDrawer(anchor, true)} className='w-full'>
                  <div className="mt-5 flex items-center duration-300 justify-between border-b border-solid border-gray-300 pb-5 ">
                    <div className="flex items-center">
                      <img className="mr-2" src={Group} alt="" />
                      <h2>Доставка и самовывоз</h2>
                    </div>
                    <img src={Knopka} alt="" />
                  </div>
                </button>
                <Drawer
                  anchor={anchor}
                  open={state[anchor]}
                  onClose={toggleDrawer(anchor, false)}
                >
                  <Box
                    sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 600 }}
                    role="presentation"
                  // onClick={toggleDrawer(anchor, false)}
                  // onKeyDown={toggleDrawer(anchor, false)}
                  >
                    <Sidebar />
                  </Box>
                </Drawer>
              </React.Fragment>
            ))}

            <div className="mt-5 flex items-center justify-between border-b border-solid border-gray-300 pb-5 ">
              <div className="flex items-center">
                <img className="mr-2" src={Frame2} alt="" />
                <h2>Характеристики</h2>
              </div>
            </div>
            <div className="mt-5 flex items-center justify-between border-b border-solid border-gray-300 pb-5 ">
              <div className="flex items-center">
                <img className="mr-2" src={Frame1} alt="" />
                <h2>Описание</h2>
              </div>
            </div>
            <div className="mt-5 flex items-center justify-between border-b border-solid border-gray-300 pb-5 ">
              <div className="flex items-center">
                <img className="mr-2" src={Frame3} alt="" />
                <h2>Отзывы ({comments?.length || 0})</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DivanHunburg
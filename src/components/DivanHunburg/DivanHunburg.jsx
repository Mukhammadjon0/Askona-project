import React from 'react'
import span from "../../assets/img/span.png"
import undov from "../../assets/img/undov.png"
import Knopka from "../../assets/img/Knopka2.png"
import Image from "../../assets/img/Image.png"
import Frame from "../../assets/img/Frame.png"
import Frame1 from "../../assets/img/Frame2.png"
import Frame2 from "../../assets/img/Frame (1).png"
import Frame3 from "../../assets/img/Frame (2).png"
import Group from "../../assets/img/Group.png"
import { Drawer } from '@mui/material'
import { StateContext } from '../../context'
import Sidebar from '../Sidebar/Sidebar'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { AiOutlineHeart } from 'react-icons/ai'
function DivanHunburg(props) {
  const { toggleDrawer, state } = React.useContext(StateContext)
  const userData = JSON.parse(localStorage.getItem("userData"))



  const addToBasket = () => {
    const body = {
      product_id: props.product.id
    }
    const headers = {
      Authorization: `Bearer ${userData?.token}`
    }
    axios.post("https://askona.herokuapp.com/api/v1/basket/", body, { headers })
      .then(res => {
        console.log(res.data)
      })
      .catch(err => console.log(err))
  }
  return (
    <div>
      <div className='w-full'>
        <div className="flex justify-end">
          <AiOutlineHeart className="text-gray-500 hover:text-red-500 text-2xl cursor-pointer" />
        </div>
        <h1 className="font-extrabold text-3xl">
          {props.product.name}
        </h1>
        <p className="text-gray-400 mt-2">Код товара: {props.product.code}</p>
        <h2 className="flex font-semibold mt-4">
          <span className="text-[#FF0064] mr-2">До конца акции осталось: </span>
          <p>3 дня 10:16:31</p>
        </h2>
        <div className="flex items-end mt-4">
          <h2 className="text-[#00B9C0] font-semibold text-2xl mr-7">
            {props.product.price} BYN
          </h2>
          <p className="font-normal text-gray-400 line-through mr-7">
            97 800 BYN
          </p>
          <img src={span} alt="" />
        </div>
        <div className="flex justify-between mt-2">
          <p className="flex">
            <p className="text-gray-400 mr-1">Рассрочка от </p>
            <p className="underline"> {props.product.credit} BYN</p>
          </p>
          <p className='decoration-dotted'>Оплатить частями</p>
        </div>
        <div className="flex mt-2">
          <img src={undov} alt="" />
          <p className="mx-1 font-semibold">+ {props.product.bonus} </p>
          <p className="text-gray-400">Бонусных баллов за покупку</p>
        </div>
        <div className="mt-9">
          <h1>Размер спального места:</h1>
          <div className="h-10 flex justify-between border-2 border-solid border-gray-300 items-center px-2 rounded mt-3 w-full">
            <h2>160x200</h2>
            <img src={Knopka} alt="" />
          </div>
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
            <button className="h-10 w-[100%] bg-gray flex justify-center border-2 border-solid  border-gray-300 items-center px-2 rounded mt-5 bg-">
              <h2>Изменить конфигурацию</h2>
            </button>
            <div className="flex justify-between mt-2">
              <button onClick={addToBasket} className="w-[47%] rounded bg-[#00B9C0] text-white py-2">
                В корзину
              </button>
              <button className="w-[47%] border-2 border-solid  border-gray-300 py-2 rounded">
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
                  <Sidebar />
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
                <h2>Отзывы ({props.comments.length})</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DivanHunburg
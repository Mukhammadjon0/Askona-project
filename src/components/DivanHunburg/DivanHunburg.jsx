import React, { useContext } from 'react'
import span from "../../assets/img/spanImg.png"
import undov from "../../assets/img/undov.png"
import Frame from "../../assets/img/Frame.png"
import Frame1 from "../../assets/img/Frame2.png"
import Frame2 from "../../assets/img/Frame (1).png"
import Frame3 from "../../assets/img/Frame (2).png"
import Group from "../../assets/img/Group.png"
import { Box, Drawer } from '@mui/material'
import { StateContext } from '../../context'
import Sidebar from '../Sidebar/Sidebar'
import { useNavigate } from 'react-router-dom'
import { useAddProductToBasketMutation } from '../../services/basketApi'
import { useCommentsQuery } from '../../services/commentApi'
import { MdKeyboardArrowRight } from 'react-icons/md'
import Like from '../../assets/svg/heart-regular.svg'
import Liked from '../../assets/svg/heart-solid.svg'
import { useAddProductToSavedMutation, useSavedQuery } from '../../services/savedApi'
import { Link } from "react-scroll";
import Color from '../Color/Color'

function DivanHunburg({ data, }) {
  const { data: comments = [] } = useCommentsQuery(data.id)
  const [addProduct] = useAddProductToBasketMutation()
  const [addToProSaved] = useAddProductToSavedMutation()
  const { data: proSaved } = useSavedQuery();
  const { userData, handleOpen } = useContext(StateContext)
  const navigate = useNavigate()

  // add To basket
  const addToBasket = () => {
    if (userData.token) {
      addProduct(data.id)
    }
    else handleOpen()
  }
  // kutip 1 click
  const kupitClick = () => {
    if (userData.token) {
      addProduct(data.id)
      navigate('/zakaz')
    }
    else handleOpen()
  }
  // open location sidebar
  const [state, setState] = React.useState({
    right: false,
  });
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
          <div className="">
            <button onClick={() => {
              if (userData?.token) {
                addToProSaved(data.id)
              }
              else handleOpen()
            }
            } className="">
              {proSaved?.length > 0 ? proSaved?.some(saved => saved.product_id === data.id) ? (<img className="w-5" src={Liked} alt="icon" />) : (<img className="w-5" src={Like} alt="icon" />) : <img className="w-5" src={Like} alt="icon" />}
            </button>
          </div>

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
            {data.price.toLocaleString("uz-UZ")} BYN
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
          <Color />
          <div>
            <button className="h-10 w-[100%] bg-gray flex justify-center border-2 border-solid  border-gray-300 items-center px-2 rounded mt-5 bg-">Изменить конфигурацию</button>
            <div className="flex items-center mt-2 gap-5">

              <button onClick={addToBasket} className="rounded border-2 border-solid border-[#00B6C9] text-white w-full py-2 bg-[#00bac9] duration-200 hover:bg-[#0099a5] active:scale-95">
                В корзину
              </button>

              <button onClick={kupitClick} className="border-2 border-solid border-gray-300 rounded w-full py-2 bg-transparent duration-200 hover:bg-gray-100 active:scale-95">
                Купить в 1 клик
              </button>
            </div>
          </div>

          <div>
            <Link className='cursor-pointer' to={'/products'}>
              <div className="mt-10 flex items-center justify-between border-b border-solid border-gray-300 pb-5 ">
                <div className="flex items-center">
                  <img className="mr-2" src={Frame} alt="" />
                  <h2>Мы рекомендуем к товару</h2>
                </div>
                <MdKeyboardArrowRight className='text-[#00B6C9]' />
              </div>
            </Link>

            {["right"].map((anchor) => (
              <React.Fragment key={anchor}>
                <button onClick={toggleDrawer(anchor, true)} className='w-full'>
                  <div className="mt-5 flex items-center duration-300 justify-between border-b border-solid border-gray-300 pb-5 ">
                    <div className="flex items-center">
                      <img className="mr-2" src={Group} alt="" />
                      <h2>Доставка и самовывоз</h2>
                    </div>
                    <MdKeyboardArrowRight className='text-[#00B6C9]' />
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
                    <Sidebar setState={setState} />
                  </Box>
                </Drawer>
              </React.Fragment>
            ))}

            <Link className={'cursor-pointer'} activeClass="active" smooth spy to="about">
              <div className="mt-5 flex items-center justify-between border-b border-solid border-gray-300 pb-5 ">
                <div className="flex items-center">
                  <img className="mr-2" src={Frame2} alt="" />
                  <h2>Характеристики</h2>
                </div>
              </div>
            </Link>
            <Link className={'cursor-pointer'} activeClass="active" spy={true} smooth={true} duration={500} to={'ops'}>
              <div className="mt-5 flex items-center justify-between border-b border-solid border-gray-300 pb-5">
                <div className="flex items-center">
                  <img className="mr-2" src={Frame1} alt="" />
                  <h2>Описание</h2>
                </div>
              </div>
            </Link>
            <Link className={'cursor-pointer'} activeClass="active" smooth spy to={'comment'}>
              <div className="mt-5 flex items-center justify-between border-b border-solid border-gray-300 pb-5">
                <div className="flex items-center">
                  <img className="mr-2" src={Frame3} alt="" />
                  <h2>Отзывы ({comments?.cnt})</h2>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

    </div >
  );
}

export default DivanHunburg
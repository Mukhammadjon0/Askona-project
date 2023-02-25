import React, { useContext, useEffect, useState } from "react";
import Topadvenses from "../../assets/img/topadv.png";
import { BiSearchAlt2 } from "react-icons/bi";
import logoAksona from "../../assets/img/logo.png";
import { AiFillCloseCircle } from "react-icons/ai";
import { BsChevronDown } from "react-icons/bs";
import { TbPhoneCall } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";
import { CgLogIn, CgShoppingCart } from "react-icons/cg";
import { IoIosStats } from "react-icons/io";
import { HiBars3BottomLeft } from "react-icons/hi2";
import { FaPercentage } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { StateContext } from "../../context";
import UserInfo from "../UserInfo/UserInfo";
import { IconButton } from "@mui/material";
import Category1 from "../../assets/img/matras.png";
import Category2 from "../../assets/img/podush.png";
import Category3 from "../../assets/img/kravat.png";
import Category4 from "../../assets/img/odel.png";
import Category5 from "../../assets/img/divan.png";
import Category6 from "../../assets/img/mebel.png";
import Category7 from "../../assets/img/dlya-doma.png";
import Category8 from "../../assets/img/kreslo.png";
import "./Navbar.css";
import Card from "../card/Card";
import Liked from '../Liked/Liked'

function Navbar() {
  const { handleOpen, toggleDrawer, basket, userData } = useContext(StateContext)

  const [categories, setCategories] = useState(true);
  console.log(userData)

  // const userData = JSON.parse(localStorage.getItem("userData"))

  const data = [
    {
      title: "По категориям",
      type: [
        "Американские матрасы",
        "Чехлы на матрас",
        "Наматрасники",
        "Детские матрасы",
      ],
    },
    {
      title: "Обобенности",
      type: [
        "Двухспальные",
        "Односпальные",
        "Полуторные",
        "Евро",
        "Ортопедические",
      ],
    },

    {
      title: "По жесткости",
      type: [
        "Пружинные",
        "Средней жесткости",
        "Жесткие",
        "Очень жесткие",
        "Разносторонней жесткости",
      ],
    },
    {
      title: "По размеру",
      type: [
        "80х200",
        "90х200",
        "120х200",
        "140х200",
        "160х200",
        "180х200",
        "200х200",
      ],
    },

    {
      title: "По свойствам",
      type: ["Пружинные", "Беспружинные", "С независимым пружинным блоком"],
    },

    {
      title: "По материалау",
      type: [
        "Латексные",
        "Кокосовые",
        "С ортопедической пеной",
        "Из пены с памятью формы",
      ],
    },
  ];

  return (
    <div className="">
      <div className="flex w-full items-center bg-[#02B9BF]">
        <img className="w-[80%] m-auto bg-[#00B6C9]" src={Topadvenses} alt="" />
        <button>
          <AiFillCloseCircle className="text-white mr-7" />
        </button>
      </div>


      <nav className="w-full py-5">
        <div className="container m-auto flex items-center">
          <div className="w-full flex flex-row items-center justify-between">
            <div className="flex flex-row items-center">
              <div className="flex flex-row items-center gap-10">
                <Link to={'/'}>
                  <img className='' src={logoAksona} alt="logo" />
                </Link>
                <NavLink className='flex items-center font-normal text-sm leading-4' href="#!">Минск <BsChevronDown className='text-navTopbBg pl-2 text-3xl' /></NavLink>
                <span className='text-start flex items-center text-gray-400 text-sm'>Магазины: <p className='font-bold text-black pl-2'>30</p></span>
                <div className="flex gap-8">
                  <div className="father rounded py-2 px-2 flex items-center gap-4 w-96 border border-gray-300">
                    <BiSearchAlt2 className="text-[#00B6C9] text-lg font-bold" />
                    <input
                      type="text"
                      placeholder="Поиск по товарам..."
                      className="outline-none w-full search-input"
                    />
                  </div>
                  <button className="group rounded flex items-center border border-gray-300 py-2 px-2 text-center hover:text-[#00b6c9] hover:border-[#00b6c9]">
                    <TbPhoneCall className="text-gray-400  pr-2 text-2xl group-hover:text-[#00b6c9]" />
                    Перезвоните мне
                  </button>
                </div>
              </div>
              <div className="flex ml-5 items-center gap-1">
                <p className='text-black text-lg flex font-semibold'>7176</p>
                <div className='text-[#00B6C9] text-xs flex flex-col leading-2'>
                  <p>показать</p><p>номера</p>
                </div>
              </div>
            </div>
            <div className="flex gap-3 text-2xl text-black items-center ">
              {userData.token ? (
                <UserInfo />
              ) : (
                <IconButton onClick={handleOpen}>
                  <CgLogIn className="text-black" />
                </IconButton>
              )}

              <IconButton>
                <IoIosStats className="cursor-pointer text-black" />
              </IconButton>

              <div className=''>
                <Liked />
              </div>

              {["right"].map((anchor) => (
                <React.Fragment key={anchor}>
                  <IconButton onClick={toggleDrawer(anchor, true)}>
                    <div className="relative cursor-pointer">
                      <div className="w-[18px] h-[18px] rounded-full bg-[#00BAC1] absolute top-[-5px] right-[-5px] flex justify-center items-center">
                        <p className='font-semibold text-[12px] text-white'>{basket.length}</p>
                      </div>
                      <CgShoppingCart className="cursor-pointer text-black" />
                    </div>
                  </IconButton>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </nav>


      <div className="w-full border-b-[1px] border-gray-200 py-3">
        <div className="container">
          <div className="flex items-center justify-between flex-wrap">
            <button
              onClick={() => setCategories((p) => !p)}
              className="w-[180px] border border-solid bg-[#00B6C9] px-4 py-3 flex items-center text-white font-bold whitespace-nowrap"
            >
              <HiBars3BottomLeft className="mr-5" /> Все товары{" "}
            </button>
            <NavLink className="text-black text-lg font-medium" to="/products">
              Матрасы
            </NavLink>
            <NavLink className="text-black text-lg font-medium" to="">
              Подушки
            </NavLink>
            <NavLink className="text-black text-lg font-medium" to="">
              Кровати
            </NavLink>
            <NavLink className="text-black text-lg font-medium" to="">
              Одеяла
            </NavLink>
            <NavLink className="text-black text-lg font-medium" to="">
              Диваны
            </NavLink>
            <NavLink className="text-black text-lg font-medium" to="">
              Детские товары
            </NavLink>
            <NavLink className="text-black text-lg font-medium" to="">
              Мебель{" "}
            </NavLink>
            <NavLink className="text-black text-lg font-medium" to="">
              Для дома
            </NavLink>
            <NavLink className="text-red-400 flex items-center text-lg" to="">
              {" "}
              <FaPercentage /> Акции
            </NavLink>
          </div>
        </div>
      </div>
      <div
        className={`${categories
          ? "hidden"
          : "bg-white w-full absolute z-50 border-2 flex"
          }`}
        style={{ bgcolor: "background.paper" }}
      >
        <div className="filter-left">
          <div className="flex items-center hover:text-[#00bac9] cursor-pointer justify-center">
            <img className="w-20 h-10" src={Category1} alt="img" />
            <p className="font-medium text-base">Матрасы</p>
          </div>
          <div className="flex items-center hover:text-[#00bac9] cursor-pointer justify-center">
            <img className="w-20 h-10" src={Category2} alt="img" />
            <p className="font-medium text-base">Подушки</p>
          </div>
          <div className="flex items-center hover:text-[#00bac9] cursor-pointer justify-center">
            <img className="w-20 h-10" src={Category3} alt="img" />
            <p className="font-medium text-base">Кровати</p>
          </div>
          <div className="flex items-center hover:text-[#00bac9] cursor-pointer justify-center">
            <img className="w-20 h-10" src={Category4} alt="img" />
            <p className="font-medium text-base">Одеяла</p>
          </div>
          <div className="flex items-center hover:text-[#00bac9] cursor-pointer justify-center">
            <img className="w-20 h-10" src={Category5} alt="img" />
            <p className="font-medium text-base">Диваны</p>
          </div>
          <div className="flex items-center hover:text-[#00bac9] cursor-pointer justify-center">
            <img className="w-20 h-10" src={Category7} alt="img" />
            <p className="font-medium text-base">Детские товары</p>
          </div>
          <div className="flex items-center hover:text-[#00bac9] cursor-pointer justify-center">
            <img className="w-20 h-10" src={Category6} alt="img" />
            <p className="font-medium text-base">Мебель</p>
          </div>
          <div className="flex items-center hover:text-[#00bac9] cursor-pointer justify-center">
            <img className="w-20 h-10" src={Category8} alt="img" />
            <p className="font-medium text-base">Для дома</p>
          </div>
        </div>
        <div className="filter-right">
          <h1>Матрасы</h1>
          <div>
            {data.map((item, index) => (
              <Card key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

import React from 'react'
import Topadvenses from '../../assets/image//topadv.png'
import { BiSearchAlt2 } from 'react-icons/bi'
import logoAksona from '../../assets/image/logo.png'
import { AiFillCloseCircle } from 'react-icons/ai'
import { BsChevronDown } from 'react-icons/bs'
import { TbPhoneCall } from 'react-icons/tb'
import { BiUser } from "react-icons/bi"
import { AiOutlineHeart } from 'react-icons/ai'
import { CgShoppingCart } from 'react-icons/cg'
import { HiBars3BottomLeft } from 'react-icons/hi2'
import { FaPercentage } from 'react-icons/fa'
import DioGramma from '../../assets/image/diogramma.png'
import { NavLink } from 'react-router-dom'
function Navbar() {
  return (
    <div className=''>

      <div className="flex w-full items-center bg-[#02B9BF]">
        <img className='w-[80%] m-auto bg-[#00B6C9]' src={Topadvenses} alt="" />
        <button>
          <AiFillCloseCircle className='text-white mr-7' />
        </button>
      </div>


      <div className='w-full items-center py-5 px-20'>
        <div className='w-full m-auto flex items-center'>
          <img className='w-[148px] m-auto' src={logoAksona} alt="" />
          <li className='w-28 m-auto list-none'>
            <NavLink className='flex items-center font-normal text-sm leading-4' href="#!">Минск <BsChevronDown className='text-navTopbBg pl-2 text-3xl' /></NavLink>
          </li>
          <p className='w-[10%] m-auto text-start flex items-center text-gray-400 text-sm'>Магазины: <span className='font-bold text-black pl-2'>30</span></p>
          <form className='rounded py-2 px-1  flex items-center w-96 border border-solid border-FormColor ' action="">
            <BiSearchAlt2 className='text-[#00B6C9] text-lg font-bold' />
            <input type="text" placeholder='Поиск по товарам...' className="outline-none " />
          </form>
          <button className=' rounded w-[15%] m-auto  flex items-center border border-solid border-FormColor py-2 px-1 pl-5 text-center'><TbPhoneCall className='text-gray-400  pr-2 text-2xl' /> Перезвоните мне</button>
          <p className=' width-[5%] m-auto text-black text-lg flex'>7176</p>
          <span className='w-[5%] m-auto items-center text-[#00B6C9] text-center'>показать <br />номера</span>
          <div className=' w-[10%] m-auto flex justify-between text-2xl  text-black '>
            <BiUser />
            <img src={DioGramma} alt="" />
            <AiOutlineHeart />
            <CgShoppingCart />
          </div>
        </div>
      </div>

      <div className='w-full px-20 border-b-[1px] border-gray-200'>
        <div className="flex items-center">

          <button className=' w-[15%] m-auto border border-solid  bg-[#00B6C9] pl-16 py-3 flex items-center text-white font-bold'><HiBars3BottomLeft />  Все товары </button>
          <ul className='w-[70%] m-auto flex justify-between pl-5'>
            <li>
              <NavLink className='text-black text-lg font-medium leader-5 ' href="#!">Матрасы</NavLink>
            </li>
            <li>
              <NavLink className='text-black text-lg font-medium leader-5 ' href="#!">Подушки</NavLink>
            </li>
            <li>
              <NavLink className='text-black text-lg font-medium leader-5 ' href="#!">Кровати</NavLink>
            </li>
            <li>
              <NavLink className='text-black text-lg font-medium leader-5 ' href="#!">Одеяла</NavLink>
            </li>
            <li>
              <NavLink className='text-black text-lg font-medium leader-5 ' href="#!">Диваны</NavLink>
            </li>
            <li>
              <NavLink className='text-black text-lg font-medium leader-5 ' href="#!">Детские товары</NavLink>
            </li>
            <li>
              <NavLink className='text-black text-lg font-medium leader-5 ' href="#!">Мебель </NavLink>
            </li>
            <li>
              <NavLink className='text-black text-lg font-medium leader-5 ' href="#!">Для дома</NavLink>
            </li>
          </ul>

          <NavLink className='w-[10%] m-auto text-red-400 flex items-center px-8 text-lg' href="#!"> <FaPercentage /> Акции</NavLink>
        </div>

      </div>






    </div>
  )
}

export default Navbar

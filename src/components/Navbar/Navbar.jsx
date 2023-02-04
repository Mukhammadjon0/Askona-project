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
function Navbar() {

  const submitHandler = e => {
    e.preventDefault()
    alert('form ishladi')
  }

  return (
    <div className=''>
      <div className="w-[1920px] m-auto bg-navTopbBg flex ">
        <img className='w-10/12 m-auto ' src={Topadvenses} alt="" />
        <AiFillCloseCircle className='text-white z-1  pt-5 text-5xl text-center align-center' />
      </div>
      <div className='w-[1920px] items-center py-5'>
        <div className='w-[90%] m-auto flex items-center'>
          <img className='w-[10%] m-auto' src={logoAksona} alt="" />

          <li className='w-28 m-auto'>
            <a className='flex items-center font-normal text-sm  leading-4 ' href="#!">Минск <BsChevronDown className='text-navTopbBg pl-2 text-3xl' /></a>
          </li>
          <p className='w-[10%] m-auto text-start flex items-center text-gray-400 text-sm'>Магазины: <span className='font-bold text-black pl-2'>30</span></p>


          <form className='rounded py-2 px-1  flex items-center w-96 border border-solid border-FormColor ' action="" onSubmit={submitHandler}>
            <BiSearchAlt2 className='text-navTopbBg text-lg font-bold' />
            <input type="text" placeholder='Поиск по товарам...' className="outline-none " />
          </form>
          <button className=' rounded w-[15%] m-auto  flex items-center border border-solid border-FormColor py-2 px-1 pl-5 text-center'><TbPhoneCall className='text-gray-400  pr-2 text-2xl' /> Перезвоните мне</button>

          <p className=' width-[5%] m-auto text-black text-lg flex'>7176</p>
          <span className='w-[5%] m-auto items-center text-navTopbBg text-center'>показать <br />номера</span>

          <div className=' w-[10%] m-auto flex justify-between text-2xl  text-black '>
            <BiUser />
            <img src={DioGramma} alt="" />
            <AiOutlineHeart />
            <CgShoppingCart />
          </div>
        </div>


      </div>

      <div className='w-[1920px]  m-auto  '>
        <div className="w-[90%] m-auto flex items-center">

          <button className=' w-[15%] m-auto border border-solid  bg-navTopbBg pl-16 py-3 flex items-center text-white font-bold'><HiBars3BottomLeft />  Все товары </button>
          <ul className='w-[70%] m-auto flex justify-between pl-5'>
            <li>
              <a className='text-black text-lg font-medium leader-5 ' href="#!">Матрасы</a>
            </li>
            <li>
              <a className='text-black text-lg font-medium leader-5 ' href="#!">Подушки</a>
            </li>
            <li>
              <a className='text-black text-lg font-medium leader-5 ' href="#!">Кровати</a>
            </li>
            <li>
              <a className='text-black text-lg font-medium leader-5 ' href="#!">Одеяла</a>
            </li>
            <li>
              <a className='text-black text-lg font-medium leader-5 ' href="#!">Диваны</a>
            </li>
            <li>
              <a className='text-black text-lg font-medium leader-5 ' href="#!">Детские товары</a>
            </li>
            <li>
              <a className='text-black text-lg font-medium leader-5 ' href="#!">Мебель </a>
            </li>
            <li>
              <a className='text-black text-lg font-medium leader-5 ' href="#!">Для дома</a>
            </li>
          </ul>

          <a className='w-[10%] m-auto text-red-400 flex items-center px-8 text-lg' href="#!"> <FaPercentage /> Акции</a>
        </div>

      </div>






    </div>
  )
}

export default Navbar

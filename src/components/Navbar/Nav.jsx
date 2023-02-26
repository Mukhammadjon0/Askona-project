import React, { useContext } from 'react'
import { BiSearchAlt2 } from 'react-icons/bi'
import { TbPhoneCall } from 'react-icons/tb'
import { Link, NavLink } from 'react-router-dom'
import { IconButton } from '@mui/material'
import { CgLogIn, CgShoppingCart } from 'react-icons/cg'
import { IoIosStats } from 'react-icons/io'
import logoAksona from "../../assets/img/logo.png";
import UserInfo from '../UserInfo/UserInfo'
import Liked from '../Liked/Liked'
import { StateContext } from '../../context'
import { BsChevronDown } from 'react-icons/bs'
import Search from '../Search/Search'

function Nav() {
    const { handleOpen, handleOpenBasket, basket, userData } = useContext(StateContext)

    return (
        <nav className="w-full py-5 bg-white sticky top-0 z-50 shadow">
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

                                <Search />

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
                                <IconButton onClick={handleOpenBasket(anchor, true)}>
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
    )
}

export default Nav
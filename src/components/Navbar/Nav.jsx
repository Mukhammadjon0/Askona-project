import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { IconButton } from '@mui/material'
import { CgLogIn, CgShoppingCart } from 'react-icons/cg'
import logoAksona from "../../assets/img/logo.svg";
import UserInfo from '../UserInfo/UserInfo'
import Liked from '../Liked/Liked'
import { StateContext } from '../../context'
import { BsChevronDown } from 'react-icons/bs'
import Search from '../Search/Search'
import { useBasketQuery } from '../../services/basketApi'
import Call from '../CallClient/Call'

function Nav() {
    const { data: basket, isSuccess: isBasketSuccess } = useBasketQuery();
    const { handleOpen, handleOpenBasket, userData } = useContext(StateContext)

    return (
        <nav className="container w-full bg-white sticky top-0 z-50 shadow sm:w-full">
            <div className="flex items-center">
                <div className="w-full flex flex-row items-center justify-between">
                    <div className="flex flex-row items-center">
                        <div className="flex flex-row items-center gap-10">
                            <Link to={'/'} className='sm:m-auto'>
                                <img className='w-40' src={logoAksona} alt="logo" />
                            </Link>
                            <select className='flex items-center outline-none sm:hidden'>
                                <option className='font-normal text-sm' value="">
                                    Минск
                                </option>
                                <option className='font-normal text-sm' value="">
                                    Ташкент
                                </option>
                                <BsChevronDown className='text-navTopbBg pl-2 text-3xl' />
                            </select>
                            <span className='text-start flex items-center text-gray-400 text-sm sm:hidden'>Магазины: <p className='font-bold text-black pl-2'>30</p></span>
                            <div className="flex gap-8">
                                <Search />
                                <Call />
                            </div>
                        </div>
                        <div className="flex ml-5 items-center gap-1 sm:hidden">
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
                        <div className=''>
                            <Liked />
                        </div>
                        {["right"].map((anchor) => (
                            <React.Fragment key={anchor}>
                                <IconButton onClick={handleOpenBasket(anchor, true)}>
                                    <div className="relative cursor-pointer">
                                        <div className="w-[18px] h-[18px] rounded-full bg-[#00BAC1] absolute top-[-5px] right-[-5px] flex justify-center items-center">
                                            <p className='font-semibold text-[12px] text-white'>{(isBasketSuccess && basket?.data?.length) || 0}</p>
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
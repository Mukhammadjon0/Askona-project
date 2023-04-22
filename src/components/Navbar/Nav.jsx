import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { IconButton } from '@mui/material'
import { CgLogIn, CgShoppingCart } from 'react-icons/cg'
import logoAksona from "../../assets/svg/logo.svg";
import UserInfo from '../UserInfo/UserInfo'
import Liked from '../Liked/Liked'
import { StateContext } from '../../context'
import Search from '../Search/Search'
import { useBasketQuery } from '../../services/basketApi'
import { IoMenuSharp } from 'react-icons/io5'
import Language from '../Language/Language';
import { TfiLocationPin } from 'react-icons/tfi'
import { useContactQuery } from '../../services/contact';

function Nav({ language }) {

    const { data: basket, isSuccess: isBasketSuccess } = useBasketQuery();
    const { handleOpen, handleOpenBasket, userData, setShowSubCtg, } = useContext(StateContext)
    const { data: contact } = useContactQuery()
    const navigate = useNavigate()

    const handleOpenSubCtg = () => {
        setShowSubCtg({
            top: true,
        })
    };

    return (
        <nav className="w-full bg-white sticky top-0 z-50 shadow py-5">
            <div className="flex items-center container">
                <div className="w-full flex flex-row items-center gap-32">
                    <div className="flex flex-row items-center justify-between w-full">
                        {/* <div className="flex flex-row items-center w-full justify-between"> */}
                        <div className="desktop:hidden mobile:flex tablet:flex items-center gap-4">
                            <button onClick={handleOpenSubCtg} className='mobile:block desktop:hidden tablet:block'>
                                <IoMenuSharp className='text-4xl text-gray-500' />
                            </button>
                            <Link to={'/'} className='mobile:hidden tablet:block desktop:hidden'>
                                <img className='w-40' src={logoAksona} alt="logo" />
                            </Link>
                        </div>
                        <Link to={'/'} className='mobile:block tablet:hidden desktop:block'>
                            <img className='w-40' src={logoAksona} alt="logo" />
                        </Link>
                        <div className=" mobile:hidden tablet:hidden desktop:block">
                            <Language language={language} />
                        </div>
                        <div className="mobile:hidden tablet:block desktop:hidden">
                            <Search />
                        </div>
                        <div onClick={() => navigate('/location')} className='items-center cursor-pointer mobile:hidden desktop:flex tablet:flex'>
                            <TfiLocationPin className='text-gray-400 text-base' />
                            <span className='flex flex-col text-sm text-gray-500'>
                                {language?.dangara}
                            </span>
                        </div>
                        <div className="flex items-center gap-5">
                            <div className="mobile:hidden tablet:hidden desktop:block">
                                <Search />
                            </div>
                            <div className="mobile:block tablet:block desktop:hidden">
                                <Language />
                            </div>
                            {/* <Call /> */}
                        </div>
                        {/* </div> */}
                        <div className="desktop:flex mobile:hidden tablet:hidden flex-col justify-center">
                            {contact?.data?.map((item, index) => (
                                <p key={index} className='text-gray-500 text-lg flex font-semibold whitespace-nowrap'>{item.phone}</p>
                            ))}
                            <div className='text-gray-400 text-sm font-semibold'>
                                (09:00 - 21:00)
                            </div>
                        </div>
                    </div>

                    <div className="mobile:hidden tablet:hidden desktop:flex gap-3 text-2xl text-black items-center">
                        {userData.token ? (
                            <UserInfo language={language} />
                        ) : (
                            <IconButton onClick={handleOpen}>
                                <CgLogIn className="text-gray-500" />
                            </IconButton>
                        )}
                        <div className=''>
                            <Liked language={language} />
                        </div>
                        {["right"].map((anchor) => (
                            <React.Fragment key={anchor}>
                                <IconButton onClick={handleOpenBasket(anchor, true)}>
                                    <div className="relative cursor-pointer">
                                        <div className="w-[18px] h-[18px] rounded-full bg-[#00BAC1] absolute top-[-5px] right-[-5px] flex justify-center items-center">
                                            <p className='font-semibold text-[12px] text-white'>{(isBasketSuccess && basket?.data?.length) || 0}</p>
                                        </div>
                                        <CgShoppingCart className="cursor-pointer text-gray-500" />
                                    </div>
                                </IconButton>
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>
        </nav >

    )
}
export default Nav
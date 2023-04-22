import React, { useContext } from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import { BiHome} from 'react-icons/bi'
import { CgLogIn, CgShoppingCart } from 'react-icons/cg'
import { MdOutlineStoreMallDirectory } from 'react-icons/md'
import { StateContext } from '../../context'
import { useNavigate } from 'react-router-dom'
import UserInfoMobile from '../UserInfo/UserInfoMobile'

function MenuBar({ language }) {
    const { handleOpenBasket, handleOpen, userData, lang } = useContext(StateContext)
    const navigate = useNavigate()
    return (
        <div className='desktop:hidden mobile:flex tablet:flex sticky bottom-0 w-full bg-white p-3 z-50 flex-row items-center justify-between'>
            <div onClick={() => navigate('/')} className="flex flex-col items-center text-gray-400 cursor-pointer">
                <BiHome className='text-2xl' />
                <p className='text-sm'>{lang === 'ru' ? 'Главная' : 'Asosiy'}</p>
            </div>
            <div onClick={() => navigate('/productCtg/1')} className="flex flex-col items-center text-gray-400 cursor-pointer">
                <MdOutlineStoreMallDirectory className='text-2xl text-gray-400' />
                <p className='text-sm'>{lang === 'ru' ? 'Каталог' : 'Katalog'}</p>
            </div>
            <div className="flex flex-col items-center text-gray-400 cursor-pointer">
                {["right"].map((anchor) => (
                    <React.Fragment key={anchor}>
                        <div onClick={handleOpenBasket(anchor, true)} className="text-gray-400 flex flex-col items-center">
                            <CgShoppingCart className="text-2xl" />
                            <p className='text-sm'>{lang === 'ru' ? 'Корзина' : 'Savat'}</p>
                        </div>
                    </React.Fragment>
                ))}
            </div>
            <div onClick={() => navigate('/liked')} className="flex flex-col items-center text-gray-400 cursor-pointer">
                <AiOutlineHeart className='text-2xl' />
                <p className='text-sm'>{lang === 'ru' ? 'Избранное' : 'Sevimlilar'}</p>
            </div>
            <div className="flex flex-col items-center text-gray-400 cursor-pointer">
                {userData.token ? (
                    <div className="">
                        <UserInfoMobile language={language} />
                    </div>
                ) : (
                    <div onClick={handleOpen} className="text-gray-400 flex flex-col items-center">
                        <CgLogIn className="text-gray-400 text-xl" />
                        <p className='text-sm'>{lang === 'ru' ? 'Войти' : 'Kirish'}</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default MenuBar
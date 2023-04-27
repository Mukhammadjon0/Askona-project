import React, { useContext } from 'react'
import { HiBars3BottomLeft } from 'react-icons/hi2'
import { useNavigate } from 'react-router-dom'
import { StateContext } from '../../context';
import { categries } from '../../datas';

function NavCategories() {
    const { setShowSubCtg, lang, setType } = useContext(StateContext)
    const navigate = useNavigate()

    const getCategory = (type) => {
        navigate(`/productCtg/${type}`)
        setType(type)
    }

    const handleOpenSubCtg = () => {
        setShowSubCtg({
            top: true,
        })

    };
    return (
        <div className='shadow mobile:hidden tablet:hidden desktop:block'>
            <div className="w-full border-b-[1px] border-gray-200 py-3">
                <div className="container">
                    <div className="flex items-center justify-between flex-wrap">
                        <button
                            onClick={handleOpenSubCtg}
                            className="w-[180px] border border-solid px-4 py-3 flex items-center text-white font-bold whitespace-nowrap bg-[#407CD3] duration-200 hover:bg-[#2B58A0] active:scale-95"
                        >
                            <HiBars3BottomLeft className="" /> {lang === 'ru' ? 'Все товары' : 'Barcha tovarlar'}
                        </button>
                        {categries.map(category =>
                            <button
                                onClick={() => (getCategory(category.type))}
                                key={category.id}
                                className='text-black text-base font-medium hover:text-[#407CD3] duration-200'
                            >
                                {lang === 'ru' ? category.name_ru : category.name_uz}
                            </button>
                        )}
                        {/* <NavLink className="text-red-400 flex items-center text-base">
                            <FaPercentage /> {lang === 'ru' ? 'Акции' : 'Aksiyalar'}
                        </NavLink> */}
                    </div>
                </div>
            </div>
        </div >
    )
}

export default NavCategories
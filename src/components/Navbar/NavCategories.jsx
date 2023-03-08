import React from 'react'
import { FaPercentage } from 'react-icons/fa'
import { HiBars3BottomLeft } from 'react-icons/hi2'
import { NavLink, useNavigate } from 'react-router-dom'
import { useGetCategoriesQuery } from '../../services/categoryApi';

function NavCategories() {
    const { data: categories, isSuccess: isSuccessCategory } = useGetCategoriesQuery()
    const navigate = useNavigate()
    return (
        <div className='shadow sm:hidden'>
            <div className="w-full border-b-[1px] border-gray-200 py-3">
                <div className="container">
                    <div className="flex items-center justify-between flex-wrap">
                        <button
                            onClick={() => navigate('/products')}
                            className="w-[180px] border border-solid px-4 py-3 flex items-center text-white font-bold whitespace-nowrap bg-[#00bac9] duration-200 hover:bg-[#0099a5] active:scale-95"
                        >
                            <HiBars3BottomLeft className="mr-5" /> Все товары
                        </button>
                        {isSuccessCategory && categories?.data?.map(category =>
                            <NavLink
                                to={`/products?category=${category.content}`}
                                key={category.id}
                                className='text-black text-base font-medium hover:text-[#00B6C9] duration-200'
                            >
                                {category.content}
                            </NavLink>
                        )}
                        <NavLink className="text-red-400 flex items-center text-base" to="/aksi">
                            <FaPercentage /> Акции
                        </NavLink>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default NavCategories
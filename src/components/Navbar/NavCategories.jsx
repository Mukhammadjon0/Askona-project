import React, { useState } from 'react'
import { FaPercentage } from 'react-icons/fa'
import { HiBars3BottomLeft } from 'react-icons/hi2'
import { NavLink } from 'react-router-dom'
import Card from '../card/Card';
import { data } from '../../datas';
import { useGetCategoriesQuery } from '../../services/categoryApi';

function NavCategories() {
    const { data: categories, isSuccess: isSuccessCategory } = useGetCategoriesQuery()
    const [categoriesOpen, setCategoriesOpen] = useState(true);
    return (
        <div className='shadow'>
            <div className="w-full border-b-[1px] border-gray-200 py-3">
                <div className="container">
                    <div className="flex items-center justify-between flex-wrap">
                        <button
                            onClick={() => setCategoriesOpen((p) => !p)}
                            className="w-[180px] border border-solid px-4 py-3 flex items-center text-white font-bold whitespace-nowrap bg-[#00bac9] duration-200 hover:bg-[#0099a5] active:scale-95"
                        >
                            <HiBars3BottomLeft className="mr-5" /> Все товары{" "}
                        </button>
                        {isSuccessCategory && categories.data?.map(category =>
                            <NavLink
                                to={`/products?category=${category.content}`}
                                key={category.id}
                                className='text-black text-base font-medium hover:text-[#00B6C9] duration-200'
                            >
                                {category.content}
                            </NavLink>
                        )}
                        <NavLink className="text-red-400 flex items-center text-base" to="/products">
                            <FaPercentage /> Акции
                        </NavLink>
                    </div>
                </div>
            </div>
            <div
                className={`${categoriesOpen
                    ? "hidden"
                    : "bg-white w-full absolute z-50 border-2 flex"
                    }`}
                style={{ bgcolor: "background.paper" }}
            >
                <div className="filter-left flex flex-col items-center border-r-2 border-gray-200">
                    {isSuccessCategory && categories?.data.map((item) => (
                        <div key={item.id} className="flex items-center hover:text-[#00bac9] cursor-pointer justify-center gap-2 p-3">
                            <img className="" src={`https://askona.herokuapp.com${item.img}`} alt="img" />
                            <p className="font-medium text-base">{item.content}</p>
                        </div>
                    ))}
                </div>
                <div className="filter-right">
                    <h1>Матрасы</h1>
                    <div>
                        {data?.map((item, index) => (
                            <Card key={index} {...item} />
                        ))}
                    </div>
                </div>
            </div>
        </div >
    )
}

export default NavCategories
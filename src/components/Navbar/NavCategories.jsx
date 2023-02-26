import React, { useEffect, useState } from 'react'
import { FaPercentage } from 'react-icons/fa'
import { HiBars3BottomLeft } from 'react-icons/hi2'
import { NavLink } from 'react-router-dom'
import Category1 from "../../assets/img/matras.png";
import Category2 from "../../assets/img/podush.png";
import Category3 from "../../assets/img/kravat.png";
import Category4 from "../../assets/img/odel.png";
import Category5 from "../../assets/img/divan.png";
import Category6 from "../../assets/img/mebel.png";
import Category7 from "../../assets/img/dlya-doma.png";
import Category8 from "../../assets/img/kreslo.png";
import Card from '../card/Card';
import { data } from '../../datas';
import { useGetCategoriesQuery } from '../../services/categoryApi';

function NavCategories() {
    const { data: categories, isSuccess: isSuccessCategory } = useGetCategoriesQuery()
    console.log(categories)
    console.log(isSuccessCategory)
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
                                className='text-black text-lg font-medium hover:text-[#00B6C9] duration-200'
                            >
                                {category.content}
                            </NavLink>
                        )}
                        <NavLink className="text-red-400 flex items-center text-lg" to="/products">
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
        </div >
    )
}

export default NavCategories
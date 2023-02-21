import React from 'react'
import './Recommended.css'
import Discount from '../../assets/img/discaunt.png'
import Count from '../../assets/img/count.png'
import { IoIosStats } from 'react-icons/io';
import { CiHeart } from 'react-icons/ci';
import Chair2 from '../../assets/img/chair2.png'
import Avinon from '../../assets/img/avinon.png'
import Height from '../../assets/icon/height.png'
import Weight from '../../assets/icon/weight.png'


import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination } from "swiper";

function Recommended() {

    const recommend = [
        { image: Avinon, title: 'Анатомический матрас Askona Benefit', price: 48900, colors: { first: '#4E3A2F', second: '#183B51', 3: '#4E3A2F', 4: '#183B51', 5: '#4E3A2F', 6: '#183B51' }, oldPrice: 97800, id: 1 },
        { image: Chair2, title: 'Анатомический матрас Askona Benefit', price: 48900, heightImg: Height, heightTitle: 'Высота:', height: '19 cm', weightImg: Weight, weightTitle: 'Вес на спальное место:', weight: 'с выше 140 кг', oldPrice: 97800, id: 2 },
        { image: Avinon, title: 'Анатомический матрас Askona Benefit', price: 48900, colors: { first: '#4E3A2F', second: '#183B51', 3: '#4E3A2F', 4: '#183B51', 5: '#4E3A2F', 6: '#183B51' }, oldPrice: 97800, id: 3 },
        { image: Chair2, title: 'Анатомический матрас Askona Benefit', price: 48900, heightImg: Height, heightTitle: 'Высота:', height: '19 cm', weightImg: Weight, weightTitle: 'Вес на спальное место:', weight: 'с выше 140 кг', oldPrice: 97800, id: 4 },
    ]
    return (
        <div className="flex gap-7 flex-row p-6">
            <Swiper
                slidesPerView={2}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
            >
                {recommend.map((item) => (
                    <SwiperSlide key={item.id}>
                        <div className="pt-2 bg-white border-[1px] border-gray-200 rounded cursor-pointer text-start">
                            <div className="bg-white">
                                <div style={{ backgroundImage: `url(${item.image})`, backgroundSize: 'cover' }} className='w-[246px] h-[128px] bg-center bg-no-repeat m-auto flex flex-col justify-between'>
                                    <div className="flex flex-row justify-between">
                                        <div className="w-[34px] h-[34px] rounded-full flex justify-center items-center cursor-pointer">
                                            <IoIosStats className='text-gray-400 hover:text-red-600' />
                                        </div>
                                        <div className="w-[34px] h-[34px] rounded-full flex justify-center items-center cursor-pointer">
                                            <CiHeart className='text-gray-400 hover:text-red-600' />
                                        </div>
                                    </div>
                                    <div className="flex flex-row justify-between items-center">
                                        <div className="w-[34px] h-[34px] rounded-full flex justify-center items-center cursor-pointer">
                                            <img className='' src={Discount} alt="img" />
                                        </div>
                                        <div className="w-[76px] h-[18px] rounded-full flex justify-center items-center cursor-pointer">
                                            <img src={Count} alt="img" />
                                        </div>
                                    </div>
                                </div>
                                <div className="border-t-[1px] border-gray-200 m-2 pt-2">
                                    <h1 className='font-semibold text-sm'>{item.title}</h1>
                                    <p className='font-medium text-xs text-gray-400 mt-2'>от <span className='text-[#00B6C9] text-sm font-bold'>{item.price} BYN</span>  <span className='text-gray-400 line-through'>{item.oldPrice} BYN</span></p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>


        </div>
    )
}

export default Recommended
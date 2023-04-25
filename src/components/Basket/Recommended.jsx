import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";
import { useProductsQuery } from '../../services/productApi';
import { useNavigate } from 'react-router-dom';

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

function Recommended({ setState }) {
    const { data: products, isSuccess: productsIsSuccess } = useProductsQuery()
    const navigate = useNavigate()

    return (
        <div className="flex gap-7 flex-row p-6">
            <Swiper
                slidesPerView={2}
                spaceBetween={60}
                // freeMode={true}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    // "@0.00": {
                    //     slidesPerView: 1,
                    //     spaceBetween: 10,
                    // },
                    // "@0.25": {
                    //     slidesPerView: 1,
                    //     spaceBetween: 30,
                    // },
                    "@0.50": {
                        slidesPerView: 1,
                        spaceBetween: 1,
                    },
                    "@0.75": {
                        slidesPerView: 1,
                        spaceBetween: 1,
                    },
                    "@1.00": {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    "@1.25": {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
            >
                {productsIsSuccess && products?.map((item) => (
                    <SwiperSlide key={item.id}>
                        <div className="pt-2 bg-white border-[1px] border-gray-200 rounded cursor-pointer text-start">
                            <div className="bg-white">
                                <div onClick={() => {
                                    navigate(`/productdetail/${item.id}`);
                                    setState({ right: false })
                                }} style={{ backgroundImage: `url(https://api.basito.uz${item.images[0]})`, backgroundSize: 'cover' }} className='w-[246px] h-[128px] bg-center bg-no-repeat m-auto flex flex-col justify-between p-3'>
                                    <div className="flex flex-row justify-between mt-24">
                                        {/* <div className="rounded-full flex items-center justify-center cursor-pointer">
                                            <img className='w-10' src={Discount} alt="img" />
                                        </div> */}
                                        <div className="w-[76px] h-[18px] rounded-full flex justify-center items-center cursor-pointer">
                                            <span className="main__card-span bg-[#FFD54F] w-[116px] h-[24px] rounded whitespace-nowrap flex justify-center items-center text-[12px] font-medium">Товар недели
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="border-t-[1px] border-gray-200 m-2 pt-2">
                                    <h1 className='font-semibold text-sm'>{item.name}</h1>
                                    <p className='font-medium text-xs text-gray-400 mt-2'>от <span className='text-[#407CD3] text-sm font-bold'>{item.price.toLocaleString("uz-UZ")} BYN</span>  <span className='text-gray-400 line-through'>180 BYN</span></p>
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
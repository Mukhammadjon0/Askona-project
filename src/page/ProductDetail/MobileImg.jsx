import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

function MobileImg({ img }) {
    return (
        <div className=''>
            <Swiper
                slidesPerView={1}
                spaceBetween={10} 
                pagination={{
                    clickable: true,
                }}
                loop={true}
                modules={[Pagination]}
                className="mySwiper"

            >
                {img?.map((item, index) => (
                    <SwiperSlide key={index} {...item}>
                        <img className="flex items-start w-full relative h-[100%]" src={`https://api.basito.uz${item.img}`} alt="" />
                    </SwiperSlide>
                ))}


            </Swiper>

        </div>
    )
}

export default MobileImg
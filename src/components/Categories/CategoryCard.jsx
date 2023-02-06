import React from 'react'
import './Categories.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper";

function CategoryCard({ img, title }) {
    return (
        <div>
            <Swiper
                slidesPerView={1}
                spaceBetween={6}
                pagination={{
                    clickable: true,
                }}
                rewind={true}
                navigation={true}
                modules={[Navigation, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="">
                        <img className='w-20' src={img} alt="img" />
                        <p>{title}</p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default CategoryCard
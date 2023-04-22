import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";
import './Carousel.css'
import axios from "axios";

function Carousel() {
    const [banner, setBanner] = useState()

    useEffect(() => {
        axios.get(`http://api.basito.uz/apps/api/v1/banner`)
            .then(res => {
                setBanner(res?.data?.data)
            })
            .catch((err) => console.log(err))

    }, [])

    return (
        <div className="py-2 cursor-pointer">
            <Swiper
                slidesPerView={3}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                loop={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false
                }}
                breakpoints={{
                    "@0.00": {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    "@0.75": {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    "@1.00": {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    "@1.50": {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
            >
                {banner?.map((item, index) => (
                    <SwiperSlide key={index} >
                        <img className="w-[700px]" src={`http://api.basito.uz${item.image}`} alt="img" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Carousel
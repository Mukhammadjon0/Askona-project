import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";
import './Carousel.css'
import HomeTop from '../../assets/img/home-top.png'
import HomeTop1 from '../../assets/img/home-top2.png'
import HomeTop2 from '../../assets/img/home-top3.png'

function Carousel() {
    return (
        <div className="py-5 cursor-pointer">
            <Swiper
                slidesPerView={1}
                spaceBetween={6}
                pagination={{
                    clickable: true,
                }}
                loop={true}
                autoplay={{
                    delay:4000,
                    disableOnInteraction: false
                }}
                breakpoints={{
                    "@0.00": {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    "@0.75": {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    "@1.00": {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                    "@1.50": {
                        slidesPerView: 4,
                        spaceBetween: 50,
                    },
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper"

            >
                <SwiperSlide >
                    <img className="w-[700px]" src={HomeTop} alt="img" />
                </SwiperSlide>
                <SwiperSlide >
                    <img className="w-[700px]" src={HomeTop1} alt="img" />
                </SwiperSlide>
                <SwiperSlide >
                    <img className="w-[700px]" src={HomeTop2} alt="img" />
                </SwiperSlide>
                <SwiperSlide >
                    <img className="w-[700px]" src={HomeTop} alt="img" />
                </SwiperSlide>
                <SwiperSlide >
                    <img className="w-[700px]" src={HomeTop1} alt="img" />
                </SwiperSlide>
                <SwiperSlide >
                    <img className="w-[700px]" src={HomeTop2} alt="img" />
                </SwiperSlide>
                <SwiperSlide >
                    <img className="w-[700px]" src={HomeTop} alt="img" />
                </SwiperSlide>
                <SwiperSlide >
                    <img className="w-[700px]" src={HomeTop1} alt="img" />
                </SwiperSlide>
                <SwiperSlide >
                    <img className="w-[700px]" src={HomeTop2} alt="img" />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Carousel
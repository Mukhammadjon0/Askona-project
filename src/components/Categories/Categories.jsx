import React from "react";
import "./Categories.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper";
import { useGetCategoriesQuery } from "../../services/categoryApi";
import { useNavigate } from "react-router-dom";

function Categories() {
    const { data: category, isSuccess: isSuccessCategory } = useGetCategoriesQuery()
    const navigate = useNavigate()
    return (
        <div className="container">
            <Swiper
                style={{
                    "--swiper-navigation-color": "#00BAC1",
                    "--swiper-navigation-size": "20px",
                }}
                loop={true}
                rewind={true}
                navigation={true}
                modules={[Navigation, Pagination]}
                className="mySwiper slider-container overflow-hidden"
                breakpoints={{
                    "@0.00": {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    "@0.75": {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                    "@1.00": {
                        slidesPerView: 6,
                        spaceBetween: 30,
                    },
                }}
            >
                {isSuccessCategory && category?.data.map((item) => (
                    <SwiperSlide key={item.id}>
                        <div onClick={() => navigate(`/products?category=${item.content}`)} className="flex flex-col items-center hover:text-[#00bac9] cursor-pointer">
                            <img className='w-20 h-10' src={`https://askona.herokuapp.com${item.img}`} alt="img" />
                            <p className='font-medium text-base'>{item.content}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default Categories;

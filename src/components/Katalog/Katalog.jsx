import React, { useContext } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate } from 'react-router-dom'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper";
import { categries } from '../../datas';
import { StateContext } from '../../context';

const swiperOption = {
  style: {
    "--swiper-navigation-color": "#00BAC1",
    "--swiper-navigation-size": "20px",
  },
  loop: true,
  rewind: true,
  pagination: {
    dynamicBullets: true,
    clickable: true,
  },
  navigation: true,
  modules: [Navigation, Pagination],
  className: "mySwiper slider-container overflow-hidden",
  breakpoints: {
    "@0.00": {
      slidesPerView: 2,
      spaceBetween: 10,
      navigation: false,
    },
    "@0.50": {
      slidesPerView: 2,
      spaceBetween: 10,
      navigation: false,
    },
    "@0.75": {
      slidesPerView: 2,
      spaceBetween: 10,
      navigation: false,
    },
    "@1.00": {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    "@1.25": {
      slidesPerView: 5,
      spaceBetween: 20,
    },
    "@1.50": {
      slidesPerView: 5,
      spaceBetween: 20,
    },
  }
}

function Katalog() {
  const { lang, setType } = useContext(StateContext)
  const navigate = useNavigate()

  const getCategory = (id, type) => {
    navigate(`/productCtg/${id}`)
    setType(type)
  }
  return (
    <div className="">
      <Swiper {...swiperOption}>
        {categries.map((item) => (
          <SwiperSlide key={item.id}>
            <div onClick={() => (getCategory(item.id, item.type))} className="flex flex-col items-center hover:text-[#00bac9] cursor-pointer">
              <div className="bg-[#f4f4f4] h-32 w-32 rounded-full flex items-center justify-center group">
                <img className='w-12 group-hover:scale-110 duration-200' src={item.img} alt="img" />
              </div>
              <p className='font-medium text-base'>{lang === 'ru' ? item.name_ru : item.name_uz}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div >
  );
}

export default Katalog
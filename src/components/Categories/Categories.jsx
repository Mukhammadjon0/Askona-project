import React from 'react'
import './Categories.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper";
import Category1 from '../../assets/image/matras.png'
import Category2 from '../../assets/image/podush.png'
import Category3 from '../../assets/image/kravat.png'
import Category4 from '../../assets/image/odel.png'
import Category5 from '../../assets/image/divan.png'
import Category6 from '../../assets/image/mebel.png'
import Category7 from '../../assets/image/dlya-doma.png'
import Category8 from '../../assets/image/kreslo.png'
import Category9 from '../../assets/image/pufi.png'
import Category10 from '../../assets/image/pladi.png'
import Category11 from '../../assets/image/namatras.png'
import Category12 from '../../assets/image/posteli.png'

function Categories() {

    return (
        <div className='px-20'>
            <Swiper
                rewind={true}
                navigation={true}
                modules={[Navigation, Pagination]}
                className="mySwiper"
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
                <SwiperSlide>
                    <div className="">
                        <img className='w-20 h-10' src={Category1} alt="img" />
                        <p className='font-medium text-base'>Матрасы</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="">
                        <img className='w-20 h-10' src={Category2} alt="img" />
                        <p className='font-medium text-base'>Подушки</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="">
                        <img className='w-20 h-10' src={Category3} alt="img" />
                        <p className='font-medium text-base'>Кровати</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="">
                        <img className='w-20 h-10' src={Category4} alt="img" />
                        <p className='font-medium text-base'>Одеяла</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="">
                        <img className='w-20 h-10' src={Category5} alt="img" />
                        <p className='font-medium text-base'>Диваны</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="">
                        <img className='w-20 h-10' src={Category6} alt="img" />
                        <p className='font-medium text-base'>Мебель</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="">
                        <img className='w-20 h-10' src={Category7} alt="img" />
                        <p className='font-medium text-base'>Для дома</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="">
                        <img className='w-20 h-10' src={Category8} alt="img" />
                        <p className='font-medium text-base'>Кресла</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="">
                        <img className='w-20 h-10' src={Category9} alt="img" />
                        <p className='font-medium text-base'>Пуфы</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="">
                        <img className='w-20 h-10' src={Category10} alt="img" />
                        <p className='font-medium text-base'>Пледы</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="">
                        <img className='w-20 h-10' src={Category11} alt="img" />
                        <p className='font-medium text-base'>Наматрасники</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="">
                        <img className='w-20 h-10' src={Category12} alt="img" />
                        <p className='font-medium text-base'>Постельное белье</p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Categories
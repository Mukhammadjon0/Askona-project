import React, { useContext } from 'react'
import './Discount.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import { useNavigate } from 'react-router-dom'
import { StateContext } from '../../context'

function Discount() {
    const { setTelInfo, lang } = useContext(StateContext);
    const navigate = useNavigate()
    return (
        <div className='Discount container'>
            <Swiper
                spaceBetween={30}
                slidesPerView={1}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                breakpoints={{
                    828: {
                        slidesPerView: 2,
                    },
                    1340: {
                        slidesPerView: 3,

                    },
                }}
                className="mySwiper"
            >
                <SwiperSlide><div className="Address_shop">
                    <h3 className='Address_shop_h3'>{lang === 'ru' ? 'Адреса магазинов' : 'Do`kon manzili'}</h3>
                    <p className='Address_shop_p'>{lang === 'ru' ? 'Найдите наш магазин' : 'Bizning do``{}konimizni toping'}
                    </p>
                    <button onClick={() => navigate('/location')} className="border-t-[1px] py-1 px-5 text-white rounded bg-[#407CD3] duration-200 hover:bg-[#2B58A0] active:scale-95">{lang === 'ru' ? 'Показать на карте' : 'Xaritada ko`rsatish'}</button>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="quality">
                        <div className="quality_left">
                            <h1 className='quality_left_h1'>
                                {lang === 'ru' ? 'Пусть в вашем доме всегда будет уютно' : 'Uyingiz doimo shinam bo`lsin'}
                            </h1>
                            <div className="quality_left_df">
                                <h1 className='quality_left_df_h1'>5</h1>
                                <h2 className='quality_left_df_h2'>%
                                    {lang === 'ru' ? 'Дополнительная скидка' : 'Qo`shimcha chegirma'}
                                </h2>
                            </div>
                            <button onClick={() => setTelInfo(true)} className='quality_left_button'>{lang === 'ru' ? 'Заказать' : 'Buyurtma berish'}</button>
                        </div>
                        <div className="quality_right">
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="Selection_mattresses">
                        <h3 className='Address_shop_h3'>{lang === 'ru' ? 'Подбор опрыскиватель' : 'Purkagichni topish'}</h3>
                        <p className='Address_shop_p'>{lang === 'ru' ? 'Выберите любое опрыскиватель, которое вам нравится' : 'O`zingizga yoqqan har qanday purkagichni tanlang'}
                        </p>
                        <button onClick={() => navigate('/productCtg/6')} className="border-t-[1px] py-1 px-5 text-white rounded bg-[#407CD3] duration-200 hover:bg-[#2B58A0] active:scale-95">{lang === 'ru' ? 'Подобрать опрыскиватель' : 'Purkagichni tanlang'}</button>
                    </div>
                </SwiperSlide>
            </Swiper>


        </div>
    )
}

export default Discount
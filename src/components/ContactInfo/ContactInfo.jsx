import React, { useContext } from 'react'
import icon1 from '../../assets/svg/napishite_zvonite.svg'
import icon2 from '../../assets/svg/videokonsultaciya.svg'
import icon3 from '../../assets/svg/faq.svg'
import { Link } from 'react-router-dom'
import './ContactInfo.css'

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import { StateContext } from '../../context'

function ContactInfo({ language }) {
  const { setTelInfo, lang } = useContext(StateContext)
  const tels = () => {
    setTelInfo(true)
  }
  return (
    <div className="container">
      <div className='Contact_info'>
        <h2 className='font-semibold text-4xl text-center'>{language?.inovatsiya}</h2>
        <p className='Useful_info_p text-center'>
          {lang === 'ru' ? 'Мы постоянно разрабатываем инновационные решения' : 'Biz doimo innovatsion yechimlarni ishlab chiqamiz'} <br /> {lang === 'ru' ? 'и выпускаем только такую продукцию, в которой уверены на 100%.' : 'va biz faqat 100% amin bo`lgan mahsulotlarni ishlab chiqaramiz.'}
        </p>
        <Swiper
          slidesPerView={1}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            828: {
              slidesPerView: 2,
            },
            1340: {
              slidesPerView: 3,

            },

          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="contact-infoo">
              <div className="Contact_info_df1">
                <img className='Useful_info_df_img' src={icon1} alt="" />
                <h2 className='Useful_info_df_h2'>{language?.bizgayoz}</h2>
                <p className='Useful_info_df_p'>{lang === 'ru' ? 'Консультанты Basito готовы ответить на любой' : 'Basito maslahatchilari har-qanday savolga javob berishga tayyor'} <br />
                  {lang === 'ru' ? 'ваш вопрос в режиме онлайн.' : 'sizning online savolaringizga'}
                </p>
                <Link onClick={tels} className='Contact_info_df_a text-[#407CD3]'>{language?.savolberish}</Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="contact-infoo">
              <div className="Contact_info_df1">
                <img className='Useful_info_df_img' src={icon2} alt="" />
                <h2 className='Useful_info_df_h2'>{lang === 'ru' ? 'Получите консультацию' : 'Konsultatsiya oling'}</h2>
                <p className='Useful_info_df_p'>{lang === 'ru' ? 'Консультанты Basito покажут вам товар онлайн' : 'Basito maslahatchilari sizga mahsulotni onlayn korsatishadi'}<br />
                  {lang === 'ru' ? ' и ответят на любые вопросы' : 'va barcha savollarga javob berishadi'}
                </p>
                <Link onClick={tels} className='Contact_info_df_a text-[#407CD3]'>{language?.telqil}</Link>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="contact-infoo">
              <div className="Contact_info_df1">
                <img className='Useful_info_df_img' src={icon3} alt="" />
                <h2 className='Useful_info_df_h2'>{language?.tezjavob}</h2>
                <p className='Useful_info_df_p'>
                  {lang === 'ru' ? ' Мы собрали самые популярные вопросы наших' : 'Biz ozimizning eng mashhur savollarni topladik'} <br />
                  {lang === 'ru' ? 'пользователей в одном удобном разделе.' : 'foydalanuvchilar bitta qulay bo`limda.'}
                </p>
                <Link onClick={tels} className='Contact_info_df_a text-[#407CD3]'>{language?.bulimoching}</Link>
              </div>
            </div>
          </SwiperSlide>
          {/* </div> */}
        </Swiper>
      </div >
    </div>

  )
}

export default ContactInfo

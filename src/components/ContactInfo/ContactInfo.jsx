import React from 'react'
import icon1 from '../../assets/svg/napishite_zvonite.svg'
import icon2 from '../../assets/svg/videokonsultaciya.svg'
import icon3 from '../../assets/svg/faq.svg'
import { Link } from 'react-router-dom'
import './ContactInfo.css'
function ContactInfo() {
  return (
    <div className='Contact_info container'>
      <h2 className='font-semibold text-4xl text-center'>Всегда на связи</h2>
      <p className='Useful_info_p'>Мы постоянно разрабатываем инновационные решения и выпускаем только такую продукцию, в которой <br />
        уверены на 100%. День за днём мы работаем для того , чтобы каждую ночь вы погружались в здоровый сон, <br />
        набираясь сил для новых свершений
      </p>
      <div className="Contact_info_df">
        <div className="Contact_info_df1">
          <img className='Useful_info_df_img' src={icon1} alt="" />
          <h2 className='Useful_info_df_h2'>Напишите или позвоните нам</h2>
          <p className='Useful_info_df_p'>Консультанты Askona готовы ответить на любой <br />
            ваш вопрос в режиме онлайн.
          </p>
          <Link className='Contact_info_df_a' href="">Задать вопрос</Link>
        </div>
        <div className="Contact_info_df1">
          <img className='Useful_info_df_img' src={icon2} alt="" />
          <h2 className='Useful_info_df_h2'>Получите видеоконсультацию</h2>
          <p className='Useful_info_df_p'>Консультанты Askona покажут вам товар онлайн <br />
            и ответят на любые вопросы.
          </p>
          <Link className='Contact_info_df_a' href="">Позвонить по видео</Link>
        </div>
        <div className="Contact_info_df1">
          <img className='Useful_info_df_img' src={icon3} alt="" />
          <h2 className='Useful_info_df_h2'>Узнайте ответы на частые вопросы</h2>
          <p className='Useful_info_df_p'>
            Мы собрали самые популярные вопросы наших <br />
            пользователей в одном удобном разделе.
          </p>
          <Link className='Contact_info_df_a' href="">Открыть раздел</Link>
        </div>
      </div>
    </div>
  )
}

export default ContactInfo

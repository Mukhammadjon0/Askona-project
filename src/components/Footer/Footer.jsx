import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

import Facebook from '../../assets/img/FacebookLogo.png'
import Instagram from '../../assets/img/InstagramLogo.png'
import Vk from '../../assets/img/VkLogo.png'
import Youtube from '../../assets/img/YoutubeLogo.png'
import Telegram from '../../assets/img/TelegromLogo.png'

import A1 from '../../assets/img/A1logo.png'
import Mts from '../../assets/img/mtslogo.png'
import Life from '../../assets/img/life-logo.png'
import Like from '../../assets/img/like-logo.png'

import Hilding from '../../assets/img/HildingLogo.png'
import Viza from '../../assets/img/VizaLogo.png'
import Master from '../../assets/img/MastercardLogo.png'
import ApplePay from '../../assets/img/applepayLogo.jpg'
import GooglePay from '../../assets/img/googlepayLogo.png'
import MirPay from '../../assets/img/mirLogo.jpg'
import Opl from '../../assets/img/oplLogo.png'

function Footer() {
    return (
        <div className="">
            <footer className='bg-[#F6F6F6C9] pt-16 pb-5'>
                <div className="container flex flex-col gap-16">
                    <div className="flex justify-between">
                        <div className="flex flex-row gap-24">
                            <div className="flex flex-col">
                                <h1 className='font-bold text-2xl'>Покупателям</h1>
                                <div className="flex gap-20 ml-4 mt-3">
                                    <div className="flex flex-col gap-2">
                                        <Link className='footer-link'>Оплата и доставка</Link>
                                        <Link className='footer-link'>Вопросы и ответы</Link>
                                        <Link className='footer-link'>Рассрочка</Link>
                                        <Link className='footer-link'>Обмен и возврат товара </Link>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <Link className='footer-link'>Гарантия</Link>
                                        <Link className='footer-link'>Публичная оферта</Link>
                                        <Link className='footer-link'>Статус заказа</Link>
                                        <Link className='footer-link'>Подача претензии</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <h1 className='font-bold text-2xl'>Компания</h1>
                                <div className="flex gap-32 ml-4 mt-3">
                                    <div className="flex flex-col gap-2">
                                        <Link className='footer-link'>О нас</Link>
                                        <Link className='footer-link'>Блог</Link>
                                        <Link className='footer-link'>Вакансии</Link>
                                        <Link className='footer-link'>Контакты</Link>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <Link className='footer-link'>Реквизиты</Link>
                                        <Link className='footer-link'>Принципы и миссия</Link>
                                        <Link className='footer-link'>Производство</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div >
                            <h1 className="font-bold text-2xl">Следите за новостями</h1>
                            <div className="flex flex-row items-center justify-center gap-3 mt-3">
                                <img className='cursor-pointer' src={Facebook} alt="logo" />
                                <img className='cursor-pointer' src={Instagram} alt="logo" />
                                <img className='cursor-pointer' src={Vk} alt="logo" />
                                <img className='cursor-pointer' src={Youtube} alt="logo" />
                                <img className='cursor-pointer' src={Telegram} alt="logo" />
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-between">
                        <div className="flex flex-row gap-16">
                            <div className="flex flex-col">
                                <h1 className='font-bold text-2xl'>Предложения</h1>
                                <div className="flex gap-24 ml-4 mt-3">
                                    <div className="flex flex-col gap-2">
                                        <Link className='footer-link'>Бонусная программа</Link>
                                        <Link className='footer-link'>Акции</Link>
                                        <Link className='footer-link'>Уцененные товары</Link>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <Link className='footer-link'>Рекомендуемые товары</Link>
                                        <Link className='footer-link'>Детальный подбор</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <h1 className='font-bold text-2xl'>Партнерам</h1>
                                <div className="flex gap-16 ml-4 mt-3">
                                    <div className="flex flex-col gap-2">
                                        <Link className='footer-link'>Франчайзинг</Link>
                                        <Link className='footer-link'>Юридическим лицам</Link>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <Link className='footer-link'>Предложения для отелей</Link>
                                        <Link className='footer-link'>Оптовые предложения</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div >
                            <div className="flex flex-col items-center gap-3 text-right">
                                <div className="flex items-center gap-3">
                                    <img className='cursor-pointer' src={A1} alt="logo" />
                                    <p className='font-medium text-xl' >+375 (44) 787-07-50</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <img className='cursor-pointer' src={Mts} alt="logo" />
                                    <p className='font-medium text-xl'>+375 (29) 252-03-96</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <img className='cursor-pointer' src={Life} alt="logo" />
                                    <p className='font-medium text-xl'>+375 (25) 500-37-43</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-row justify-between items-center">
                        <p className='font-normal text-base'>Политика конфеденциальности</p>
                        <div className="flex items-center gap-3">
                            <p className='font-normal text-base'>Сайт разработан </p>
                            <img src={Like} alt="logo" />
                        </div>
                    </div>
                </div>
            </footer>
            <div className="bg-[#F6F6F6C9] pb-16 border-t-[2px]">
                <div className="w-[1400px] m-auto flex items-center justify-between">
                    <div className="">
                        <p className='font-semibold text-sm'>© 1990–2022. Компания «Аскона»</p>
                        <p className='font-normal text-sm'>В торг. реестре с 18.12.2019г., № 468759, УНП 193341168, Мингорисполком. ООО «ТД Аскона-Импорт» </p>
                        <p className='font-normal text-sm'>юр.адрес: 220089, город Минск, проспект Дзержинского, дом 57, помещение № 54-1, 14-й этаж.</p>
                    </div>
                    <div className="flex items-center gap-1">
                        <img className='rounded-md' src={Hilding} alt="logo" />
                        <img className='rounded-md' src={Viza} alt="logo" />
                        <img className='rounded-md' src={Master} alt="logo" />
                        <img className='rounded-md' src={ApplePay} alt="logo" />
                        <img className='rounded-md' src={GooglePay} alt="logo" />
                        <img className='rounded-md' src={MirPay} alt="logo" />
                        <img className='rounded-md' src={Opl} alt="logo" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
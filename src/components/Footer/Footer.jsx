import React, { useContext, useState } from 'react'
import './Footer.css'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'

import Facebook from '../../assets/svg/facebook.svg'
import Instagram from '../../assets/svg/insta.svg'
import Youtube from '../../assets/svg/youtube.svg'
import Telegram from '../../assets/svg/telegram.svg'

import FinTech from '../../assets/svg/fintech.svg'
import { useContactQuery } from '../../services/contact'
import { StateContext } from '../../context'



function Footer({ language }) {
    const { data: contact } = useContactQuery()
    const { lang } = useContext(StateContext)
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [show4, setShow4] = useState(false);
    return (
        <div className="">
            <footer className='bg-[#F6F6F6C9] pt-16 pb-5 flex flex-col gap-5'>
                <div className="container flex desktop:flex-row tablet:flex-row mobile:flex-col desktop:justify-between tablet:justify-between mobile:gap-10 items-center">
                    <div className="grid mobile:grid-cols-1 tablet:grid-cols-1 desktop:grid-cols-2 desktop:gap-10 tablet:gap-0 mobile:gap-0 desktop:divide-y-0 tablet:divide-y-2 mobile:divide-y-2 tablet:w-1/2 desktop:w-2/3 mobile:w-full">
                        <div className="w-full flex flex-col desktop:border-0 mobile:border-t-2 border-gray-200">
                            <div className="w-full flex flex-row justify-between items-center pl-1 mobile:py-2 desktop:py-0 tablet:py-3">
                                <h1 className='font-bold text-2xl hover:bg-gray-200'>{language?.xaridor}</h1>
                                <button className='hover:bg-gray-200 p-1 rounded-full active:scale-90' onClick={() => setShow1(p => !p)}>
                                    <MdOutlineKeyboardArrowDown className='desktop:hidden mobile:block tablet:block text-[#407CD3] text-xl' />
                                </button>
                            </div>
                            <div className={`mobile:${show1 ? 'flex  tablet:flex-row mobile:flex-col tablet:justify-between mobile:gap-3 pb-3 mt-3' : 'hidden'} desktop:flex desktop:flex-row desktop:justify-between mx-4`}>
                                <div className="flex flex-col gap-3">
                                    <p className='footer-link'>{language?.yetkaz}</p>
                                    <p className='footer-link'>{language?.garant}</p>
                                    <p className='footer-link'>{language?.ariza}</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col">
                            <div className="w-full flex flex-row justify-between items-center pl-1 mobile:py-2 desktop:py-0 tablet:py-3">
                                <h1 className='font-bold text-2xl'>{language?.kompaniy}</h1>
                                <button className='hover:bg-gray-200 p-1 rounded-full active:scale-90' onClick={() => setShow2(p => !p)}>
                                    <MdOutlineKeyboardArrowDown className='desktop:hidden mobile:block tablet:block text-[#407CD3] text-xl' />
                                </button>
                            </div>
                            <div className={`mobile:${show2 ? 'flex  tablet:flex-row mobile:flex-col tablet:justify-between mobile:gap-3 pb-3 mt-3' : 'hidden'} desktop:flex desktop:flex-row desktop:justify-between mx-4`}>
                                <div className="flex flex-col gap-3">
                                    <p className='footer-link'>{language?.bizhaqimizda}</p>
                                    <p className='footer-link'>{language?.kontact}</p>
                                    <p className='footer-link'>{language?.ishlabchiq}</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col">
                            <div className="w-full flex flex-row justify-between items-center pl-1 mobile:py-2 desktop:py-0 tablet:py-3">
                                <h1 className='font-bold text-2xl'>{language?.taklif}</h1>
                                <button className='hover:bg-gray-200 p-1 rounded-full active:scale-90' onClick={() => setShow3(p => !p)}>
                                    <MdOutlineKeyboardArrowDown className='desktop:hidden mobile:block tablet:block text-[#407CD3] text-xl' />
                                </button>
                            </div>
                            <div className={`mobile:${show3 ? 'flex  tablet:flex-row mobile:flex-col tablet:justify-between mobile:gap-3 pb-3 mt-3' : 'hidden'} desktop:flex desktop:flex-row desktop:justify-between mx-4`}>
                                <div className="flex flex-col gap-3">
                                    <p className='footer-link'>{language?.aksiya}</p>
                                    <p className='footer-link'>{language?.chegirma}</p>
                                    <p className='footer-link'>{language?.detalniy}</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col">
                            <div className="w-full flex flex-row justify-between items-center pl-1 mobile:py-2 desktop:py-0 tablet:py-3">
                                <h1 className='font-bold text-2xl'>{language?.partnyor}</h1>
                                <button className='hover:bg-gray-200 p-1 rounded-full active:scale-90' onClick={() => setShow4(p => !p)}>
                                    <MdOutlineKeyboardArrowDown className='desktop:hidden mobile:block tablet:block text-[#407CD3] text-xl' />
                                </button>
                            </div>
                            <div className={`mobile:${show4 ? 'flex tablet:flex-row mobile:flex-col tablet:justify-between mobile:gap-3 pb-3 mt-3' : 'hidden'} desktop:flex desktop:flex-row desktop:justify-between mx-4`}>
                                <div className="flex flex-col">
                                    <p className='footer-link'>{language?.yuridik}</p>
                                    <p className='footer-link'>{language?.ulgurchi}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {contact?.data?.map((item, index) => (
                        <div key={index} className="flex flex-col gap-24">
                            <div className='flex flex-col items-center'>
                                <h1 className="font-bold text-2xl">{language?.yangilik}</h1>
                                <div className="flex flex-row items-center justify-center gap-3 mt-3">
                                    <a href={item?.facebook} target='_blank'>
                                        <img className='cursor-pointer hover:scale-110 duration-150 ' src={Facebook} alt="logo" />
                                    </a>
                                    <a href={item?.instagram} target='_blank'>
                                        <img className='cursor-pointer hover:scale-110 duration-150' src={Instagram} alt="logo" />
                                    </a>
                                    <a href={item?.youtube} target='_blank'>
                                        <img className='cursor-pointer hover:scale-110 duration-150' src={Youtube} alt="logo" />
                                    </a>
                                    <a href={item?.telegram} target='_blank'>
                                        <img className='cursor-pointer hover:scale-110 duration-150' src={Telegram} alt="logo" />
                                    </a>
                                </div>
                            </div>
                            <div className="flex flex-col items-center gap-3 text-right">
                                <div className="flex items-center gap-3">
                                    <p className='font-medium text-xl' >{item.phone}</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <p className='font-medium text-xl'>{item.phone2}</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <p className='font-medium text-xl'>{item.phone3}</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <p className='font-medium text-xl'>{item.phone4}</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <p className='font-medium text-xl'>{item.phone5}</p>
                                </div>
                            </div>
                        </div>

                    ))}

                </div>
                <div className="desktop:text-start tablet:text-center mobile:text-center mobile:py-2 tablet:py-2 desktop:py-0 container">
                    <p className='font-semibold text-sm'>© 2011. {lang === 'ru' ? 'Компания' : 'Kompaniya'} «Real Goal Forward»</p>
                    <p className='font-normal text-sm'></p>
                </div>
            </footer >

            <div className="bg-[#F6F6F6C9] pb-16 border-t-[2px] pt-5">
                <div className="container flex desktop:flex-row mobile:flex-col tablet:flex-col justify-between items-center">
                    <p className='font-normal text-base'>{language?.maxfiylik}</p>
                    <div className="flex items-center gap-3">
                        <p className='font-normal text-base'>{language?.fintech}</p>
                        <img className='h-6' src={FinTech} alt="logo" />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Footer
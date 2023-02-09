import React, { useState } from 'react'
import './Basket.css'
import Minus from '../../assets/icon/minus.svg'
import Plus from '../../assets/icon/plus.svg'
import { HiXMark } from 'react-icons/hi2';
import { IoIosStats } from 'react-icons/io';


function BasketComponent({ image, title, price, oldPrice }) {
    const [count, setCount] = useState(1)
    const minusBtn = () => {
        if (count > 1) setCount((p) => p - 1);
        else setCount(1);
    };
    return (
        <div className="">

            <div className='flex bg-white py-6 justify-between group'>
                <div className="flex">
                    <img src={image} alt="img" />
                    <div className="flex flex-col justify-between ml-8">
                        <h1 className='font-semibold text-sm group-hover:text-[#00B9C0] duration-200'>{title}</h1>
                        <div className="flex justify-between">
                            <div className="flex gap-2 cursor-pointer cancel-basket">
                                <IoIosStats className='stat-xmark' />
                                <span className='font-normal text-[10px] text-gray-400 xmark-text'>Добавить к сравнению</span>
                            </div>
                            <div className="flex gap-3 cursor-pointer cancel-basket">
                                <HiXMark className='stat-xmark' />
                                <span className='font-normal text-[10px] text-gray-400 xmark-text'>Удалить</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col justify-between">
                    <div className="flex flex-col">
                        <p className='text-[#00B9C0] font-semibold text-sm'>{price} BYN</p>
                        <span className='text-gray-400 line-through text-xs'>{oldPrice} BYN</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <button onClick={minusBtn} className='py-1'>
                            <img src={Minus} alt="icon" />
                        </button>
                        <span type="number" className=' flex border-2 border-gray-500 w-9 h-6 text-center justify-center'>{count}</span>
                        <button onClick={() => setCount(p => p + 1)}>
                            <img src={Plus} alt="icon" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BasketComponent
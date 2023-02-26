import React, { useContext, useState } from 'react'
import './Basket.css'
import Minus from '../../assets/icon/minus.svg'
import Plus from '../../assets/icon/plus.svg'
import { HiXMark } from 'react-icons/hi2';
import { IoIosStats } from 'react-icons/io';
import axios from 'axios';
import { StateContext } from '../../context';

function BasketComponent({ product, soni }) {
    const [count, setCount] = useState(soni)
    const { userData } = useContext(StateContext)

    const deleteFromBasket = () => {
        const params = {
            bron_id: product.id
        }
        const headers = {
            Authorization: `Bearer ${userData?.token}`,
        };
        axios.delete('https://askona.herokuapp.com/api/v1/basket', params, { headers })
    }

    const minusBtn = () => {
        if (count > 1) setCount((p) => p - 1);
        else setCount(1);
    };
    return (
        <div className="">
            <div className='flex bg-white py-6 justify-between group'>
                <div className="flex">
                    <img className='w-32' src={`https://askona.herokuapp.com${product.images[0]}`} alt="img" />
                    <div className="flex flex-col justify-between ml-8">
                        <h1 className='font-semibold text-sm group-hover:text-[#00B9C0] duration-200'>{product.name}</h1>
                        <div className="flex justify-between">
                            <div className="flex gap-2 cursor-pointer cancel-basket">
                                <IoIosStats className='stat-xmark' />
                                <span className='font-normal text-[10px] text-gray-400 xmark-text'>Добавить к сравнению</span>
                            </div>
                            <button onClick={deleteFromBasket} className="flex gap-3 cursor-pointer cancel-basket">
                                <HiXMark className='stat-xmark' />
                                <span className='font-normal text-[10px] text-gray-400 xmark-text'>Удалить</span>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col justify-between">
                    <div className="flex flex-col">
                        <p className='text-[#00B9C0] font-semibold text-sm'>{product.price} BYN</p>
                        <span className='text-gray-400 line-through text-xs'>98 000 BYN</span>
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
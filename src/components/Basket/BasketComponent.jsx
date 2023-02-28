import React, { useContext, useEffect, useState } from 'react'
import './Basket.css'
import { HiMinus, HiXMark } from 'react-icons/hi2';
import { IoIosStats } from 'react-icons/io';
import axios from 'axios';
import { StateContext } from '../../context';
import { useRemoveProductFromBasketMutation, useUpdateProductQuantityInBasketMutation } from '../../services/basketApi';
import { BsPlus } from 'react-icons/bs';

function BasketComponent({ product, soni, bronId, setItog, summa }) {
    const [count, setCount] = useState(soni)
    const [updateQuantity, { isLoading }] = useUpdateProductQuantityInBasketMutation();
    const [deleteProduct] = useRemoveProductFromBasketMutation()
    // useEffect(() => {
    //     setItog(summa)
    // }, [])


    const handleUpdateQuantity = async () => {
        await updateQuantity({ bron_id: bronId, quantity: count });
        console.log(count)
        console.log(soni)
    };

    const plusBtn = () => {
        setCount(p => p + 1)
        handleUpdateQuantity()

    }
    const minusBtn = () => {
        if (count > 1) setCount((p) => p - 1);
        else setCount(1);
        handleUpdateQuantity()
    };
    const handleDeleteProduct = () => {
        deleteProduct(bronId)
    }
    return (
        <div className="">
            <div className='flex bg-white py-6 justify-between group'>
                <div className="flex">
                    <img className='w-32' src={`https://askona.herokuapp.com${product?.images[0]}`} alt="img" />
                    <div className="flex flex-col justify-between ml-8">
                        <h1 className='font-semibold text-sm group-hover:text-[#00B9C0] duration-200'>{product.name}</h1>
                        <button onClick={handleDeleteProduct} className="flex gap-3 cursor-pointer cancel-basket">
                            <HiXMark className='stat-xmark' />
                            <span className='font-normal text-[10px] text-gray-400 xmark-text'>Удалить</span>
                        </button>
                    </div>
                </div>

                <div className="flex flex-col justify-between">
                    <div className="flex flex-col">
                        <p className='text-[#00B9C0] font-semibold text-sm'>{product.price} BYN</p>
                        <span className='text-gray-400 line-through text-xs'>98 000 BYN</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <button onClick={minusBtn} className='py-1'>
                            <HiMinus />
                        </button>
                        <span type="number" className=' flex border-2 border-gray-500 w-9 h-6 text-center justify-center'>{count}</span>
                        <button onClick={plusBtn}>
                            <BsPlus />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BasketComponent
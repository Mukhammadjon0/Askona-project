import React, { useState, useEffect, useContext } from 'react'
import './Basket.css'
import { HiMinus, HiXMark } from 'react-icons/hi2';
import { useRemoveProductFromBasketMutation, useUpdateProductQuantityInBasketMutation } from '../../services/basketApi';
import { BsPlus } from 'react-icons/bs';
import { StateContext } from '../../context';

function BasketComponent({ product, soni, summa, basket_id, language }) {
    const { lang } = useContext(StateContext)
    const [count, setCount] = useState(soni)
    const [updateQuantity] = useUpdateProductQuantityInBasketMutation();
    const [deleteProduct] = useRemoveProductFromBasketMutation()
    const handleUpdateQuantity = async () => {
        await updateQuantity({
            bron_id: basket_id,
            quantity: count
        });
    };
    const plusBtn = () => {
        setCount(p => p + 1)
    }
    const minusBtn = () => {
        if (count > 1) setCount((p) => p - 1);
        else setCount(1);
    };
    const handleDeleteProduct = () => {
        deleteProduct(basket_id)
    }
    useEffect(() => {
        return () => {
            handleUpdateQuantity()
        }
    }, [count])
    return (
        <div className="">
            <div className='flex bg-white py-6 justify-between group'>
                <div className="flex">
                    <img className='w-32' src={`http://api.basito.uz${product?.img[0].img}`} alt="img" />
                    <div className="flex flex-col justify-between ml-8">
                        <h1 className='font-semibold text-sm group-hover:text-[#00B9C0] duration-200'>{lang === 'ru' ? product.name_ru : product.name_uz}</h1>
                        <button onClick={handleDeleteProduct} className="flex gap-3 cursor-pointer cancel-basket">
                            <HiXMark className='stat-xmark' />
                            <span className='font-normal text-[10px] text-gray-400 xmark-text'>{lang === 'ru' ? 'Удалиты' : 'O`chirish'}</span>
                        </button>
                    </div>
                </div>
                <div className="flex flex-col justify-between">
                    <div className="flex flex-col">
                        <p className='text-[#00B9C0] font-semibold text-sm'>{product.model_number}</p>
                        {/* <span className='text-gray-400 line-through text-xs'>98 000 BYN</span> */}
                    </div>
                    <div className="flex items-center gap-2">
                        <button onClick={minusBtn} className='py-1'>
                            <HiMinus className='hover:text-[#00B9C0]' />
                        </button>
                        <span type="number" className=' flex border-2 border-gray-500 w-9 h-6 text-center justify-center'>{count}</span>
                        <button onClick={plusBtn}>
                            <BsPlus className='hover:text-[#00B9C0]' />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BasketComponent
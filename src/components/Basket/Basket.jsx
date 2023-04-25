import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import { StateContext } from '../../context';
import { Box } from '@mui/material';
import BasketComponent from './BasketComponent';
import { useBasketQuery } from '../../services/basketApi';
import { HiXMark } from 'react-icons/hi2';

function Basket({ setState, language }) {
    const { data: basket, isLoading: isBasketLoading, } = useBasketQuery();
    const { state, userData, handleOpenBasket, handleOpen, setTelInfo, lang } = React.useContext(StateContext)

    const handleNavigate = () => {
        if (userData?.token) {
            setTelInfo(true)
        }
        else handleOpen()
    }
    return (
        <div>
            {['right'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Drawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={handleOpenBasket(anchor, false)}
                    >
                        <Box
                            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : '100%' }}
                            role="presentation"
                        >
                            <div className='bg-white desktop:w-[604px] tablet:w-[604px] mobile:w-screen h-full '>
                                <div className="flex justify-between items-center px-6 py-6 border-b-[1px] border-gray-300">
                                    <h1 className='font-semibold text-3xl'>{language?.korzina} ({basket?.data?.length || 0}) {language?.tovar}</h1>
                                    <button onClick={handleOpenBasket(anchor, false)}>
                                        <HiXMark className='text-2xl text-[#407CD3]' />
                                    </button>
                                </div>
                                <div className="divide-y px-6">
                                    {isBasketLoading && <h1>Loading...</h1>}
                                    {basket?.data?.length > 0 ? (
                                        basket?.data?.map((item) => (
                                            <BasketComponent
                                                key={item.basket_id}
                                                basket_id={item.basket_id}
                                                product={item.product}
                                                summa={item.summa}
                                                soni={item.soni}
                                                setState={setState}
                                                state={state}
                                                language={language}
                                            />
                                        ))
                                    ) : (
                                        <p className='my-5 text-red-500 text-xl font-semibold'>{lang === 'ru' ? 'Ваша корзина пуста' : 'Savat bo`sh'}</p>
                                    )}
                                </div>
                                {/* <div className="flex flex-row justify-between px-6 py-5 border-t-[1px] border-gray-300">
                                    <h1 className='font-bold text-xl text-black'>{language?.jami}:</h1>
                                    <span className='text-[#407CD3] font-bold text-xl'>{basket?.summa?.toLocaleString("uz-UZ") || 0} {language?.summ}</span>
                                </div> */}
                                <div className="flex px-6 flex-row justify-between">
                                    <button onClick={handleNavigate} className='w-full text-gray-500 text-base border-[1px] border-gray-500 py-2 rounded bg-transparent duration-200 hover:bg-[#407CD3] hover:border-[#407CD3] hover:text-white active:scale-95'>{language?.kupit}</button>
                                    {/* <button onClick={handleNavigate} className='text-white text-base px-16 py-2 rounded bg-[#407CD3] duration-200 hover:bg-[#2B58A0] active:scale-95'>Оформить заказ</button> */}
                                </div>
                                {/* <div className="flex flex-row items-center p-6 justify-between">
                                    <h1 className='font-bold text-2xl text-black'>С этим товаром покупают</h1>
                                </div>
                                <Recommended setState={setState} /> */}
                            </div>
                        </Box>
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    )
}

export default Basket
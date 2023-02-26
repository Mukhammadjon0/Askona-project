import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import { StateContext } from '../../context';
import { Box } from '@mui/material';
import BasketComponent from './BasketComponent';
import Cancel from '../../assets/icon/cancel.svg'
import { AiFillQuestionCircle } from 'react-icons/ai';
import Recommended from './Recommended';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Basket() {

    const { handleOpenBasket, state, basket, setBasket, userData } = React.useContext(StateContext)
    const [isLoading, setIsLoading] = React.useState(true)
    const navigate = useNavigate()

    const basketInfo = async () => {
        await axios.get('https://askona.herokuapp.com/api/v1/basket/', {
            headers: {
                Authorization: `Bearer ${userData?.token}`
            }
        })
            .then((res) => {
                setBasket(res.data)
                setIsLoading(false)
            })
            .catch((err) => console.log(err))
    }
    console.log(basket)
    React.useEffect(() => {
        basketInfo()
    }, [])
    return (
        <div>
            {['right'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Drawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={handleOpenBasket(false)}
                    >
                        <Box
                            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 'auto' }}
                            role="presentation"
                        >

                            <div className='bg-white w-[604px] h-screen '>
                                <div className="flex justify-between items-center px-6 py-6 border-b-[1px] border-gray-300">
                                    <h1 className='font-semibold text-3xl'>В корзине {basket.length} товара</h1>
                                    <button onClick={handleOpenBasket(anchor, false)}>
                                        <img src={Cancel} alt="icon" />
                                    </button>
                                </div>
                                <div className="divide-y px-6">
                                    {basket ?
                                        (basket.map(basketProd => <BasketComponent key={basketProd.id} {...basketProd} />))
                                        : <h1>продукты не найдены</h1>}
                                </div>
                                <div className="flex flex-row justify-between px-6 py-5 border-t-[1px] border-gray-300">
                                    <h1 className='font-bold text-xl text-black'>Итого:</h1>
                                    <span className='text-[#00B6C9] font-bold text-xl'> BYN</span>
                                </div>
                                <div className=" w-full px-6">
                                    <div className="bg-gray-200 px-3 py-2 rounded flex flex-row items-center gap-3">
                                        <h1 className='font-semibold text-base text-[#00B6C9]'>Будет начисленно 149 бонусов за этот заказ</h1>
                                        <AiFillQuestionCircle className='text-[#00B6C9]' />
                                    </div>
                                </div>
                                <div className="flex px-6 py-6 flex-row justify-between">
                                    <button onClick={() => {
                                        handleOpenBasket(anchor, false)
                                        navigate('/zakaz')

                                    }
                                    } className='text-gray-500 text-base px-16 border-[1px] border-gray-500 py-2 rounded bg-transparent duration-200 hover:bg-gray-100 active:scale-95'>Купить в 1 клик</button>
                                    <button onClick={() => {
                                        handleOpenBasket(anchor, false)
                                        navigate('/zakaz')

                                    }
                                    } className='text-white text-base px-16 py-2 rounded bg-[#00bac9] duration-200 hover:bg-[#0099a5] active:scale-95'>Оформить заказ</button>
                                </div>
                                <div className="flex flex-row items-center p-6 justify-between">
                                    <h1 className='font-bold text-2xl text-black'>С этим товаром покупают</h1>
                                </div>
                                <Recommended />
                            </div>

                        </Box>
                    </Drawer>
                </React.Fragment>
            ))}
        </div>



    )
}

export default Basket
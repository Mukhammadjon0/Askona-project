import { Box, Drawer } from '@mui/material'
import React, { useContext } from 'react'
import { HiXMark } from 'react-icons/hi2';
import { MdKeyboardArrowRight } from 'react-icons/md'
import './Color.css'
import ColorCard from './ColorCard';
import { StateContext } from '../../context';

function Color({ data }) {
    const [mainColorId, setMainColorId] = React.useState(0)
    const { lang } = useContext(StateContext)
    const [colorBar, setColorBar] = React.useState({
        right: false,
    });
    const handleOpenColor = (anchor, open) => (event) => {
        if (
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }
        setColorBar({ ...colorBar, [anchor]: open });
    };

    return (
        <div>

            {data?.color ? (
                <div>
                    <div>
                        {["right"].map((anchor) => (
                            <React.Fragment key={anchor}>
                                <button onClick={handleOpenColor(anchor, true)} className='w-full'>
                                    <div className="h-10 flex justify-between border-2 border-solid border-gray-300 items-center px-2 rounded mt-3 cursor-pointer">
                                        <div className="flex items-center">
                                            <img className="mr-2 w-5" src={`https://api.basito.uz${data?.color[mainColorId].color.img}`} alt="img" />
                                            <h2>{lang === 'ru' ? data?.color?.[mainColorId]?.color?.name_ru : data?.color?.[mainColorId]?.color?.name_uz}</h2>
                                        </div>
                                        <MdKeyboardArrowRight className='text-[#407CD3]' />
                                    </div>
                                </button>
                                <Drawer
                                    anchor={anchor}
                                    open={colorBar[anchor]}
                                    onClose={handleOpenColor(anchor, false)}
                                >
                                    <Box
                                        sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : "auto" }}
                                        role="presentation"
                                    >
                                        <div className="divide-y-2 py-2 bg-white desktop:w-[604px] tablet:w-[604px] mobile:w-screen h-full">
                                            <div className="flex items-center justify-between py-5 px-6">
                                                <h1 className='font-bold text-3xl'>Цвета</h1>
                                                <button onClick={handleOpenColor(anchor, false)}>
                                                    <HiXMark className="text-[#407CD3] text-2xl" />
                                                </button>
                                            </div>
                                            <div className="py-4 px-6">
                                                <div className='Colors'>
                                                    <div className="form_info">
                                                        {data?.color?.map((item, index) => <ColorCard key={item.id} index={index} {...item} setMainColorId={setMainColorId} mainColorId={mainColorId} />)}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Box>
                                </Drawer>
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            ) : (<></>)}
        </div>

    )
}

export default Color
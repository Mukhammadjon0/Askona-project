import React, { useContext, useEffect, useState } from 'react'
import { StateContext } from '../../context';
import { categries } from '../../datas';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Box, Drawer } from '@mui/material';
import { AiOutlineArrowUp } from 'react-icons/ai';
function SubCategory() {
    const [subCtg, setSubCtg] = useState()
    const navigate = useNavigate()
    const { showSubCtg, setShowSubCtg, setType, setSubCtg_id, lang } = useContext(StateContext)
    const [clickedCategoryType, setClickedCategoryType] = useState('kalso');

    const filteredSubCtg = subCtg?.filter((sub) => sub.type === clickedCategoryType);

    const handleCategoryClick = (type) => {
        setClickedCategoryType(type);
    };
    useEffect(() => {
        axios.get(`http://api.basito.uz/apps/api/v1/subcategory/`,)
            .then(res => {
                setSubCtg(res?.data?.data)
            })
            .catch((err) => console.log(err))
    }, [])

    const getSubCategory = (id, type) => {
        navigate(`/products/${id}`)
        setSubCtg_id(id)
        setType(type)
        setShowSubCtg({
            top: false
        })
    }

    const handleOpenSubCtg = (anchor, open) => (event) => {
        if (
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }
        setShowSubCtg({ ...showSubCtg, [anchor]: open });
    };
    return (
        <div>
            {/* <div className='relative container shadow-2xl'> */}
            {/* <div className={`${subCtgModal ? 'absolute' : 'hidden'} z-30 bg-white desktop:top-20`}> */}
            {["top"].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Drawer
                        anchor={anchor}
                        open={showSubCtg[anchor]}
                        onClose={handleOpenSubCtg(anchor, false)}
                    >
                        <Box
                            sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : "auto" }}
                            role="presentation"
                        >
                            <section className='flex desktop:flex-row tablet:flex-row mobile:flex-row divide-x-2 w-[100%] bg-white'>
                                <div className="flex flex-col gap-5 py-5 desktop:pr-48 tablet:pr-40 mobile:pr-20 pl-10">
                                    {categries?.map(item => (
                                        <div key={item.id} className='flex gap-4 items-center group cursor-pointer' onClick={() => {
                                            handleCategoryClick(item.type)

                                        }}>
                                            <img className='w-10' src={item.img} alt="img" />
                                            <p className='text-base whitespace-nowrap group-hover:underline group-hover:text-[#00b6c9]'>{lang === 'ru' ? item.name_ru : item.name_uz}</p>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex w-full p-10">
                                    <div className="grid desktop:grid-cols-4 tablet:grid-cols-2 mobile:grid-cols-1 desktop:gap-16 tablet:gap-10 mobile:gap-10">
                                        {filteredSubCtg?.map((item, index) => (
                                            <button
                                                className={'text-base hover:underline hover:text-[#00b6c9]'}
                                                onClick={() => (getSubCategory(item.id, item.type))}
                                                key={index}
                                            >
                                                {lang === 'ru' ? item.content_ru : item.content_uz}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </section>
                            <button onClick={() => {
                                setShowSubCtg({
                                    top: false
                                })
                            }} className={`absolute bottom-10 desktop:hidden tablet:hidden mobile:left-10 z-50 bg-[#00bac9] duration-200 hover:bg-[#0099a5] active:scale-95 rounded-full desktop:p-3 mobile:p-2 tablet:p-3`}>
                                <AiOutlineArrowUp className='text-white font-bold desktop:text-2xl tablet:text-2xl mobile:text-xl' />
                            </button>

                        </Box>
                    </Drawer>
                </React.Fragment>
            ))}

            {/* </div > */}
            {/* // </div > */}
        </div>

    )
}

export default SubCategory
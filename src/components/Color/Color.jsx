import { Box, Drawer } from '@mui/material'
import React from 'react'
import { HiXMark } from 'react-icons/hi2';
import { MdKeyboardArrowRight } from 'react-icons/md'
import './Color.css'
import Colorss from '../../assets/img/tkan.png'
import Colors2 from '../../assets/img/tkan-2.png'
import Colors3 from '../../assets/img/tkan-3.png'
import Colors4 from '../../assets/img/tkan-4.png'
import ColorCard from './ColorCard';
import { useProductsQuery } from '../../services/productApi';

function Color() {
    const [mainColorId, setMainColorId] = React.useState(0)
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

    const colors = [
        { id: 1, image: Colorss, name: 'Sky Vallet 98', color: 'Серый', material: 'Микровелюр', price: 7900 },
        { id: 2, image: Colors2, name: 'Enrich1 848', color: 'Серый', material: 'Микровелюр', price: 9900 },
        { id: 3, image: Colors3, name: 'Iris 507', color: 'Серый', material: 'Микровелюр', price: 5900 },
        { id: 4, image: Colors4, name: 'Enrich1 212', color: 'Серый', material: 'Микровелюр', price: 6900 },
        { id: 5, image: Colorss, name: 'Sky Vallet 52', color: 'Серый', material: 'Микровелюр', price: 8000 },
    ]
    const { data: products, } = useProductsQuery()
    console.log(products)
    return (
        <div>
            {["right"].map((anchor) => (
                <React.Fragment key={anchor}>
                    <button onClick={handleOpenColor(anchor, true)} className='w-full'>
                        <div className="h-10 flex justify-between border-2 border-solid border-gray-300 items-center px-2 rounded mt-3 cursor-pointer">
                            <div className="flex items-center">
                                <img className="mr-2 w-5" src={colors[mainColorId].image} alt="img" />
                                <h2>{colors[mainColorId].name}</h2>
                            </div>
                            <MdKeyboardArrowRight className='text-[#00B6C9]' />
                        </div>
                    </button>
                    <Drawer
                        anchor={anchor}
                        open={colorBar[anchor]}
                        onClose={handleOpenColor(anchor, false)}
                    >
                        <Box
                            sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 600 }}
                            role="presentation"
                        // onClick={handleOpenColor(anchor, false)}
                        // onKeyDown={handleOpenColor(anchor, false)}
                        >
                            <div className="divide-y-2 py-2">
                                <div className="flex items-center justify-between py-5 px-6">
                                    <h1 className='font-bold text-3xl'>Ткань</h1>
                                    <button onClick={handleOpenColor(anchor, false)}>
                                        <HiXMark className="text-[#00B6C9] text-2xl" />
                                    </button>
                                </div>
                                <div className="py-4 px-6">
                                    <div className='Colors'>
                                        <div className="form_info">
                                            {colors?.map((item, index) => <ColorCard key={item.id} index={index} {...item} setMainColorId={setMainColorId} mainColorId={mainColorId} />)}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Box>
                    </Drawer>
                </React.Fragment>
            ))}

        </div>
    )
}

export default Color
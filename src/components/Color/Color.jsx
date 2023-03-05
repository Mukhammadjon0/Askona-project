import { Box, Drawer } from '@mui/material'
import React from 'react'
import { HiXMark } from 'react-icons/hi2';
import { MdKeyboardArrowRight } from 'react-icons/md'

function Color() {
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
            {["right"].map((anchor) => (
                <React.Fragment key={anchor}>
                    <button onClick={handleOpenColor(anchor, true)} className='w-full'>
                        <div className="h-10 flex justify-between border-2 border-solid border-gray-300 items-center px-2 rounded mt-3 cursor-pointer">
                            <div className="flex items-center">
                                <img className="mr-2" src='' alt="" />
                                <h2>Sky Velvet 99</h2>
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
                                    <button onClick={() => handleOpenColor(anchor, false)}>
                                        <HiXMark className="text-[#00B6C9] text-2xl" />
                                    </button>
                                </div>
                                <div className="py-4 px-6">
                                    

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
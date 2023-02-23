import React from 'react'
import { Box, IconButton, Menu } from '@mui/material';
import Prod from '../../assets/img/router.png'
import { AiOutlineHeart } from 'react-icons/ai';
import LikedCard from './LikedCard';

function Liked() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const liked = [
        { image: Prod, title: 'Анатомический матрас Askona Benefit', price: 48900, oldPrice: 97800, id: 1 },
        { image: Prod, title: 'Анатомический матрас Askona Benefit', price: 48900, oldPrice: 97800, id: 2 },
        { image: Prod, title: 'Анатомический матрас Askona Benefit', price: 48900, oldPrice: 97800, id: 3 },
    ]
    return (
        <div>
            <React.Fragment>
                <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                    <IconButton
                        onClick={handleClick}
                        // size="small"
                        // sx={{ ml: 2 }}
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                    >
                        <div className="relative cursor-pointer">
                            <div className="w-[18px] h-[18px] rounded-full bg-[#00BAC1] absolute top-[-5px] right-[-5px] flex justify-center items-center">
                                <p className='font-semibold text-[12px] text-white'>{liked.length}</p>
                            </div>
                            <AiOutlineHeart className='cursor-pointer text-black' />
                        </div>
                    </IconButton>
                </Box>
                <Menu
                    className='p-0'
                    sx={{ padding: '0' }}
                    anchorEl={anchorEl}
                    id="account-menu"
                    open={open}
                    onClose={handleClose}

                    // onClick={handleClose}
                    PaperProps={{
                        elevation: 0,
                        sx: {
                            overflow: 'visible',
                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                            mt: 1.5,
                            '& .MuiAvatar-root': {
                                width: 100,
                                height: 100,
                                ml: -0.5,
                                mr: 1,
                            },
                            '&:before': {
                                content: '""',
                                display: 'block',
                                position: 'absolute',
                                top: 0,
                                right: 14,
                                width: 10,
                                height: 10,
                                bgcolor: 'background.paper',
                                transform: 'translateY(-50%) rotate(45deg)',
                                zIndex: 0,
                            },
                        },
                    }}
                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >
                    <div className="flex flex-col p-3 gap-5">
                        <div className="flex flex-col gap-2">
                            {liked.map(item => <LikedCard key={item.id} {...item} />)}
                        </div>

                        <button className='w-full py-2 bg-[#00bac9] text-white'>delete all</button>
                    </div>
                </Menu>
            </React.Fragment>
        </div>
    )
}

export default Liked
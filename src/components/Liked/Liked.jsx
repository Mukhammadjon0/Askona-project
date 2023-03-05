import React from 'react'
import { Box, IconButton, Menu } from '@mui/material';
import { AiOutlineHeart } from 'react-icons/ai';
import LikedCard from './LikedCard';
import { useSavedQuery } from '../../services/savedApi';
import { useProductsQuery } from '../../services/productApi';

function Liked() {
    const { data: proSaved } = useSavedQuery();
    const { data: products } = useProductsQuery()
    console.log(proSaved)
    const productDetails = Array.isArray(proSaved) && proSaved?.map(prod => {
        const product = products?.find(p => p.id === prod.product_id);
        return {
            ...prod,
            ...product
        }
    });

    //product saved modal
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
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
                                <p className='font-semibold text-[12px] text-white'>{proSaved?.length || 0}</p>
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
                        <div className="flex flex-col gap-2 divide-y">
                            {productDetails?.length > 0 ? (productDetails?.map(item => <LikedCard key={item.id} {...item} handleClose={handleClose} />)) : (<h1 className='my-2 mx-2 text-red-500 text-xl font-semibold' >Вы еще не сохранили товар</h1>)}
                        </div>
                    </div>
                </Menu>
            </React.Fragment>
        </div>
    )
}

export default Liked
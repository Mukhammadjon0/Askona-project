import React from 'react'
import { Box, IconButton, Menu } from '@mui/material';
import { AiOutlineHeart } from 'react-icons/ai';
import LikedCard from './LikedCard';
import { useSavedQuery } from '../../services/savedApi';
import { useNavigate } from 'react-router-dom';

function Liked({ language }) {
    const { data: proSaved } = useSavedQuery();
    const navigate = useNavigate()

    //product saved modal
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleNavigate = () => {
        setAnchorEl(null)
        navigate('/liked')
    }

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
                            <div className="w-[18px] h-[18px] rounded-full bg-[#407CD3] absolute top-[-5px] right-[-5px] flex justify-center items-center">
                                <p className='font-semibold text-[12px] text-white'>{proSaved?.length || 0}</p>
                            </div>
                            <AiOutlineHeart className='cursor-pointer text-gray-500' />
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
                    <div className="flex flex-col divide-y">
                        <div className="px-2">
                            <div className="flex flex-col gap-2 divide-y max-h-96 scrollbar-thumb-[#407CD3] scrollbar-track-gray-100 scrollbar-thin">
                                {proSaved?.length > 0 ? (proSaved?.map(item => <LikedCard key={item.prosaved_id} {...item} setAnchorEl={setAnchorEl} />)) : (<h1 className='my-2 mx-2 text-black text-xl font-semibold' >{language?.sevimlilarim}</h1>)}
                            </div>
                        </div>
                        <div className="flex justify-end p-2">
                            <button onClick={handleNavigate} className='px-5 border-t-[1px] py-2 text-white rounded bg-[#407CD3] duration-200 hover:bg-[#2B58A0] active:scale-95'>{language?.sevimlilar}</button>
                        </div>
                    </div>
                </Menu>
            </React.Fragment>
        </div>
    )
}

export default Liked
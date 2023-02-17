import React, { useContext, useEffect } from 'react'
import { IconButton, Menu, } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios'
import { BiUser } from 'react-icons/bi';
import { StateContext } from '../../context';

function UserInfo() {
    const { setOpenEditUser, userInfo, setUserInfo } = useContext(StateContext)

    const userData = JSON.parse(localStorage.getItem("userData"))

    const userBtn = async () => {
        await axios.get('https://askona.herokuapp.com/api/v1/user/',
            {
                headers: {
                    Authorization: `Bearer ${userData?.token}`
                }
            })
            .then(res => {
                setUserInfo(res.data)
            })
            .catch((err) => console.log(err))
    }
    useEffect(() => {
        userBtn()
    }, [])



    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleOpenEditUser = () => setOpenEditUser(true)
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
                        <BiUser className='cursor-pointer text-black' />
                    </IconButton>
                </Box>
                <Menu
                    className='p-0'
                    sx={{ padding: '0' }}
                    anchorEl={anchorEl}
                    id="account-menu"
                    open={open}
                    onClose={handleClose}

                    onClick={handleClose}
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
                    <div className="flex flex-col">
                        <div className="p-8 flex flex-col border-b-[1px] border-gray-500">
                            <span className='font-semibold text-xl'>{userInfo.name}</span>
                            <span className='font-medium text-ms'>{userInfo.email}</span>
                            <span>{userInfo.mobile}</span>
                        </div>
                        <button onClick={handleOpenEditUser} className='w-full py-2 bg-[#00bac9] text-white'>Редактировать</button>
                        <button className='w-full border-t-[1px] py-2 border-gray-500 bg-[#00bac9] text-white'>Выйти</button>
                    </div>
                </Menu>
            </React.Fragment>
        </div>
    )
}

export default UserInfo
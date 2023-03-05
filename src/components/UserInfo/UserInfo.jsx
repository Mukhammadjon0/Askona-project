import React, { useContext, useEffect, useState } from 'react'
import { IconButton, Menu, } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios'
import { BiUser } from 'react-icons/bi';
import { StateContext } from '../../context';
import LogOut from './LogOut';
import { useNavigate } from 'react-router-dom';

function UserInfo() {
    const { setOpenEditUser, userInfo, setUserInfo, setOpenChangePassword, setUserData } = useContext(StateContext)
    const userData = JSON.parse(localStorage.getItem("userData"))
    const [logOutAlert, setLogOutAlert] = useState(false)
    const [anchorEl, setAnchorEl] = React.useState(null);
    const navigate = useNavigate()

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

    const handleLogOut = () => {
        navigate('/')
        window.location.reload()
        setUserData({})
        localStorage.removeItem('askonaToken')
    }
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleOpenEditUser = () => setOpenEditUser(true)
    const handleOpenChangePassword = () => setOpenChangePassword(true)
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
                    <div className="p-4">
                        <div className="p-4 pt-0 flex flex-col items-center">
                            <span className='font-semibold text-xl'>{userInfo.name}</span>
                            <span className='font-medium text-ms'>{userInfo.email}</span>
                            <span>{userInfo.mobile}</span>
                        </div>
                        <div className="flex flex-col gap-2">
                            <button onClick={handleOpenEditUser} className='w-full py-2 text-white rounded bg-[#00bac9] duration-200 hover:bg-[#0099a5] active:scale-95'>
                                Редактировать
                            </button>
                            <button onClick={handleOpenChangePassword} className='w-full border-t-[1px] py-2 text-white rounded bg-[#00bac9] duration-200 hover:bg-[#0099a5] active:scale-95'>Изменить пароль</button>
                            <button onClick={() => setLogOutAlert(true)} className='w-full border-t-[1px] py-2 text-white rounded bg-[#00bac9] duration-200 hover:bg-[#0099a5] active:scale-95'>Выйти</button>
                        </div>
                    </div>
                </Menu>
            </React.Fragment>
            <LogOut handleLogOut={handleLogOut} setLogOutAlert={setLogOutAlert} logOutAlert={logOutAlert} />
        </div>
    )
}

export default UserInfo
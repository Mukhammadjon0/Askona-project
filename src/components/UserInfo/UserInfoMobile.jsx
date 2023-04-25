import { Box, SwipeableDrawer } from '@mui/material';
import React, { useContext, useState } from 'react'
import { StateContext } from '../../context';
import LogOut from './LogOut';
import { useNavigate } from 'react-router-dom';
import { BiUser } from 'react-icons/bi';

function UserInfoMobile({ language }) {
    const { setOpenEditUser, userInfo, setOpenChangePassword, setUserData, lang } = useContext(StateContext)
    const navigate = useNavigate()
    const [logOutAlert, setLogOutAlert] = useState(false)
    const handleLogOut = () => {
        navigate('/')
        window.location.reload()
        setUserData({})
        localStorage.removeItem('askonaToken')
    }
    const [state, setState] = React.useState({
        bottom: false,
    });
    const openUserInfo = (anchor, open) => (event) => {
        setState({ ...state, [anchor]: open });
    };

    return (
        <div>
            {['bottom'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <div onClick={openUserInfo(anchor, true)} className="flex flex-col items-center">
                        <BiUser className='text-gray-400 text-2xl' />
                        <p>{lang === 'ru' ? 'Профил' : 'Profil'}</p>
                    </div>
                    <SwipeableDrawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={openUserInfo(anchor, false)}
                        onOpen={openUserInfo(anchor, true)}
                    >
                        <Box
                            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 'auto' }}
                            role="presentation"
                        >
                            <div className="p-4">
                                <div className="p-4 pt-0 flex flex-col items-center">
                                    <span className='font-semibold text-xl'>{userInfo?.name}</span>
                                    <span className='font-medium text-ms'>{userInfo?.email}</span>
                                    <span>{userInfo?.mobile}</span>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <button onClick={() => setOpenEditUser(true)} className='w-full py-2 text-white rounded bg-[#407CD3] duration-200 hover:bg-[#2B58A0] active:scale-95'>
                                        {language?.tahrirlash}
                                    </button>
                                    <button onClick={() => setOpenChangePassword(true)} className='w-full border-t-[1px] py-2 text-white rounded bg-[#407CD3] duration-200 hover:bg-[#2B58A0] active:scale-95'>{language?.tahrirparol}</button>
                                    <button onClick={() => setLogOutAlert(true)} className='w-full border-t-[1px] py-2 text-white rounded bg-[#407CD3] duration-200 hover:bg-[#2B58A0] active:scale-95'>{language?.logout}</button>
                                </div>
                            </div>
                        </Box>
                        <LogOut handleLogOut={handleLogOut} setLogOutAlert={setLogOutAlert} logOutAlert={logOutAlert} language={language} />
                    </SwipeableDrawer>
                </React.Fragment>
            ))}
        </div>
    )
}

export default UserInfoMobile
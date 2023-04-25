import { Box, Modal } from '@mui/material';
import React, { useContext, useState } from 'react'
import { StateContext } from '../../context';
import { MdCancel } from 'react-icons/md';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function ChangePassword({ language }) {
    const { openChangePassword, setOpenChangePassword, userData } = useContext(StateContext)
    const [oldPass, setOldPass] = useState("")
    const [newPass, setNewPass] = useState("")
    const navigate = useNavigate()

    const editPasswordHandler = (e) => {
        navigate('/')
        window.location.reload()
        e.preventDefault();
        const body = {
            old: { oldPass },
            new: { newPass }
        }
        const headers = {
            Authorization: `Bearer ${userData?.token}`
        }
        axios.put("https://api.basito.uz/apps/api/v1/user/", body, { headers })
            .then(res => {
                closeChangePassword()
            })
            .catch(err => console.log(err))
    }
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
    };
    const closeChangePassword = () => {
        setOpenChangePassword(false)
    }

    return (
        <div>
            {/* Edit Password ================================================ */}
            <Modal
                open={openChangePassword}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} className='rounded-xl tablet:w-[400px] desktop:w-[400px] mobile:w-11/12'>
                    <Box sx={{ width: '100%' }}>
                        <Box sx={{}}>
                            <button className='absolute top-[-10px] right-[-10px] text-center' onClick={closeChangePassword}> <MdCancel className='bg-white rounded-full text-[#407CD3] w-8 h-8' /> </button>
                        </Box>
                        <form onSubmit={editPasswordHandler} action="" className='flex flex-col items-center gap-5'>
                            <input onChange={(e) => setOldPass(e.target.value)} name='name' className='w-full border-[1px] outline-[#407CD3] rounded border-gray-400 px-3 py-1' required type="password" placeholder='Старый пароль' />
                            <input onChange={(e) => setNewPass(e.target.value)} name='email' className='w-full border-[1px] outline-[#407CD3] rounded border-gray-400 px-3 py-1' required type="password" placeholder='Новый пароль' />
                            <button className='text-center bg-[#407CD3] w-full text-white p-2 rounded'>{language?.tahrirlar}</button>
                        </form>
                    </Box>
                </Box>
            </Modal>
        </div>
    )
}

export default ChangePassword
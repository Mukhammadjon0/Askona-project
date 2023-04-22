import { Box, Modal } from '@mui/material'
import React, { useContext } from 'react'
import { MdCancel } from 'react-icons/md'
import { StateContext } from '../../context';

function LogOut({ logOutAlert, setLogOutAlert, handleLogOut, language }) {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
    };
    const {lang}=useContext(StateContext)
    return (
        <div>
            {/* Edit User Info ================================================ */}
            <Modal
                open={logOutAlert}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} className='rounded-xl tablet:w-[400px] desktop:w-[400px] mobile:w-11/12'>
                    <Box sx={{ width: '100%' }}>
                        <Box sx={{}}>
                            <button className='absolute top-[-10px] right-[-10px] text-center' onClick={() => setLogOutAlert(false)}> <MdCancel className='bg-white rounded-full text-[#00b6c9] w-8 h-8' /> </button>
                        </Box>
                        <h1 className='font-semibold text-lg'>{language?.chiqish}</h1>
                        <div className='flex items-center gap-5 mt-4'>
                            <button onClick={handleLogOut} className='text-center w-full text-white p-2 rounded bg-[#00bac9] duration-200 hover:bg-[#0099a5] active:scale-95'>{lang==='ru' ? 'Да': 'Ha'}</button>
                            <button onClick={() => setLogOutAlert(false)} className='text-center w-full text-white p-2 rounded bg-[#00bac9] duration-200 hover:bg-[#0099a5] active:scale-95'>{lang==='ru' ? 'Отмена' :'Bekor qilish'}</button>
                        </div>
                    </Box>
                </Box>
            </Modal>
        </div>
    )
}

export default LogOut
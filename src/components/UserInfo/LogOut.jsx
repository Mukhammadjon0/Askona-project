import { Box, Modal } from '@mui/material'
import React from 'react'
import { MdCancel } from 'react-icons/md'

function LogOut({ logOutAlert, setLogOutAlert, handleLogOut }) {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
    };
    return (
        <div>
            <Modal
                open={logOutAlert}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >

                {/* Edit User Info ================================================ */}
                <Box sx={style} className='rounded-xl'>
                    <Box sx={{ width: '100%' }}>
                        <Box sx={{}}>
                            <button className='absolute top-[-10px] right-[-10px] text-center' onClick={() => setLogOutAlert(false)}> <MdCancel className='bg-white rounded-full text-[#00b6c9] w-8 h-8' /> </button>
                        </Box>
                        <h1 className='font-semibold text-lg'>Вы уверены что хотите выйти?</h1>
                        <div className='flex items-center gap-5 mt-4'>
                            <button onClick={handleLogOut} className='text-center w-full text-white p-2 rounded bg-[#00bac9] duration-200 hover:bg-[#0099a5] active:scale-95'>Да</button>
                            <button onClick={() => setLogOutAlert(false)} className='text-center w-full text-white p-2 rounded bg-[#00bac9] duration-200 hover:bg-[#0099a5] active:scale-95'>Отмена</button>
                        </div>
                    </Box>
                </Box>
            </Modal>
        </div>
    )
}

export default LogOut
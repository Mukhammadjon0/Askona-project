import Logo from '../../assets/img/logo.svg'
import { Box, Modal } from '@mui/material'
import React, { useContext } from 'react'
import { MdCancel } from 'react-icons/md';
import { StateContext } from '../../context';

function EditUserInfo() {
  const { openEditUser, setOpenEditUser, userInfo } = useContext(StateContext)



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


  const handleCloseEdit = () => setOpenEditUser(false)

  const handleEditUser = (e) => {
    e.preventDefault()
  }



  return (
    <div>
      <Modal
        open={openEditUser}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {/* Edit User Info ================================================ */}
        <Box sx={style} className='rounded-xl'>
          <Box sx={{ width: '100%' }}>
            <Box sx={{}}>
              <button className='absolute top-[-10px] right-[-10px] text-center' onClick={handleCloseEdit}> <MdCancel className='bg-white rounded-full text-[#00b6c9] w-8 h-8' /> </button>
              <img className='w-[207px] my-[-30px]' src={Logo} alt="logo" />
            </Box>
            <form onSubmit={handleEditUser} action="" className='flex flex-col items-center gap-5'>
              <input value={userInfo.name} name='name' className='w-full border-[1px] outline-[#00B6C9] rounded border-gray-400 px-3 py-1' required type="text" placeholder='Имя' />
              <input value={userInfo.email} name='email' className='w-full border-[1px] outline-[#00B6C9] rounded border-gray-400 px-3 py-1' required type="email" placeholder='Адрес электронной почты' />
              <input value={userInfo.mobile} name='mobile' className='w-full border-[1px] outline-[#00B6C9] rounded border-gray-400 px-3 py-1' required type="tel" placeholder='Тел' />
              <button className='text-center bg-[#00b6c9] w-full text-white p-2 rounded'>Редактировать</button>
            </form>
          </Box>
        </Box>
      </Modal>
    </div>
  )
}

export default EditUserInfo
import Logo from "../../assets/svg/logo.svg";
import { Box, Modal } from '@mui/material'
import React, { useContext, useState } from 'react'
import { MdCancel } from 'react-icons/md';
import { StateContext } from '../../context';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function EditUserInfo({ language }) {
  const { openEditUser, setOpenEditUser, userInfo, setUserInfo, userData } = useContext(StateContext)
  const [editUserInfo, setEditUserInfo] = useState({
    name: "",
    email: "",
    mobile: "",
  })
  const handleCloseEdit = () => setOpenEditUser(false)
  const navigate = useNavigate()
  const editHandler = (e) => {
    e.preventDefault();
    navigate('/')
    window.location.reload()
    const body = {
      name: editUserInfo.name,
      email: editUserInfo.email,
      mobile: editUserInfo.mobile
    }
    const headers = {
      Authorization: `Bearer ${userData?.token}`
    }
    axios.put("https://api.basito.uz/apps/api/v1/user/", body, { headers })
      .then(res => {
        setUserInfo(res.data)
        handleCloseEdit()
      })
      .catch(err => console.log(err))
  }
  const handelEditUser = (e) => {
    e.preventDefault();
    setEditUserInfo({
      ...editUserInfo,
      [e.target.name]: e.target.value
    });
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
  return (
    <div>
      {/* Edit User Info ================================================ */}
      <Modal
        open={openEditUser}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className='rounded-xl tablet:w-[400px] desktop:w-[400px] mobile:w-11/12'>
          <Box sx={{ width: '100%' }}>
            <Box sx={{}}>
              <button className='absolute top-[-10px] right-[-10px] text-center' onClick={handleCloseEdit}> <MdCancel className='bg-white rounded-full text-[#407CD3] w-8 h-8' /> </button>
              <img className='w-[207px] mb-5' src={Logo} alt="logo" />
            </Box>
            <form onSubmit={editHandler} action="" className='flex flex-col items-center gap-5'>
              <input onChange={handelEditUser} defaultValue={userInfo.name} name='name' className='w-full border-[1px] outline-[#407CD3] rounded border-gray-400 px-3 py-1' required type="text" placeholder='Имя' />
              <input onChange={handelEditUser} defaultValue={userInfo.email} name='email' className='w-full border-[1px] outline-[#407CD3] rounded border-gray-400 px-3 py-1' required type="email" placeholder='Адрес электронной почты' />
              <input onChange={handelEditUser} defaultValue={userInfo.mobile} name='mobile' className='w-full border-[1px] outline-[#407CD3] rounded border-gray-400 px-3 py-1' required type="tel" placeholder='Тел' />
              <button className='text-center bg-[#407CD3] w-full text-white p-2 rounded'>{language?.tahrirlash}</button>
            </form>
          </Box>
        </Box>
      </Modal>
    </div>
  )
}

export default EditUserInfo
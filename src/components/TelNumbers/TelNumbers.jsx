import React, { useContext } from 'react'
import Logo from "../../assets/svg/logo.svg";
import { MdCancel } from 'react-icons/md';
import { Box, Modal } from '@mui/material';
import { StateContext } from '../../context';
import { useContactQuery } from '../../services/contact';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

function TelNumbers() {
    const { telInfo, setTelInfo } = useContext(StateContext)
    const { data: contact } = useContactQuery()

    return (
        <Modal
            open={telInfo}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style} className='rounded-xl tablet:w-[400px] desktop:w-[400px] mobile:w-11/12'>
                <Box sx={{ width: '100%' }}>
                    <Box sx={{ marginBottom: '50px', paddingTop: "20px", }}>
                        <button className='absolute top-[-10px] right-[-10px] text-center' onClick={(() => setTelInfo(false))}>
                            <MdCancel className='bg-white rounded-full text-[#407CD3] w-8 h-8' />
                        </button>
                        <img className='w-[207px] my-[-30px]' src={Logo} alt="logo" />
                    </Box>
                    {contact?.data.map((item, index) => (
                        <div key={index} className='flex flex-col gap-5 border-t-2 border-gray-300 pt-5'>
                            <h1 className='text-xl font-bold'>{item.phone}</h1>
                            <h1 className='text-xl font-bold'>{item.phone2}</h1>
                            <h1 className='text-xl font-bold'>{item.phone3}</h1>
                            <h1 className='text-xl font-bold'>{item.phone4}</h1>
                            <h1 className='text-xl font-bold'>{item.phone5}</h1>
                        </div>
                    ))}
                </Box>
            </Box>
        </Modal>

    )
}

export default TelNumbers
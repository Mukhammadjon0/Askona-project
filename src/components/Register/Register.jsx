import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { MdCancel } from 'react-icons/md';
import Logo from '../../assets/img/logo.svg'
import { AiFillGoogleCircle } from 'react-icons/ai';
import { SiVk } from 'react-icons/si';
import { FaOdnoklassnikiSquare } from 'react-icons/fa';
import { BsFacebook } from 'react-icons/bs';
import { StateContext } from '../../context';

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

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 1 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

function Register() {
    const { open, handleOpen, setOpen } = React.useContext(StateContext)

    const handleClose = () => setOpen(false);

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} className='rounded-xl'>
                    <Box sx={{ width: '100%' }}>
                        <Box sx={{}}>
                            <button className='absolute top-[-10px] right-[-10px] text-center' onClick={handleClose}> <MdCancel className='bg-white rounded-full text-[#00b6c9] w-8 h-8' /> </button>
                            <img className='w-[207px] my-[-30px]' src={Logo} alt="logo" />
                        </Box>
                        <TabPanel value={value} index={0}>
                            <Tabs value={value} className='ml-[30px] mb-5' onChange={handleChange} aria-label="basic tabs example" indicatorColor='secondary'>
                                <Tab label="РЕГИСТРАЦИЯ" {...a11yProps(0)} />
                                <Tab label="ВХОД" {...a11yProps(1)} />
                            </Tabs>
                            <form action="" className='flex flex-col items-center gap-5'>
                                <input className='w-full border-[1px] outline-[#00B6C9] rounded border-gray-400 px-3 py-1' required type="text" placeholder='Имя' />
                                <input className='w-full border-[1px] outline-[#00B6C9] rounded border-gray-400 px-3 py-1' required type="text" placeholder='Фамилия' />
                                <input className='w-full border-[1px] outline-[#00B6C9] rounded border-gray-400 px-3 py-1' required type="email" placeholder='Адрес электронной почты' />
                                <input className='w-full border-[1px] outline-[#00B6C9] rounded border-gray-400 px-3 py-1' required type="password" placeholder='Пароль' />
                                <button className='text-center bg-[#00b6c9] w-full text-white p-2 rounded'>Зарегистрироваться</button>
                            </form>
                            <div className="flex flex-col items-center mt-8">
                                <Typography sx={{ fontWeight: '800' }} className='text-center'>Войти через соцсети</Typography>
                                <div className="flex items-center gap-2">
                                    <SiVk className='text-[#00b6c9] w-8 h-8 rounded-full cursor-pointer' />
                                    <AiFillGoogleCircle className='text-[#00b6c9] w-9 h-9 cursor-pointer' />
                                    <FaOdnoklassnikiSquare className='text-[#00b6c9] w-9 h-9 rounded-full cursor-pointer' />
                                    <BsFacebook className='text-[#00b6c9] w-8 h-8 cursor-pointer' />
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            <Tabs value={value} className='ml-[30px] mb-5' onChange={handleChange} aria-label="basic tabs example" indicatorColor='secondary' >
                                <Tab label="РЕГИСТРАЦИЯ" {...a11yProps(0)} />
                                <Tab label="ВХОД" {...a11yProps(1)} />
                            </Tabs>
                            <form action="" className=' flex flex-col items-center gap-5'>
                                <input className='w-full border-[1px] outline-[#00B6C9] rounded border-gray-400 px-3 py-1' required type="email" placeholder='Адрес электронной почты' />
                                <input className='w-full border-[1px] outline-[#00B6C9] rounded border-gray-400 px-3 py-1' required type="password" placeholder='Пароль' />
                                <button className='text-center bg-[#00b6c9] w-full text-white p-2 rounded'>ВОЙТИ</button>
                            </form>
                            <Typography className='cursor-pointer' value={value} onClick={handleChange} {...a11yProps(2)} aria-label="basic tabs example">Забыли пароль?</Typography>
                            <div className="flex flex-col items-center mt-8">
                                <Typography sx={{ fontWeight: '800' }} className='text-center'>Войти через соцсети</Typography>
                                <div className="flex items-center gap-2">
                                    <SiVk className='text-[#00b6c9] w-8 h-8 rounded-full cursor-pointer hover:w-[34px] hover:h-[34px] duration-300' />
                                    <AiFillGoogleCircle className='text-[#00b6c9] w-9 h-9 cursor-pointer hover:w-[38px] hover:h-[38px] duration-300' />
                                    <FaOdnoklassnikiSquare className='text-[#00b6c9] w-9 h-9 rounded-full cursor-pointer hover:w-[38px] hover:h-[38px] duration-300' />
                                    <BsFacebook className='text-[#00b6c9] w-8 h-8 cursor-pointer hover:w-[34px] hover:h-[34px] duration-300' />
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel value={value} index={2}>
                            <div className="">
                                <h1 className='font-bold text-2xl'>Восстановление пароля</h1>
                                <p>Укажите адрес эл. почты, который вы использовали при регистрации, чтобы мы отправили вам новый пароль</p>
                            </div>
                        </TabPanel>

                    </Box>
                </Box>
            </Modal>
        </div>
    )
}

export default Register
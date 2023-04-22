import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { MdCancel } from 'react-icons/md';
import Logo from "../../assets/svg/logo.svg";
import { StateContext } from '../../context';
import axios from 'axios';
import Login from '../Login/Login';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
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
    const { open, setOpen, setUserData, lang } = React.useContext(StateContext)
    const token = localStorage.getItem("basitoToken")

    const [tel, setTel] = React.useState("")
    const [otp, setOtp] = React.useState("")
    const [user, setUser] = React.useState({
        name: "",
        password: "",
        mobile: "",
        email: "",
        otp: token,
    })
    const [otpCheck, setOtpCheck] = React.useState('')
    const [telErr, setTelErr] = React.useState('')
    const [otpErr, setOtpErr] = React.useState('')
    const [regisErr, setRegisErr] = React.useState('')
    const [openRegister, setOpenRegister] = React.useState(false)
    const [openOtp, setOpenOtp] = React.useState(false)
    const [value, setValue] = React.useState(0);

    const handleOpenRegister = () => setOpenRegister(true)
    const handleCloseRegister = () => setOpenRegister(false)
    const handleOpenOtp = () => setOpenOtp(true)
    const handleCloseOtp = () => setOpenOtp(false)
    const handleClose = () => setOpen(false);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const sendOtpHandler = (e) => {
        e.preventDefault();
        const postData = {
            method: "step.one",
            params: {
                mobile: `${tel}`,
            },
        }
        axios.post("http://api.basito.uz/apps/api/v1/auth/", postData)
            .then(res => {
                setOtpCheck(res?.data?.otp)
                localStorage.setItem("basitoToken", res?.data?.token)
                handleClose();
                handleOpenOtp();
            })
            .catch(err => setTelErr(err?.response?.data?.Error))
    }
    const checkVerificationHandler = (e) => {
        e.preventDefault()
        const token = localStorage.getItem("basitoToken")
        const postData = {
            method: "step.two",
            params: {
                otp: otp,
                token: token,
            },
        };
        axios.post("http://api.basito.uz/apps/api/v1/auth/", postData)
            .then(res => {
                if (res?.data?.Error) {
                    setOtpErr(res?.data?.Error)
                    return;
                }
                if (res.data?.is_registered) alert("bu raqam oldin royxatdan otgan")
                else {
                    handleCloseOtp();
                    handleOpenRegister();
                }
            })
            .catch(err => console.log(err.message));
    };
    const handelRegisterUser = (e) => {
        e.preventDefault();
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    }
    const handleSignUp = (e) => {
        e.preventDefault();
        const postAuthData = {
            method: "regis",
            params: user,
        }
        axios.post("http://api.basito.uz/apps/api/v1/auth/", postAuthData)
            .then(res => {
                if (res.data?.Error) {
                    setRegisErr(res.data?.Error)
                    return;
                }
                localStorage.setItem("userData", JSON.stringify(res?.data?.result))
                setUserData(res?.data?.result)
                handleCloseRegister();
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            {/* Tel number register modal ========================================================  */}
            <Modal
                open={open}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} className='rounded-xl tablet:w-[400px] desktop:w-[400px] mobile:w-11/12'>
                    <Box sx={{ width: '100%' }}>
                        <Box sx={{ marginBottom: '50px', paddingTop: "20px", }}>
                            <button className='absolute top-[-10px] right-[-10px] text-center' onClick={handleClose}> <MdCancel className='bg-white rounded-full text-[#00b6c9] w-8 h-8' /> </button>
                            <img className='w-[207px] my-[-30px]' src={Logo} alt="logo" />
                        </Box>
                        <TabPanel value={value} index={0}>
                            <Tabs value={value} className='ml-[30px] mb-5' onChange={handleChange} aria-label="basic tabs example" indicatorColor='secondary'>
                                <Tab label={lang === 'ru' ? 'Регистрация' : 'Ro`yxatdan o`tish'} {...a11yProps(0)} />
                                <Tab label={lang === 'ru' ? 'Вход' : 'Kirish'} {...a11yProps(1)} />
                            </Tabs>
                            <p className='text-red-600 font-medium text-sm'>{telErr}</p>
                            <form onSubmit={sendOtpHandler} action="" className='flex flex-col items-center gap-5'>
                                <PhoneInput
                                    inputProps={{
                                        required: true,
                                        autoFocus: true
                                    }}
                                    required
                                    country={'uz'}
                                    value={tel}
                                    onChange={phone => setTel(phone)}
                                    inputStyle={{ width: '100%' }}

                                />
                                <button className='text-center bg-[#00b6c9] w-full text-white p-2 rounded'>{lang === 'ru' ? 'Зарегистрироваться' : 'Ro`yxatdan o`tish'}</button>
                            </form>
                        </TabPanel>

                        {/* LogIn modal ========================================================== */}
                        <TabPanel value={value} index={1}>
                            <Tabs value={value} className='ml-[30px] mb-5' onChange={handleChange} aria-label="basic tabs example" indicatorColor='secondary' >
                                <Tab label={lang === 'ru' ? 'Регистрация' : 'Ro`yxatdan o`tish'} {...a11yProps(0)} />
                                <Tab label={lang === 'ru' ? 'Вход' : 'Kirish'} {...a11yProps(1)} />
                            </Tabs>
                            <Login />
                        </TabPanel>
                    </Box>
                </Box>
            </Modal>

            {/* OTP check modal =============================================== */}
            <Modal
                open={openOtp}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} className='rounded-xl tablet:w-[400px] desktop:w-[400px] mobile:w-11/12'>
                    <Box sx={{ width: '100%' }}>
                        <Box sx={{ marginBottom: '50px', paddingTop: "20px", }}>
                            <button className='absolute top-[-10px] right-[-10px] text-center' onClick={handleCloseOtp}> <MdCancel className='bg-white rounded-full text-[#00b6c9] w-8 h-8' /> </button>
                            <img className='w-[207px] my-[-30px]' src={Logo} alt="logo" />
                        </Box>
                        <p className='text-red-600 font-medium text-sm'>{otpErr}</p>
                        <p>{lang === 'ru' ? 'Код подтверждения' : 'Tasdiqlash kodi'} ({otpCheck})</p>
                        <form onSubmit={checkVerificationHandler} action="" className='flex flex-col items-center gap-5'>
                            <input maxLength={5} onChange={e => setOtp(e.target.value)} className='w-full border-[1px] outline-[#00B6C9] rounded border-gray-400 px-3 py-1' required type="number" placeholder={lang === 'ru' ? 'Введите код сюда' : 'Kodni kiriting'} />
                            <button className='text-center bg-[#00b6c9] w-full text-white p-2 rounded'>{lang === 'ru' ? 'Введите код' : 'Kodni kiriting'}</button>
                        </form>
                    </Box>
                </Box>
            </Modal>

            {/* SignUp user modal ================================================ */}
            <Modal
                open={openRegister}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} className='rounded-xl tablet:w-[400px] desktop:w-[400px] mobile:w-11/12'>
                    <Box sx={{ width: '100%' }}>
                        <Box sx={{ marginBottom: '50px', paddingTop: "20px", }}>
                            <button className='absolute top-[-10px] right-[-10px] text-center' onClick={handleCloseRegister}> <MdCancel className='bg-white rounded-full text-[#00b6c9] w-8 h-8' /> </button>
                            <img className='w-[207px] my-[-30px]' src={Logo} alt="logo" />
                        </Box>
                        <p className='text-red-600 font-medium text-sm'>{regisErr}</p>
                        <form onSubmit={handleSignUp} action="" className='flex flex-col items-center gap-5'>
                            <input onChange={handelRegisterUser} name='name' className='w-full border-[1px] outline-[#00B6C9] rounded border-gray-400 px-3 py-1' required type="text" placeholder={lang === 'ru' ? 'Имя' : 'Ism'} />
                            <input onChange={handelRegisterUser} name='email' className='w-full border-[1px] outline-[#00B6C9] rounded border-gray-400 px-3 py-1' required type="email" placeholder={lang === 'ru' ? 'Адрес электронной почты' : 'Elektron pochta manzili'} />
                            <input onChange={handelRegisterUser} name='mobile' className='w-full border-[1px] outline-[#00B6C9] rounded border-gray-400 px-3 py-1' required type="tel" placeholder={lang === 'ru' ? 'Тел' : 'Tel'} />
                            <input onChange={handelRegisterUser} name='password' className='w-full border-[1px] outline-[#00B6C9] rounded border-gray-400 px-3 py-1' required type="password" placeholder={lang === 'ru' ? 'Пароль' : 'Parol'} />
                            <button className='text-center bg-[#00b6c9] w-full text-white p-2 rounded'>{lang === 'ru' ? 'Зарегистрироваться' : 'Ro`yxatdan o`tish'}</button>
                        </form>
                    </Box>
                </Box>
            </Modal>
        </div>
    )
}

export default Register
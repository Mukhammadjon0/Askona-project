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
import axios from 'axios';
import Login from '../Login/Login';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

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
    const { open, setOpen, setUserData } = React.useContext(StateContext)
    const token = localStorage.getItem("askonaToken")

    const [tel, setTel] = React.useState("")
    const [otp, setOtp] = React.useState("")
    const [user, setUser] = React.useState({
        name: "",
        password: "",
        mobile: "",
        email: "",
        otp: token,

    })
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
                // lang: "ru",
            },
        }
        axios.post("http://68.183.21.222:1233/api/v1/auth/", postData)
            .then(res => {
                console.log(res?.data)
                localStorage.setItem("askonaToken", res?.data?.token)
                handleClose();
                handleOpenOtp();
            })
            .catch(err => setTelErr(err?.response?.data?.Error))
    }
    const checkVerificationHandler = (e) => {
        e.preventDefault()
        const token = localStorage.getItem("askonaToken")
        const postData = {
            method: "step.two",
            params: {
                otp: otp,
                token: token,
            },
        };
        axios.post("http://68.183.21.222:1233/api/v1/auth/", postData)
            .then(res => {
                console.log(res?.data)
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
        console.log(user)
        axios.post("http://68.183.21.222:1233/api/v1/auth/", postAuthData)
            .then(res => {
                if (res.data?.Error) {
                    setRegisErr(res.data?.Error)
                    return;
                }
                localStorage.setItem("userData", JSON.stringify(res?.data?.result))
                setUserData(res?.data?.result)
                // localStorage.setItem
                handleCloseRegister();
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            {/* Tel number register modal ======================================================== */}
            <Modal
                open={open}
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
                                <Tab label="??????????????????????" {...a11yProps(0)} />
                                <Tab label="????????" {...a11yProps(1)} />
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
                                <button className='text-center bg-[#00b6c9] w-full text-white p-2 rounded'>????????????????????????????????????</button>
                            </form>
                        </TabPanel>

                        {/* LogIn modal ========================================================== */}
                        <TabPanel value={value} index={1}>
                            <Tabs value={value} className='ml-[30px] mb-5' onChange={handleChange} aria-label="basic tabs example" indicatorColor='secondary' >
                                <Tab label="??????????????????????" {...a11yProps(0)} />
                                <Tab label="????????" {...a11yProps(1)} />
                            </Tabs>
                            <Login />
                        </TabPanel>
                        <div className="flex flex-col items-center mt-8">
                            <p className='text-center font-extrabold'>?????????? ?????????? ??????????????</p>
                            <div className="flex items-center gap-2">
                                <SiVk className='text-[#00b6c9] w-8 h-8 rounded-full cursor-pointer hover:scale-125 duration-300' />
                                <AiFillGoogleCircle className='text-[#00b6c9] w-9 h-9 cursor-pointer hover:scale-125 duration-300' />
                                <FaOdnoklassnikiSquare className='text-[#00b6c9] w-9 h-9 rounded-full cursor-pointer hover:scale-125 duration-300' />
                                <BsFacebook className='text-[#00b6c9] w-8 h-8 cursor-pointer hover:w-[34px] hover:scale-125 duration-300' />
                            </div>
                        </div>
                    </Box>
                </Box>
            </Modal>

            {/* OTP check modal =============================================== */}
            <Modal
                open={openOtp}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} className='rounded-xl'>
                    <Box sx={{ width: '100%' }}>
                        <Box sx={{}}>
                            <button className='absolute top-[-10px] right-[-10px] text-center' onClick={handleCloseOtp}> <MdCancel className='bg-white rounded-full text-[#00b6c9] w-8 h-8' /> </button>
                            <img className='w-[207px] my-[-30px]' src={Logo} alt="logo" />
                        </Box>
                        <p className='text-red-600 font-medium text-sm'>{otpErr}</p>
                        <p>M?? ?????????????????? ?????? ???? ?????? ?????????? ???????????????? ({tel})</p>
                        <form onSubmit={checkVerificationHandler} action="" className='flex flex-col items-center gap-5'>
                            <input onChange={e => setOtp(e.target.value)} className='w-full border-[1px] outline-[#00B6C9] rounded border-gray-400 px-3 py-1' required type="number" placeholder='?????????????? ?????? ????????' />
                            <button className='text-center bg-[#00b6c9] w-full text-white p-2 rounded'>?????????????? ??????</button>
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
                <Box sx={style} className='rounded-xl'>
                    <Box sx={{ width: '100%' }}>
                        <Box sx={{}}>
                            <button className='absolute top-[-10px] right-[-10px] text-center' onClick={handleCloseRegister}> <MdCancel className='bg-white rounded-full text-[#00b6c9] w-8 h-8' /> </button>
                            <img className='w-[207px] my-[-30px]' src={Logo} alt="logo" />
                        </Box>
                        <p className='text-red-600 font-medium text-sm'>{regisErr}</p>
                        <form onSubmit={handleSignUp} action="" className='flex flex-col items-center gap-5'>
                            <input onChange={handelRegisterUser} name='name' className='w-full border-[1px] outline-[#00B6C9] rounded border-gray-400 px-3 py-1' required type="text" placeholder='??????' />
                            <input onChange={handelRegisterUser} name='email' className='w-full border-[1px] outline-[#00B6C9] rounded border-gray-400 px-3 py-1' required type="email" placeholder='?????????? ?????????????????????? ??????????' />
                            <input onChange={handelRegisterUser} name='mobile' className='w-full border-[1px] outline-[#00B6C9] rounded border-gray-400 px-3 py-1' required type="tel" placeholder='??????' />
                            <input onChange={handelRegisterUser} name='password' className='w-full border-[1px] outline-[#00B6C9] rounded border-gray-400 px-3 py-1' required type="password" placeholder='????????????' />
                            <button className='text-center bg-[#00b6c9] w-full text-white p-2 rounded'>????????????????????????????????????</button>
                        </form>
                    </Box>
                </Box>
            </Modal>
        </div>
    )
}

export default Register
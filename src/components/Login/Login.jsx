import axios from 'axios'
import React, { useContext, useState } from 'react'
import { StateContext } from '../../context'
import PhoneInput from 'react-phone-input-2'

function Login() {
    const { handleClose, setUserData, lang } = useContext(StateContext)
    const [loginTel, setLoginTel] = useState("")
    const [loginPassword, setLoginPassword] = useState("")
    const [loginErr, setLoginErr] = useState('')
    const loginHandler = (e) => {
        e.preventDefault()
        const loginData = {
            method: "login",
            params: {
                mobile: `${loginTel}`,
                password: loginPassword,
            },
        }
        axios.post("https://api.basito.uz/apps/api/v1/auth/", loginData)
            .then(res => {
                if (res.data?.Error) {
                    setLoginErr(res?.data?.Error)
                    return;
                }
                localStorage.setItem("userData", JSON.stringify(res?.data?.result))
                setUserData(res?.data?.result)
                handleClose();
            })
    }
    return (
        <div>
            <p className='text-red-600 font-medium text-sm'>{loginErr}</p>
            <form onSubmit={loginHandler} action="" className=' flex flex-col items-center gap-5'>
                <PhoneInput
                    inputProps={{
                        required: true,
                        autoFocus: true
                    }}
                    required
                    country={'uz'}
                    value={loginTel}
                    onChange={phone => setLoginTel(phone)}
                    inputStyle={{ width: '100%' }}

                />
                <input onChange={(e) => setLoginPassword(e.target.value)} className='w-full border-[1px] outline-[#407CD3] rounded border-gray-400 px-3 py-1' required type="password" placeholder={lang === 'ru' ? 'Пароль' : 'Parol'} autoComplete='current password' />
                <button className='text-center bg-[#407CD3] w-full text-white p-2 rounded'>{lang === 'ru' ? 'Войти' : 'Kirish'}</button>
            </form>
        </div>
    )
}

export default Login
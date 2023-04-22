import { FormControl, MenuItem, Select } from '@mui/material'
import React, { useContext } from 'react'
import flg_rus from '../../assets/icon/rus-flag.png'
import flg_uzb from '../../assets/icon/uzb-flag.png'
import { StateContext } from '../../context'

function Language() {
    const { lang, setLang } = useContext(StateContext)
    const handleChange = (event) => {
        setLang(event.target.value);
    };
    return (
        <FormControl variant="standard" sx={{ minWidth: 20, padding:0 }}>
            <Select
                value={lang}
                onChange={handleChange}
                className=''
            >
                <MenuItem value={"ru"}>
                    <img className='w-5 mt-1' src={flg_rus} alt="" />
                </MenuItem>
                <MenuItem value={"uz"}>
                    <img className='w-5 mt-2' src={flg_uzb} alt="" />
                </MenuItem>
            </Select>
        </FormControl>
    )
}

export default Language
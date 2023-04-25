import React, { useContext } from 'react'
import { StateContext } from '../../context'

function ColorCard({ color, index, setMainColorId, mainColorId }) {
    const { lang } = useContext(StateContext)
    return (
        <div className="form_img_info">
            <img onClick={() => setMainColorId(index)} className={`border-[1px] w-full h-full ${mainColorId === index ? 'border-black' : 'border-none'} p-2`} src={`https://api.basito.uz${color.img}`} alt="img" />
            <div className="p-2">
                <h3 className='form_img_info_h3'>{lang === 'ru' ? color?.name_ru : color?.name_uz}</h3>
            </div>
        </div>
    )
}

export default ColorCard
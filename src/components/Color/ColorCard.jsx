import React from 'react'

function ColorCard({ image, price, color, name, material, index, setMainColorId, mainColorId }) {
    return (
        <div className="form_img_info">
            <img onClick={() => setMainColorId(index)} className={`border-[1px] ${mainColorId === index ? 'border-black' : 'border-none'} p-2`} src={image} alt="img" />
            <div className="p-2">
                <h3 className='form_img_info_h3'>{name}</h3>
                <h4 className='form_img_info_h4'>
                    {color} <br />
                    {material}
                </h4>
                <div className='form_img_info_df'>
                    <h5 className='form_img_info_h5'>от</h5>
                    <h6 className='form_img_info_h6'>{price?.toLocaleString("uz-UZ")} BYN</h6>
                </div>
            </div>
        </div>
    )
}

export default ColorCard
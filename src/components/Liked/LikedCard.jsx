import { IconButton } from '@mui/material'
import React from 'react'
import { AiOutlineDelete } from 'react-icons/ai'

function LikedCard({ image, title, price }) {
    return (
        <div>
            <div className="flex group items-center gap-5">
                <img className='w-20 cursor-pointer' src={image} alt="img" />
                <div className="flex flex-col justify-between">
                    <div className="w-52">
                        <h1 className='font-semibold text-sm group-hover:text-[#00B9C0] duration-200'>{title}</h1>
                    </div>
                    <p className='text-[#00B9C0] font-semibold text-sm'>{price} BYN</p>
                </div>
                <IconButton>
                    <AiOutlineDelete className='text-black' />
                </IconButton>
            </div>
        </div>
    )
}

export default LikedCard
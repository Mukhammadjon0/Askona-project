import React from 'react'
import { IconButton } from '@mui/material'
import { AiOutlineDelete } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import { useRemoveProductFromSavedMutation } from '../../services/savedApi'

function LikedCard({ name, price, images, id, prosaved_id, handleClose }) {
    const [deleteProdSaved] = useRemoveProductFromSavedMutation()
    const navigate = useNavigate()

    const handleDeleteProdFromSaved = () => {
        deleteProdSaved(prosaved_id)
    }
    const handleDetail = () => {
        handleClose()
        navigate(`/productdetail/${id}`)
    }

    return (
        <div className='py-2'>
            <div className="flex group items-center gap-5">
                <img onClick={handleDetail} className='w-20 cursor-pointer' src={`https://askona.herokuapp.com/${images[0]}`} alt="img" />
                <div className="flex flex-col justify-between">
                    <div className="w-52">
                        <h1 className='font-semibold text-sm group-hover:text-[#00B9C0] duration-200'>{name}</h1>
                    </div>
                    <p className='text-[#00B9C0] font-semibold text-sm'>{price} BYN</p>
                </div>
                <IconButton onClick={handleDeleteProdFromSaved}>
                    <AiOutlineDelete className='text-black' />
                </IconButton>
            </div>
        </div>
    )
}

export default LikedCard
import React, { useContext } from 'react'
import { IconButton } from '@mui/material'
import { AiOutlineDelete } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import { useRemoveProductFromSavedMutation } from '../../services/savedApi'
import { StateContext } from '../../context'

function LikedCard({ product_id, prosaved_id, setAnchorEl }) {
    const { lang, setType, setSubCtg_id } = useContext(StateContext)
    const [deleteProdSaved] = useRemoveProductFromSavedMutation()
    const navigate = useNavigate()

    const handleDeleteProdFromSaved = () => {
        deleteProdSaved(prosaved_id)
    }
    const getDetail = () => {
        navigate(`/productdetail/${product_id?.prod_id}`)
        setType(product_id?.sub_ctg?.type)
        setSubCtg_id(product_id?.sub_ctg?.id)
    }

    return (
        <div className='py-2'>
            <div className="flex group items-center justify-between">
                <div className="flex gap-4">
                    <img onClick={getDetail} className='w-20 cursor-pointer' src={`http://api.basito.uz${product_id.img[0].img}`} alt="img" />
                    <div className="flex flex-col justify-between">
                        <div className="w-52">
                            <h1 className='font-semibold text-sm group-hover:text-[#00B9C0] duration-200'>{lang === 'ru' ? product_id.name_ru : product_id.name_uz}</h1>
                        </div>
                        <p className='text-[#00B9C0] font-semibold text-sm'>{product_id.model_number}</p>
                    </div>
                </div>
                <IconButton onClick={handleDeleteProdFromSaved}>
                    <AiOutlineDelete className='text-black' />
                </IconButton>
            </div>
        </div>
    )
}

export default LikedCard
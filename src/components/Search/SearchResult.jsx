import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { StateContext } from '../../context';

function SearchResult({ name_ru, name_uz, img, sub_ctg, prod_id, setSearchTerm }) {
    const { lang, setSubCtg_id, setType } = useContext(StateContext)
    const navigate = useNavigate()

    const getDetail = () => {
        navigate(`/productdetail/${prod_id}`)
        setType(sub_ctg?.type)
        setSubCtg_id(sub_ctg?.id)
        setSearchTerm('')
    }
    return (
        <div className='flex p-5 cursor-pointer justify-between items-center hover:text-[#00b6c9] ' onClick={getDetail}>
            <img className='w-16' src={`http://api.basito.uz${img[0].img}`} alt="product" />
            <h1>{lang === 'ru' ? name_ru : name_uz}</h1>
        </div>
    )
}

export default SearchResult
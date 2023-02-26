import React from 'react'
import { useNavigate } from 'react-router-dom'

function SearchResult({ name, images, id, setSearchTerm }) {
    const navigate = useNavigate()
    const handleProductClick = () => {
        setSearchTerm("");
        navigate(`/productdetail/${id}`)
    };
    return (
        <div className='flex p-5 cursor-pointer justify-between' onClick={handleProductClick}>
            <img className='w-20' src={`https://askona.herokuapp.com${images[0]}`} alt="product" />
            <h1>{name}</h1>
        </div>
    )
}

export default SearchResult
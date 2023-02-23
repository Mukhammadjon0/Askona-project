import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'

function Products() {
    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const productsInfo = async () => {
        try {
            const response = await axios.get('https://askona.herokuapp.com/api/v1/product/')
            setProducts(response.data)
            setIsLoading(false)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        productsInfo()
    }, [])
    console.log(products)
    return (
        <div className='grid grid-cols-4 gap-5 py-10'>
            {isLoading ? <h1>Loading...</h1> :
                products.map(product => <ProductCard key={product.id} {...product} />)
            }
        </div>
    )
}

export default Products
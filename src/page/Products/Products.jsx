import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'

function Products() {
    const [products, setProducts] = useState([])
    console.log(products);
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
        <div className='flex flex-row flex-wrap'>
            {isLoading ? <h1>Loading...</h1> :
                products.map(product => <ProductCard key={product.id} {...product} />)
            }
        </div>
    )
}

export default Products
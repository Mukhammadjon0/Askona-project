import React, { useContext } from 'react'
import ProductCard from './ProductCard'
import { StateContext } from '../../context'

function Products() {
    const { products, isLoading } = useContext(StateContext)

    return (
        <div className='grid grid-cols-4 gap-5 container'>

            {isLoading ? <h1>Loading...</h1> :
                products.map(product => <ProductCard key={product.id} product={product} {...product} />)
            }
        </div>
    )
}

export default Products
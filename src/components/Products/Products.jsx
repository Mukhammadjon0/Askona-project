import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Products() {
    const [products, setProducts] = useState()


    const productsInfo = async () => {
        await axios.get('https://askona.herokuapp.com/api/v1/product/1/',)
            .then(res => {
                setProducts(res.data)
            })
            .catch((err) => console.log(err))
    }
    useEffect(() => {
        productsInfo()
    }, [])
    console.log(products)
    return (
        <div></div>
    )
}

export default Products
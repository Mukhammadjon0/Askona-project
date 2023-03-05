import React from 'react'
import { BiHomeSmile } from 'react-icons/bi'
import { Link, useLocation } from 'react-router-dom'
import Katalog from '../../components/Katalog/Katalog'
import { useProductsQuery } from '../../services/productApi'
import ProductCard from '../Products/ProductCard'

function Aksi() {
    const { data: products, isLoading: productsIsloading, isSuccess: productsIsSuccess } = useProductsQuery()
    const location = useLocation();
    console.log(products)
    const queryParams = new URLSearchParams(location.search);
    const category = queryParams.get("category");

    const filteredProducts = category
        ? products?.filter((product) => product.sub_ctg.name === category)
        : products;
    return (
        <div>
            <div className="py-10 container">
                <Link to={'/'} className='text-gray-400 text-xl my-10 flex items-center'>
                    <BiHomeSmile /> /
                </Link>
                <div className="p-0">
                    <Katalog />
                </div>
                <div style={{ paddingBottom: '60px', paddingTop: '10px' }} className='grid grid-cols-4 gap-5'>
                    {productsIsloading && <h1>Loading...</h1>}
                    {productsIsSuccess && filteredProducts.map(product => <ProductCard key={product.id} product={product} {...product} />)}
                </div>
            </div>
        </div>
    )
}

export default Aksi
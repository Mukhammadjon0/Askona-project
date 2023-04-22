import React, { useContext} from 'react'
import { BiHomeSmile } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import Katalog from '../../components/Katalog/Katalog'
import { useProductsQuery } from '../../services/productApi'
import { StateContext } from '../../context'
import ProductCard from './ProductCard'

function ProductCtg() {
    const { lang,type, } = useContext(StateContext)

    const { data: products, isLoading: productsIsloading, } = useProductsQuery({
        type: type,
        product_id: "all",
    });

    return (
        <div className="py-10 container">
            <div className="p-0">
                <Katalog />
            </div>
            <div style={{ paddingBottom: '60px', paddingTop: '10px' }} className='grid desktop:grid-cols-4 tablet:grid-cols-2 mobile:grid-cols-1 gap-5'>
                {productsIsloading && <h1>Loading...</h1>}
                {products?.length > 0 ? products?.map(product => <ProductCard key={product.prod_id} product={product} {...product} />) : <h1>{lang === 'ru' ? 'продукт не найден' : 'Mahsulot topilmadi'}</h1>}
            </div>
        </div>
    )
}

export default ProductCtg
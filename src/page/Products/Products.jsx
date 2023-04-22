import ProductCard from './ProductCard'
import { useProductsQuery } from '../../services/productApi';
import { useParams } from 'react-router-dom';
import Katalog from '../../components/Katalog/Katalog';
import { useContext, } from 'react';
import { StateContext } from '../../context';

function Products() {
    const { lang, type, } = useContext(StateContext)
    const { id } = useParams()

    const { data: products, isLoading: productsIsloading } = useProductsQuery({
        product_id: "all",
        type: type,
        sub_category_id: id,
    });
    return (
        <div className="py-10 container">
            <div className="p-0">
                <Katalog />
            </div>
            <div style={{ paddingBottom: '60px', paddingTop: '10px' }} className='grid desktop:grid-cols-4 tablet:grid-cols-2 mobile:grid-cols-1 gap-5'>
                {productsIsloading && <h1>loading...</h1>}
                {products?.length > 0 ? products?.map(product => <ProductCard key={product.prod_id} product={product} {...product} />) : <h1>{lang === 'ru' ? 'продукт не найден' : 'Mahsulot topilmadi'}</h1>}
            </div>
        </div>
    )
}

export default Products
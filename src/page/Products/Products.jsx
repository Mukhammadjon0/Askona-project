import ProductCard from './ProductCard'
import { useProductsQuery } from '../../services/productApi';

function Products() {

    const { data: products,  isLoading: productsIsloading, isSuccess: productsIsSuccess } = useProductsQuery()
    return (
        <div className='grid grid-cols-4 gap-5 container'>
            {productsIsloading && <h1>Loading...</h1>}
            {productsIsSuccess && products.map(product => <ProductCard key={product.id} product={product} {...product} />)}

        </div>
    )
}

export default Products
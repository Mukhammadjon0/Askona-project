import ProductCard from './ProductCard'
import { useProductsQuery } from '../../services/productApi';
import { useLocation } from 'react-router-dom';
function Products() {
    const { data: products, isLoading: productsIsloading, isSuccess: productsIsSuccess } = useProductsQuery()
    const location = useLocation();
    console.log(products)
    const queryParams = new URLSearchParams(location.search);
    const category = queryParams.get("category");

    const filteredProducts = category
        ? products?.filter((product) => product.sub_ctg.name === category)
        : products;

    return (
        <div className="py-10">
            <div style={{ paddingBottom: '60px', paddingTop: '30px' }} className='grid grid-cols-4 gap-5 container'>
                {productsIsloading && <h1>Loading...</h1>}
                {productsIsSuccess && filteredProducts.map(product => <ProductCard key={product.id} product={product} {...product} />)}
            </div>
        </div>
    )
}

export default Products
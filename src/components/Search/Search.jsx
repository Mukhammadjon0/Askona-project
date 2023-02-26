import React, { useEffect, useState } from 'react'
import { BiSearchAlt2 } from 'react-icons/bi'
import { useProductsQuery } from '../../services/productApi'
import SearchResult from './SearchResult';

function Search() {
    const { data: products, isLoading: productsIsLoading, isSuccess: productsIsSuccess } = useProductsQuery()
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [isFocused, setIsFocused] = useState(false);

    useEffect(() => {
        // search for products based on search term
        if (productsIsSuccess) {
            const results = products.filter((product) =>
                product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                product.sub_ctg.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setSearchResults(results);
        }
    }, [products, productsIsSuccess, searchTerm]);

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleInputFocus = () => {
        setIsFocused(true);
    }

    const handleInputBlur = () => {
        setIsFocused(false);
    }

    if (!searchTerm) {
        // Hide search results if searchTerm is empty
        return (
            <div>
                <div className={`rounded py-2 px-2 flex items-center gap-4 w-96 border ${isFocused ? 'border-[#00B6C9]' : 'border-gray-300'}`}>
                    <BiSearchAlt2 className="text-[#00B6C9] text-lg font-bold" />
                    <input
                        type="text"
                        placeholder="Поиск по товарам..."
                        className="outline-none w-full search-input"
                        value={searchTerm} onChange={handleInputChange}
                        onFocus={handleInputFocus}
                        onBlur={handleInputBlur}
                    />
                </div>
            </div>
        )
    }

    return (
        <div className=''>
            <form className={`rounded py-2 px-2 flex items-center gap-4 w-96 border ${isFocused ? 'border-[#00B6C9]' : 'border-gray-300'}`}>
                <BiSearchAlt2 className="text-[#00B6C9] text-lg font-bold" />
                <input
                    type="text"
                    placeholder="Поиск по товарам..."
                    className="outline-none w-full search-input"
                    value={searchTerm} onChange={handleInputChange}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                />
            </form>
            <div className="absolute z-[9999] bg-white w-1/3 shadow-2xl mt-5 p-5 divide-y">
                {searchTerm !== "" && searchResults.length === 0 ? (
                    <p>товар не найден</p>
                ) : (
                    searchResults.map((product) => <SearchResult key={product.id} setSearchTerm={setSearchTerm} {...product} />)
                )}
            </div>
        </div>
    )
}

export default Search
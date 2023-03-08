import React, { useEffect, useState } from 'react'
import { BiSearchAlt2 } from 'react-icons/bi'
import { useProductsQuery } from '../../services/productApi'
import SearchResult from './SearchResult';

function debounce(func, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => func.apply(this, args), delay);
    };
}
function Search() {
    const { data: products,} = useProductsQuery()
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [isFocused, setIsFocused] = useState(false);
    const [isSearching, setIsSearching] = useState(false);

    useEffect(() => {
        const delayedSearch = debounce(() => {
            setIsSearching(true);
            const results = products?.filter(
                (product) =>
                    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    product.sub_ctg.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setSearchResults(results);
            setIsSearching(false);
        }, 500);

        delayedSearch();
    }, [searchTerm, products]);
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
        return (
            <div className='sm:hidden'>
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
            <div className="absolute z-[9999] bg-white w-1/3 shadow-2xl mt-5 p-5 divide-y">
                {searchTerm !== "" && searchResults?.length === 0 ? (
                    <p>товар не найден</p>
                ) : (
                    searchResults?.map((product) => <SearchResult key={product.id} setSearchTerm={setSearchTerm} {...product} />)
                )}
            </div>
        </div>
    )
}

export default Search
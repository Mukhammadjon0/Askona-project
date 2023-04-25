import React, { useContext, useEffect, useState } from 'react'
import { BiSearchAlt2 } from 'react-icons/bi'
import { useProductsQuery } from '../../services/productApi'
import SearchResult from './SearchResult';
import { StateContext } from '../../context';

function debounce(func, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => func.apply(this, args), delay);
    };
}
function Search({ language }) {
    const { data: products } = useProductsQuery({
        product_id: "all",
        type: "all",
        sub_category_id: "all"
    })
    // console.log(page1Lang?.header?.qidiruv)
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [isFocused, setIsFocused] = useState(false);
    // const [isSearching, setIsSearching] = useState(false);
    const { lang } = useContext(StateContext)

    useEffect(() => {
        const delayedSearch = debounce(() => {
            // setIsSearching(true);
            const results = products?.data?.filter(
                (product) =>
                    product.name_ru.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    product.sub_ctg.slug.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    product.name_uz.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setSearchResults(results);
            // setIsSearching(false);
        }, 500);

        if (products?.data) {
            delayedSearch();
        }
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
            <div className="w-full">
                <div className={`rounded py-2 px-2 flex items-center gap-4 mobile:w-full desktop:w-[28rem] tablet:w-[28rem] border ${isFocused ? 'border-[#407CD3]' : 'border-gray-300'}`}>
                    <BiSearchAlt2 className="text-[#407CD3] text-lg font-bold" />
                    <input
                        type="text"
                        placeholder={lang === 'ru' ? 'Поиск по товарам...' : 'Mahsulot qidirish...'}
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
        <div className="mobile:w-full desktop:w-[28rem] tablet:w-[28rem]">
            <div className={`rounded py-2 px-2 flex items-center gap-4  border ${isFocused ? 'border-[#407CD3]' : 'border-gray-300'}`}>
                <BiSearchAlt2 className="text-[#407CD3] text-lg font-bold" />
                <input
                    type="text"
                    placeholder={lang === 'ru' ? 'Поиск по товарам...' : 'Mahsulot qidirish...'}
                    className="outline-none w-full search-input"
                    value={searchTerm} onChange={handleInputChange}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                />
            </div>
            <div className="absolute z-[9] bg-white mobile:w-[88%] desktop:w-[28rem] tablet:w-[28rem] shadow-2xl desktop:mt-5 tablet:mt-5 mobile:mt-1 desktop:p-5 tablet:p-2 mobile:p-0 divide-y max-h-96 scrollbar-thumb-[#407CD3] scrollbar-track-gray-100 scrollbar-thin">
                {searchTerm !== "" && searchResults?.length === 0 ? (
                    <p>{lang === 'ru' ? 'товар не найден' : 'Bunday tovar topilmadi'}</p>
                ) : (
                    searchResults?.map((product) => <SearchResult key={product.id} setSearchTerm={setSearchTerm} {...product} />)
                )}
            </div>
        </div>
    )
}

export default Search
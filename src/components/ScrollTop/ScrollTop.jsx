import React, { useEffect, useState } from 'react'
import { AiOutlineArrowUp } from 'react-icons/ai'

function ScrollTop() {
    const [showButton, setShowButton] = useState(false);

    // function to handle scroll event
    const handleScroll = () => {
        const scrollPosition = window.pageYOffset;
        setShowButton(scrollPosition > 300);
    };
    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <button onClick={handleClick} className={`fixed bottom-20 right-10 z-50 bg-[#407CD3] duration-200 hover:bg-[#2B58A0] active:scale-95 rounded-full desktop:p-3 mobile:p-2 tablet:p-3 ${showButton ? 'opacity-100' : 'opacity-0'} shadow-2xl`}>
            <AiOutlineArrowUp className='text-white font-bold desktop:text-2xl tablet:text-2xl mobile:text-xl' />
        </button>
    )
}

export default ScrollTop
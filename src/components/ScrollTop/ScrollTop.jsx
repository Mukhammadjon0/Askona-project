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
        <button onClick={handleClick} className={`fixed bottom-10 right-10 z-50 bg-[#00bac9] duration-200 hover:bg-[#0099a5] active:scale-95 rounded-full p-3 ${showButton ? 'opacity-100' : 'opacity-0'} shadow-2xl`}>
            <AiOutlineArrowUp className='text-white font-bold text-2xl' />

        </button>
    )
}

export default ScrollTop
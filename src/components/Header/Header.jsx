import React from 'react';
import Topadvenses from "../../assets/img/topadv.png";
import { AiFillCloseCircle } from 'react-icons/ai'

function Header() {
    return (
        <header className="flex w-full items-center bg-[#02B9BF] sm:hidden md:flex lg:flex xl:flex 2xl:flex">
            <img className="w-[80%] m-auto bg-[#00B6C9] sm:w-[60%] md:w-[70%] lg:w-[80%] xl:w-[80%] 2xl:w-[80%]" src={Topadvenses} alt="" />
            <button className="">
                <AiFillCloseCircle className="text-white mr-7" />
            </button>
        </header>
    )
}

export default Header;

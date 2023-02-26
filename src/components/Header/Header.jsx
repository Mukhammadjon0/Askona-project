import React from 'react'
import Topadvenses from "../../assets/img/topadv.png";
import { AiFillCloseCircle } from 'react-icons/ai'

function Header() {
    return (
        <header className="flex w-full items-center bg-[#02B9BF]">
            <img className="w-[80%] m-auto bg-[#00B6C9]" src={Topadvenses} alt="" />
            <button>
                <AiFillCloseCircle className="text-white mr-7" />
            </button>
        </header>
    )
}

export default Header
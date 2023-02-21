import React, { useState } from 'react'
import { AiOutlineDislike, AiOutlineLike } from 'react-icons/ai'

function CommentsCard({ name, text, }) {
    const [commentClass, setCommentClass] = useState(0)
    const [commentDisClass, setCommentDisClass] = useState(0)
    return (
        <div className='py-3 flex flex-col gap-2'>
            <h1 className='font-semibold'>{name}</h1>
            <p className=''>{text}</p>
            <div className="flex gap-4">
                <p className='text-gray-400'>Полезный отзыв?</p>
                <div className="flex items-center gap-10">
                    <div className="flex flex-row gap-2">
                        <button onClick={() => setCommentClass(p => p + 1)}>
                            <AiOutlineLike className='text-gray-600 hover:text-[#00b9c0] text-xl cursor-pointer' />
                        </button>
                        <p>{commentClass}</p>
                    </div>
                    <div className="flex flex-row gap-2">
                        <button onClick={() => setCommentDisClass(p => p + 1)}>
                            <AiOutlineDislike className='text-gray-600 hover:text-[#00b9c0] text-xl cursor-pointer' />
                        </button>
                        <p>{commentDisClass}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CommentsCard
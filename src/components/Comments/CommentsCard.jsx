import axios from 'axios'
import React, { useContext, useState } from 'react'
import { AiOutlineDislike, AiOutlineLike } from 'react-icons/ai'
import { StateContext } from '../../context'

function CommentsCard({ text, user, comment_id }) {
    const [commentClass, setCommentClass] = useState("like")
    const [commentDisClass, setCommentDisClass] = useState("dislike")
    const { userData } = useContext(StateContext)

    const handleLike = (e) => {
        const body = {
            method: "like",
            params: {
                comment_id: comment_id,
                liketype: commentClass
            }
        }
        const headers = {
            Authorization: `Bearer ${userData?.token}`
        }
        axios.post("http://68.183.21.222:1233/api/v1/comment/", body, { headers })
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }
    const handleDisLike = (e) => {
        const body = {
            method: "like",
            params: {
                comment_id: comment_id,
                liketype: commentDisClass
            }
        }
        const headers = {
            Authorization: `Bearer ${userData?.token}`
        }
        axios.post("http://68.183.21.222:1233/api/v1/comment/", body, { headers })
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    return (
        <div className='py-3 flex flex-col gap-2'>
            <h1 className='font-semibold'>{user.name}</h1>
            <p className=''>{text}</p>
            <div className="flex gap-4">
                <p className='text-gray-400'>Полезный отзыв?</p>
                <div className="flex items-center gap-10">
                    <div className="flex flex-row gap-2">
                        <button onClick={handleLike}>
                            <AiOutlineLike className='text-gray-600 hover:text-[#00b9c0] text-xl cursor-pointer' />
                        </button>
                        {/* <p>{commentClass}</p> */}
                    </div>
                    <div className="flex flex-row gap-2">
                        <button onClick={handleDisLike}>
                            <AiOutlineDislike className='text-gray-600 hover:text-[#00b9c0] text-xl cursor-pointer' />
                        </button>
                        {/* <p>{commentDisClass}</p> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CommentsCard
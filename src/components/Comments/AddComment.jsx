import React, { useContext, useState } from 'react'
import { StateContext } from '../../context'
import { useAddCommentMutation, useGetCommentsQuery } from '../../services/commentApi'

function AddComment({ data }) {
    const [addCommentOpen, setAddCommentOpen] = useState(true)
    const { userData } = useContext(StateContext)
    const [text, setText] = useState('')

    const [addComment, { isLoading, isError, isSuccess }] = useAddCommentMutation()
    const { data: comments = [] } = useGetCommentsQuery(data.id)


    const handleSubmitComment = (event) => {
        event.preventDefault()
        addComment({ product_id: data?.id, text })
        setAddCommentOpen(p => !p)
        setText('')
    }
    return (
        <div>
            <div className="flex justify-between">
                <h1 className='font-bold text-2xl'>Отзывы ({comments?.length || 0})</h1>
                <button onClick={() => setAddCommentOpen((p) => !p)} className='py-1 px-6 bg-[#00B9C0] rounded text-white'>Оставить отзыв</button>
            </div>

            <form onSubmit={handleSubmitComment} action="" className={`${addCommentOpen ? "hidden" : 'flex flex-col gap-3 mt-5'}`}>
                <input className='py-1 px-3 border-[1px] border-gray-400 outline-[#00b9c0] rounded' type="text" placeholder='name' value={userData?.name} />
                <div className="overflow-hidden">
                    <textarea onChange={(e) => setText(e.target.value)} className='w-full border-[1px] border-gray-400 outline-[#00b9c0] rounded p-2' id="" cols="3" rows="10" placeholder='comment'></textarea>
                </div>
                <button className='py-1 px-6 bg-[#00B9C0] rounded text-white'>Оставить отзыв</button>
            </form>
        </div>
    )
}

export default AddComment
import React, { useContext, useState } from 'react'
import { StateContext } from '../../context'
import { useAddCommentMutation, useCommentsQuery } from '../../services/commentApi'

function AddComment({ data }) {
    const [addCommentOpen, setAddCommentOpen] = useState(true)
    const { userData, handleOpen, lang } = useContext(StateContext)
    const [text, setText] = useState('')
    const [addComment] = useAddCommentMutation()

    const { data: comments = [] } = useCommentsQuery(data.id)

    const handleSubmitComment = (event) => {
        event.preventDefault()
        const body = {
            product_id: Number(data?.prod_id),
            product_type: data?.sub_ctg.type,
            text: text
        }
        addComment({ body })
        setAddCommentOpen(p => !p)
        setText('')
    }
    return (
        <div>
            <div className="flex justify-between">
                <h1 className='font-bold text-2xl'>{lang === 'ru' ? 'Отзывы' : 'Sharhlar'} ({comments?.cnt})</h1>
                <button onClick={() => userData?.token ? setAddCommentOpen((p) => !p) : handleOpen()} className='py-1 px-6 bg-[#00B9C0] rounded text-white'>{lang === 'ru' ? 'Оставить отзыв' : 'Sharh qoldirish'}</button>
            </div>

            <form onSubmit={handleSubmitComment} action="" className={`${addCommentOpen ? "hidden" : 'flex flex-col gap-3 mt-5'}`}>
                <input className='py-1 px-3 border-[1px] border-gray-400 outline-[#00B9C0] rounded' type="text" placeholder='name' value={userData?.name} />
                <div className="overflow-hidden">
                    <textarea onChange={(e) => setText(e.target.value)} className='w-full border-[1px] border-gray-400 outline-[#00B9C0] rounded p-2' id="" cols="3" rows="10" placeholder='comment'></textarea>
                </div>
                <button className='py-1 px-6 bg-[#00B9C0] rounded text-white'>{lang === 'ru' ? 'Оставить отзыв' : 'Sharh qoldirish'}</button>
            </form>
        </div>
    )
}

export default AddComment
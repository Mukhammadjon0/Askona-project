import React, { useState } from 'react'
import CommentsCard from './CommentsCard'

function Comments() {
  const comments = [
    {
      name: 'Ирина', text: 'Мягкий и на высоких деревянных ножках, в духе ультрамодных тенденций. Сдержанный дизайн и продуманная до мелочей функциональность – в актуальном скандинавском стиле. Компактный Talo освободит пространство даже на небольших площадях.', id: 1
    },
    {
      name: 'Ирина', text: 'Мягкий и на высоких деревянных ножках, в духе ультрамодных тенденций. Сдержанный дизайн и продуманная до мелочей функциональность – в актуальном скандинавском стиле. Компактный Talo освободит пространство даже на небольших площадях.', id: 2
    },
    {
      name: 'Ирина', text: 'Мягкий и на высоких деревянных ножках, в духе ультрамодных тенденций. Сдержанный дизайн и продуманная до мелочей функциональность – в актуальном скандинавском стиле. Компактный Talo освободит пространство даже на небольших площадях.', id: 3
    },
  ]
  const [addComment, setAddComment] = useState(true)
  const handleSubmitComment = (e) => {
    e.preventDefault()
    setAddComment(p => !p)

  }
  return (
    <div className='w-[800px] border-t-[1px] border-gray-200 py-5'>
      <div className="flex justify-between">
        <h1 className='font-bold text-2xl'>Отзывы ({comments.length})</h1>
        <button onClick={() => setAddComment((p) => !p)} className='py-1 px-6 bg-[#00B9C0] rounded text-white'>Оставить отзыв</button>
      </div>
      <form onSubmit={handleSubmitComment} action="" className={`${addComment ? "hidden" : 'flex flex-col gap-3 mt-5'}`}>
        <input className='py-1 px-3 border-[1px] border-gray-400 outline-[#00b9c0] rounded' type="text" placeholder='name' />
        <div className="">
          <textarea className='w-full border-[1px] border-gray-400 outline-[#00b9c0] rounded p-2' id="" cols="3" rows="10" placeholder='comment'></textarea>
        </div>
        <button className='py-1 px-6 bg-[#00B9C0] rounded text-white'>Оставить отзыв</button>
      </form>
      <div className="flex flex-col divide-y">
        {comments.map(item => <CommentsCard key={item.id} {...item} />)}
      </div>
    </div>
  )
}

export default Comments
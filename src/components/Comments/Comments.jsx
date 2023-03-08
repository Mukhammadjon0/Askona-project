import React from 'react'
import CommentsCard from './CommentsCard'
import { useCommentsQuery } from '../../services/commentApi'

function Comments({ data }) {
  const { data: comments = [] } = useCommentsQuery(data.id)
  return (
    <div className='w-[800px] border-t-[1px] border-gray-200 py-5'>
      <div className="flex flex-col divide-y">
        {comments?.data?.length ? (comments?.data?.map(item => <CommentsCard key={item.comment_id} {...item} />)) : (<h1>пока нет комментариев</h1>)}
      </div>
    </div>
  )
}

export default Comments
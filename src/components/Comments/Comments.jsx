import React, { useContext} from 'react'
import CommentsCard from './CommentsCard'
import { useCommentsQuery } from '../../services/commentApi'
import { StateContext } from '../../context';

function Comments({ data }) {
  const { data: comments = [] } = useCommentsQuery(data.prod_id);
  const { lang } = useContext(StateContext)
  return (
    <div className='desktop:w-[800px] mobile:w-full tablet:w-full border-t-[1px] border-gray-200 py-5'>
      <div className="flex flex-col divide-y">
        {comments?.data?.length ? (comments?.data?.map(item => <CommentsCard key={item.comment_id} {...item} />)) : (<h1>{lang === 'ru' ? 'пока нет комментариев' : 'Hozircha sharhlar yo`q'}</h1>)}
      </div>
    </div>
  )
}

export default Comments
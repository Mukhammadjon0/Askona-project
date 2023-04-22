import { AiOutlineDislike, AiOutlineLike } from 'react-icons/ai'
import { useAddDisLikeCommentMutation, useAddLikeCommentMutation } from '../../services/commentApi'

function CommentsCard({ text, user, comment_id, like, dislike }) {
    const [addLike] = useAddLikeCommentMutation()
    const [addDisLike] = useAddDisLikeCommentMutation()
    const handleLike = (e) => {
        addLike({ id: comment_id })
    }
    const handleDisLike = (e) => {
        addDisLike({ id: comment_id })
    }

    return (
        <div className='py-3 flex flex-col gap-2'>
            <h1 className='font-semibold'>{user?.name}</h1>
            <p className=''>{text}</p>
            <div className="flex gap-4">
                <p className='text-gray-400'>Полезный отзыв?</p>
                <div className="flex items-center gap-10">
                    <div className="flex flex-row gap-2">
                        <button onClick={handleLike}>
                            <AiOutlineLike className='text-gray-600 hover:text-[#00B9C0] text-xl cursor-pointer' />
                        </button>
                        <p>{like}</p>
                    </div>
                    <div className="flex flex-row gap-2">
                        <button onClick={handleDisLike}>
                            <AiOutlineDislike className='text-gray-600 hover:text-[#00B9C0] text-xl cursor-pointer' />
                        </button>
                        <p>{dislike}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CommentsCard
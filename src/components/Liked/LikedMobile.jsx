import React from 'react'
import { useSavedQuery } from '../../services/savedApi';
import LikedCard from './LikedCard';

function LikedMobile({ language }) {
    const { data: proSaved, isLoading: savedLoading } = useSavedQuery();
    return (
        <div className="container">
            <div className="grid desktop:grid-cols-3 tablet:grid-cols-2 mobile:grid-cols-1 gap-x-10 divide-y pb-10">
                {savedLoading && <h1>loading...</h1>}
                {proSaved?.length > 0 ? (proSaved?.map(item => <LikedCard key={item.prosaved_id} {...item} />)) : (<h1 className='my-2 mx-2 text-gray-400 text-xl font-semibold' >{language?.sevimlilarim}</h1>)}
            </div>
        </div>
    )
}

export default LikedMobile
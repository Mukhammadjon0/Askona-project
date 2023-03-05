import React, { useContext } from 'react'
import BasketTop from '../../components/BasketTop/BasketTop'
import { StateContext } from '../../context'

function Zakaz() {
  const { state, setState } = useContext(StateContext)
  return (
    <div className='py-10 bg-gray-200'>
      <BasketTop state={state} setState={setState} />
    </div>
  )
}

export default Zakaz
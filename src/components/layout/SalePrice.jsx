
import React from 'react'

export const SalePrice = ({price, unit}) => {
  return (
    <div>
    <div className='mb-3'>
      <div className='rounded-lg bg-gray-200  p-4 font-bold uppercase text-center text-xl text-gray-400'>
        {`${price}  ${unit.toUpperCase()}`}
      </div>
    </div>
  </div>
   )
}

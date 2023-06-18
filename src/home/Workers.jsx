import React from 'react'
import Data from '../Workers'
export default function Workers() {
  return (
    <div>
        <div className='my-10 container'>
            <h1 className='text-[32px] font-semibold'>FireNews team</h1>
            <div className='w-full mt-5 justify-center  flex  flex-wrap'>
                {Data?.map((item) => (
                   <div className='drop-shadow-lg mx-[10px] w-[250px] my-8 flex flex-col items-center justify-center' key={item.id}>
                        <img className='h-[305px] object-cover rounded border border-[#E50914] w-full' src={item.img} alt={item.name} />
                        <h1 className='text-[20px] line-clamp-2 textr-black font-semibold mt-3 text-center w-[80%]'>
                            {item.name}
                        </h1>
                        <p className='mt-1 text-[#E50914] text-[16px]'>{item.post}</p>
                   </div>
                ))}
            </div>
        </div>
    </div>
  )
}

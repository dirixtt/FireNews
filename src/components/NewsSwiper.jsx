import React from 'react';
import dayjs from 'dayjs';
import { BsCalendar4, BsEye } from 'react-icons/bs';
import img from './noimg.jpg'
import { Link } from 'react-router-dom';
import Loader from './Loader';
export default function NewsSwiper({data}) {
  return (
    <div>
        {data.length > 0 ? ( <div className='relative gap-3 mt-10 flex w-full justify-center md:justify-between flex-wrap'>
              {data?.map((item, idx) => (
                <div key={idx} className='xl:w-[295px] md:w-[350px ] relative flex md:flex-col justify-between text-[18px]'>
                  <img className='md:h-[200px] h-[100px] w-[100px] object-cover md:w-full rounded' src={item.urlToImage ? item.urlToImage : img} alt="" />
                  <div className='pl-2 md:p-0'>

                    <div className='absolute md:flex hidden items-center px-4 top-[20px]  justify-between w-full text-[14px]'>
                      <p className='p-1 mt-1 text-white bg-[#E50914] left-2'>{item.source.name}</p>

                    </div>
                    <Link to={`/products/${item.publishedAt} `}>
                      <p className='hover:text-[#E50914] md:text-xl text-[15px] font-semibold'>
                        {item.title.length > 50 ? `${item.title.slice(0, 50)}...` : item.title}
                      </p>
                    </Link>
                    <div className='text-[14px] gap-3 flex mt-3'>
                      <p className='flex items-center gap-2'>
                        <p className='bg-[#fbbcbce6] p-1 rounded'>
                          <BsCalendar4 className='text-[#E50914]' />
                        </p>
                        {item.publishedAt ? dayjs(item.publishedAt).format("DD MMM, YYYY") : "No time"}
                      </p>
                      |
                      <p className="flex gap-2">
                        <p className='bg-[#fbbcbce6] text-[#E50914] p-1 rounded'>
                          <BsEye />
                        </p>
                        {item.publishedAt.slice(0, 3)}
                      </p>
                    </div>
                  </div>

                </div>
              ))}
            </div>) : (<Loader/>)}
         
    </div>
  )
}

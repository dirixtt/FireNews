import React from 'react';
import dayjs from 'dayjs';
import { BsCalendar4, BsEye } from 'react-icons/bs';
import { AiFillHeart } from 'react-icons/ai'
import { Link } from 'react-router-dom';
import Loader from './Loader';
import NewsSwiper from './NewsSwiper';

export default function FamousNews2({ data }) {
  return (

    <div>
      {data.length > 0 ? (
        <div className='my-10 container'>
          <>
            <div className='mb-10'>
              <div className=' text-black text-opacity-50 gap-1 my-[23px] text-[14px] flex'>

                <Link to="/">Uy</Link>/<Link className='text-[#E50914]' to="/firenews">Eng mashhur</Link>
              </div>
              <div className='w-full border-b border-[#E50914]'>
                <p className='text-[#E50914]  flex items-center text-[24px] font-semibold  pb-[10px] gap-2'>Eng mashhur <AiFillHeart /></p>
              </div>
            </div>
            <div className='flex justify-between'>
              <div className='relative w-full xl:w-[49.5%] h-[250px] rounded '>
                <img className='object-cover w-full rounded h-full' src={data[2].urlToImage} alt="" />
                <div className='absolute text-sm xl:text-[18px] p-[8px] bg-black bg-opacity-30 w-full text-white h-[35%] bottom-0 '>
                  <Link className='hover:text-red-500' to={`/products/${data[2].publishedAt}`}>
                    {data[2].title.length > 50 ? `${data[2].title.slice(0, 50)}...` : data[2].title}
                  </Link >
                  <div className='text-[14px] gap-3 flex mt-3'>
                    <p className='flex items-center gap-2'>
                      <p className='bg-[#FFFFFFE6] p-1 rounded'>
                        <BsCalendar4 className=' text-[#E50914]' />
                      </p>
                      {dayjs(data[2].publishedAt).format("DD MMM, YYYY")}
                    </p>
                    |
                    <p className="flex gap-2 ">
                      <p className='bg-[#FFFFFFE6] text-[#E50914] p-1 rounded'>
                        <BsEye />
                      </p>
                      846
                    </p>
                  </div>
                </div>
                <div className='absolute items-center px-4 top-[20px] rounded-b flex justify-between w-full text-[14px]'>
                  <p className=' p-1 text-white bg-[#E50914] left-2'>{data[2].source.name}</p>
                  <p className='p-2 rounded text-lg text-white bg-[#E50914] flex justify-center items-center'><AiFillHeart /></p>
                </div>
              </div>
              <div className='relative w-[49.5%] hidden xl:flex h-[250px] rounded '>
                <img className='object-cover w-full rounded h-full' src={data[10].urlToImage} alt="" />
                <div className='absolute text-[18px] p-[8px] bg-black bg-opacity-30 w-full text-white h-[35%] bottom-0 '>
                  <Link className='hover:text-red-500' to={`/products/${data[10].publishedAt}`}>
                    {data[10].title.length > 50 ? `${data[10].title.slice(0, 50)}...` : data[10].title}
                  </Link >
                  <div className='text-[14px] gap-3 flex mt-3'>
                    <p className='flex items-center gap-2'>
                      <p className='bg-[#FFFFFFE6] p-1 rounded'>
                        <BsCalendar4 className=' text-[#E50914]' />
                      </p>
                      {dayjs(data[10].publishedAt).format("DD MMM, YYYY")}
                    </p>
                    |
                    <p className="flex gap-2 ">
                      <p className='bg-[#FFFFFFE6] text-[#E50914] p-1 rounded'>
                        <BsEye />
                      </p>
                      846
                    </p>
                  </div>
                </div>
                <div className='absolute items-center px-4 top-[20px] rounded-b flex justify-between w-full text-[14px]'>
                  <p className=' p-1 text-white bg-[#E50914] left-2'>{data[10].source.name}</p>
                  <p className='p-2 rounded text-lg text-white bg-[#E50914] flex justify-center items-center'><AiFillHeart /></p>
                </div>
              </div>
            </div>
            <NewsSwiper data={data}/>
          </>

        </div>) : (<Loader />)}

    </div>
  )
}

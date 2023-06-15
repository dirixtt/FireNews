import React from 'react';
import dayjs from 'dayjs';
import { BsCalendar4, BsEye,BsFillLightningFill } from 'react-icons/bs';
import img from './noimg.jpg'
import { Link } from 'react-router-dom';
import Loader from './Loader';

export default function TrendNews({ data }) {
  return (

    <div>
      {data.length > 0 ? (
        <div className='my-10 container'>
          <>
            <div className='mb-10'>
              <div className=' text-black text-opacity-50 gap-1 my-[23px] text-[14px] flex'>

                <Link  to="/">Uy</Link>/<Link className='text-[#E50914]' to="/firenews">Trend yangiliklar</Link>
              </div>
              <div className='w-full border-b border-[#E50914]'>
                <p className='text-[#E50914]  flex items-center text-[24px] font-semibold  pb-[10px] gap-2'>Trend yangiliklar <BsFillLightningFill/></p>
              </div>
            </div>
            <div className='flex justify-between'>
              <div className='relative w-[49.5%] h-[250px] rounded '>
                <img className='object-cover w-full rounded h-full' src={data[2].urlToImage} alt="" />
                <div className='absolute text-[18px] p-[8px] bg-black bg-opacity-30 w-full text-white h-[35%] bottom-0 '>
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
                  <p className='p-2 rounded text-lg text-white bg-[#E50914] flex justify-center items-center'><BsFillLightningFill /></p>
                </div>
              </div>
              <div className='relative w-[49.5%] h-[250px] rounded '>
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
                  <p className='p-2 rounded text-lg text-white bg-[#E50914] flex justify-center items-center'><BsFillLightningFill /></p>
                </div>
              </div>
            </div>
            <div className='relative gap-3 mt-10  flex w-full justify-between flex-wrap'>
              {data?.map((item, idx) => (
                <div key={idx} className='w-[295px] relative text-[18px]'>
                  <img className='h-[200px] object-cover w-full rounded' src={item.urlToImage ? item.urlToImage : img} alt="" />
                  <div className='absolute items-center px-4 top-[20px] flex justify-between w-full text-[14px]'>
                    <p className='p-1 mt-1 text-white bg-[#E50914] left-2'>{item.source.name}</p>

                  </div>
                  <Link to={`/products/${item.publishedAt}`}>
                    <p className='hover:text-[#E50914]'>
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
              ))}
            </div>
          </>

        </div>) : (<Loader />)}

    </div>
  )
}

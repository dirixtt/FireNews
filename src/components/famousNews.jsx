import React from 'react';
import dayjs from 'dayjs';
import { BsCalendar4, BsEye, BsFillLightningFill } from 'react-icons/bs';
import Swiper from './Swiper';
import SecondSwiper from './SecondSwiper';
import { Link } from 'react-router-dom';
import WorldNews from './WorldNews';
import Loader from './Loader';
import ThirdSwiper from './ThirdSwiper';

export default function FamousNews({ 
  data, 
  data3,
  data4,
  data5,
  data2
 }) {
  const dateTimeString = data.length > 0 ? data[0].publishedAt : null;
  const formattedDate = dateTimeString ? dayjs(dateTimeString).format("DD MMM, YYYY") : null;

  return (
    <>
      {data.length > 0 ? (
        <>
          <div className='flex container mt-10'>
            <div className='w-1/2 rounded overflow-hidden p-2 md:h-[450px] '>
              {data.length > 0 ? (
                <div className='relative rounded h-full'>
                  <img className='object-cover w-full rounded h-full' src={data[3].urlToImage} alt="" />
                  <div className='absolute text-[30px] p-[18px] bg-black bg-opacity-30 w-full text-white h-[35%] bottom-0 '>
                    <Link className='hover:text-red-500' to={`/products/${data[3].publishedAt}`}>
                      {data[3].title.length > 50 ? `${data[3].title.slice(0, 50)}...` : data[3].title}
                    </Link >
                    <div className='text-[14px] gap-3 flex mt-3'>
                      <p className='flex items-center gap-2'>
                        <p className='bg-[#FFFFFFE6] p-1 rounded'>
                          <BsCalendar4 className=' text-[#E50914]' />
                        </p>
                        {formattedDate}
                      </p>
                      |
                      <p className="flex gap-2 ">
                        <p className='bg-[#FFFFFFE6] text-[#E50914] p-1 rounded'>
                          <BsEye />
                        </p>
                        156
                      </p>
                    </div>
                  </div>
                  <div className='absolute items-center px-4 top-[20px] flex justify-between w-full text-[14px]'>
                    <p className=' p-1 text-white bg-[#E50914] left-2'>{data[3].source.name}</p>
                    <p className='p-2 rounded text-lg text-white bg-[#E50914] flex justify-center items-center'><BsFillLightningFill /></p>
                  </div>
                </div>
              ) : (
                <div className='h-full w-full flex justify-center items-center'>Loading...</div>
              )}
            </div>
            <div className='w-1/2 rounded overflow-hidden p-2 md:h-[450px] '>
              {data.length > 0 ? (
                <>
                  <div className='relative h-1/2 rounded '>
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
                          {formattedDate}
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
                  <div className='flex'>
                    <div className='relative w-1/2 h-[217px] pr-2 pt-4 rounded '>
                      <img className='object-cover w-full rounded h-full' src={data[5].urlToImage} alt="" />
                      <div className='absolute text-[14px] p-[8px] bg-black bg-opacity-30 w-full text-white h-[35%] bottom-0 '>
                        <Link className='hover:text-red-500' to={`/products/${data[5].publishedAt}`}>
                          {data[5].title.length > 45 ? `${data[5].title.slice(0, 35)}...` : data[5].title}
                        </Link >
                        <div className='text-[10px] gap-3 flex mt-3'>
                          <p className='flex items-center gap-2'>
                            <p className='bg-[#FFFFFFE6] p-1 rounded'>
                              <BsCalendar4 className=' text-[#E50914]' />
                            </p>
                            {formattedDate}
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
                      <div className='absolute items-center px-4 top-[20px] flex justify-between w-full text-[14px]'>
                        <p className=' p-1 text-white bg-[#E50914] left-2'>{data[10].source.name}</p>
                        <p className='p-2 rounded text-lg text-white bg-[#E50914] flex justify-center items-center'><BsFillLightningFill /></p>
                      </div>
                    </div>
                    <div className='relative pl-2 w-1/2 h-[217px] pt-4 rounded '>
                      <img className='object-cover w-full rounded h-full' src={data[10].urlToImage} alt="" />
                      <div className='absolute text-[14px] p-[8px] bg-black bg-opacity-30 w-full text-white h-[35%] bottom-0 '>     <Link className='hover:text-red-500' to={`/products/${data[0].publishedAt}`}>
                        {data[10].title.length > 45 ? `${data[10].title.slice(0, 35)}...` : data[10].title}
                      </Link >
                        <div className='text-[10px] gap-3 flex mt-3'>
                          <p className='flex items-center gap-2'>
                            <p className='bg-[#FFFFFFE6] p-1 rounded'>
                              <BsCalendar4 className=' text-[#E50914]' />
                            </p>
                            {formattedDate}
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
                      <div className='absolute items-center px-4 top-[20px] flex justify-between w-full text-[14px]'>
                        <p className=' p-1 text-white bg-[#E50914] left-2'>{data[10].source.name}</p>
                        <p className='p-2 rounded text-lg text-white bg-[#E50914] flex justify-center items-center'><BsFillLightningFill /></p>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <div className='h-full w-full flex justify-center items-center'>Loading...</div>
              )}
            </div>
          </div>
          <div className='container h-[300px]'>


            <Swiper data={data} />
            <SecondSwiper data3={data3} data2={data2} />
            <WorldNews data={data}/>
            <ThirdSwiper data4={data4} data5={data5} />
          </div>
        </>

      ) : (
        <Loader/>
      )}
    </>

  );
}

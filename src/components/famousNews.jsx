import React from 'react';
import dayjs from 'dayjs';
import { BsCalendar4, BsEye, BsFillLightningFill } from 'react-icons/bs';
import Swiper from './Swiper';
import SecondSwiper from './SecondSwiper';
import { Link } from 'react-router-dom';
import WorldNews from './WorldNews';
import Loader from './Loader';
import ThirdSwiper from './ThirdSwiper';
import ThirdHeader from '../home/ThirdHeader';


export default function FamousNews({
  data,
  technology,
  entertainment,
  business,
  sport
}) {
  const dateTimeString = data.length > 0 ? data[0].publishedAt : null;
  const formattedDate = dateTimeString ? dayjs(dateTimeString).format("DD MMM, YYYY") : null;

  return (
    <>
      {data.length > 0 ? (
        <>
          <ThirdHeader />
          <div className='flex-col xl:flex-row xl:flex container my-10'>
            <div className='xl:w-1/2 w-full rounded h-[380px] overflow-hidden p-2 md:h-[450px] '>
              {data.length > 0 ? (
                <Link to={`/products/${data[3].publishedAt}`}>
                  <div className='relative rounded h-full'>
                    <img className='object-cover w-full rounded h-full' src={data[3].urlToImage} alt="" />
                    <div className='absolute text-[20px] md:text-[30px] p-[18px] bg-black bg-opacity-30 w-full text-white h-[35%] bottom-0 '>
                      <p className='hover:text-[#E50914]'>

                        {data[3].title.length > 50 ? `${data[3].title.slice(0, 50)}...` : data[3].title}
                      </p>
                      <div className='text-[14px] gap-3 flex mt-3'>
                        <p className='flex items-center gap-2'>
                          <i className='bg-[#FFFFFFE6] p-1 rounded'>
                            <BsCalendar4 className=' text-[#E50914]' />
                          </i>
                          {formattedDate}
                        </p>
                        |
                        <p className="flex gap-2 ">
                          <i className='bg-[#FFFFFFE6] text-[#E50914] p-1 rounded'>
                            <BsEye />
                          </i>
                          156
                        </p>
                      </div>
                    </div>
                    <div className='absolute items-center px-4 top-[20px] flex justify-between w-full text-[14px]'>
                      <p className=' p-1 text-white bg-[#E50914] left-2'>{data[3].source.name}</p>
                      <p className='p-2 rounded text-lg text-white bg-[#E50914] flex justify-center items-center'><BsFillLightningFill /></p>
                    </div>
                  </div>
                </Link >

              ) : (
                <div className='h-full w-full flex justify-center items-center'>Loading...</div>
              )}
            </div>
            <div className='xl:w-1/2 hidden md:block rounded overflow-hidden p-2 xl:h-[450px] '>
              {data.length > 0 ? (
                <>
                  <div className='relative hidden xl:flex h-1/2 rounded '>
                    <Link className='w-full' to={`/products/${data[2].publishedAt}`}>
                      <img className='object-cover w-full rounded h-full' src={data[2].urlToImage} alt="" />
                      <div className='absolute text-[18px] p-[8px] bg-black bg-opacity-30 w-full text-white h-[35%] bottom-0 '>
                        <p className='hover:text-[#E50914]'>

                          {data[2].title.length > 50 ? `${data[2].title.slice(0, 50)}...` : data[2].title}
                        </p>
                        <div className='text-[14px] gap-3 flex mt-3'>
                          <p className='flex items-center gap-2'>
                            <i className='bg-[#FFFFFFE6] p-1 rounded'>
                              <BsCalendar4 className=' text-[#E50914]' />
                            </i>
                            {formattedDate}
                          </p>
                          |
                          <p className="flex gap-2 ">
                            <i className='bg-[#FFFFFFE6] text-[#E50914] p-1 rounded'>
                              <BsEye />
                            </i>
                            846
                          </p>
                        </div>
                      </div>
                      <div className='absolute items-center px-4 top-[20px] rounded-b flex justify-between w-full text-[14px]'>
                        <p className=' p-1 text-white bg-[#E50914] left-2'>{data[2].source.name}</p>
                        <p className='p-2 rounded text-lg text-white bg-[#E50914] flex justify-center items-center'><BsFillLightningFill /></p>
                      </div>
                    </Link >

                  </div>
                  <div className='flex'>

                    <div className='relative w-1/2 h-[217px] pr-2 pt-4 rounded '>
                      <Link className='hover:text-red-500' to={`/products/${data[5].publishedAt}`}>
                        <img className='object-cover w-full rounded h-full' src={data[5].urlToImage} alt="" />
                        <div className='absolute text-[14px] p-[8px] bg-black bg-opacity-30 w-full text-white h-[35%] bottom-0 '>
                          {data[5].title.length > 45 ? `${data[5].title.slice(0, 35)}...` : data[5].title}
                          <div className='text-[10px] gap-3 flex mt-3'>
                            <p className='flex items-center gap-2'>
                              <i className='bg-[#FFFFFFE6] p-1 rounded'>
                                <BsCalendar4 className=' text-[#E50914]' />
                              </i>
                              {formattedDate}
                            </p>
                            |
                            <p className="flex gap-2 ">
                              <i className='bg-[#FFFFFFE6] text-[#E50914] p-1 rounded'>
                                <BsEye />
                              </i>
                              846
                            </p>
                          </div>
                        </div>
                        <div className='absolute items-center px-4 top-[20px] flex justify-between w-full text-[14px]'>
                          <p className=' p-1 text-white bg-[#E50914] left-2'>{data[10].source.name}</p>
                          <p className='p-2 rounded text-lg text-white bg-[#E50914] flex justify-center items-center'><BsFillLightningFill /></p>
                        </div>
                      </Link >
                    </div>
                    <div className='relative pl-2 w-1/2 h-[217px] pt-4 rounded '>
                      <Link className='hover:text-red-500' to={`/products/${data[0].publishedAt}`}>
                        <img className='object-cover w-full rounded h-full' src={data[10].urlToImage} alt="" />
                        <div className='absolute text-[14px] p-[8px] bg-black bg-opacity-30 w-full text-white h-[35%] bottom-0 '>
                          {data[10].title.length > 45 ? `${data[10].title.slice(0, 35)}...` : data[10].title}
                          <div className='text-[10px] gap-3 flex mt-3'>
                            <p className='flex items-center gap-2'>
                              <i className='bg-[#FFFFFFE6] p-1 rounded'>
                                <BsCalendar4 className=' text-[#E50914]' />
                              </i>
                              {formattedDate}
                            </p>
                            |
                            <p className="flex gap-2 ">
                              <i className='bg-[#FFFFFFE6] text-[#E50914] p-1 rounded'>
                                <BsEye />
                              </i>
                              846
                            </p>
                          </div>
                        </div>
                        <div className='absolute items-center px-4 top-[20px] flex justify-between w-full text-[14px]'>
                          <p className=' p-1 text-white bg-[#E50914] left-2'>{data[10].source.name}</p>
                          <p className='p-2 rounded text-lg text-white bg-[#E50914] flex justify-center items-center'><BsFillLightningFill /></p>
                        </div>
                      </Link >
                    </div>

                  </div>
                </>
              ) : (
                <div className='h-full w-full flex justify-center items-center'>Loading...</div>
              )}
            </div>
          </div>
          <div className='container'>


            <Swiper data={data} />
            <SecondSwiper technology={technology} sport={sport} />
            <WorldNews data={data} />
            <ThirdSwiper entertainment={entertainment} business={business} />

          </div>
        </>

      ) : (
        <Loader />
      )}
    </>

  );
}

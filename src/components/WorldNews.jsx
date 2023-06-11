import React from 'react';
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai';
import { BsCalendar4, BsEye, BsFillLightningFill } from 'react-icons/bs';
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';
import Loader from './Loader';
import img from './noimg.jpg' 

import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper.scss';

export default function WorldNews({ data }) {
    //   const handlePrev = () => {
    //     if (swiperRef.current && swiperRef.current.swiper) {
    //       swiperRef.current.swiper.slidePrev();
    //     }
    //   };

    //   const handleNext = () => {
    //     if (swiperRef.current && swiperRef.current.swiper) {
    //       swiperRef.current.swiper.slideNext();
    //     }
    //   };

    const swiperParams = {
        navigation: {
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
        },
        pagination: {
            clickable: true,
        },
        spaceBetween: 0,
        slidesPerView: 1,
        autoplay: {
            delay: 1000,
            disableOnInteraction: true
        },
        loop: true,
    };


    return (
        <div className='container'>
            {data ? (
                <div>
                    <div className='border-b-2 items-center mt-[60px] justify-between text-[20px] flex border-red-500'>
                        <p className='bg-[#E50914] text-white p-3 rounded-t-[10px]'>So‘ngi yangiliklar</p>
                        <div className='flex gap-3'>
                            <button className='w-[30px] flex justify-center swiper-button-prev active:bg-[#E50914] duration-75 items-center h-[30px] text-white bg-black rounded-full'><AiOutlineArrowLeft /></button>
                            <button className='w-[30px] flex justify-center swiper-button-next active:bg-[#E50914] duration-75 items-center h-[30px] text-white bg-black rounded-full'><AiOutlineArrowRight /></button>
                        </div>
                    </div>
                    <div className='my-10 h-[600px] flex'>
                        <Swiper className='pr-2 w-1/2' {...swiperParams}>
                            {data.map((item) => (
                                <SwiperSlide key={item.id}>
                                    <div className='relative w-full rounded h-[400px]'>
                                        <img className='object-cover w-full rounded h-full' src={item.urlToImage ? item.urlToImage : img} alt='' />
                                        <div className='absolute text-[28px] p-[18px] flex flex-col justify-between bg-black bg-opacity-30 w-full text-white h-[30%] bottom-0'>
                                            <Link className='hover:text-red-500' to={`/products/${item.publishedAt}`}>
                                                {item.title.length > 50 ? `${item.title.slice(0, 35)}...` : item.title}
                                            </Link>
                                            <div className='text-[14px] gap-3 flex mt-3'>
                                                <p className='flex items-center gap-2'>
                                                    <p className='bg-[#FFFFFFE6] p-1 rounded'>
                                                        <BsCalendar4 className='text-[#E50914]' />
                                                    </p>
                                                    {dayjs(item.publishedAt).format('DD MMM, YYYY')}
                                                </p>
                                                |
                                                <p className='flex gap-2'>
                                                    <p className='bg-[#FFFFFFE6] text-[#E50914] p-1 rounded'>
                                                        <BsEye />
                                                    </p>
                                                    156
                                                </p>
                                            </div>
                                        </div>
                                        <div className='absolute items-center px-4 top-[20px] flex justify-between w-full text-[14px]'>
                                            <p className='p-1 text-white bg-[#E50914] left-2'>{item.source.name}</p>
                                            <p className='p-2 rounded text-lg text-white bg-[#E50914] flex justify-center items-center'><BsFillLightningFill /></p>
                                        </div>
                                        <div className='mt-[20px]'>
                                            <p>{item.description}</p>
                                            <p className='mt-3'>{item.content}</p>
                                            <div className='text-[14px] gap-3 flex mt-3'>
                                                <p className='flex items-center gap-2'>
                                                    <p className='bg-[#fbbcbce6] p-1 rounded'>
                                                        <BsCalendar4 className='text-[#E50914]' />
                                                    </p>
                                                    {dayjs(item.publishedAt).format('DD MMM, YYYY')}
                                                </p>
                                                |
                                                <p className='flex gap-2'>
                                                    <p className='bg-[#fbbcbce6] text-[#E50914] p-1 rounded'>
                                                        <BsEye />
                                                    </p>
                                                    156
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <div className='w-1/2 pl-2 h-full'>
                        
                                <div className='h-full  flex flex-col justify-between'>

                                    {data?.slice(4,8).map((item, idx) => (
                            
                                            <div key={idx} className='w-full  relative flex  h-[130px]'>

                                                <img className='min-w-[35%] overflow-hidden max-w-[25%] rounded h-full object-cover' src={item.urlToImage ? item.urlToImage : img} alt="" />
                                                <div className='ml-3 rounded pb-0 flex justify-between flex-col items-start text-[18px] font-semibold'>
                                                    <h2>{item.title}</h2>
                                                    <div className='text-[12px] gap-3 flex mt-3'>
                                                        <p className='flex items-center gap-2'>
                                                            <p className='bg-[#fbbcbce6] p-1 rounded'>
                                                                <BsCalendar4 className='text-[#E50914]' />
                                                            </p>
                                                            {item.publishedAt ? dayjs(item.publishedAt).format('DD MMM, YYYY') : 'No time'}
                                                        </p>
                                                        |
                                                        <p className='flex gap-2'>
                                                            <p className='bg-[#fbbcbce6] text-[#E50914] p-1 rounded'>
                                                                <BsEye />
                                                            </p>
                                                            {item.publishedAt.slice(0, 3)}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                      
                                    ))}
                                </div>

                          
                        </div>
                    </div>
                </div>
            ) : (
                <Loader />
            )}
        </div>
    );
}

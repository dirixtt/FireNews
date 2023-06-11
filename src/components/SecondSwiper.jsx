import React, { useEffect, useState } from 'react';
import SwiperCore, { Navigation, Pagination, Scrollbar, Grid, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import { BsCalendar4, BsEye, BsFillLightningFill } from 'react-icons/bs';
import Slider from "react-slick";
import dayjs from 'dayjs';
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai';
import Loader from './Loader';
import { Link } from 'react-router-dom';
import img from './noimg.jpg' 

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export default function SecondSwiper({data2 ,data3}) {

    const swiperRef = React.useRef(null);

    const apiKey = '8e79fb87bdb947f2be52fecea9bfd8f2';
    const handlePrev = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slidePrev();
        }
    };

    const handleNext = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideNext();
        }
    };

    return (
        <div className='container'>
            {data3.length > 0 ? (
                <div className='flex'>
                    <div className='w-1/2 pr-2'>
                        <div className='border-b-2 items-center mt-[60px] justify-between text-[20px] flex border-red-500'>
                            <p className='bg-[#E50914] text-white p-3 rounded-t-[10px]'>Sport</p>
                            <div className='flex gap-3'>
                                <button className='w-[30px] flex justify-center swiper-button-prev active:bg-[#E50914] duration-75 items-center h-[30px] text-white bg-black rounded-full'>
                                    <AiOutlineArrowLeft />
                                </button>
                                <button className='w-[30px] flex justify-center swiper-button-next active:bg-[#E50914] duration-75 items-center h-[30px] text-white bg-black rounded-full'>
                                    <AiOutlineArrowRight />
                                </button>
                            </div>
                        </div>
                        <div>
                            <Swiper
                                className='flex flex-wrap'
                                navigation={false}
                                pagination={{ clickable: true }}
                                scrollbar={{ draggable: true }}
                                spaceBetween={0}
                                slidesPerView={1}
                                loop={true}
                            >
                                {data3.map((item) => (
                                    <SwiperSlide className='w-full overflow-hidden my-5' key={item.id}>
                                        <div className='w-[100%] relative rounded text-[18px]'>
                                            <div className='absolute items-center px-4 top-[20px] rounded-b flex justify-between w-full text-[14px]'>
                                                <p className=' p-1 text-white bg-[#E50914] left-2'>{item.source.name}</p>
                                                <p className='p-2 rounded text-lg text-white bg-[#E50914] flex justify-center items-center'><BsFillLightningFill /></p>
                                            </div>
                                            <img className='h-[400px] overflow-hidden w-full rounded' src={item.urlToImage ? item.urlToImage : img} alt='' />
                                            <div className='absolute bottom-0 bg-black bg-opacity-40 w-full h-[30%] p-[15px] text-white '>
                                                <p className='hover:text-[#E50914] text-xl'>
                                                    {item.title.length > 60 ? `${item.title.slice(0, 100)}...` : item.title}
                                                </p>
                                                <div className='text-[14px] gap-3 flex mt-3'>
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
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                        <div>
                            {data3.slice(4, 8).map((item) => (
                                <div className='w-full flex mt-[20px] h-[130px]'>
                                    <img className='min-w-[35%] max-w-[35%] rounded h-full object-cover' src={item.urlToImage ? item.urlToImage : img} alt="" />
                                    <div className='ml-3 pb-0 flex justify-between flex-col items-start text-[18px] font-semibold'>
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
                    <div className='w-1/2 pl-2'>
                        <div className='border-b-2 items-center mt-[60px] justify-between text-[20px] flex border-red-500'>
                            <p className='bg-[#E50914] text-white p-3 rounded-t-[10px]'>Texnologiya</p>
                            <div className='flex gap-3'>
                                <button onClick={handlePrev} className='w-[30px] flex justify-center swiper-button-prev active:bg-[#E50914] duration-75 items-center h-[30px] text-white bg-black rounded-full'>
                                    <AiOutlineArrowLeft />
                                </button>
                                <button onClick={handleNext} className='w-[30px] flex justify-center swiper-button-next active:bg-[#E50914] duration-75 items-center h-[30px] text-white bg-black rounded-full'>
                                    <AiOutlineArrowRight />
                                </button>
                            </div>
                        </div>
                        <div>
                            <Swiper
                                className='flex  flex-wrap'
                                navigation={false}
                                ref={swiperRef}
                                pagination={{ clickable: true }}
                                scrollbar={{ draggable: true }}
                                spaceBetween={0}
                                slidesPerView={1}
                                loop={true}
                                autoplay={
                                    {
                                        delay: 1100

                                    }
                                }
                            >
                                {data2.map((item) => (
                                    <SwiperSlide className='w-full overflow-hidden my-5' key={item.id}>
                                        <div className='w-[100%] relative rounded text-[18px]'>
                                            <div className='absolute items-center px-4 top-[20px] rounded-b flex justify-between w-full text-[14px]'>
                                                <p className=' p-1 text-white bg-[#E50914] left-2'>{item.source.name}</p>
                                                <p className='p-2 rounded text-lg text-white bg-[#E50914] flex justify-center items-center'><BsFillLightningFill /></p>
                                            </div>
                                            <img className='h-[400px] w-full rounded' src={item.urlToImage ? item.urlToImage : img} alt='' />
                                            <div className='absolute bottom-0 bg-black bg-opacity-40 w-full h-[30%] p-[15px] text-white '>
                                                <p className='hover:text-[#E50914] text-xl'>
                                                    {item.title.length > 60 ? `${item.title.slice(0, 100)}...` : item.title}
                                                </p>
                                                <div className='text-[14px] gap-3 flex mt-3'>
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
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                        <div className='h-[500px] flex-wrap second bg-opacity-25'>
                            {/* <Swiper
                                className='h-full'
                                pagination={{ clickable: true }}
                                navigation={true}
                                slidesPerView={4}
                                spaceBetween={0}
                                loop={true}
                                // grid={{
                                //     columns: 1,
                                //     rows: 4,

                                // }}
                                autoplay={{ delay: 1100 }}
                            > */}
                            <div className=''>
                                {data2?.slice(4, 8).map((item) => (
                                    <Link to={`/products/${item.publishedAt}`}>

                                        <div className="relative mt-[20px] flex  h-[130px]">
                                            <img
                                                className="min-w-[35%] overflow-hidden max-w-[25%] rounded h-full object-cover"
                                                src={item.urlToImage ? item.urlToImage : img}
                                                alt=""
                                            />
                                            <div className="ml-3 rounded pb-0 flex justify-between flex-col items-start text-[18px] font-semibold">
                                                <h2>{item.title}</h2>
                                                <div className="text-[12px] gap-3 flex mt-3">
                                                    <p className="flex items-center gap-2">
                                                        <span className="bg-[#fbbcbce6] p-1 rounded">
                                                            <BsCalendar4 className="text-[#E50914]" />
                                                        </span>
                                                        {item.publishedAt
                                                            ? dayjs(item.publishedAt).format('DD MMM, YYYY')
                                                            : 'No time'}
                                                    </p>
                                                    |
                                                    <p className="flex gap-2">
                                                        <span className="bg-[#fbbcbce6] text-[#E50914] p-1 rounded">
                                                            <BsEye />
                                                        </span>
                                                        {item.publishedAt.slice(0, 3)}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>


                                ))}
                            </div>
                            {/* </Swiper>/ */}
                        </div>
                    </div>
                </div>

            ) : (
                <Loader />
            )
            }
        </div >
    );
}

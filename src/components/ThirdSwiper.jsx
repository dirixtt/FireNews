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

export default function ThirdSwiper({
    data4,
    data5
}) {
    const swiperRef = React.useRef(null);


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
        <div>  <div className='w-1/2 pl-2'>
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
                    {data4?.slice(4, 8).map((item) => (
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
    )
}

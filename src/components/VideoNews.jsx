import React from 'react';
import dayjs from 'dayjs';
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai';
import img from './noimg.jpg' 
import { BsCalendar4, BsEye } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { useRef } from 'react';
import data from '../Data'
// Install the necessary Swiper components

const VideoNews = () => {
  const sliderRef = useRef(null);
    const handlePrev = () => {
        sliderRef.current.slickPrev(); // Use slickPrev() instead of slickNext()
    };

    const handleNext = () => {
        sliderRef.current.slickNext();
    };

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    rows: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          rows: 1 ,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          rows: 1 ,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className='container'>
      <div className='border-b-2 items-center mt-[60px] justify-between text-[20px] flex border-red-500'>
        <p className='bg-[#E50914] text-white p-3 rounded-t-[10px]'>Video news</p>
        <div className='flex gap-3'>
          <button onClick={handlePrev} className='w-[30px] flex justify-center swiper-button-prev active:bg-[#E50914] duration-75 items-center h-[30px] text-white bg-black rounded-full'><AiOutlineArrowLeft /></button>
          <button onClick={handleNext} className='w-[30px] flex justify-center swiper-button-next active:bg-[#E50914] duration-75 items-center h-[30px] text-white bg-black rounded-full'><AiOutlineArrowRight /></button>
        </div>
      </div>
      <Slider
      ref={sliderRef}
        {...settings}
      >
        {data.map((item, idx) => (
          <div  key={idx}>
            <div className='xl:w-[300px] w-full p-4 text-[18px]'>
              <img className='h-[200px] object-cover w-full rounded' src={item.urlToImage ? item.urlToImage : img} alt="" />
              <div className='absolute items-center px-4 top-[20px] flex justify-between w-full text-[14px]'>
                <p className='p-1 mt-1 text-white bg-[#E50914] left-2'>{item.category}</p>
  
              </div>
              <Link to={`/products/${item.id}`}>
                <p className='hover:text-[#E50914]'>
                  {item.title.length > 50 ? `${item.title.slice(0, 50)}...` : item.title}
                </p>
              </Link>
              <div className='text-[14px] gap-3 flex mt-3'>
                <p className='flex items-center gap-2'>
                  <i className='bg-[#fbbcbce6] p-1 rounded'>
                    <BsCalendar4 className='text-[#E50914]' />
                  </i>
                  {item.publishedAt ? dayjs(item.publishedAt).format("DD MMM, YYYY") : "No time"}
                </p>
                |
                <p className="flex gap-2">
                  <i className='bg-[#fbbcbce6] text-[#E50914] p-1 rounded'>
                    <BsEye />
                  </i>
                  {item.publishedAt.slice(0, 3)}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <div className='bg-black text-2xl w-full justify-around flex text-white'>
      </div>
    </div>
  );
};

export default VideoNews;

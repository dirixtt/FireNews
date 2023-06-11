import React from 'react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import dayjs from 'dayjs';
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai';
import img from './noimg.jpg' 
import { BsCalendar4, BsEye } from 'react-icons/bs';
import { Link } from 'react-router-dom';

// Install the necessary Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const Swiperr = ({ data }) => {
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
    <>
      <div className='border-b-2 items-center mt-[60px] justify-between text-[20px] flex border-red-500'>
        <p className='bg-[#E50914] text-white p-3 rounded-t-[10px]'>So‘ngi yangiliklar</p>
        <div className='flex gap-3'>
          <button onClick={handlePrev} className='w-[30px] flex justify-center swiper-button-prev active:bg-[#E50914] duration-75 items-center h-[30px] text-white bg-black rounded-full'><AiOutlineArrowLeft /></button>
          <button onClick={handleNext} className='w-[30px] flex justify-center swiper-button-next active:bg-[#E50914] duration-75 items-center h-[30px] text-white bg-black rounded-full'><AiOutlineArrowRight /></button>
        </div>
      </div>
      <Swiper
        ref={swiperRef}
        className='flex flex-wrap'
        navigation={false}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        spaceBetween={0}
        slidesPerView={4}
        grid={{ rows: 2, columns: 4 }}
        loop={true}
      >
        {data.map((item) => (
          <SwiperSlide className='' key={item.id}>
            <div className='w-[330px] p-4 text-[18px]'>
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
          </SwiperSlide>
        ))}
      </Swiper>
      <div className='bg-black text-2xl w-full justify-around flex text-white'>
      </div>
    </>
  );
};

export default Swiperr;

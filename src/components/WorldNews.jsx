import React from 'react';
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai';
import { BsCalendar4, BsEye, BsFillLightningFill } from 'react-icons/bs';
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';
import Loader from './Loader';
import img from './noimg.jpg'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useRef } from 'react';
// import 'swiper/swiper.scss';

export default function WorldNews({ data }) {
    const sliderRef = useRef(null);
    const handlePrev = () => {
        sliderRef.current.slickPrev(); // Use slickPrev() instead of slickNext()
    };

    const handleNext = () => {
        sliderRef.current.slickNext();
    };

    const settings2 = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 3,
        vertical: true,
        verticalSwiping: true,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        rows: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };


    return (
        <div className=''>
            {data ? (
                <div>
                    <div className='border-b-2 items-center mt-[60px] justify-between text-[20px] flex border-red-500'>
                        <p className='bg-[#E50914] text-white p-3 rounded-t-[10px]'>
                            <Link to="/worldnews">
                                Dunyo yangiliklari
                            </Link>
                        </p>
                        <div className='flex gap-3'>
                            <button onClick={handlePrev} className='w-[30px] flex justify-center active:bg-[#E50914] duration-75 items-center h-[30px] text-white bg-black rounded-full'><AiOutlineArrowLeft /></button>
                            <button onClick={handleNext} className='w-[30px] flex justify-center active:bg-[#E50914] duration-75 items-center h-[30px] text-white bg-black rounded-full'><AiOutlineArrowRight /></button>
                        </div>
                    </div>
                    <div className='my-10  flex-col xl:flex'>
                        <Slider ref={sliderRef} className='pr-2 w-full xl:w-1/2' {...settings}>
                            {data.map((item, idx) => (
                                <div key={idx}>
                                    <div className='relative w-full rounded md:h-[400px] h-[300px]'>
                                        <Link to={`/products/${item.publishedAt}`}>

                                            <img className='object-cover w-full rounded h-full' src={item.urlToImage ? item.urlToImage : img} alt='' />
                                            <div className='absolute text-[18px] md:text-[28px] p-[18px] flex flex-col justify-between  bg-black bg-opacity-30 w-full text-white h-[30%] bottom-0'>
                                                <p className="hover:text-red-500 ">

                                                    {item.title.length > 50 ? `${item.title.slice(0, 35)}...` : item.title}
                                                </p>
                                                <div className='text-[14px] gap-3 flex mt-3'>
                                                    <p className='flex items-center gap-2'>
                                                        <i className='bg-[#FFFFFFE6] p-1 rounded'>
                                                            <BsCalendar4 className='text-[#E50914]' />
                                                        </i>
                                                        {dayjs(item.publishedAt).format('DD MMM, YYYY')}
                                                    </p>
                                                    |
                                                    <p className='flex gap-2'>
                                                        <i className='bg-[#FFFFFFE6] text-[#E50914] p-1 rounded'>
                                                            <BsEye />
                                                        </i>
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
                                                        <i className='bg-[#fbbcbce6] p-1 rounded'>
                                                            <BsCalendar4 className='text-[#E50914]' />
                                                        </i>
                                                        {dayjs(item.publishedAt).format('DD MMM, YYYY')}
                                                    </p>
                                                    |
                                                    <p className='flex gap-2'>
                                                        <i className='bg-[#fbbcbce6] text-[#E50914] p-1 rounded'>
                                                            <BsEye />
                                                        </i>
                                                        156
                                                    </p>
                                                </div>
                                            </div>

                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                        <div className='w-full xl:w-1/2 hidden md:block pl-2 h-full'>

                            <div className='h-auto  flex flex-col justify-between'>
                                <Slider className='pr-2  beFlex ' {...settings2}>
                                    {data.map((item, idx) => (
                                        <div className=" mb-[20px] flex h-[130px]">

                                            <img
                                                className="min-w-[35%] overflow-hidden max-w-[35%] rounded h-full object-cover"
                                                src={item.urlToImage ? item.urlToImage : img}
                                                alt=""
                                            />
                                            <div className="ml-3 static rounded pb-0 flex justify-between flex-col items-start text-[18px] font-semibold">
                                                <Link key={idx} className='hover:text-[#E50914]' to={`/products/${item.publishedAt}`}>

                                                    <h2 className=''>{item.title}</h2>
                                                </Link>

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

                                    ))}
                                </Slider>
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

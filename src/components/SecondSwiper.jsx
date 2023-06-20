import React from 'react';

import { BsCalendar4, BsEye, BsFillLightningFill } from 'react-icons/bs';
import dayjs from 'dayjs';

import Loader from './Loader';
import { Link } from 'react-router-dom';
import img from './noimg.jpg'
import Slider from 'react-slick';
import '../App.css'


export default function SecondSwiper({ sport, technology }) {


    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
        appendDots: (dots) => {
            const visibleDots = dots.slice(-4); // Ограничиваем видимость только 4 точками

            return (
                <div
                    style={{
                        position: "absolute",
                        top: "-50px",
                        // width: "30%",
                        right: "0px",
                        paddingLeft: "10px",
                        paddingTop: "10px",
                        display: "flex ",
                        justifyContent: "end"
                    }}
                >
                    <ul style={{ margin: "0px" }}>{visibleDots}</ul>
                </div>
            );
        },
        customPaging: () => (
            <div
                style={{
                    width: "15px",
                    height: "15px",
                    borderRadius: "50%",
                    background: "rgba(0, 0, 0, 0.5)",
                    margin: "5px",
                }}
            ></div>
        ),
    };








    return (
        <div className=''>
            {technology && sport?.length > 0 ? (
                <div className='flex justify-between'>
                    <div className='xl:w-[49.5%] w-full pr-2 relative'>
                        <div className='border-b-2 items-center mt-[60px] justify-between text-[20px] flex border-red-500'>
                            <p className='bg-[#E50914] text-white py-3 px-5 rounded-t-[10px]'>
                                <Link to="/sport">
                                    Sport
                                </Link>
                            </p>
                            <div className='flex gap-3'>

                            </div>
                        </div>
                        <div>
                            <Slider {...settings}>
                                {sport.map((item, idx) => (
                                    <div key={idx} className='w-full overflow-hidden my-5'>
                                        <div className='w-[100%] relative rounded text-[18px]'>
                                            <div className='absolute items-center px-4 top-[20px] rounded-b flex justify-between w-full text-[14px]'>
                                                <p className=' p-1 text-white bg-[#E50914] left-2'>{item.category}</p>
                                                <p className='p-2 rounded text-lg text-white bg-[#E50914] flex justify-center items-center'><BsFillLightningFill /></p>
                                            </div>
                                            <img className='xl:h-[400px] h-[300px] object-cover overflow-hidden w-full rounded' src={item.urlToImage ? item.urlToImage : img} alt='' />
                                            <div className='absolute bottom-0 bg-black bg-opacity-40 w-full h-[30%] p-[15px] text-white '>
                                                <p className='hover:text-[#E50914] duration-200 text-[13px] xl:text-xl'>
                                                    <Link to={`/products/${item.id}`}>
                                                        {item.title.length > 60 ? `${item.title.slice(0, 88)}...` : item.title}
                                                    </Link>

                                                </p>
                                                <div className='text-[14px] gap-3 flex mt-3'>
                                                    <p className='flex items-center gap-2'>
                                                        <i className='bg-[#fbbcbce6]  p-1 rounded'>
                                                            <BsCalendar4 className='font-bold text-[#E50914]' />
                                                        </i>
                                                        {item.publishedAt ? dayjs(item.publishedAt).format('DD MMM, YYYY') : 'No time'}
                                                    </p>
                                                    |
                                                    <p className='flex gap-2'>
                                                        <i className='bg-[#fbbcbce6] text-[#E50914] p-1 rounded'>
                                                            <BsEye />
                                                        </i>
                                                        {item.publishedAt.slice(0, 3)}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                        <div>
                            <div className='beFlex'  >

                                {sport.slice(0, 5).map((item, idx) => (
                                    <div key={idx} className=" mt-[20px] flex h-[130px]">

                                        <img
                                            className="min-w-[35%] overflow-hidden max-w-[35%] rounded h-full object-cover"
                                            src={item.urlToImage ? item.urlToImage : img}
                                            alt=""
                                        />
                                        <div className="ml-3 static rounded pb-0 flex justify-between flex-col items-start text-[18px] font-semibold">
                                            <Link key={idx} className='hover:text-[#E50914] duration-200' to={`/products/${item.id}`}>

                                                <h2 className=''>{item.title}</h2>
                                            </Link>

                                            <div className="text-[12px] gap-3 flex mt-3">
                                                <p className="flex items-center gap-2">
                                                    <span className="bg-[#fbbcbce6] p-1 rounded">
                                                        <BsCalendar4 className="text-[#E50914] " />
                                                    </span>
                                                    <span className='text-opacity-50 text-black font-bold'>

                                                        {item.publishedAt
                                                            ? dayjs(item.publishedAt).format('DD MMM, YYYY')
                                                            : 'No time'}
                                                    </span>
                                                </p>
                                                |
                                                <p className="flex gap-2">
                                                    <span className="bg-[#fbbcbce6] text-[#E50914] p-1 rounded">
                                                        <BsEye />
                                                    </span>
                                                    <span className='text-opacity-60 text-black font-bold'>

                                                        {item.publishedAt.slice(0, 3)}
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                ))}

                            </div>
                        </div>
                    </div>
                    <div className='w-[49.5%] hidden xl:block pr-2 relative'>
                        <div className='border-b-2 items-center mt-[60px] justify-between text-[20px] flex border-red-500'>
                            <p className='bg-[#E50914] text-white py-3 px-5 rounded-t-[10px]'>
                                <Link to='/technology'>
                                    Technology
                                </Link>
                            </p>
                            <div className='flex gap-3'>

                            </div>
                        </div>
                        <div>
                            <Slider {...settings}>
                                {technology.map((item, idx) => (
                                    <div key={idx} className='w-full overflow-hidden my-5'>
                                        <div className='w-[100%] relative rounded text-[18px]'>
                                            <div className='absolute items-center px-4 top-[20px] rounded-b flex justify-between w-full text-[14px]'>
                                                <p className=' p-1 text-white bg-[#E50914] left-2'>{item.category}</p>
                                                <p className='p-2 rounded text-lg text-white bg-[#E50914] flex justify-center items-center'><BsFillLightningFill /></p>
                                            </div>
                                            <img className='h-[400px] object-cover overflow-hidden w-full rounded' src={item.urlToImage ? item.urlToImage : img} alt='' />
                                            <div className='absolute bottom-0 bg-black bg-opacity-40 w-full h-[30%] p-[15px] text-white '>
                                                <p className='hover:text-[#E50914] duration-200 text-xl'>
                                                    <Link to={`/products/${item.id}`}>
                                                        {item.title.length > 60 ? `${item.title.slice(0, 100)}...` : item.title}
                                                    </Link>

                                                </p>
                                                <div className='text-[14px] gap-3 flex mt-3'>
                                                    <p className='flex items-center gap-2'>
                                                        <i className='bg-[#fbbcbce6] p-1 rounded'>
                                                            <BsCalendar4 className='text-[#E50914]' />
                                                        </i>
                                                        {item.publishedAt ? dayjs(item.publishedAt).format('DD MMM, YYYY') : 'No time'}
                                                    </p>
                                                    |
                                                    <p className='flex gap-2'>
                                                        <i className='bg-[#fbbcbce6] text-[#E50914] p-1 rounded'>
                                                            <BsEye />
                                                        </i>
                                                        {item.publishedAt.slice(0, 3)}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                        <div>
                            <div className='beFlex'  >

                                {technology.slice(0, 5).map((item, idx) => (
                                    <div key={idx} className=" mt-[20px] flex h-[130px]">

                                        <img
                                            className="min-w-[35%] overflow-hidden max-w-[35%] rounded h-full object-cover"
                                            src={item.urlToImage ? item.urlToImage : img}
                                            alt=""
                                        />
                                        <div className="ml-3 static rounded pb-0 flex justify-between flex-col items-start text-[18px] font-semibold">
                                            <Link key={idx} className='hover:text-[#E50914] duration-200' to={`/products/${item.id}`}>

                                                <h2 className=''>{item.title}</h2>
                                            </Link>

                                            <div className="text-[12px] gap-3 flex mt-3">
                                                <p className="flex items-center gap-2">
                                                    <span className="bg-[#fbbcbce6] p-1 rounded">
                                                        <BsCalendar4 className="text-[#E50914] " />
                                                    </span>
                                                    <span className='text-opacity-60 text-black font-bold'>

                                                        {item.publishedAt
                                                            ? dayjs(item.publishedAt).format('DD MMM, YYYY')
                                                            : 'No time'}
                                                    </span>
                                                </p>
                                                |
                                                <p className="flex gap-2">
                                                    <span className="bg-[#fbbcbce6] text-[#E50914] p-1 rounded">
                                                        <BsEye />
                                                    </span>
                                                    <span className='text-opacity-60 text-black font-bold'>

                                                        {item.publishedAt.slice(0, 3)}
                                                    </span>
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
            )
            }
        </div >
    );
}

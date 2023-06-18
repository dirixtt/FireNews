import React from 'react';
import 'swiper/swiper.min.css';
import { BsCalendar4, BsEye } from 'react-icons/bs';
import dayjs from 'dayjs';
import Loader from './Loader';
import { Link } from 'react-router-dom';
import img from './noimg.jpg'
import Slider from 'react-slick';

export default function ThirdSwiper({
    entertainment,
    business
}) {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        rows: 4,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 4000,
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
                        width: "30%",
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
        <div className='hidden md:block'>
            {business.length && entertainment.length ? (
                <div className=' flex-col xl:flex-row flex justify-between'>
                    <div className='w-full xl:w-[49.5%] pl-2'>
                        <div className='border-b-2 items-center mt-[60px] justify-between text-[20px] flex border-red-500'>
                            <p className='bg-[#E50914] text-white p-3 rounded-t-[10px]'>
                                <Link to='/business'>
                                Business
                                </Link>
                                </p>
                            <div className='flex gap-3'>

                            </div>
                        </div>

                        <div className=' flex-wrap second bg-opacity-25'>
                            <Slider className='beFlex'
                                {...settings}
                            >
                                {business?.map((item, idx) => (
                                    <div key={idx}>

                                        <div className="relative mt-[20px] flex  h-[130px]">
                                            <img
                                                className="min-w-[35%] overflow-hidden max-w-[25%] rounded h-full object-cover"
                                                src={item.urlToImage ? item.urlToImage : img}
                                                alt=""
                                            />
                                            <div className="ml-3 rounded pb-0 flex justify-between flex-col items-start text-[18px] font-semibold">
                                                <Link className='hover:text-[#E50914]' to={`/products/${item.id}`}>

                                                    <h2>{item.title}</h2>
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
                                    </div>

                                ))}
                            </Slider>
                        </div>
                    </div>
                    <div className='w-full xl:w-[49.5%] pl-2'>
                        <div className='border-b-2 items-center mt-[60px] justify-between text-[20px] flex border-red-500'>
                            
                            <p className='bg-[#E50914] text-white p-3 rounded-t-[10px]'>
                                <Link to='/society'>
                                Society
                                </Link>
                            

                                </p>
                            <div className='flex gap-3'>

                            </div>
                        </div>

                        <div className=' flex-wrap second bg-opacity-25'>
                            <Slider className='beFlex'
                                {...settings}
                            >
                                {entertainment?.map((item, idx) => (
                                    <div key={idx}>

                                        <div className="relative mt-[20px] flex  h-[130px]">
                                            <img
                                                className="min-w-[35%] overflow-hidden max-w-[25%] rounded h-full object-cover"
                                                src={item.urlToImage ? item.urlToImage : img}
                                                alt=""
                                            />
                                            <div className="ml-3 rounded pb-0 flex justify-between flex-col items-start text-[18px] font-semibold">
                                                <Link className='hover:text-[#E50914]' to={`/products/${item.id}`}>

                                                    <h2>{item.title}</h2>
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
                                    </div>

                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>

            ) : (<Loader />)}

        </div>
    )
}

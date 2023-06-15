import React from 'react';
import 'swiper/swiper.min.css';
import { BsCalendar4, BsEye } from 'react-icons/bs';
import { VscDebugRestart } from 'react-icons/vsc';
import dayjs from 'dayjs';
import Loader from './Loader';
import { Link } from 'react-router-dom';
import img from './noimg.jpg'
import { useState } from 'react';

export default function ShowMore({ data }) {
    const [show, setShow] = useState(false)
    return (
        <div className='md:pt-14 pt-10 md:container flex justify-center items-center'>
            {data.length > 0 ? (<div>
                <button className={`${show ? "hidden" : "flex"} bg-[#E50914] but items-center gap-1 text-white px-3 py-2 rounded`} onClick={() => setShow(true)}><VscDebugRestart className='icon'/>Ko‘proq yangilik</button>                   
                <div>
                    <div className={` flex-wrap ${show ? "flex" : "hidden"}`}>
                        {data?.map((item,idx) => (
                            <Link key={idx} className='md:w-1/2 w-full p-5' to={`/products/${item.publishedAt}`}>

                                <div className="relative  w-full flex  h-[130px]">
                                    <img
                                        className="min-w-[35%] border-2 overflow-hidden max-w-[25%] rounded h-full object-cover"
                                        src={item.urlToImage ? item.urlToImage : img}
                                        alt=""
                                    />
                                    <div className="ml-3 rounded pb-0 flex justify-between flex-col items-start text-[16px] md:text-[18px] font-semibold">
                                        <h2 className='hover:text-red-500'>{item.title}</h2>
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
                </div>
            </div>) : (<Loader />)}
        </div>
    )
}

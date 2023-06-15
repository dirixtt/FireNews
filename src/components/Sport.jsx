import React from 'react';
import dayjs from 'dayjs';
import { BsCalendar4, BsEye, BsFillLightningFill } from 'react-icons/bs';
import img from './noimg.jpg'
import { Link } from 'react-router-dom';
import Loader from './Loader';

export default function Sport({ sport }) {
    console.log(sport)
    return (

        <div>
            {sport.length > 0 ? (
                <div className='my-10 container'>
                    <>
                        <div className='mb-10'>
                            <div className=' text-black text-opacity-50 gap-1 my-[23px] text-[14px] flex'>

                                <Link to="/">Uy</Link>/<Link className='text-[#E50914]' to="/sport">Sport</Link>
                            </div>
                            <div className='w-full border-b border-[#E50914]'>
                                <p className='text-[#E50914]  flex items-center text-[24px] font-semibold  pb-[10px] gap-2'>Sport</p>
                            </div>
                        </div>
                        <div className='flex justify-between'>
                            <div className='relative w-full xl:w-[49.5%] h-auto xl:h-[400px] rounded '>
                                <img className='object-cover w-full rounded h-[250px]' src={sport[2].urlToImage} alt="" />
                                <div className='absolute text-[14px] md:text-[18px] p-[8px] bg-black bg-opacity-30 w-full text-white h-[35%] bottom-0 '>
                                    <Link className='hover:text-red-500' to={`/products/${sport[2].publishedAt}`}>
                                        {sport[2].title}
                                    </Link >
                                    <div className='text-[14px] gap-3 flex mt-3'>
                                        <p className='flex items-center gap-2'>
                                            <i className='bg-[#FFFFFFE6] p-1 rounded'>
                                                <BsCalendar4 className=' text-[#E50914]' />
                                            </i>
                                            {dayjs(sport[2].publishedAt).format("DD MMM, YYYY")}
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
                                    <p className=' p-1 text-white bg-[#E50914] left-2'>{sport[2].source.name}</p>
                                    <p className='p-2 rounded text-lg text-white bg-[#E50914] flex justify-center items-center'><BsFillLightningFill /></p>
                                </div>
                            </div>
                            <div className='relative hidden xl:flex w-[49.5%] h-[400px] rounded '>
                                <img className='object-cover w-full rounded h-full' src={sport[10].urlToImage} alt="" />
                                <div className='absolute text-[18px] p-[8px] bg-black bg-opacity-30 w-full text-white h-[30%] bottom-0 '>
                                    <Link className='hover:text-red-500' to={`/products/${sport[10].publishedAt}`}>
                                        {sport[10].title}
                                    </Link >
                                    <div className='text-[14px] gap-3 flex mt-3'>
                                        <p className='flex items-center gap-2'>
                                            <p className='bg-[#FFFFFFE6] p-1 rounded'>
                                                <BsCalendar4 className=' text-[#E50914]' />
                                            </p>
                                            {dayjs(sport[10].publishedAt).format("DD MMM, YYYY")}
                                        </p>
                                        |
                                        <p className="flex gap-2 ">
                                            <p className='bg-[#FFFFFFE6] text-[#E50914] p-1 rounded'>
                                                <BsEye />
                                            </p>
                                            846
                                        </p>
                                    </div>
                                </div>
                                <div className='absolute items-center px-4 top-[20px] rounded-b flex justify-between w-full text-[14px]'>
                                    <p className=' p-1 text-white bg-[#E50914] left-2'>{sport[10].source.name}</p>
                                    <p className='p-2 rounded text-lg text-white bg-[#E50914] flex justify-center items-center'><BsFillLightningFill /></p>
                                </div>
                            </div>
                        </div>
                        <div className='relative gap-3 mt-10  flex w-full justify-between flex-wrap'>
                            {sport?.map((item, idx) => (
                                <div key={idx} className='w-full xl:w-[49%] flex mt-[20px] h-[130px]'>
                                    <img className='min-w-[35%] max-w-[35%] rounded h-full object-cover' src={item.urlToImage ? item.urlToImage : img} alt="" />
                                    <div className='ml-3 pb-0 flex justify-between flex-col items-start text-[18px] font-semibold'>
                                        <Link className='hover:text-red-500 xl:text-xl text-sm' to={`/products/${item.publishedAt}`}>
                                            <h2>{item.title}</h2>
                                        </Link>
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
                    </>

                </div>) : (<Loader />)}

        </div>
    )
}

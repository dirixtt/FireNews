import React from 'react';
import dayjs from 'dayjs';
import img from '../components/noimg.jpg'
import { BsCalendar4, BsEye } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Loader from '../components/Loader';
export default function Search({ filteredProducts }) {
    return (
        <>
            {
                filteredProducts.length > 0 ? (<div className='relative my-10 gap-3 container flex flex-wrap'>
                    {filteredProducts.map((item, idx) => (
                        <div className='relative mb-10' key={idx}>
                            <Link className='hover:text-red-500' to={`/products/${item.publishedAt}`}>

                                <div className='md:w-[270px] w-full  text-[18px]'>
                                    <img className='h-[200px] object-cover w-full rounded' src={item.urlToImage ? item.urlToImage : img} alt="" />
                                    <div className='absolute items-center px-4 top-[20px] flex justify-between w-full text-[14px]'>
                                        <p className='p-1 mt-1 text-white bg-[#E50914] left-2'>{item.source.name}</p>

                                    </div>
                                    <p className='hover:text-[#E50914]'>
                                        {item.title.length > 50 ? `${item.title.slice(0, 50)}...` : item.title}
                                    </p>
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
                            </Link>

                        </div>
                    ))}
                </div>) : (<Loader />)
            }
        </>


    )
}

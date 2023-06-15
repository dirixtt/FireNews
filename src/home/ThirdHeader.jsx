import React from 'react'
import { NavLink } from 'react-router-dom'
import { AiFillFire, AiFillHeart, AiFillEye } from 'react-icons/ai'
import { BsLightningFill } from 'react-icons/bs'
import '../App.css'

export default function ThirdHeader() {
    const style = `hover:text-[#E50914]  text-[15px] border-b-black border-opacity-25 border-b border-r border-r-black border-opacity-25  flex-col py-2 px-2 md:py-5 items-center justify-center md:justify-between h-full flex`
    return (

        <div className='w-full container flex justify-center items-center'>
            <ul className='flex w-[85%] md:w-1/2 text-black justify-center items-center flex-col md:flex-row md:h-[80px] h-[150px] font-semibold text-opacity-50 border-white mt-5 '>
                <div className=' flex w-full items-center justify-center md:h-full h-[60px]'>

                    <NavLink to="/firenews" className={(navClass) =>
                        navClass.isActive
                            ? "text-[#E50914]  md:w-auto w-1/2"
                            : "w-1/2 h-full md:w-full"
                    }>
                        <li className={style}><AiFillFire /> Olovli Yangiliklar</li>
                    </NavLink>
                    <NavLink to="/famousnews" className={(navClass) =>
                        navClass.isActive
                        ? "text-[#E50914]  md:w-auto w-1/2"
                        : "w-1/2 h-full md:w-full"}>
                        <li className={`${style} border-b border-r-0 md:border-r`}><AiFillHeart /> Eng mashhur</li>
                    </NavLink>
                </div>
                <div className=' flex w-full items-center justify-center md:h-full h-[60px] mt-5 md:m-0'>

                    <NavLink to="/trendnews" className={(navClass) =>
                        navClass.isActive
                        ? "text-[#E50914]  md:w-auto w-1/2"
                        : "w-1/2 h-full md:w-full"} activeclassname="text-red-500">
                        <li className={style}><BsLightningFill /> Trend yangiliklar</li>
                    </NavLink>
                    <NavLink to="/mostviewednews" className={(navClass) =>
                        navClass.isActive
                        ? "text-[#E50914]  md:w-auto w-1/2"
                        : "w-1/2 h-full md:w-full"}>
                        <li className={`${style} border-b border-r-0`}><AiFillEye /> Eng ko‘p ko‘rilgan</li>
                    </NavLink>
                </div>

            </ul>
        </div >

    )
}

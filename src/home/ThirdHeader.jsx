import React from 'react'
import { NavLink } from 'react-router-dom'
import { AiFillFire, AiFillHeart, AiFillEye } from 'react-icons/ai'
import { BsLightningFill } from 'react-icons/bs'
import '../App.css'

export default function ThirdHeader() {
    const style = `hover:text-[#E50914] border-r border-r-black border-opacity-25 px-8 py-4 flex-col items-center justify-between h-full flex`
    return (

        <div className='w-full flex justify-center items-center'>
            <ul className='flex border text-black font-semibold text-opacity-50 border-white mt-5 h-[80px] border-b-black border-opacity-25 items-center'>
                <NavLink to="/firenews" className={(navClass) =>
                    navClass.isActive
                        ? "text-[#E50914]"
                        : ""
                }>
                    <li className={style}><AiFillFire /> Olovli Yangiliklar</li>
                </NavLink>
                <NavLink to="/" className={(navClass) =>
                    navClass.isActive
                        ? "text-[#E50914]"
                        : ""}>
                    <li className={style}><AiFillHeart /> Eng mashhur</li>
                </NavLink>
                <NavLink to="/trendnews" className={(navClass) =>
                    navClass.isActive
                        ? "text-[#E50914]"
                        : ""} activeClassName="text-red-500">
                    <li className={style}><BsLightningFill /> Trend yangiliklar</li>
                </NavLink>
                <NavLink to="/mostviewednews" className={(navClass) =>
                    navClass.isActive
                        ? "text-[#E50914]"
                        : ""}>
                    <li className={`${style} border-none`}><AiFillEye /> Eng ko‘p tomosha qilingan</li>
                </NavLink>
            </ul>
        </div>

    )
}

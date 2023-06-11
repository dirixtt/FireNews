import React, { useState } from 'react'
import img from '../img/2oqi 1.png'
import { BsChevronDown } from 'react-icons/bs'
import { FiSearch } from 'react-icons/fi'
export default function SecondHeader({setSelectedLan,selectedLan,fetchData}) {
    const [open, isOpen] = useState(false)
    const lan = ["ar", 'de', 'en', 'es', 'fr', 'he', 'it', 'nl', 'no', 'pt', 'ru', 'sv', 'ud', 'zh']

    const onChange = (event) => {
        setSelectedLan(event.target.value);
        isOpen(false)
        fetchData()
    }
    return (
        <div className='h-[103px] bg-[#E50914]'>
            <div className='container flex justify-between items-center h-full'>
                <div className='flex items-center h-full'>
                    <img src={img} alt="img" />
                    <div className='ml-[40px] text-[20px]'>
                        <ul className='flex text-white gap-5'>
                            <li className='flex items-center gap-2'>Dunyo yangiliklari <BsChevronDown /></li>
                            <li>Iqtisodiyot</li>
                            <li>Jamiyat</li>
                            <li>Sport</li>
                            <li>Texnologiya</li>
                            <li className='flex items-center gap-2'>Viloyatlar <BsChevronDown /></li>
                        </ul>
                    </div>
                </div>
                <div className='flex gap-4 text-white items-center'>
                    <FiSearch />
                    <div className='flex text-xl  relative gap-2 items-center'>

                        <button onClick={() => isOpen(!open)}>{selectedLan}</button><BsChevronDown />
                        <div className={`${open ? "block duration-700" : "hidden"} overflow-x-auto h-[130px] absolute rounded bg-white drop-shadow-lg -right-1 top-7`}>
                            {lan.map((item, i) => {
                                return <div key={i} className=" px-[5px] py-1 flex flex-col justify-center items-center  text-black w-[65px]">
                                    <button className='w-full rounded  p-1 active:bg-[#E50914] hover:bg-[#E5091433]' onClick={onChange} value={item}>
                                        {item}
                                    </button>
                                </div>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

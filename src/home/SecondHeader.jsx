import React, { useState, useRef } from 'react';
import img from '../img/2oqi 1.png';
import { BsChevronDown, BsXCircle } from 'react-icons/bs';
import { FiSearch, FiMenu } from 'react-icons/fi';
import { Link, NavLink } from 'react-router-dom';

import MiniSwiper from './MiniSwiper';
import Burger from '../components/Burger';

function SecondHeader({ selectedLan, handleSearch, searchTerm, setCountry,country, data, fetchData }) {
  const [open, isOpen] = useState(false);
  const [openBurger, isOpenBurger] = useState(false);
  const [open2, isOpen2] = useState(false);
  const [openSearch, isOpenSearch] = useState(false);
  const lan = ["ar", 'de', 'en', 'es', 'fr', 'he', 'it', 'nl', 'no', 'pt', 'ru', 'sv', 'ud', 'zh'];

  const onChange = (event) => {
    isOpen(false);
  };

  const ref = useRef(null);
  const style = `flex items-center text-[20px] gap-2 h-full`;

  return (
    <div className='h-[103px] bg-[#E50914]'>
      <div className='container relative flex justify-between  items-center h-full'>
        <div className='flex text-white text-xl items-center justify-center xl:hidden'>
          <button onClick={() => isOpenBurger(!openBurger)}>
            <FiMenu searchTerm={searchTerm} handleSearch={handleSearch} />
          </button>

        </div>
        <div className='flex  items-center h-full'>

          <Link className='flex justify-center items-center ' to='/'>
            <img src={img} alt="img" />
          </Link>
          <div className='ml-[40px] h-full hidden xl:flex items-center text-[18px]'>

            <ul className='text-white flex items-center h-full gap-3'>
              <div className='flex text-lg  h-full gap-2 items-center'>
                <NavLink ref={ref} className={(navClass) =>
                  navClass.isActive
                    ? "border-white border-b-2 h-full"
                    : "h-full border-b-2 border-transparent"} to='/worldnews'>
                  <button className={style} ref={ref} onClick={() => isOpen2(!open2)}>World news<BsChevronDown /></button>

                </NavLink>
              </div>
              <div className='flex text-lg  h-full gap-2 items-center'>

                <NavLink className={(navClass) =>
                  navClass.isActive
                    ? "border-white border-b-2 flex items-center h-full"
                    : "h-full border-b-2 border-transparent flex items-center"} to='/business'>
                  Business
                </NavLink>
              </div>
              <div className='flex text-lg  h-full gap-2 items-center'>

                <NavLink className={(navClass) =>
                  navClass.isActive
                    ? "border-white border-b-2 flex items-center h-full"
                    : "h-full border-b-2 border-transparent flex items-center"} to='/society'>
                  Society
                </NavLink>
              </div>
              <div className='flex text-lg  h-full gap-2 items-center'>

                <NavLink className={(navClass) =>
                  navClass.isActive
                    ? "border-white border-b-2 flex items-center h-full"
                    : "h-full border-b-2 border-transparent flex items-center"} to='/sport'>
                  Sport
                </NavLink>
              </div>
              <div className='flex text-lg  h-full gap-2 items-center'>

                <NavLink className={(navClass) =>
                  navClass.isActive
                    ? "border-white border-b-2 flex items-center h-full"
                    : "h-full border-b-2 border-transparent flex items-center"} to='/technology'>
                  Technology
                </NavLink>
              </div>

              <div className='flex text-lg  h-full gap-2 items-center'>

                <button className={style} ref={ref} onClick={() => isOpen2(!open2)}>States<BsChevronDown /></button>
              </div>
            </ul>
            <MiniSwiper setCountry={setCountry} data={data} isOpen2={isOpen2} fetchData={fetchData} open2={open2} />
          </div>
        </div>
        <div className='flex gap-4 text-white  items-center'>
          <div className={`${openSearch ? "min-w-[280px] rounded-xl bg-white" :"w-auto"} items-center justify-end hidden xl:flex  duration-500 h-[40px]`}>
            <Link to='/search' className="  xl:w-full h-full justify-between flex items-center ">
              <button onClick={() => isOpenSearch(true)} className={`${openSearch ? "w-[15%] text-opacity-50 text-black" : "w-full" } h-full text-xl  flex items-center justify-center `}>

                <FiSearch />
              </button>
              <div className={`${openSearch ? 'w-[100%]' : "w-0  "} h-full duration-500 flex `}>

                <input
                  type="text"
                  className="outline-none px-1 h-full bg-transparent text-black w-full"
                  placeholder="Search"
                  value={searchTerm} onChange={handleSearch}
                />
                <button onClick={() => isOpenSearch(false)} className='w-[20%] text-xl text-opacity-50 flex items-center justify-center h-full text-black'>

                  <BsXCircle />
                </button>
              </div>

            </Link>

          </div>
          <div className='flex text-xl  relative gap-2 items-center'>
            <button className='flex items-center gap-2' onClick={() => isOpen(!open)}>{selectedLan}<BsChevronDown /></button>
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
      <Burger country={country} setCountry={setCountry} isOpenBurger={isOpenBurger} openBurger={openBurger} />

    </div>
  );
}

export default SecondHeader;

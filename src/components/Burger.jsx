import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { BsChevronDown, BsX } from 'react-icons/bs'
import { FiMoon, FiSearch, FiSun } from 'react-icons/fi'
import { Link } from 'react-router-dom'
export default function Burger({ isOpenBurger, openBurger, handleSearch, searchTerm, country, setCountry }) {

  const [usdToUzs, setUsdToUzs] = useState(null);
  const [usdStatus, setUsdStatus] = useState(null);
  const [eurStatus, setEurStatus] = useState(null);
  const [rubStatus, setRubStatus] = useState(null);
  const [eurToUzs, setEurToUzs] = useState(null);
  const [rubToUzs, setRubToUzs] = useState(null);
  const [prevUsdToUzs, setPrevUsdToUzs] = useState(null);
  const [prevEurToUzs, setPrevEurToUzs] = useState(null);
  const [prevRubToUzs, setPrevRubToUzs] = useState(null);
  const [weather, setWeather] = useState("")
  const [open, isOpen] = useState(false)
  const [open2, isOpen2] = useState(false)
  const [city, setCity] = useState("California")
  const apiKey = '7502ee4ca5604245b67124918230806';

  const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;
  const State = ["California", "Texas", "Florida", "New York", "Arizona"];

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      setWeather(data.current.temp_c);
    })
    .catch(error => {
      console.log('Произошла ошибка:', error);
    });
  const onChange = (e) => {
    setCity(e.target.value);
    isOpen(!open);
  };


  useEffect(() => {
    const fetchExchangeRate = async () => {
      try {
        const apiKey = '4aa13c555aee480ca67318ff02c9f023';
        const response = await fetch(
          `https://openexchangerates.org/api/latest.json?app_id=${apiKey}&base=USD`
        );
        const data = await response.json();
        setUsdToUzs(data.rates.UZS.toFixed(2));
        setEurToUzs(((1 / data.rates.EUR) * data.rates.UZS).toFixed(2)); // Расчет курса EUR к UZS
        setRubToUzs(((1 / data.rates.RUB) * data.rates.UZS).toFixed(2)); // Расчет курса RUB к UZS

        // Сравнение текущего курса с предыдущим значением
        if (prevUsdToUzs !== null) {
          if (usdToUzs > prevUsdToUzs) {
            setUsdStatus("<BsArrowUpRight className='text-green-500'/>")
            console.log('Курс USD к UZS повысился');
          } else if (usdToUzs < prevUsdToUzs) {
            setUsdStatus("<BsArrowDownRight className='text-[#E50914] '/>")
            console.log('Курс USD к UZS понизился');
          } else {
            setUsdStatus(" = ")
            // console.log('Курс USD к UZS остался неизменным');
          }
        }

        if (prevEurToUzs !== null) {
          if (eurToUzs > prevEurToUzs) {
            setEurStatus("<BsArrowUpRight className='text-green-500'/>")

            console.log('Курс EUR к UZS повысился');
          } else if (eurToUzs < prevEurToUzs) {
            setEurStatus("<BsArrowUpRight className='text-[#E50914]'/>")

            console.log('Курс EUR к UZS понизился');
          } else {
            setEurStatus(" =")

            // console.log('Курс EUR к UZS остался неизменным');
          }
        }

        if (prevRubToUzs !== null) {
          if (rubToUzs > prevRubToUzs) {
            setRubStatus("<BsArrowUpRight className='text-green-500'/>")

            console.log('Курс RUB к UZS повысился');
          } else if (rubToUzs < prevRubToUzs) {
            setRubStatus("<BsArrowUpRight className='text-[#E50914]'/>")
            console.log('Курс RUB к UZS понизился');

          } else {
            setRubStatus(" =")

            // console.log('Курс RUB к UZS остался неизменным');
          }
        }

        // Обновление предыдущих значений курса
        setPrevUsdToUzs(usdToUzs);
        setPrevEurToUzs(eurToUzs);
        setPrevRubToUzs(rubToUzs);
      } catch (error) {
        console.error('Failed to fetch exchange rate:', error);
      }
    };

    fetchExchangeRate();
  }, [eurToUzs, prevEurToUzs, prevRubToUzs, prevUsdToUzs, rubToUzs, usdToUzs]);
  const style = 'text-black w-[126px] text-left focus:bg-[#E50914] focus:text-white text-[14px] font-[500] p-[10px] rounded hover:bg-pink-200 bg-opacity-50'

  return (
    <div className={`${openBurger ? "left-0" : "-left-[200%]"} duration-200 overflow-y-hidden h-screen bg-white absolute top-0 text-black z-[99] md:w-[500px] container w-full py-[40px]`}>
      <div>
        <button className='text-4xl text-black text-opacity-60' onClick={() => isOpenBurger(false)}>

          <BsX />
        </button>
      </div>
      <div>
        <Link to='/search' className=" w-full border-2 mt-5 p-3 rounded-lg text-black text-opacity-50 xl:w-full h-full justify-between flex items-center ">
          <button className={`h-full mr-2 text-xl  flex items-center justify-center `}>

            <FiSearch />
          </button>
          <div className={` h-full w-full duration-500 flex `}>

            <input
              type="text"
              className="outline-none px-1 h-full bg-transparent text-black w-full"
              placeholder="Search"
              value={searchTerm} onChange={handleSearch}
            />

          </div>

        </Link>
      </div>

      <div className=' text-2xl mt-10 gap-4'>
        <h1 className=' mb-2 font-semibold'>USD <span >{usdToUzs}</span> {usdStatus}</h1>
        <h1 className=' mb-2 font-semibold'>EUR <span >{eurToUzs}</span> {eurStatus}</h1>
        <h1 className=' mb-2 font-semibold'>RUB <span >{rubToUzs}</span> {rubStatus}</h1>
      </div>
      <div className='w-full flex mt-5 gap-2 items-center '>
        <div className='w-auto gap-5 items-center justify-center flex'>
          <div className='flex text-3xl'>

            {weather > 20 ? <FiSun className='mr-1 text-yellow-500' /> : <FiMoon className='mr-1 text-blue-900' />}

          </div>
          <p className='flex flex-row'>
            {weather}&#176; <span>
              C
            </span>
          </p>
        </div>
        <div className=' text-black w-fullv font-semibold relative text-[15px] flex items-center justify-start '>
          <button className='flex items-center' onClick={() => isOpen(!open)}>
            {city}<BsChevronDown className={`${open ? "rotate-180 text-[#E50914] font-bold" : ""} ml-1 duration-300`} />
          </button>
          <ul className={`${open ? "block" : "hidden"} z-50 scroll absolute w-[146px] flex-col flex justify-start items-center border p-[5px] right-1.5 border-black border-opacity-50 overflow-y-scroll overflow-x-hidden rounded h-[185px] bg-white top-8`} style={{ maxHeight: '200px' }}>
            {State.map((s, i) => (

              <button key={i} onClick={onChange} value={s} className={style}>
                {s}
              </button>
            ))}
          </ul>
        </div>
      </div>
      <div className='mt-10'>
        <div>
          <Link to='/worldnews'>
            <button onClick={() => isOpen2(!open2)} className={`w-full rounded justify-between font-semibold flex items-center px-5 bg-[#EFF4FB] h-[54px] ${open2 ? "text-[#E50914]" : 'text-black'}`}>
              World newsi <BsChevronDown className={open2 ? "duration-100" : "-rotate-90 duration-100"} />
            </button>
          </Link>
          <div className={`${open2 ? "h-[150px] flex flex-col justify-between pb-5" : "h-0 z-[-90] hidden"} bg-[#EFF4FB] duration-100 w-full`}>
            <p className='px-5 hover:text-red-600 font-semibold'>All</p>
            <p className='px-5 hover:text-red-600 font-semibold'>Latin America </p>
            <p className='px-5 hover:text-red-600 font-semibold'>Africa</p>
            <p className='px-5 hover:text-red-600 font-semibold'>Europe</p>
          </div>
        </div>
        <Link  to='/business'>
          <button onClick={() => isOpenBurger(false)} className='w-full mt-3 rounded justify-between font-semibold flex items-center px-5 bg-[#EFF4FB] h-[54px] '>
            Business
          </button>
        </Link>
        <Link to='/society'>
          <button onClick={() => isOpenBurger(false)} className='w-full mt-3 rounded justify-between font-semibold flex items-center px-5 bg-[#EFF4FB] h-[54px] '>
            Society
          </button>
        </Link>
        <Link to='/sport'>
          <button onClick={() => isOpenBurger(false)} className='w-full mt-3 rounded justify-between font-semibold flex items-center px-5 bg-[#EFF4FB] h-[54px] '>
            Sport
          </button>
        </Link>
        <Link to='/technology'>
          <button onClick={() => isOpenBurger(false)} className='w-full mt-3 rounded justify-between font-semibold flex items-center px-5 bg-[#EFF4FB] h-[54px] '>
            Technology
          </button>
        </Link>
        <div>

          <button className={`w-full rounded justify-between font-semibold flex items-center px-5 bg-[#EFF4FB] h-[54px] mt-3 ${open2 ? "text-[#E50914]" : 'text-black'}`}>
            States<BsChevronDown className={open2 ? "duration-100" : "-rotate-90 duration-100"} />
          </button>

        </div>
      </div>
      <div className='flex items-center justify-between mt-5'>
        <Link to='/contacts'>
          <p>Contacts</p>
        </Link>
        <Link to='/adv'>
          <p>Advertising</p>
        </Link>
        <Link to='/firenewsteam'>
          <p>FireNews team</p>
        </Link>
      </div>
    </div>
  )
}

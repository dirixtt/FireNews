import React, { useEffect, useState } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi'
import { BsChevronDown } from 'react-icons/bs'
import { RxTwitterLogo } from 'react-icons/rx'
import { TbBrandFacebook } from 'react-icons/tb'
import { FaTelegramPlane, FaInstagram } from 'react-icons/fa'
import '../App.css'
import { NavLink } from 'react-router-dom';





export default function FirstHeader() {
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
  const [city, setCity] = useState("Toshkent")
  const apiKey = '7502ee4ca5604245b67124918230806';

  const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

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
        setUsdToUzs(data.rates.UZS);
        setEurToUzs((1 / data.rates.EUR) * data.rates.UZS); // Расчет курса EUR к UZS
        setRubToUzs((1 / data.rates.RUB) * data.rates.UZS); // Расчет курса RUB к UZS

        // Сравнение текущего курса с предыдущим значением
        if (prevUsdToUzs !== null) {
          if (usdToUzs > prevUsdToUzs) {
            setUsdStatus("<BsArrowUpRight className='text-green-500'/>")
            console.log('Курс USD к UZS повысился');
          } else if (usdToUzs < prevUsdToUzs) {
            setUsdStatus("<BsArrowDownRight className='text-red-500 '/>")
            console.log('Курс USD к UZS понизился');
          } else {
            setUsdStatus(" = ")
            console.log('Курс USD к UZS остался неизменным');
          }
        }

        if (prevEurToUzs !== null) {
          if (eurToUzs > prevEurToUzs) {
            setEurStatus("<BsArrowUpRight className='text-green-500'/>")

            console.log('Курс EUR к UZS повысился');
          } else if (eurToUzs < prevEurToUzs) {
            setEurStatus("<BsArrowUpRight className='text-red-500'/>")

            console.log('Курс EUR к UZS понизился');
          } else {
            setEurStatus(" =")

            console.log('Курс EUR к UZS остался неизменным');
          }
        }

        if (prevRubToUzs !== null) {
          if (rubToUzs > prevRubToUzs) {
            setRubStatus("<BsArrowUpRight className='text-green-500'/>")

            console.log('Курс RUB к UZS повысился');
          } else if (rubToUzs < prevRubToUzs) {
            setRubStatus("<BsArrowUpRight className='text-red-500'/>")
            console.log('Курс RUB к UZS понизился');

          } else {
            setRubStatus(" =")

            console.log('Курс RUB к UZS остался неизменным');
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
  const hover = `hover:text-[#E50914] text-[16px]`
  const style = 'text-black w-[126px] text-left focus:bg-[#E50914] focus:text-white text-[14px] font-[500] p-[10px] rounded hover:bg-pink-200 bg-opacity-50'
  return (
    <header className='bg-[#1D1D1D] hidden md:block h-10 w-full'>
      <div className='container justify-between flex items-center h-full text-white'>
        <div className='items-center flex h-full '>
          <div className='w-24 items-center justify-center flex'>

            {weather > 20 ? <FiSun className='mr-1' /> : <FiMoon className='mr-1' />}

            {weather}&#176; C
          </div>
          <div className='ml-2 w-24 relative text-[15px] flex items-center justify-start text-white'>
            <button className='flex items-center' onClick={() => isOpen(!open)}>
              {city}<BsChevronDown className={`${open ? "rotate-180 text-red-500 font-bold" : ""} ml-1 duration-300`} />
            </button>
            <ul className={`${open ? "block" : "hidden"} z-50 scroll absolute w-[146px] flex-col flex justify-start items-center border p-[5px] right-1.5 border-black border-opacity-50 overflow-y-scroll overflow-x-hidden rounded h-[185px] bg-white top-8`} style={{ maxHeight: '200px' }}>
              <button onClick={onChange} value={"Toshkent"} className={style}>
                Toshkent
              </button>
              <button onClick={onChange} value={"Jizzax"} className={style}>
                Jizzax
              </button>
              <button onClick={onChange} value={"Samarqand"} className={style}>
                Samarqand
              </button>
              <button onClick={onChange} value={"Bukhoro"} className={style}>
                Bukhoro
              </button>
              <button onClick={onChange} value={"Navoiy"} className={style}>
                Navoiy
              </button>
              <button onClick={onChange} value={"Qarshi"} className={style}>
                Qarshi
              </button>
              <button onClick={onChange} value={"Nukus"} className={style}>
                Nukus
              </button>
              <button onClick={onChange} value={"Andijon"} className={style}>
                Andijon
              </button>
            </ul>
          </div>
          <div className='ml-5'>
            {usdToUzs !== null && eurToUzs !== null && rubToUzs !== null ? (
              <div className="flex gap-3">
                <p className='flex items-center gap-1'>
                  {usdToUzs.toFixed(2)}{usdStatus}
                </p>
                <p className='flex items-center gap-1'>{eurToUzs.toFixed(2)}{eurStatus} </p>
                <p className='flex items-center gap-1'>{rubToUzs.toFixed(2)}{rubStatus} </p>
              </div>
            ) : (
              <p>Загрузка...</p>
            )}

          </div>
        </div>
        <div className='flex text-[15px] items-center gap-3'>
          <p className='hover:text-[#E50914]'>
            <NavLink to="/contacts" className={(navClass) =>
              navClass.isActive
                ? "text-[#E50914]"
                : ""
            }>
              Aloqa
            </NavLink>

          </p>
          <p className='hover:text-[#E50914]'>
            <NavLink to="/adv" className={(navClass) =>
              navClass.isActive
                ? "text-[#E50914]"
                : ""
            }>
              Reklama
            </NavLink></p>
          <FaTelegramPlane className={hover} />
          <RxTwitterLogo className={hover} />
          <FaInstagram className={hover} />
          <TbBrandFacebook className={hover} />
        </div>
      </div>
    </header >
  );
}


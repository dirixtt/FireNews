import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import img from '../img/2oqi 1.png';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import data from '../Data'
export default function MiniSwiper({ isOpen2, open2,isOpen3, setCountry, }) {
    const countrys = [
        'ae', 'ar', 'at', 'au', 'be', 'bg', 'br', 'ca', 'ch', 'cn', 'co', 'cu', 'cz', 'de', 'eg', 'fr', 'gb', 'gr', 'hk', 'hu', 'id', 'ie', 'il', 'in', 'it', 'jp', 'kr', 'lt', 'lv', 'ma', 'mx', 'my', 'ng', 'nl', 'no', 'nz', 'ph', 'pl', 'pt', 'ro', 'rs', 'ru', 'sa', 'se', 'sg', 'si', 'sk', 'th', 'tr', 'tw', 'ua', 'us', 've', 'za'
    ];

    const changeCountry = (event) => {
        setCountry(event.target.value);
        isOpen2(false);
        isOpen3(false);
        
    };

    const swiperRef = React.useRef(null);

    const handlePrev = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slidePrev();
        }
    };

    const handleNext = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideNext();
        }
    };

    const swiperProps = {
        slidesPerView: 3,
        spaceBetween: 10,
        loop : true,
        navigation: {
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
        },
    };
    const close = () => {
        isOpen2(false)
        isOpen3(false)

    }
    return (
        <div>
          <div className={`${open2  ? 'block  h-[349px]' : ' h-0'} w-full  z-40 absolute rounded bg-white drop-shadow-lg flex -right-1 duration-700 top-[105px]`}>

                <div className='w-[10%] h-[100%] overflow-x-hidden'>
                    {countrys.map((item, i) => (
                        <div key={i} className='px-[5px] py-2 flex flex-col justify-center items-center text-black w-[100px]'>
                            <button className='w-full rounded p-1 active:bg-[#E50914] hover:bg-[#E5091433]' onClick={changeCountry} value={item}>
                                {item}
                            </button>
                        </div>
                    ))}
                </div>
                <div className='w-[90%] text-black'>
                    <Swiper className='h-[85%]' {...swiperProps} ref={swiperRef}>
                        {data.map((item, idx) => (
                            <SwiperSlide className='max-h-[300px]' key={idx}>
                                <div className='w-[330px] p-4 text-[18px]'>
                                    <img className='h-[180px] object-cover w-full rounded' src={item.urlToImage ? item.urlToImage : img} alt='' />
                                    <div className='absolute items-center px-4 top-[20px] flex justify-between w-full text-[14px]'>
                                        <p className='p-1 mt-1 text-white bg-[#E50914] left-2'>{item.category}</p>
                                    </div>
                                    <Link onClick={close} to={`/products/${item.id}`}>
                                        <p className='hover:text-[#E50914]'>
                                            {item.title.length > 50 ? `${item.title.slice(0, 80)}...` : item.title}
                                        </p>
                                    </Link>
                                  
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className={`${open2 ? 'flex h-[15%] justify-center gap-3 items-center ' : 'hidden'}`}>
                        <button onClick={handlePrev} className='w-[30px] flex justify-center swiper-button-prev active:bg-[#E50914] duration-75 items-center h-[30px] text-white bg-black rounded-full'>
                            <AiOutlineArrowLeft />
                        </button>
                        <button onClick={handleNext} className='w-[30px] flex justify-center swiper-button-next active:bg-[#E50914] duration-75 items-center h-[30px] text-white bg-black rounded-full'>
                            <AiOutlineArrowRight />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

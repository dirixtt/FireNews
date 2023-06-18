import React from 'react'
import img from '../img/rocket 1.png'
import img2 from '../img/checklist 1.png'
import img3 from '../img/results 1.png'
export default function About() {
    return (
        <div >
            <div className='container py-10 md:py-[60px] mt-10 '>
                <h1 className='text-[20px] xl:text-[32px] font-semibold'>FireNew.uz information-analytical internet publication</h1>
                <div className='text-[16px] md:w-[820px] text-black text-opacity-80 font-[500]'>

                    <p className="mt-5">We believe, that <span className='text-red-600'>FireNews.uz </span>will also love to read the information-analytical internet publication. We are convinced of this day by day during our 8 years of activity. No wonder FireNews has become a daily necessity of people.</p>
                    <p className='mt-5'>
                    This project started its work in January 2029, and its main goal is to achieve innovation in the media sector of Uzbekistan, to create an impartial and transparent information field, to write about topics that no one has spoken about, that no one dares to say. solving people's problems, encouraging society not only to live with today, but to anticipate tomorrow, the far future, and strive accordingly.
                    </p>
                </div>

            </div>
            <div className='bg-[#EFF4FB] py-[60px] container'>
                <h1 className='text-[24px] xl:text-[32px] font-semibold'>Our core values</h1>
                <div className='flex flex-col md:flex-row justify-between mt-[40px]'>
                    <div className='md:p-[40px] p-[20px] bg-white w-[400px] rounded-md'>
                        <div className='flex items-center'>
                            <img className='md:w-[100px] h-[80px] w-[80px] md:h-[100px]' src={img} alt="" />
                            <h1 className='text-[24px] ml-[20px] font-[500]'>High score</h1>
                        </div>
                        <p className='mt-[20px] h-full md:w-full w-[85%] flex-wrap  text-black text-opacity-80 '>
                        This project started its work in January 2029, and its main goal is the media sector of Uzbekistan.
                        </p>
                    </div>
                    <div className='md:p-[40px] p-[20px] bg-white w-[400px] rounded-md'>
                        <div className='flex items-center'>
                            <img className='md:w-[100px] h-[80px] w-[80px] md:h-[100px]' src={img3} alt="" />
                            <h1 className='text-[24px] ml-[20px] font-[500]'>High score</h1>
                        </div>
                        <p className='mt-[20px] h-full md:w-full w-[85%] flex-wrap  text-black text-opacity-80 '>
                        This project started its work in January 2029, and its main goal is the media sector of Uzbekistan.
                        </p>
                    </div>
                    <div className='md:p-[40px] p-[20px] bg-white w-[400px] rounded-md'>
                        <div className='flex items-center'>
                            <img className='md:w-[100px] h-[80px] w-[80px] md:h-[100px]' src={img2} alt="" />
                            <h1 className='text-[24px] ml-[20px] font-[500]'>High score</h1>
                        </div>
                        <p className='mt-[20px] h-full md:w-full w-[85%] flex-wrap  text-black text-opacity-80 '>
                        This project started its work in January 2029, and its main goal is the media sector of Uzbekistan.
                        </p>
                    </div>
                  
                </div>
            </div>
        </div>
    )
}

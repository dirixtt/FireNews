import React from 'react'
import img from '../img/rocket 1.png'
import img2 from '../img/checklist 1.png'
import img3 from '../img/results 1.png'
export default function About() {
    return (
        <div >
            <div className='container py-[60px] mt-10 '>
                <h1 className='text-[32px] font-semibold'>FireNew.uz axborot-tahliliy internet-nashr</h1>
                <div className='text-[16px] w-[820px] text-black text-opacity-80 font-[500]'>

                    <p className="mt-5">Ishonamizki, <span className='text-red-600'>FireNews.uz</span>  axborot-tahliliy internet-nashrini ham sevib o‘qib boradi. Bunga 8 yillik faoliyatimiz davomida kun sayin amin bo‘lib boryapmiz. FireNews odamlarning kundalik ehtiyojiga aylanib ulgurgan bo‘lsa, ne ajab.</p>
                    <p className='mt-5'>
                        Mazkur loyiha 2029 yilning yanvar oyidan o‘z ishini boshlagan bo‘lib, uning asosiy maqsadi O‘zbekiston OAV sohasida yangilikka qo‘l urish, xolis, shaffof axborot maydonini yaratish, hech kim so‘z ochmagan, aytishga jur’at topilmagan mavzularni qalamga olib, odamlarning muammolarini hal etish, jamiyatni faqat buguni bilan yashash emas, balki ertasi, uzoq kelajakni oldindan ko‘rib, shunga yarasha intilishga undashdan iborat.
                    </p>
                </div>

            </div>
            <div className='bg-[#EFF4FB] py-[60px] container'>
                <h1 className='text-[32px] font-semibold'>Bizning asosiy qadriyatlarimiz</h1>
                <div className='flex justify-between mt-[40px]'>
                    <div className='p-[40px] bg-white w-[400px] rounded-md'>
                        <div className='flex items-center'>
                            <img className='w-[100px] h-[100px]' src={img} alt="" />
                            <h1 className='text-[24px] ml-[20px] font-[500]'>Yuqori natija</h1>
                        </div>
                        <p className='mt-[20px] text-black text-opacity-80 '>
                            Mazkur loyiha 2029 yilning yanvar oyidan o‘z ishini boshlagan bo‘lib, uning asosiy maqsadi O‘zbekiston OAV sohasida
                        </p>
                    </div>
                    <div className='p-[40px] bg-white w-[400px] rounded-md'>
                        <div className='flex items-center'>
                            <img className='w-[100px] h-[100px]' src={img3} alt="" />
                            <h1 className='text-[24px] ml-[20px] font-[500]'>Yuqori natija</h1>
                        </div>
                        <p className='mt-[20px] text-black text-opacity-80 '>
                            Mazkur loyiha 2029 yilning yanvar oyidan o‘z ishini boshlagan bo‘lib, uning asosiy maqsadi O‘zbekiston OAV sohasida
                        </p>
                    </div>
                    <div className='p-[40px] bg-white w-[400px] rounded-md'>
                        <div className='flex items-center'>
                            <img className='w-[100px] h-[100px]' src={img2} alt="" />
                            <h1 className='text-[24px] ml-[20px] font-[500]'>Yuqori natija</h1>
                        </div>
                        <p className='mt-[20px] text-black text-opacity-80 '>
                            Mazkur loyiha 2029 yilning yanvar oyidan o‘z ishini boshlagan bo‘lib, uning asosiy maqsadi O‘zbekiston OAV sohasida
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

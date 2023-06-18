import React from 'react'
import img1 from '../img/smart-city 2.png'
import img2 from '../img/email 1.png'
import img3 from '../img/phone 1.png'
import { RiSendPlane2Fill } from 'react-icons/ri'
import { useState } from 'react'

export default function Aloqa() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [number, setNumber] = useState("")
    const [message, setMessage] = useState("")
    const handleChange = (event) => {
        const { name, value } = event.target;
        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'email':
                setEmail(value);
                break;
            case 'message':
                setMessage(value);
                break;
            case 'number':
                setNumber(value);
                break;
            default:
                break;
        }
    };
    console.log(name)
    return (
        <div className='py-10'>
            <div className="container ">
                <div className=' xl:w-[80%]'>

                    <h1 className='text-[20px] md:text-[32px] font-semibold py-10'>Contact the editor</h1>
                    <div className='flex-col md:justify-around w-full flex xl:flex-col md:flex-row'>

                        <div className='flex flex-col xl:flex-row  justify-between'>
                            <div className='mb-5 gap-5 w-80 flex'>
                                <div className='w-[80px] h-[80px]  flex justify-center items-center rounded-full bg-[#E50914]' >
                                    <img src={img1} alt="" />
                                </div>
                                <div >
                                    <h1 className='text-[20px] font-semibold ' >Editorial address</h1>
                                    <p className='text-[14px] text-opacity-50 text-black '>15 Cliff St, New York NY 10038,
                                        USA</p>
                                </div>
                            </div>
                            <div className='mb-5 gap-5 w-80 flex'>
                                <div className='w-[80px] h-[80px]  flex justify-center items-center rounded-full bg-[#E50914]' >
                                    <img src={img2} alt="" />
                                </div>
                                <div >
                                    <h1 className='text-[20px] font-semibold ' > Email address</h1>
                                    <p className='text-[14px] text-opacity-50 text-black '>FireNews@gmail.com</p>
                                </div>
                            </div>
                            <div className='mb-5 gap-5 w-80 flex'>
                                <div className='w-[80px] h-[80px]  flex justify-center items-center rounded-full bg-[#E50914]' >
                                    <img src={img3} alt="" />
                                </div>
                                <div >
                                    <h1 className='text-[20px] font-semibold ' >Telefon</h1>
                                    <p className='text-[14px] text-opacity-50 text-black '>+91 234 567 8765</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='xl:mt-[60px] flex flex-col xl:flex-row justify-between'>
                                <label className='flex mx-[10px] flex-col text-[24px]' htmlFor="name">
                                    Name
                                    <input name='name' onChange={handleChange} value={name} className='my-4 border outline-[#E50914] p-[18px] outline-[2px] text-[16px] rounded-lg w-[300px]' type="text" placeholder='Ur Name' />
                                </label>
                                <label className='flex mx-[10px] flex-col text-[24px]' htmlFor="name">
                                    Email
                                    <input name='email' onChange={handleChange} value={email} className='my-4 border outline-[#E50914] p-[18px] outline-[2px] text-[16px] rounded-lg w-[300px]' type="text" placeholder='Enter ur e-mail' />
                                </label>
                                <label className='flex mx-[10px] flex-col text-[24px]' htmlFor="name">
                                    Phone number
                                    <input name='number' onChange={handleChange} value={number} className='my-4 border outline-[#E50914] p-[18px] outline-[2px] text-[16px] rounded-lg w-[300px]' type="text" placeholder='Enter ur phone number' />
                                </label>
                            </div>
                        </div>
                    </div>
                    <label className='flex flex-col text-[24px]' htmlFor="message">
                        Message
                        <textarea name='message' onChange={handleChange} value={message} className='my-4 border outline-[#E50914] p-[18px] min-w-[950px] outline-[2px] text-[16px] rounded-lg min-h-[250px]' placeholder='Enter message' ></textarea>
                    </label>
                    <button className='flex bg-[#E50914] items-center text-white gap-1 text-[16px] px-3 py-2 rounded ' type='submit' >Send <RiSendPlane2Fill /></button>

                </div>

            </div>
        </div>
    )
}

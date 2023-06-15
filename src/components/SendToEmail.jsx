import React from 'react'
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { useState } from 'react';
export default function SendToEmail() {
    const [email, setEmail] = useState("")
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_43boc5l', 'template_9yerkj3', form.current, 'QpAtdmkr2KtmM3_WP')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className='w-full md:px-40 md:py-20 p-0 mt-10 md:mt-0 flex justify-center items-center'>
            <div className='w-[600px] bg-black bg-opacity-[8%] text-[14px] font-bold text-center h-[250px] flex-col  flex justify-center items-center'>
                <p className='w-[60%]'>
                    Eng so'nggi yangiliklar, mashhur yangiliklar
                    va eksklyuziv yangiliklarni olish uchun bizning
                    axborot byulletenimizga obuna bo'ling.
                </p>
                <form action='submit' ref={form} onSubmit={sendEmail} className='mt-4 w-[70%] font-normal h-[60px]'>
                    <input value={email} onChange={(e) => setEmail(e.value)} autoComplete='off' className='h-full px-4 w-[70%] bg-white outline-none' placeholder='Elektron pochtangizni kriting' name="user_email" type="email" />
                    <input className='w-[30%] bg-[#E50914] text-white h-full ' type="submit" value={"Yuborish"} />
                </form>
            </div>
        </div>
    )
}

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
            <div className='w-[600px] bg-black bg-opacity-[8%] text-[14px] font-bold text-center h-[224px] flex-col  flex justify-center items-center'>
                <p className='w-[60%]'>
                Latest news, popular news
                     and our to receive exclusive news
                     subscribe to our newsletter.
                </p>
                <form action='submit' ref={form} onSubmit={sendEmail} className='mt-4 w-[70%] font-normal h-[60px]'>
                    <input value={email} onChange={(e) => setEmail(e.value)} autoComplete='off' className='h-full px-4 w-[70%] bg-white outline-none' placeholder='Enter your E-mail' name="user_email" type="email" />
                    <input className='w-[30%] text-xl bg-[#E50914] text-white h-full ' type="submit" value={"Send"} />
                </form>
            </div>
        </div>
    )
}

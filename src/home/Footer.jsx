import React from 'react'
import img from '../img/2oqi 1.png'
import { CgHome } from 'react-icons/cg'
import { BsApple, BsTelephoneFill } from 'react-icons/bs'
import { HiOutlineMailOpen } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import { FaTelegramPlane } from 'react-icons/fa'
import { BsGooglePlay } from 'react-icons/bs'
import { FiFacebook, FiInstagram, FiTwitter } from 'react-icons/fi'
export default function Footer() {
    return (
        <footer className='bg-[#1D1D1D] '>
            <div className='container h-full pt-[40px]'>
                <div className='flex flex-col md:flex-row pb-10 h-full border-b border-white justify-between'>

                    <div className='text-white w-full flex-col md:flex-row md:w-1/2 flex'>
                        <div className=''>
                            <Link to='/'>
                                <img src={img} alt="" />
                            </Link>
                            <p className='w-[350px] font-semibold mt-[20px] text-white text-[15px] '>
                                <Link to='/about' className='text-red-600'> FIRE.news </Link> Web-Site as mass media on October 26, 2029 under the Administration of Information and Public
                                registered with a number from the Blue Communications Agency.</p>
                            <p className='flex hover:text-[#E50914] items-center gap-2 mt-[16px]'><CgHome className='text-xl' />15 Cliff St, New York NY 10038, USA</p>
                            <p className='flex hover:text-[#E50914] items-center gap-2 mt-[16px]'><BsTelephoneFill className='text-xl' />+91 234 567 8765</p>
                            <p className='flex hover:text-[#E50914] items-center gap-2 mt-[16px]'><HiOutlineMailOpen className='text-xl' /><a href="gmail.com">FireNews@gmail.com</a></p>
                        </div>
                        <ul className='md:mt-14 flex gap-5 md:flex-col md:ml-10'>
                            <li className='hover:text-[#E50914] mt-[16px]'>
                                <Link to='/contacts'>
                                    Contact
                                </Link>
                            </li>
                            <li className='hover:text-[#E50914] mt-[16px]'>
                                <Link to='/adv'>
                                    Advertising
                                </Link>
                            </li>
                            <li className='hover:text-[#E50914] mt-[16px]'>
                                <Link to='/firenewsteam'>
                                    FireNews team
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className='mt-10 justify-end h-full flex-col flex'>
                        <div className=' gap-3 flex'>

                            <FaTelegramPlane className='w-[42px]  duration-500 bg-[#E50914] hover:bg-white hover:text-[#E50914] h-10 p-2 rounded-full text-center text-[#fff]' />
                            <FiTwitter className='w-[42px] duration-500 bg-[#E50914] hover:bg-white hover:text-[#E50914] h-10 p-2 rounded-full text-center text-[#fff]' />
                            <FiInstagram className='w-[42px] duration-500 bg-[#E50914] hover:bg-white hover:text-[#E50914] h-10 p-2 rounded-full text-center text-[#fff]' />
                            <FiFacebook className='w-[42px] duration-500 bg-[#E50914] hover:bg-white hover:text-[#E50914] h-10 p-2 rounded-full text-center text-[#fff]' />
                        </div>
                        <div className='w-full items-end flex justify-between mt-5 md:mt-16 md:flex-col'>
                            <div className='bg-[#E50914] p-1 rounded-md  w-[155px] '>
                                <a className=' text-white items-center justify-around flex' href="https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md">
                                    <BsGooglePlay className='text-3xl' />
                                    <div>
                                        <p className='text-[10px]'>GET IT ON</p>
                                        <h1 className='text-xl'>Google Play</h1>
                                    </div>
                                </a>
                            </div>
                            <div className='bg-[#E50914] mt-[10px] p-1 rounded-md  w-[155px] '>
                                <a className=' text-white items-center justify-around flex' href="https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md">
                                    <BsApple className='text-3xl' />
                                    <div>
                                        <p className='text-[10px]'>Download on the</p>
                                        <h1 className='text-xl'>Apple Store</h1>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='py-2 text-white flex justify-center text-[12px] md:text-lg items-center h-10 '>
                    <p>© 2030 FireNews All rights reserved</p>
                </div>

            </div>
        </footer>
    )
}

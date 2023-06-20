import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { BsCalendar4, BsEye, BsFillLightningFill } from 'react-icons/bs';
import { AiFillStar, AiFillYoutube } from 'react-icons/ai';
import { RiSendPlane2Fill, RiShareLine } from 'react-icons/ri';
import { FaFacebook, FaTwitter } from 'react-icons/fa';
import dayjs from 'dayjs';
import img from './noimg.jpg'

export default function More({ sport, data, entertainment, technology, business }) {
  const { id } = useParams();
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [product, setProduct] = useState(null);
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

      default:
        break;
    }
  };
  useEffect(() => {
    if (id) {
      const filteredProduct = [...data, ...sport, ...entertainment, ...technology, ...business].find(item => item.id == id);
      setProduct(filteredProduct);
      console.log(data[0].id);
    }
  }, [id, sport, data, entertainment, technology, business]);
  console.log(id)


  const formattedDate = product ? dayjs(product.publishedAt).format('DD MMM, YYYY') : null;
  const ico = `text-xl border rounded-md  p-2`
  return (
    <div>
      {product ? (
        <div className="container">
          {/* Header */}
          <div>
            <div className="gap-2 mt-[20px] text-[14px] flex">
              <Link to="/">Home</Link>/<Link className="text-[#E50914]" to={`/${product.category}`}>
                {product.category}
              </Link>
            </div>
            <div className="w-full border-b border-[#E50914]">
              <p className="text-[#E50914] text-[24px] mt-[23px]">{product.author}</p>
            </div>
          </div>

          {/* Main Content */}
          <div className="mt-[40px] justify-between xl:flex-row flex-col flex">
            <div className="xl:w-[65%]">
              <div>
                <img className="w-full object-cover rounded-lg h-[250px] md:h-[400px] xl:h-[450px]" src={product.urlToImage} alt="" />
                <h1 className="text-[25px] font-[500]">
                  <a href={product.url}>{product.title}</a>
                </h1>
                <p className="mt-5 text-[16px] text-opacity-80 text-black">{product.description}</p>
                <div className="text-[14px] gap-3 flex mt-3">
                  <p className="flex items-center gap-2">
                    <span className="bg-[#fbbcbce6] p-1 rounded">
                      <BsCalendar4 className="text-[#E50914]" />
                    </span>
                    {formattedDate}
                  </p>
                  |
                  <p className="flex gap-2">
                    <span className="bg-[#fbbcbce6] text-[#E50914] p-1 rounded">
                      <BsEye />
                    </span>
                    156
                  </p>
                </div>
              </div>

              {/* Author */}
              <div className="mt-[33px] flex justify-start items-center border-y py-[20px] border-opacity-30 border-black">
                <div className='flex items-start justify-between w-full md:w-[70%] '>

                  <div>
                    <p className='text-[14px] text-black text-opacity-70'>

                      Author
                    </p>
                    <div className="flex mt-[11px] items-start md:items-center gap-2">
                      <img src={product.authorImg} className="h-16 w-16 md:h-[80px] md:w-[80px] border object-cover border-gray-400 rounded-full" alt="" />
                      <h1 className='font-semibold text-sm md:text-[24px]  '>{product.author}</h1>
                    </div>
                  </div>
                  <div>
                    <p className='text-[14px] text-black text-opacity-70'>

                      Reyting
                    </p>
                    <div className='mt-2 text-[24px] font-[400]'>5</div>
                  </div>
                  <div>
                    <p className='text-[14px] text-black text-opacity-70'>

                      Rate
                    </p>
                    <div className='flex text-yellow-400 gap-1 mt-2 text-[24px]'>
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                    </div>
                  </div>

                </div>
              </div>
              <div className='text-xl flex py-3 gap-5 items-center '>
                <i>
                  <RiShareLine />
                </i>
                <ul className='flex gap-3'>
                  <li className={`${ico} text-[#FF0000] border-red-500`}><AiFillYoutube /></li>
                  <li className={`${ico} text-[#3B5998] border-[#3B5998]`}><FaFacebook /></li>
                  <li className={`${ico} text-[#1DA1F2] border-[#1DA1F2]`}><FaTwitter /></li>
                </ul>
              </div>
              <div>
                <div className='xl:mt-[60px] flex flex-col  justify-between'>
                  <h1 className='text-2xl mb-5'>Comment</h1>
                  <div className='flex w-full justify-between '>

                    <label className='flex w-[49%] text-black text-opacity-50 flex-col text-[24px]' htmlFor="name">
                      Name
                      <input name='name' onChange={handleChange} value={name} className='my-4 border outline-[#E50914] p-[18px] outline-[2px] text-[16px] rounded-lg w-[100%]' type="text" placeholder='Ur Name' />
                    </label>
                    <label className='flex text-black text-opacity-50 w-[49%] flex-col text-[24px]' htmlFor="name">
                      Mail
                      <input name='email' onChange={handleChange} value={email} className='my-4 border outline-[#E50914] p-[18px] outline-[2px] text-[16px] rounded-lg w-[100%]' type="text" placeholder='Enter ur mail' />
                    </label>
                  </div>

                  <label className='flex min-h-[200px] text-black text-opacity-50 flex-col text-[24px]' htmlFor="">
                    Message
                    <textarea name='message' onChange={handleChange} value={message} className='my-4 border outline-[#E50914] p-[18px]  outline-[2px] text-[16px] rounded-lg' placeholder='Enter message' cols="30" rows="10"></textarea>
                  </label>
                  <button className='flex bg-[#E50914] w-[105px] items-center text-white gap-1 text-[16px] px-3 py-2 rounded mb-5' type='submit' >Send <RiSendPlane2Fill /></button>
                </div>
              </div>
            </div>
            <div className='xl:w-[34%] '>
              <div className='relative rounded-lg border gap-3 px-[20px] py-5 flex w-full justify-between flex-wrap'>
                <div className='w-full'>
                  <p className='text-[#E50914]  flex items-center text-[24px] font-semibold  pb-[10px] gap-2'>Trending <BsFillLightningFill /></p>
                </div>
                {data?.slice(4, 8).map((item, idx) => (
                  <div key={idx} className='w-full  flex mb-[20px] h-[100px]'>
                    <img className='min-w-[35%] max-w-[35%] rounded h-full object-cover' src={item.urlToImage ? item.urlToImage : img} alt="" />
                    <div className='ml-3 pb-0 flex justify-between flex-col items-start text-[12px] font-semibold'>
                      <Link className='hover:text-[#E50914] text-sm  xl:text-lg' to={`/products/${item.id}`}>
                        <h2>{item.title}</h2>
                      </Link>
                      <div className='text-[12px] gap-3 flex mt-3'>
                        <p className='flex items-center gap-2'>
                          <p className='bg-[#fbbcbce6] p-1 rounded'>
                            <BsCalendar4 className='text-[#E50914]' />
                          </p>
                          {item.publishedAt ? dayjs(item.publishedAt).format('DD MMM, YYYY') : 'No time'}
                        </p>
                        |
                        <p className='flex gap-2'>
                          <p className='bg-[#fbbcbce6] text-[#E50914] p-1 rounded'>
                            <BsEye />
                          </p>
                          {item.publishedAt.slice(0, 3)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className='px-[20px] mt-4 py-5 border border-lg'>
                <h1 className='text-xl font-semibold'>Stay in touch</h1>
                <div className='flex gap-3 mt-5 flex-wrap items-center justify-between '>
                  <ul className='text-[#FF0000] w-40 flex items-center gap-2'>

                    <li className={`${ico} text-[#FF0000] border-red-500`}><AiFillYoutube /></li>
                    <li>
                      YOU TUBE
                    </li>
                  </ul>
                  <ul className='text-[#3B5998] w-40 flex items-center gap-2'>

                    <li className={`${ico} text-[#3B5998] border-[#3B5998]`}><FaFacebook /></li>

                    <li>
                      FACEBOOK
                    </li>
                  </ul>
                  <ul className='text-[#1DA1F2] w-40 flex items-center gap-2'>

                    <li className={`${ico} text-[#1DA1F2] border-[#1DA1F2]`}><FaTwitter /></li>

                    <li>
                      TWITTER
                    </li>
                  </ul>
                  <ul className='text-[#FF0000] w-40 flex items-center gap-2'>

                    <li className={`${ico} text-[#FF0000] border-red-500`}><AiFillYoutube /></li>
                    <li>
                      YOU TUBE
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
}

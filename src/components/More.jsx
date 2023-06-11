import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { BsCalendar4, BsEye } from 'react-icons/bs';
import { CiStar } from 'react-icons/ci';
import dayjs from 'dayjs';

export default function More({ data, data3, data2 }) {
  const { publishedAt } = useParams();
  const [product, setProduct] = useState({})

  useEffect(() => {
    if (publishedAt) {
      const filteredProducts = data.filter(item => item.publishedAt == publishedAt) || data2.filter(item => item.publishedAt == publishedAt) || data3.filter(item => item.publishedAt == publishedAt);
      setProduct(filteredProducts[0]);
    }
  }, [publishedAt, data]);
  const dateTimeString = data.length > 0 ? product.publishedAt : null;
  const formattedDate = dateTimeString ? dayjs(dateTimeString).format("DD MMM, YYYY") : null;
  console.log(product)
  return (
    <div>
      {product ? (<div className='container'>
        <div>
          <div className='gap-2 mt-[20px] text-[14px] flex'>

            <Link to="/">Uy</Link>/<Link className='text-[#E50914]' to="/author">{product?.author}</Link>
          </div>
          <div className='w-full border-b border-[#E50914]'>
            <p className='text-[#E50914] text-[24px] mt-[23px]'>{product?.author}</p>
          </div>
        </div>
        {/* main */}
        <div className='mt-[40px]'>
          <div className='w-[70%]'>
            <div>

              <img className='w-full h-[400px]' src={product?.urlToImage} alt="" />
              <h1 className='text-[25px]'>{product?.title}</h1>
              <p className='mt-5 text-[16px] text-opacity-80 text-black'>{product?.description}</p>
              <div className='text-[14px] gap-3 flex mt-3'>
                <p className='flex items-center gap-2'>
                  <p className='bg-[#fbbcbce6] p-1 rounded'>
                    <BsCalendar4 className=' text-[#E50914]' />
                  </p>
                  {formattedDate}
                </p>
                |
                <p className="flex gap-2 ">
                  <p className='bg-[#fbbcbce6] text-[#E50914] p-1 rounded'>
                    <BsEye />
                  </p>
                  156
                </p>
              </div>
            </div>

          </div>
          {/* author */}
          <div className='mt-[33px] flex justify-between items-center border-y py-[20px] border-black'>
            <div>
              Maqola muallifi
              <div className='flex mt-1 gap-2'>

                <img src={product?.url} className='h-10 w-10 bg-black rounded-full' alt="" />
                <h1>{product?.author}</h1>
              </div>
            </div>
            <div>
              Reyting
              <div>
                5
              </div>
            </div>
            <div>
              Maqolaga baho bering
              <div>

                <CiStar />
                <CiStar />
                <CiStar />
                <CiStar />
                <CiStar />
              </div>
            </div>
          </div>

        </div>
      </div>) : (<div>Loading</div>)}

    </div>
  )
}

import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useFetchBodyData } from '../utils/useFetchBodyData';
import { set } from 'mongoose';

function ItemView() {

  const temp=useFetchBodyData();
  const [data,setdata]=useState("");
  const {id}=useParams();

  const product=temp.find((item)=>item.asin==id);

  useEffect(() => {
    if (temp.length > 0) {
      setdata(product);
    }
  }, [temp]);

    console.log(data);

  return (
<div className='bg-green-200 py-20 pb-60'>
     <div className='flex w-[1000px] m-auto bg-slate-100 rounded-sm shadow-xl'>

       <div className='my-2'>
      <img className='w-[490px] h-[360px] m-3 rounded-2xl' src={data.formattedImageUrl}/>
      </div>

      <div className='w-[500px] m-3'>
      <h1 className='m-3 py-2'><span>{data.title}</span></h1> 
      <h2 className='px-3 m-2'>Original Price : <span className='font-bold'>{data.formattedListPrice}</span></h2>
      <h2 className='px-3 m-2'>Offer Price : <span className='font-bold'>{data.formattedPriceV2}</span></h2>
      <h2 className='px-3 m-2'>Discount : <span className='font-bold'>{data.formattedSellerDiscountPercentage}</span><span className='font-bold'></span></h2>
      <h2 className='px-3 m-2'>Rating : <span className='font-bold'>{data.ratingValue}</span></h2>
      <h2 className='px-3 m-2'>Brand : <span className='font-bold'>{data.brand}</span></h2>
      <h2 className='px-3 m-2'>Total Reviews : <span className='font-bold'>{data.totalReviewCount}</span></h2>
      <div className='ml-3 mt-6'><button className='border border-black p-2 w-[200px]'>Order Now</button> <button className='border border-black p-2 ml-9 w-[200px]'>Add to Cart</button></div>
       </div>

    </div>

</div>    
  )
}

export default ItemView
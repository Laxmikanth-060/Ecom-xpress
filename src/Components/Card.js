import React,{useState} from 'react'
import ItemView from './ItemView';
import { Link } from 'react-router-dom';
import { set } from 'mongoose';


function Card({data}) {

const { formattedListPrice,formattedSellerDiscountPercentage,formattedImageUrl,title,ratingValue}=data;
   console.log("data that is in card : ",data);
  const handleclick = ()=>{
    //onClick(data);
  }
  
  return (
   
    <div className="w-[290px] border m-3 shadow-sm hover:cursor-pointer hover:scale-95 hover:border-black-100 bg-slate-100 rounded-md" onClick={handleclick}>
      <img className=' w-[272px] h-[200px] m-[8px] rounded-xl' src={formattedImageUrl}/>
      <div className='m-2'>
      <h5 className='m-2 text-center mb-1'>{title.slice(0,40)}</h5>
       <h5 className='m-2 ml-3'>Price: <span className='ml-1 font-bold text-slate-800'>{formattedListPrice}/-</span></h5>
      <h5 className='m-2 ml-3 mb-4'>Discount: <span className='ml-1 font-bold text-slate-500'>{formattedSellerDiscountPercentage}</span></h5>
      {/* <h2 className='m-2 ml-3'>Rating : <span className='font-bold'>{ratingValue}</span></h2> */}
      {/* <button className='bg-blue-200 ml-20 m-3 rounded-md px-1 py-1'>Buy Now</button> */}
      </div>
    
    </div>
  )
}

export default Card

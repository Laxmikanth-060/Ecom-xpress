import React from 'react'

function CardC({data}) {
const {title,category_icon}=data;

  return (
    
    <div className='m-7 hover:cursor-pointer w-[380px] h-[300px] hover:scale-105 text-center border border-black-100 bg-slate-100 '>

      <img className='w-[350px] h-[180px]' src={category_icon}/>
      <h3 className='text-center py-2'>{title}</h3>
      <button className=' bg-purple-300 rounded-md px-8 py-2 m-4'>View more</button>
      
    </div>
   
  )
}

export default CardC

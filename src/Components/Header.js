import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LoginIcon from '@mui/icons-material/Login';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SearchIcon from '@mui/icons-material/Search';
import CategoryIcon from '@mui/icons-material/Category';


function Header() {
  return (
    
      <div className='flex justify-around p-1 h-[65px] border border-blue-300 shadow-md bg-green-400'>
       
        <div className="shadow-sm w-[100px]  h-[35px] mb-3 ml-1 hover:cursor-pointer">
      <Link to="/home">    
        <img src='https://1000logos.net/wp-content/uploads/2020/08/Shopify-Logo.png'/>
      </Link>
      </div>

      <div>
      <input className='border-2 border-blue-700   px-2 py-1 w-[450px] h-9 rounded-md mt-[9px]' placeholder=' Search Items...'></input>
      <div className=' text-gray-500 relative bottom-[30px] ml-[414px]'><SearchIcon/></div>
      </div>

      <div className=' text-[15px] font-semibold p-1 hover:border border-black hover:cursor-pointer'>
      <h1 className='ml-2'>Delivery to</h1>
      <h1><LocationOnIcon/>address</h1>   
      </div>

              {/* <h1 className= "text-blue-800  text-6xl mt-4 ml-4 font-bold">EcomXpress</h1>       */}
              
            <div className='flex w-[450px] h-[40px] justify-around font-semibold mt-2'>  
            <Link to="/catagories" className='p-2 hover:border border-black '>Categories</Link>
            <Link to="/about" className='p-2 hover:border border-black '>AboutUs</Link>
            <Link to="/mycart" className='p-2 hover:border border-black '><ShoppingCartIcon/>MyCart</Link>
            <Link to="/home" className='p-2 hover:border border-black'><LoginIcon/>Login</Link>
            </div>
            
             {/* <button className="bg-blue-400 hover:bg-blue-600 text-white font-bold py-1 px-3 rounded-lg ml-64 ">Login</button> */}
       
      
    </div>
   
  )
}

export default Header

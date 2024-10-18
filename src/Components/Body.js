import React,{useState,useEffect} from 'react'
import Card from './Card'
import { About } from './About';
import ShimmerCard from './ShimmerCard';
import { Home } from './Home';
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';
import {useFetchBodyData} from '../utils/useFetchBodyData'
import { useOnlineStatus } from '../utils/useOnlineStatus';
import ItemView from './ItemView';
import SearchIcon from '@mui/icons-material/Search'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Body() {
  
  const data = useFetchBodyData();
  console.log("this is the data that i want : ",data);
  const [dataSet, setdataset] = useState([]);
  const [filter, setfilter] = useState([]);
  const [showshimmer, setshowshimmer] = useState(true);
  const [searchfilter, setsearchfilter] = useState('');
  
  const [showitem,setshowitem]=useState("");

  useEffect(() => {
    if (data.length > 0) {
      setdataset(data);
      setfilter(data);
      setshowshimmer(false); 
      handleShimmerTimeout();
    }
  }, [data]);


 useEffect(()=>{
  const newdata=filter.filter(data => data.title.toLowerCase().includes(searchfilter.toLowerCase()));
  setdataset(newdata);
 },[searchfilter]);
 

 const handleShimmerTimeout = () => {
  setTimeout(() => {
    setshowshimmer(false);
  }, 1500);
};


const onlinestatus=useOnlineStatus();
if(onlinestatus===false){
  return(<h1>  your are offline.. Check your connection..!</h1>
)
}

const handleclick =(data)=>{
  console.log("clicked.!");
  setshowitem(data);
}

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3
};

  return  (

    <div className='p-3 bg-green-200'>
        {/* {showshimmer && <ShimmerCard />} */}
    
<div className='flex justify-around m-auto w-3/4 relative top-[40px]'>
  
   <h4 className='font-semibold text-lg ml-6 text-zinc-600 mt-1'>Filter Price : </h4> 

     <button className=' bg-slate-100 border border-black-100 rounded-lg py-1 px-3 hover:scale-105 hover:border-black w-[210px]' onClick={() => {
  const newdata = filter.filter(data => {
    return data.formattedListPrice?.slice(1) && parseFloat(data.formattedListPrice.slice(1)) < 500;
  });
  setdataset(newdata);
}}>Below Rs.500</button> 
    
    <button className=' bg-slate-100 border border-black-100 rounded-lg py-1 px-3 hover:scale-105 hover:border-black w-[265px]' onClick={()=>{
      const newdata=filter.filter(data => {
        return data.formattedListPrice?.slice(1) && parseFloat(data.formattedListPrice.slice(1)) >= 500 && parseFloat(data.formattedListPrice.slice(1)) < 1000;
      });
      setdataset(newdata);
    }}>Between Rs.500-1000</button> 

    
    <button className=' bg-slate-100 border border-black-100 rounded-lg py-1 px-3 hover:scale-105 hover:border-black w-[265px]' onClick={()=>{
      const newdata=filter.filter(data => {
        return data.formattedListPrice?.slice(1) && parseFloat(data.formattedListPrice.slice(1)) >= 1000 && parseFloat(data.formattedListPrice.slice(1)) < 5000;
      });
      setdataset(newdata);
    }}>Between Rs.1000-5000</button>
  
</div> 
  

  <input className='border-2 border-blue-700  px-2 py-1 w-[450px] h-9 rounded-md relative bottom-[97px] left-[174px]'  placeholder=' Search Items...' value={searchfilter} onChange={e=>setsearchfilter(e.target.value)}></input>
   <div className=' text-gray-500 w-[24px] relative bottom-[127px] left-[588px]'><SearchIcon/></div>

        <div className='flex flex-wrap ml-4 justify-start bg-green-200' >
        { 
            dataSet.map(item => (
              <Link to={"/home/"+item.asin} key={item.title}><Card key={item.title} data={item}/></Link>
            ))
            
        }
       </div>
     </div> 
  )
}

export default Body

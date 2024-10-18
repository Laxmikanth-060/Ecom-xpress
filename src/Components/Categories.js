import React,{useState,useEffect} from 'react'
import CardC from './CardC';
import { useFetchCategory } from '../utils/useFetchCategory';

 const Categories=()=> {

  const [dataSet,setdataset]=useState([]);
  const data=useFetchCategory();
  
  useEffect(() => {
  
      setdataset(data);
    
  }, [data]);
  

  return (
    <div>
      
      <div className='flex flex-wrap bg-green-200'>
      
      { 
          dataSet.map(item=>{
            return <CardC key={item.id} data={item}/>})
          
      }

     </div>
      
    </div>
  )
}

export default Categories
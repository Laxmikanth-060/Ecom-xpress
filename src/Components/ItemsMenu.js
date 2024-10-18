import React from 'react'
import CardC from './CardC';

function ItemsMenu() {
  
    const [dataSet,setdataSet]=useState([]);
    // console.log(dataSet)
     useEffect(() => {
       fetchdata();
     }, []);
   
     const fetchdata = async () => {
       const data = await fetch("https://www.meesho.com/api/v1/navigation-tree");
       const json = await data.json();
       setdataSet(json?.payload?.level_1);
     };
     
   
     return (
       <div>
         
         <div className='products'>
         
         { 
            //  dataSet.map(item=>{
            //    return <CardC key={item.id} data={item}/>})
            console.log(dataSet)
             
         }
   
        </div>
         
       </div>
     )
   
}

export default ItemsMenu
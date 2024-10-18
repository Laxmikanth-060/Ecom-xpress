import { Category_url } from '../utils/Constants';
import { useState,useEffect } from 'react';

export function useFetchCategory() {
    const [dataSet,setdataset]=useState([]);

    useEffect(() => {
        fetchdata();
      }, []);
    
      const fetchdata = async () => {
        const data = await fetch(Category_url);
        const json = await data.json();
        setdataset(json?.payload?.level_1);
      };

      return dataSet;
}

 
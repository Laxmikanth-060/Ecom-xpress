import { HomeCard_url } from '../utils/Constants';
import { useState,useEffect } from 'react';

export function useFetchBodyData() {

    const [dataSet,setdataset]=useState([]);

    useEffect(() => {
        fetchdata();
      }, []);
      
      const fetchdata = async () => {

        try {
          const response = await fetch(HomeCard_url);
          const json = await response.json(); 
           //console.log(json);
          setdataset(json);
          
        } catch (error) {
          console.error('Error fetching data:', error.message);
          
        }
      };
      console.log(dataSet);
      return dataSet;
}
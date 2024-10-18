import { useState,useEffect } from "react";

 export function useOnlineStatus() {
      const [status,setstatus]=useState(true);
      
      useEffect(()=>{

          window.addEventListener("offline",()=>{
            setstatus(false)
          })
          window.addEventListener("online",()=>{
            setstatus(true)
          })

      },[status])

      return status;
}


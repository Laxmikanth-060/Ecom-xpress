import './index.css';
 import reportWebVitals from './reportWebVitals';
import React, { lazy, Suspense } from 'react';
import  ReactDOM  from 'react-dom/client';
import App from './App';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import {Home} from './Components/Home'
import {About} from './Components/About';
import {Contact} from './Components/Contact';
import Error from './Components/Error';
import Mycart from './Components/Mycart';
import Body from './Components/Body';
import ItemView from './Components/ItemView';

const Categories=lazy(()=>import("./Components/Categories"));

const approuter=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Body/>,
      },
      {
        path:"/about",
        element:<About/>,
      },
      {
        path:"/catagories",
        element:<Suspense fallback={<h1>Loading Categories...</h1>}><Categories/></Suspense>,
      },
      {
        path:"/mycart",
        element:<Mycart/>,
      },
      {
        path:"/home/:id",
        element :<ItemView/>
      }
            
    ],
    errorElement:<Error/>,
  },
  {
    path:"/home",
    element:<Home/>,
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
 
    <RouterProvider router={approuter}/>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


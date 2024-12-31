import React from 'react';

import './index.css';
import ReactDOM from 'react-dom/client';

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

import Layout from './Routers/Layout'
 import Home from './Components/Home';
 import About from './Components/About';
 import Contact from './Components/Contact';
  import Cart from './Components/Cart';
  import UserSignup from './Components/UserSignup';

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/'element={<Layout/>}>
   <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path ="cart" element={<Cart/>}/>
       <Route path='signup' element={<UserSignup/>} />
   
  </Route>
  )
)



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <React.StrictMode>
  <RouterProvider router={router}/> 


 </React.StrictMode>
);


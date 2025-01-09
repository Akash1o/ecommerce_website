import React from 'react';

import './index.css';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

import Layout from './Routers/Layout'
 import Home from './Components/Home';
 import About from './Components/About';
 import Contact from './Components/Contact';
  import Cart from './Components/Cart';
  import UserSignup from './Components/UserSignup';
  import store from './store/store';
  import Checkout from './Components/Checkout';
import SaleMorePro from './Components/SaleMorePro';
import Phones from './Components/Phones';
import Computer from './Components/Computer';
import Smart from './Components/Smart';
import Camera from './Components/Camera';
import Head from './Components/Head';
import Watch from './Components/Watch'
import OurProd from './Components/OurProd';
import Appliances from './Components/Appliances';
import Women from './Components/Women';
import Perfume from './Components/Perfume';
const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/'element={<Layout/>}>
   <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path ="cart" element={<Cart/>}/>
       <Route path='signup' element={<UserSignup/>} />
        <Route path='checkout' element={<Checkout/>} />
        <Route path='viewsales' element={<SaleMorePro/>}/>
        <Route path='phones' element={<Phones/>}/>
        <Route path='computers' element={<Computer/>}/>
        <Route path='smart' element={<Smart/>}/>
        <Route path='camera' element={<Camera/>}/>
        <Route path='head' element={<Head/>}/>
        <Route path='watch' element={<Watch/>}/>
        <Route path='our' element={<OurProd/>}/>
        <Route path='appli' element={<Appliances/>}/>
        <Route path='women' element={<Women/>}/>
        <Route path='perfume' element={<Perfume/>}/>
  </Route>
  ) 
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);




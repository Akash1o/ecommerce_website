import React, { useState } from 'react'
import {  useNavigate } from 'react-router-dom';
import { TiTickOutline } from "react-icons/ti";
function Checkout() {
  const Navigate =useNavigate();
  const handleNavigate =(path)=>{
    Navigate(path);
  
  }
  const[input ,setInput] =useState({
     FirstName:'',
     StreetAddress:'',
     City:'',
     Phonenumber :'',
     EmailAddres:'',

  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };
  


  return (
    <div className="ml-[89px] flex flex-col mt-[34px] min-h-screen ">

<div className="flex flex-row ">
        <h1 onClick={()=>handleNavigate('/')}  
        className="text-xl cursor-pointer">Home / </h1>
        <h1 onClick={()=>handleNavigate("/cart")}
        className="ml-[8px]   text-xl cursor-pointer">Cart /</h1>
        <h1 className="ml-[8px] font-bold text-blue-600 text-xl">Checkout</h1>
      </div>
      <div className="ml-[138px] flex  mt-[30px]  ">
       <div>
        <form className='flex flex-col'>
          <h1 className='font-bold text-4xl mb-7'> 
            Billing Details 
          </h1>
         <lablel className='text-lg font-mono text-pink-400 mb-3 '>First Name*</lablel>
        <input
              type="text"
              name="FirstName"
              value={input.FirstName}
              onChange={handleChange}

              className="mb-3 p-2 border-2 border-gray-300 rounded-md w-[450px]"
            />
              <lablel className='text-lg font-mono text-pink-400 mb-3 '>Street Address*</lablel>
           <input
              type="text"
              name="StreetAddress"
              value={input.StreetAddress}
              onChange={handleChange}

              className="mb-3 p-2 border-2 border-gray-300 rounded-md w-[450px]"
            />

<lablel className='text-lg font-mono text-pink-400 mb-3 '>Phone Number*</lablel>
           <input
              type="text"
              name="Phonenumber"
              value={input.Phonenumber}
              onChange={handleChange}

              className="mb-3 p-2 border-2 border-gray-300 rounded-md w-[450px]"
            />

<lablel className='text-lg font-mono text-pink-400 mb-3 '>Email Address*</lablel>
           <input
              type="text"
              name="EmailAddres"
              value={input.EmailAddres}
              onChange={handleChange}

              className="mb-3 p-2 border-2 border-gray-300 rounded-md w-[450px]"
            />
          <span className='flex gap-2'>Save this information for faster check-out next time
             <TiTickOutline className='mt-1 h-5 w-5 bg-green-400' />
          </span>  
        </form>
       </div>
       <div className='ml-[78px] mt-[98px]'>
        <div className='flex '>
          <img src='./Photos/lap.png'
          className='object-contain w-20 h-20' />
          <h1>Laptop</h1>
          <span> Rs.70000</span>
        </div>
       </div>
   
        </div>
      </div>

  )
}

export default Checkout
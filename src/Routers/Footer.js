import React from 'react'

function Footer() {
  return (
    <footer className="bg-black text-white py-4 h-[260px] flex">
  <div className="flex flex-col gap-1 ml-[45px]">
    <h2 className="text-2xl font-bold py-[2px]">Exclusive</h2>
    <p className="text-lg">Subscribe</p> 
    <p className='my-[3px] font-thin pb-[7px]'>Get 10% off on first buy.</p>
    <input 
      type="text" 
      placeholder="Enter your email" 
      className="p-2 w-[180px] h-[32px] my-[-10px] mb-1 border rounded bg-inherit text-white text-center" 
    /> 
   </div>
          <div className='flex flex-col gap-1 ml-[90px] '>
            <h2 className='font-bold text-2xl pb-[12px]'>Support</h2>
            <p className='font-thin'>Swoyambhu,
              <br/>Kathamndu 0435,Nepal</p>

              <p className='font-thin'>
                sastobazaar@gmail.com
              </p>
              <p className='font-thin'>9812345669</p>
          </div>
   

          <div className='flex flex-col gap-1 ml-[90px] '>
            <h2 className='font-bold text-2xl pb-[12px]'>Account</h2>
            <p className='font-thin'>Login/Register
             </p>

              <p className='font-thin'>
                Cart
              </p>
              <p className='font-thin'>Wishlist</p>

              <p className='font-thin'>Shop</p>
          </div>
   
          <div className='flex flex-col gap-1 ml-[120px] '>
            <h2 className='font-bold text-2xl pb-[12px]'>Quick Link</h2>
            <p className='font-thin'>Privacy Policy
             </p>

              <p className='font-thin'>
            Terms of Use
              </p>
              <p className='font-thin'>FAQ</p>

              <p className='font-thin'>Contact</p>
          </div>
   
          <div className="flex flex-col gap-1 ml-[120px]">
  <h2 className="font-bold text-2xl pb-[12px]">Download App</h2>
  <p className="font-thin">Save Rs.500 with App New User Only</p>
  <div className="flex flex-row items-center space-x-1">
  <img 
    src="./Photos/qr.png" 
    className="w-[77px] h-[85px] object-contain mb-2  " 
  />
  <div className="flex flex-col items-center justify-between h-[54px] mb-9">
    <img 
      src="./Photos/play.png" 
      className="w-22 h-[42px] object-contain  pb-[-166px]"
    />
    <img 
      src="./Photos/appj.png" 
      className="w-22 h-[39px] object-contain mb-[122px]"
    />
  </div>
</div>
<div className="flex flex-row space-x-4 mt-3">
    <img src='./Photos/fb.png' className='w-5 h-6 object-contain' />
    <img src='./Photos/twit.png' className='w-5 h-6 object-contain' />
    <img src='./Photos/link.png' className='w-5 h-6 object-contain' />
    <img src='./Photos/ig.png' className='w-5 h-6 object-contain' />
  </div>

  <p className='font-thin'>Copyright Akash 2024. All right reserved</p>

</div>



      
    </footer>
  )
}

export default Footer
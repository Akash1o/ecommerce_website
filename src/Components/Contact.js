import React from 'react'

function Contact() {
  return (
    <div className='flex sm:flex-row gap-[89px] flex-col sm:gap-[240px] sm:h-[500px] h-[830px]  '>
    <div className='mt-[35px] space-y-9 ml-[89px]'> 
      <div> 
        <div className='flex flex-row gap-4 mb-[19px]'>
          <img src='./Photos/call.png' alt='call' className='w-9 h-10 '/>
          <h1 className='text-3xl font-bold '>Call to Us</h1>
        </div>
        <p>We are available 24/7, 7 days a week</p>
        <p>Phone: 9812345678</p>
      </div>
  
      <div> 
        <div className='flex flex-row gap-4 mb-[19px]'>
          <img src='./Photos/mail.png' alt='call' className='w-9 h-10 '/>
          <h1 className='text-3xl font-bold  '>Write to Us</h1>
        </div>
        <p>Fill out our form and we will contact you <br/>within 24 hours.</p>
        <p>Emails: customer@exclusive.com</p>
      </div>
    </div>
  
    <div className='flex flex-col sm:ml-0 ml-[43px]  '>
      <div className='flex flex-row  sm:gap-3 sm:mt-[35px] gap-3 '>
        <input type='text' placeholder='Your Name*' className=' sm:w-[200px] w-[96px] sm:gap-0  h-[50px] text-center border-2 border-gray-400 bg-slate-100'/>
        <input type='email' placeholder='Your Email*' className='sm:w-[200px] w-[96px] h-[50px] text-center border-2 border-gray-400 bg-slate-100'/>
        <input type='number' placeholder='Your Number*' className='sm:w-[200px] w-[96px] h-[50px] text-center border-2 border-gray-400 bg-slate-100'/>
      </div>
      <div className='mt-[20px]'>
        <textarea placeholder='Your Message*' className='sm:w-[620px] w-[290px] sm:h-[190px] h-[98px] text-center border-2 border-gray-400 bg-slate-100'/>
     
      </div>
      <button 
      className='w-[200px] h-[50px] bg-red-400 text-white font-bold mt-[20px]'>Send Message</button>
    </div>
  </div>
  )
}

export default Contact
import React from 'react'

function About() {
  return (
 
     <div className='h-[700px] flex flex-col gap-x-4 ml-[50px]'>
      <h1 className='text-4xl text-amber-600 font-bold mb-[32px]'>Our Story</h1>
      <div className='flex flex-row mt-[27px]' >
      
    <pre className="text-lg leading-relaxed text-bold text-gray-800 whitespace-pre-line ">Welcome to Sasto Bazaar, your one-stop online shop for the best deals in Kathmandu! <br/>At Sasto Bazaar, we’re passionate about making shopping easier and more affordable <br/>for everyone. We offer a wide variety of products, 
    from daily essentials to unique finds, all at unbeatable prices.

Our mission is simple: to bring you quality products<br/> at prices 
that won’t break the bank. We believe in supporting local businesses and <br/>providing our customers with a seamless shopping experience, from browsing to <br/>checkout and delivery.
We’re committed to serving the people of Kathmandu with <br/> honesty, integrity, and customer satisfaction at the forefront of everything we do. <br/>  <br/>Whether you’re shopping for yourself, your home, or finding that perfect gift,<br/> Sasto Bazaar is here to help you save time and money while shopping online.

Join <br/> the thousands of happy customers who trust Sasto Bazaar for their shopping needs.<br/> Experience the best of Kathmandu’s online marketplace today!

</pre>
 <img className="object-contain w-[600px] h-[500px] mb-[72px] ml-[50px]"
 src='./Photos/himal.jpg ' />
      </div>
     </div>
  )
}

export default About
import ProductCard from "./ProductCard";





function Home() {
 

  return (
    <div className='flex flex-col h-[3300px]  '>
     <div className='mt-[22px] ml-[82px] flex flex-col'>
      <ul className='space-y-2' >
        <li >Womans Fashion</li>
        <li>Men's Fashion</li>
        <li>Electronics</li>
        <li></li>
        <li>Home & Styles</li>
      <li>Medicin</li>
      <li>Sports & Outdoor</li>
      <li>Baby's Toys</li>
      <li>Groceries & Pets</li>
      <li>Health & Beauty</li>
      </ul>
     </div>
     <div className="ml-[310px] bg-black h-[282px] w-[850px] mt-[-270px] flex justify-center items-center overflow-hidden relative">
      <img
      src="./Photos/ipone.png"
       className="h-[270px] object-contain transition-transform duration-500"
       
       
        alt='pics'
     
      />
    </div>
    
     <div   className="ml-[92px] mt-[52px] p-5 ">
     <h2 className="  text-4xl text-red-500 font-bold  pt-3">Flash Sales</h2>
     </div>

     <div>
      <ProductCard />
     </div>

     <div className="mt-[52px]  ml-[82px]">
      <p className="text-purple-600">Categories</p>
      <h3 className="font-bold text-2xl">Browse By Category</h3>

     </div>
 <div className=" pb-3 ml-[82px] mt-[22px] flex flex-row gap-[55px] align-middle  ">
  <div className=" border-2  w-[170px] h-[145px] border-black  hover:bg-green-700 ">
    <img  className="h-[67px] w-[250px] object-contain  mt-[23px] "
     src="./Photos/phone.png" />
    <p className="text-center mt-[22px]"> Phones</p>
  </div>

  <div className=" border-2  w-[170px] h-[145px] border-black  hover:bg-blue-500 ">
    <img  className="h-[67px] w-[250px] object-contain  mt-[23px] "
     src="./Photos/Comp.png" />
    <p className="text-center mt-[22px]">Computers</p>
  </div>

  <div className=" border-2  w-[170px] h-[145px] border-black  hover:bg-gray-500">
    <img  className="h-[67px] w-[250px] object-contain  mt-[23px] "
     src="./Photos/watch.png" />
    <p className="text-center mt-[22px]"> SmartWatch</p>
  </div>

  <div className="border-2 w-[170px] h-[145px] border-black hover:bg-red-600  bg-blue-50">
  <img className="h-[67px] w-full object-contain mt-[23px]" src="./Photos/cam.png" />
  <p className="text-center mt-[22px]">Camera</p>
</div>
  <div className=" border-2  w-[170px] h-[145px] border-black  hover:bg-rose-400 ">
    <img  className="h-[67px] w-[250px] object-contain  mt-[23px] "
     src="./Photos/head.png" />
    <p className="text-center mt-[22px]"> HeadPhones</p>
  </div>

  <div className=" border-2  w-[170px] h-[145px] border-black  hover:bg-pink-400 ">
    <img  className="h-[67px] w-[250px] object-contain  mt-[23px] "
     src="./Photos/watch.png" />
    <p className="text-center mt-[22px]"> Watches</p>
  </div>
 </div>

 <h1 className="text-3xl font-bold ml-[82px] mt-[52px]">Explore Our Products</h1>
  <div className="flex flex-row gap-[75px] align-middle  ml-[224px] mt-[22px]">
      <div className="bg-white p-4 shadow rounded-lg h-[224px] w-[178px] ">
         <img src="data:image/jpeg;base64,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"
          className="mb-[25px] object-contain h-[147px]"
          alt="Product"/>
          <h2 className="text-1xl font-medium pb-6">Washing Machine</h2>
         <div className="flex flex-row">
        
          <p className="text-sm text-gray-500 pt-1"> $500</p>
          <div className=" items-center ">
             <div className=" text-yellow-400 "/>
             ⭐⭐⭐⭐
          </div>
          <span class="text-gray-500 text-sm ml-2 pt-[3px]">(35)</span>
          </div>
          
      </div>

      <div className="bg-white p-4 shadow rounded-lg h-[224px] w-[178px] ">
         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFNtMB2wJzHD-rFIOfWXMpEXHm6vaUD5uipw&s"
          className="mb-[25px] object-contain h-[155px]"
          alt="Product"/>
          <h2 className="text-1xl font-medium pb-6">Lambogrini</h2>
         <div className="flex flex-row">
        
          <p className="text-sm text-gray-500 pt-1"> $500</p>
          <div className=" items-center ">
             <div className=" text-yellow-400 "/>
             ⭐⭐⭐⭐
          </div>
          <span class="text-gray-500 text-sm ml-2 pt-[3px]">(35)</span>
          </div>
          
      </div>


      <div className="bg-white p-4 shadow rounded-lg h-[224px] w-[178px] ">
    <img src="https://as2.ftcdn.net/v2/jpg/08/54/65/19/1000_F_854651968_uwQxny5ac6OeKT3JbY4Rg2zA2PN2gt1i.webp" 
          className="mb-[25px] object-contain h-[147px]"
          alt="Product"/>
          <h2 className="text-1xl font-medium pb-6">Dumbell</h2>
         <div className="flex flex-row">
        
          <p className="text-sm text-gray-500 pt-1"> Rs.5000</p>
          <div className=" items-center ">
             <div className=" text-yellow-400 "/>
             ⭐⭐⭐⭐
          </div>
          <span class="text-gray-500 text-sm ml-2 pt-[3px]">(35)</span>
          </div>
          
      </div>


      <div className="bg-white p-4 shadow rounded-lg h-[224px] w-[178px] ">
         <img src="https://pngimg.com/uploads/football_boots/football_boots_PNG37.png"
          className="mb-[25px] object-contain h-[147px]"
          alt="Product"/>
          <h2 className="text-1xl font-medium pb-6">Football Boot</h2>
         <div className="flex flex-row">
        
          <p className="text-sm text-gray-500 pt-1"> Rs.7000</p>
          <div className=" items-center ">
             <div className=" text-yellow-400 "/>
             ⭐⭐⭐⭐
          </div>
          <span class="text-gray-500 text-sm ml-2 pt-[3px]">(135)</span>
          </div>
          




      </div>

  </div>

  <div className="flex flex-row gap-[75px]  align-middle  ml-[224px] mt-[75px]">
      <div className="bg-white p-4 shadow rounded-lg h-[224px] w-[178px] ">
         <img src="data:image/jpeg;base64,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"
          className="mb-[25px] object-contain h-[147px]"
          alt="Product"/>
          <h2 className="text-1xl font-medium pb-6">Washing Machine</h2>
         <div className="flex flex-row">
        
          <p className="text-sm text-gray-500 pt-1"> Rs.90000</p>
          <div className=" items-center ">
             <div className=" text-yellow-400 "/>
             ⭐⭐⭐⭐
          </div>
          <span class="text-gray-500 text-sm ml-2 pt-[3px]">(35)</span>
          </div>
          
      </div>

      <div className="bg-white p-4 shadow rounded-lg h-[224px] w-[178px] ">
         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFNtMB2wJzHD-rFIOfWXMpEXHm6vaUD5uipw&s"
          className="mb-[25px] object-contain h-[155px]"
          alt="Product"/>
          <h2 className="text-1xl font-medium pb-6">Lambogrini</h2>
         <div className="flex flex-row">
        
          <p className="text-sm text-gray-500 pt-1"> Rs.500000000</p>
          <div className=" items-center ">
             <div className=" text-yellow-400 "/>
             ⭐⭐⭐⭐
          </div>
          <span class="text-gray-500 text-sm ml-2 pt-[3px]">(35)</span>
          </div>
          
      </div>


      <div className="bg-white p-4 shadow rounded-lg h-[224px] w-[178px] ">
    <img src="https://as2.ftcdn.net/v2/jpg/08/54/65/19/1000_F_854651968_uwQxny5ac6OeKT3JbY4Rg2zA2PN2gt1i.webp" 
          className="mb-[25px] object-contain h-[147px]"
          alt="Product"/>
          <h2 className="text-1xl font-medium pb-6">Dumbell</h2>
         <div className="flex flex-row">
        
          <p className="text-sm text-gray-500 pt-1"> $500</p>
          <div className=" items-center ">
             <div className=" text-yellow-400 "/>
             ⭐⭐⭐⭐
          </div>
          <span class="text-gray-500 text-sm ml-2 pt-[3px]">(35)</span>
          </div>
          
      </div>


      <div className="bg-white p-4 shadow rounded-lg h-[224px] w-[178px] ">
         <img src="https://pngimg.com/uploads/football_boots/football_boots_PNG37.png"
          className="mb-[25px] object-contain h-[147px]"
          alt="Product"/>
          <h2 className="text-1xl font-medium pb-6">Football Boot</h2>
         <div className="flex flex-row">
        
          <p className="text-sm text-gray-500 pt-1"> $100</p>
          <div className=" items-center ">
             <div className=" text-yellow-400 "/>
             ⭐⭐⭐⭐
          </div>
          <span class="text-gray-500 text-sm ml-2 pt-[3px]">(135)</span>
          </div>
          




      </div>

     
  </div>

  <div className="flex flex-row mt-[43px] justify-center ">
      <button className="bg-blue-500 text-white p-3 mb-[12px] hover:bg-gray-700 rounded-lg mt-4">View More Products</button>
      </div>

      <h1 className=" ml-[98px] mt-[34px] mb-[32px] text-3xl font-bold text-red-400">New Arrival</h1>


<div class="grid grid-cols-2 gap-4 p-2 ml-[96px] mr-[96px]">
  <div class="col-span-1 bg-black text-white p-6 rounded-lg ">
    <img src="./Photos/ps.png" 
    className="object-contain pt-[34px]"
    />
    <h2 class="text-2xl font-bold pt-12">PlayStation 5</h2>
    <p class="text-sm mt-10 p-2">Black and White version of the PS5 coming out on sale.</p>
    <button class=" hover:bg-orange-400 mt-4 px-4 py-2 bg-blue-500 text-white rounded">Shop Now</button>
  </div>
  <div class="col-span-1 grid grid-rows-2 gap-4">

    <div class="bg-black text-white p-6 rounded-lg">
      <div className="flex flex-col">
      <img src="./Photos/women.png" 
    className="object-contain  h-[190px] ml-[170px]  "
    />
      <h2 class="text-xl font-bold">Women's Collections</h2>
      <p class="text-sm mt-2">Featured woman collections that give 
        <br/>you another vibe.</p>
      <button class="  hover:bg-orange-400 mt-4 px-4 py-2 bg-blue-500 text-white rounded">Shop Now</button>
        </div>
    
    </div>
    <div class="grid grid-cols-2 gap-4">
      <div class="text-black bg-gray-300 p-6 rounded-lg ">
        <img src="./Photos/speak.png "
        className="object-contain "
        />
        <h2 class="text-xl font-bold">Speakers</h2>
        <p class="text-sm p-2 mt-2 font-bold">Amazon wireless speakers.</p>
        <button class=" hover:bg-orange-400 mt-4 px-4 py-2 bg-blue-500 text-white rounded">Shop Now</button>
      </div>
      <div class="bg-gray-800 text-white p-6 rounded-lg">
        <img src="./Photos/perfume.png"
          className="object-contain "
         />
        <h2 class="text-xl font-bold mt-4">Perfume</h2>
        <p class="text-sm mt-2 p-2 font-bold">GUCCI INTENSE OUD EDP.</p>
        <button class="mt-4 px-4 py-2 bg-blue-500 hover:bg-orange-400 text-white rounded">Shop Now</button>
      </div>
    </div>
  </div>
</div>
<div className="flex flex-row  justify-evenly align-center gap-y-6 mt-[155px] ">
<div className="flex flex-col items-center">
<div className="w-17 h-[85px] rounded-full overflow-hidden bg-blue-300 justify-self-start">
  <img src="./Photos/delivery.png" alt="Profile" className="w-full h-full object-cover bg-black"/>

</div>

<h1 className="text-2xl  font-bold text-black mt-[23px]">FREE AND FAST DELIVERY</h1>
<p className="text-lg font-bold mt-[7px] text-red-400">Free delivery for all orders over Rs.140</p>
</div>

<div className="flex flex-col items-center"> 
<div className="w-17 h-[85px] rounded-full overflow-hidden bg-blue-300">
 
  <img src="./Photos/Services.png" alt="Profile" className="w-full h-full object-cover bg-black"/>
</div>
<h1 className="text-2xl  font-bold text-black mt-[23px]">24/7 CUSTOMER SERVICE</h1>
<p className="text-lg font-bold mt-[7px] text-red-400">Friendly 24/7 customer support</p>
</div>

<div className="flex flex-col items-center">  

<div className="w-17 h-[85px] rounded-full overflow-hidden bg-blue-300">
  <img src="./Photos/customers.png" alt="Profile" className="w-full h-full object-cover bg-black"/>
</div>
<h1 className="text-2xl  font-bold text-black mt-[23px]">MONEY BACK GUARANTEE</h1>
<p className="text-lg font-bold mt-[7px] text-red-400">We reurn money within 30 days</p>
</div>
  </div>
  
</div>

  );
}

export default Home;

{/* // task need to completed
//slider sikna baki xa sikhai
//DB4444 */}
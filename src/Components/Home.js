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
        <img src="./Photos/sofa.jpg"
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
        <img src="./Photos/sofa.jpg"
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
         <img src="./Photos/sofa.jpg"
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


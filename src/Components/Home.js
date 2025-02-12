import ProductCard from "./ProductCard";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";

function Home() {
  const [value, setValue] = useState(4);
  const [value1, setValue1] = useState(3);
  const [value2, setValue2] = useState(1);
  const [value3, setValue3] = useState(2);
  const [value4, setValue4] = useState(1);
  const [value5, setValue5] = useState(3);
  const [value6, setValue6] = useState(5);
  const [value7, setValue7] = useState(4);
  const Navigate = useNavigate();

  const ManageNavigate = (path) => {
    Navigate(path);
  };

  const images = [
    "./Photos/ipone.png",
    "./Photos/laptop.jpg",
    "./Photos/adid.jpg",
    "./Photos/key.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="flex flex-col sm:h-[3300px] lap:h-[3300px] tab:h-[3500px] h-auto sm:ml-0 ml-6 ">
      <div className="mt-6 ml-aut0 sm:ml-[82px]">
        <ul className="space-y-2 text-sm sm:text-base mb-6">
          <li className="hover:text-gray-500 cursor-pointer">Womans Fashion</li>
          <li className="hover:text-red-800  cursor-pointer ">Men's Fashion</li>
          <li className="hover:text-red-800  cursor-pointer ">Electronics</li>
          <li className="hover:text-red-800  cursor-pointer ">Home & Styles</li>
          <li className="hover:text-red-800  cursor-pointer ">Medicin</li>
          <li className="hover:text-red-800  cursor-pointer ">
            Sports & Outdoor
          </li>
          <li className="hover:text-red-800  cursor-pointer ">Baby's Toys</li>
          <li className="hover:text-red-800  cursor-pointer ">
            {" "}
            Groceries & Pets
          </li>
          <li className="hover:text-red-800  cursor-pointer ">
            Health & Beauty
          </li>
        </ul>
      </div>
      <div className="ml-[310px] tab:mt-[-0px] bg-black lg:h-[280px] tab:h-[100px] sm:w-[820px] lg:mt-[-290px] justify-center items-center overflow-hidden relative hidden  xl:block z-10">
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Slide ${index + 1}`}
              className="sm:h-[270px] h-[90px] w-[820px] tab:h-[400px] object-contain flex-shrink-0"
            />
          ))}
        </div>
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-500 text-white p-4 text-2xl rounded-full"
        >
          <GrLinkPrevious />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-500 text-white p-4 rounded-full text-2xl"
        >
          <GrLinkNext />
        </button>
        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 w-2 rounded-full ${
                currentIndex === index ? "bg-gray-800" : "bg-white"
              }`}
            />
          ))}
        </div>
      </div>

      <div className=" mt-4 sm:ml-[92px] mb-[0px] sm:mt-[10px] p-auto sm:p-5 tab:mt-8">
        <h2 className="text-2xl sm:mt-[90px] mt-2 sm:text-4xl text-red-600 font-bold text-center sm:text-center  sm:pt-3">
          Flash Sales
        </h2>
      </div>

      <div className="sm:px-4 sm:mb-9  tab:mt-5">
        <ProductCard />
      </div>

      <div className="mt-[52px]  ml-[82px] tab:mt-[22px]">
        <p className="text-purple-600">Categories</p>
        <h3 className="font-bold text-2xl">Browse By Category</h3>
      </div>
      <div className=" pb-3 ml-[134px] tab:ml-[88px] tab:mr-auto tab:pl-auto tab:pr-auto  mr-[89px] mt-[22px] tab:mt-2 flex lg:flex-row tab:flex-row   lg:gap-[55px] align-middle flex-wrap gap-[20px] tab:gap-[40px]  ">
        <div
          onClick={() => ManageNavigate("/phones")}
          className=" border-2  w-[170px] h-[145px]  border-black  hover:bg-green-700  "
        >
          <img
            className="h-[67px] w-[250px] object-contain  mt-[23px] "
            src="./Photos/phone.png"
          />
          <p className="text-center mt-[22px]"> Phones</p>
        </div>

        <div
          onClick={() => ManageNavigate("/computers")}
          className=" border-2  w-[170px] h-[145px] border-black  hover:bg-blue-500 "
        >
          <img
            className="h-[67px] w-[250px] object-contain  mt-[23px] "
            src="./Photos/Comp.png"
          />
          <p className="text-center mt-[22px]">Computers</p>
        </div>

        <div
          onClick={() => ManageNavigate("/smart")}
          className=" border-2  w-[170px] h-[145px] border-black  hover:bg-gray-500"
        >
          <img
            className="h-[67px] w-[250px] object-contain  mt-[23px] "
            src="./Photos/watch.png"
          />
          <p className="text-center mt-[22px]"> SmartWatch</p>
        </div>

        <div
          onClick={() => ManageNavigate("/camera")}
          className="border-2 w-[170px] h-[145px] border-black hover:bg-red-600  bg-blue-50"
        >
          <img
            className="h-[67px] w-full object-contain mt-[23px]"
            src="./Photos/cam.png"
          />
          <p className="text-center mt-[22px]">Camera</p>
        </div>
        <div
          onClick={() => ManageNavigate("/head")}
          className=" border-2  w-[170px] h-[145px] border-black  hover:bg-rose-400 "
        >
          <img
            className="h-[67px] w-[250px] object-contain  mt-[23px] "
            src="./Photos/head.png"
          />
          <p className="text-center mt-[22px]"> HeadPhones</p>
        </div>

        <div
          onClick={() => ManageNavigate("/watch")}
          className=" border-2  w-[170px] h-[145px] border-black  hover:bg-pink-400 "
        >
          <img
            className="h-[67px] w-[250px] object-contain  mt-[23px] "
            src="./Photos/watch.png"
          />
          <p className="text-center mt-[22px]"> Watches</p>
        </div>
      </div>

      <h1 className="sm:text-3xl text-2xl font-bold sm:ml-[82px] tab:ml-[95px] mt-[52px] ml-11 sm:mb-0 mb-[22px] tab:mb-[12px]">
        Explore Our Products
      </h1>
      <div className="flex sm:flex-row gap-[75px] tab:gap-[55px] tab:flex-row tab:mr-auto tab:ml-auto align-middle flex-wrap lg:gap-16  mr-[32px] lg:mr-0  lg:ml-[224px] sm:mt-[22px]">
        <div className="bg-white p-4 shadow rounded-lg lg:h-[224px] w-[178px] tab:h-[221px] sm:mr-0 mr-6 gap-3 sm:mb-[32px]">
          <img
            src="./Photos/sofa.jpg"
            className="mb-[25px] object-contain h-[147px]"
            alt="Product"
          />
          <h2 className="text-1xl font-medium pb-6">Washing Machine</h2>
          <div className="flex flex-row">
            <p className="text-sm text-gray-500 pt-1">$500</p>
            <div className="items-center">
              <Rating
                name="product-rating"
                value={value}
                precision={0.5}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
                emptyIcon={
                  <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                }
                icon={<StarIcon fontSize="inherit" />}
              />
            </div>
            <span className="text-gray-500 text-sm ml-2 pt-[3px]">(35)</span>
          </div>
        </div>

        <div className="bg-white p-4 shadow rounded-lg h-[224px] w-[178px] ">
          <img
            src="./Photos/sofa.jpg"
            className="mb-[25px] object-contain h-[155px]"
            alt="Product"
          />
          <h2 className="text-1xl font-medium pb-6">Lambogrini</h2>
          <div className="flex flex-row">
            <p className="text-sm text-gray-500 pt-1"> $500</p>
            <div className="items-center">
              <Rating
                name="product-rating"
                value={value1}
                precision={0.5}
                onChange={(event, newValue) => {
                  setValue1(newValue);
                }}
                emptyIcon={
                  <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                }
                icon={<StarIcon fontSize="inherit" />}
              />
            </div>
            <span class="text-gray-500 text-sm ml-2 pt-[3px]">(35)</span>
          </div>
        </div>

        <div className="bg-white p-4 shadow rounded-lg h-[224px] w-[178px] ">
          <img
            src="https://as2.ftcdn.net/v2/jpg/08/54/65/19/1000_F_854651968_uwQxny5ac6OeKT3JbY4Rg2zA2PN2gt1i.webp"
            className="mb-[25px] object-contain h-[147px]"
            alt="Product"
          />
          <h2 className="text-1xl font-medium pb-6">Dumbell</h2>
          <div className="flex flex-row">
            <p className="text-sm text-gray-500 pt-1"> Rs.5000</p>
            <div className="items-center">
              <Rating
                name="product-rating"
                value={value2}
                precision={0.5}
                onChange={(event, newValue) => {
                  setValue2(newValue);
                }}
                emptyIcon={
                  <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                }
                icon={<StarIcon fontSize="inherit" />}
              />
            </div>
            <span class="text-gray-500 text-sm ml-2 pt-[3px]">(35)</span>
          </div>
        </div>

        <div className="bg-white p-4 shadow rounded-lg h-[224px] w-[178px] ">
          <img
            src="https://pngimg.com/uploads/football_boots/football_boots_PNG37.png"
            className="mb-[25px] object-contain h-[147px]"
            alt="Product"
          />
          <h2 className="text-1xl font-medium pb-6">Football Boot</h2>
          <div className="flex flex-row">
            <p className="text-sm text-gray-500 pt-1"> Rs.7000</p>
            <div className="items-center">
              <Rating
                name="product-rating"
                value={value3}
                precision={0.5}
                onChange={(event, newValue) => {
                  setValue3(newValue);
                }}
                emptyIcon={
                  <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                }
                icon={<StarIcon fontSize="inherit" />}
              />
            </div>
            <span class="text-gray-500 text-sm ml-2 pt-[3px]">(135)</span>
          </div>
        </div>
      </div>

      <div className="flex sm:flex-row sm:gap-[75px] align-middle flex-wrap gap-20 ml-[49px] mr-[23px] sm:mr-0 sm:ml-[224px] sm:mt-[22px] tab:mt-[-229px] lap:mt-[41px]">
        <div className="bg-white p-4 shadow rounded-lg h-[224px] w-[178px] ">
          <img
            src="./Photos/sofa.jpg"
            className="mb-[25px] object-contain h-[147px]"
            alt="Product"
          />
          <h2 className="text-1xl font-medium pb-6">item</h2>
          <div className="flex flex-row">
            <p className="text-sm text-gray-500 pt-1"> Rs.90000</p>
            <div className="items-center">
              <Rating
                name="product-rating"
                value={value4}
                precision={0.5}
                onChange={(event, newValue) => {
                  setValue4(newValue);
                }}
                emptyIcon={
                  <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                }
                icon={<StarIcon fontSize="inherit" />}
              />
            </div>
            <span class="text-gray-500 text-sm ml-2 pt-[3px]">(35)</span>
          </div>
        </div>

        <div className="bg-white p-4 shadow rounded-lg h-[224px] w-[178px]  ">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFNtMB2wJzHD-rFIOfWXMpEXHm6vaUD5uipw&s"
            className="mb-[25px] object-contain h-[155px]"
            alt="Product"
          />
          <h2 className="text-1xl font-medium pb-6">Lambogrini</h2>
          <div className="flex flex-row">
            <p className="text-sm text-gray-500 pt-1"> Rs.500000000</p>
            <div className="items-center">
              <Rating
                name="product-rating"
                value={value5}
                precision={0.5}
                onChange={(event, newValue) => {
                  setValue5(newValue);
                }}
                emptyIcon={
                  <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                }
                icon={<StarIcon fontSize="inherit" />}
              />
            </div>
            <span class="text-gray-500 text-sm ml-2 pt-[3px]">(35)</span>
          </div>
        </div>

        <div className="bg-white p-4 shadow rounded-lg h-[224px] w-[178px] ">
          <img
            src="https://as2.ftcdn.net/v2/jpg/08/54/65/19/1000_F_854651968_uwQxny5ac6OeKT3JbY4Rg2zA2PN2gt1i.webp"
            className="mb-[25px] object-contain h-[147px]"
            alt="Product"
          />
          <h2 className="text-1xl font-medium pb-6">Dumbell</h2>
          <div className="flex flex-row">
            <p className="text-sm text-gray-500 pt-1"> $500</p>
            <div className="items-center">
              <Rating
                name="product-rating"
                value={value6}
                precision={0.5}
                onChange={(event, newValue) => {
                  setValue6(newValue);
                }}
                emptyIcon={
                  <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                }
                icon={<StarIcon fontSize="inherit" />}
              />
            </div>
            <span class="text-gray-500 text-sm ml-2 pt-[3px]">(35)</span>
          </div>
        </div>

        <div className="bg-white p-4 shadow rounded-lg h-[224px] w-[178px] tab:mr-[79px] ">
          <img
            src="https://pngimg.com/uploads/football_boots/football_boots_PNG37.png"
            className="mb-[25px] object-contain h-[147px]"
            alt="Product"
          />
          <h2 className="text-1xl font-medium pb-6">Football Boot</h2>
          <div className="flex flex-row">
            <p className="text-sm text-gray-500 pt-1"> $100</p>
            <div className="items-center">
              <Rating
                name="product-rating"
                value={value7}
                precision={0.5}
                onChange={(event, newValue) => {
                  setValue7(newValue);
                }}
                emptyIcon={
                  <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                }
                icon={<StarIcon fontSize="inherit" />}
              />
            </div>
            <span class="text-gray-500 text-sm ml-2 pt-[3px]">(135)</span>
          </div>
        </div>
      </div>

      <div className="flex flex-row mt-[43px] justify-center ">
        <button
          onClick={() => ManageNavigate("/our")}
          className="bg-blue-500 text-white p-3 mb-[12px] hover:bg-gray-700 rounded-lg mt-4 sm:ml-0 ml-[12px] sm:mr-0 mr-[62px]"
        >
          View More Products
        </button>
      </div>

      <h1 className=" sm:ml-[98px] sm:mr-0 ml-[59px] mt-[34px] mb-[32px] text-3xl font-bold text-red-400">
        New Arrival
      </h1>

      <div class="grid grid-cols-2 gap-4 p-2 sm:ml-[96px] sm:mr-[96px] mr-[25px] tab:mr-0 tab:ml-3">
        <div class="sm:col-span-1 col-span-2 bg-black text-white lap:p-6 rounded-lg p-2  tab:h-[611px] lap:h-[830px]">
          <img
            src="./Photos/ps.png"
            className="object-contain pt-[34px] tab:pt-[23px]"
          />
          <h2 class="text-2xl font-bold pt-12">PlayStation 5</h2>
          <p class="text-sm mt-10 tab:mt-6 p-2">
            Black and White version of the PS5 coming out on sale.
          </p>
          <button
            onClick={() => ManageNavigate("/appli")}
            class=" hover:bg-orange-400 mt-4 sm:px-4 sm:py-2 sm:w-[150px] w-[280px] py-2 bg-blue-500 text-white rounded"
          >
            Shop Now
          </button>
        </div>
        <div class="col-span-1 grid grid-rows-2 gap-4">
          <div class="bg-black text-white sm:p-6 rounded-lg p-3 lap:w-[700px] w-[300px] tab:w-[320px]">
            <div className="flex flex-col">
              <img
                src="./Photos/women.png"
                className="object-contain  sm:h-[190px] sm:ml-[170px]  h-[160px] w-[230px] ml-[20px] tab:ml-2 "
              />
              <h2 class="text-xl font-bold">Women's Collections</h2>
              <p class="text-sm mt-2 tab:mt-1">
                Featured woman collections that give
                <br />
                you another vibe.
              </p>
              <button
                onClick={() => ManageNavigate("/women")}
                class="  hover:bg-orange-400 mt-4 px-4 py-2 bg-blue-500 text-white rounded"
              >
                Shop Now
              </button>
            </div>
          </div>
          <div class="grid grid-cols-2 gap-4 tab:gap-1  ">
            <div class="text-black bg-gray-300 lap:p-6 rounded-lg p-3 lap:h-[404px] h-[290px] tab:h-[228px] lap:w-[340px] tab:w-[153px]">
              <img
                src="./Photos/speak.png "
                className="object-contain tab:w-[56px] tab:h-[95px] lap:w-[210px] lap:h-[211px]"
              />
              <h2 class="lap:text-xl tab:text-sm font-bold">Speakers</h2>
              <p class="text-sm sm:p-2 sm:mt-2 p-1 lap:p-2 lap:mt-2  tab:p-1 tab:mt-0  font-bold">
                Amazon wireless speakers.
              </p>
              <button
                onClick={() => ManageNavigate("/appli")}
                class=" hover:bg-orange-400 mt-4 px-4 py-2 lap:mt-4 lap:px-4 lap:py-2  tab:mt-2 tab:px-2 tab:py-1 bg-blue-500 text-white rounded"
              >
                Shop Now
              </button>
            </div>
            <div class="bg-gray-800 text-white sm:p-6 rounded-lg lap:h-[404px] h-[290px] p-4  tab:h-[228px] lap:w-[340px] tab:w-[146px] ">
              <img
                src="./Photos/perfume.png"
                className="object-contain tab:w-[56px] tab:h-[75px] lap:w-[210px] lap:h-[211px] "
              />
              <h2 class="text-xl lap:text-xl  tab:text-sm  font-bold sm:mt-4 mt-2 lap:mt-4 tab:mt-0">
                Perfume
              </h2>
              <p class="text-sm sm:mt-2 sm:p-2 mt-1 lap:mt-2 lap:p-2 tab:mt-0 tab:p-1  lap:text-sm tab:text-[10px]  font-bold">
                GUCCI INTENSE OUD EDP.
              </p>
              <button
                onClick={() => ManageNavigate("/women")}
                class="mt-4 px-4 py-2 lap:mt-4 lap:px-4 lap:py-2 tab:mt-0 tab:px-2 tab:py-1  bg-blue-500 hover:bg-orange-400 text-white rounded"
              >
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex sm:flex-row lap:flex-row justify-evenly align-center lap:gap-y-6 lap:mt-[102px] sm:gap-y-6 sm:mt-[155px]  mt-16 flex-col tab:mt-[-72px]  tab:mb-2 sm:mb-5 mb-9">
        <div className="flex flex-col items-center">
          <div className="w-17 h-[85px] rounded-full overflow-hidden bg-blue-300 justify-self-start">
            <img
              src="./Photos/delivery.png"
              alt="Profile"
              className="w-full h-full lap:w-full lap:h-full  object-cover bg-black"
            />
          </div>

          <h1 className="text-2xl lap:text-2xl tab:text-[18px]  font-bold text-black mt-[23px] lap:mt-[23px] ">
            FREE AND FAST DELIVERY
          </h1>
          <p className="text-lg lap:text-lg tab:text-[11px] font-bold mt-[7px] text-red-400">
            Free delivery for all orders over Rs.140
          </p>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-17 h-[85px] rounded-full overflow-hidden bg-blue-300">
            <img
              src="./Photos/Services.png"
              alt="Profile"
              className="w-full h-full object-cover bg-black"
            />
          </div>
          <h1 className="text-2xl lap:text-2xl tab:text-[20px]   font-bold text-black mt-[23px]">
            24/7 CUSTOMER SERVICE
          </h1>
          <p className="text-lg lap:text-lg tab:text-[11px]  font-bold mt-[7px] text-red-400">
            Friendly 24/7 customer support
          </p>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-17 h-[85px] rounded-full overflow-hidden bg-blue-300">
            <img
              src="./Photos/customers.png"
              alt="Profile"
              className="w-full h-full object-cover bg-black"
            />
          </div>
          <h1 className="text-2xl lap:text-2xl tab:text-[18px]   font-bold text-black mt-[23px]">
            MONEY BACK GUARANTEE
          </h1>
          <p className="text-lg lap:text-lg tab:text-[11px] font-bold mt-[7px] text-red-400">
            We reurn money within 30 days
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;

import { FaHeart, FaEye } from 'react-icons/fa';
import { useOutletContext } from 'react-router-dom';



function ProductCard() {
  const { handleCart } = useOutletContext();
  return (
    <div className=" mt-[32px] ml-[122px] flex space-x-5  align-center justify-center flex-wrap">
      <div className="relative w-[230px] bg-green-300 shadow-lg rounded-lg overflow-hidden">
        <img className="w-full h-[200px] object-cover" src="./Photos/game.png" alt="item1" />
        <div className="absolute top-3 right-1 flex flex-col space-x-1  text-green-900 ">
          <FaHeart className="text-xl cursor-pointer text-red-500 mb-[12px] " />
          <FaEye className="text-xl cursor-pointer text-blue-500" />
        </div>
        <div className="p-5 ">
          <button className="font-semibold text-lg cursor-pointer hover:bg-green-200  align-center"
            onClick={handleCart}
          >Add to Cart</button>
       
        </div>
    
      </div>
      
      <div className="relative w-[180px] bg-green-300 shadow-lg rounded-lg overflow-hidden  ">
        <img className="w-full h-[200px] object-cover" src="./Photos/i.jpg" alt="item1" />
        <div className="absolute top-3 right-1 flex flex-col space-x-1  text-green-900 ">
          <FaHeart className="text-xl cursor-pointer text-red-500 mb-[12px] " />
          <FaEye className="text-xl cursor-pointer text-blue-500" />
        </div>
        <div className="p-7 ">
          <button className="font-semibold text-lg cursor-pointer hover:bg-green-200  align-center"
            onClick={handleCart}
            >Add to Cart</button>
       
        </div>
    
      </div>

      <div className="relative w-[230px] bg-white shadow-lg rounded-lg overflow-hidden">
        <img className="w-full h-[200px] object-cover" src="https://images6.alphacoders.com/133/1338694.png" alt="item1" />
        <div className="absolute top-3 right-1 flex flex-col space-x-1  text-green-900 ">
          <FaHeart className="text-xl cursor-pointer text-white-500 mb-[12px] " />
          <FaEye className="text-xl cursor-pointer text-blue-500" />
        </div>
        <div className="p-7 ">
          <button className="font-semibold text-lg cursor-pointer hover:bg-green-200  align-center"
            onClick={handleCart}
          >Add to Cart</button>
       
        </div>
    
      </div>

      <div className="relative w-[230px] bg-green-300 shadow-lg rounded-lg overflow-hidden">
        <img className="w-full h-[200px] object-cover" src="./Photos/game.png" alt="item1" />
        <div className="absolute top-3 right-1 flex flex-col space-x-1  text-green-900 ">
          <FaHeart className="text-xl cursor-pointer text-red-500 mb-[12px] " />
          <FaEye className="text-xl cursor-pointer text-blue-500" />
        </div>
        <div className="p-7 ">
          <button className="font-semibold text-lg cursor-pointer hover:bg-green-200  align-center"
            onClick={handleCart}
          >Add to Cart</button>
       
        </div>
    
      </div>

      

      <div className="relative w-[230px] bg-green-300 shadow-lg rounded-lg overflow-hidden">
        <img className="w-full h-[200px] object-cover" src="./Photos/game.png" alt="item1" />
        <div className="absolute top-3 right-1 flex flex-col space-x-1  text-green-900 ">
          <FaHeart className="text-xl cursor-pointer text-red-500 mb-[12px] " />
          <FaEye className="text-xl cursor-pointer text-blue-500" />
        </div>
        <div className="p-7 ">
          <button className="font-semibold text-lg cursor-pointer hover:bg-green-200  align-center"
            onClick={handleCart}
          >Add to Cart</button>
       
        </div>
    
      </div>

      <div className='w-full mt-6 flex justify-center'>
        <button className="bg-green-500 text-white p-2 rounded-lg w-[300px] hover:bg-slate-600 ">View More Products</button>
      </div>
    </div>
  );
}

export default ProductCard;

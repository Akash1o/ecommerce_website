import { FaHeart, FaEye } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { addtoCart } from '../store/cartSlice';

function ProductCard() {
  const dispatch = useDispatch();
  const products = [
    { id: 1, name: 'Joystick', price: 5000, image: './Photos/game.png' },
    { id: 2, name: 'Smartphone', price: 3000, image: './Photos/i.jpg' },
    { id: 3, name: 'Laptop', price: 2000, image: 'https://images6.alphacoders.com/133/1338694.png' },
    { id: 4, name: 'Item 4', price: 4500, image: './Photos/game.png' },
    { id: 5, name: 'Item 5', price: 6000, image: './Photos/game.png' },
  ];

  const handletoCart = (product) => {
    dispatch(addtoCart(product));
  };

  return (
    <div className="sm:mt-[32px] ml-[122px] mt-[10px] flex flex-wrap justify-center gap-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="relative w-[230px] bg-green-300 shadow-lg rounded-lg overflow-hidden"
        >
          <img className="w-full h-[200px] object-cover" src={product.image} alt={product.name} />
          <div className="absolute top-3 right-1 flex flex-col space-x-1 text-green-900">
            <FaHeart className="text-xl cursor-pointer text-red-500 mb-[12px]" />
            <FaEye className="text-xl cursor-pointer text-blue-500" />
          </div>
          <div className="p-5">
            <button
              className="font-semibold text-lg cursor-pointer hover:bg-green-200 align-center"
              onClick={() => handletoCart(product)} // Pass product details
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
      <div className="w-full mt-6 flex justify-center">
        <button className="bg-green-500 text-white p-2 rounded-lg w-[300px] hover:bg-slate-600">
          View More Products
        </button>
      </div>
    </div>
  );
}

export default ProductCard;

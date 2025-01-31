import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Cart() {
  const navigate = useNavigate();

  const cartItems = useSelector((state) => state.cart.items);

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };
  // .reduce() is used to take an array and reduce to it into single vale.



  const calculateShipping = () => {
    return cartItems.length > 0 ? 50 : 0; // shipping cost checker.
  };

  const calculateTotal = () => {
    return calculateSubtotal() + calculateShipping();
  };

  const ControlNavigate =(path)=>{
     navigate(path);
  };

 
  return (
    <div className="ml-[89px] flex flex-col mt-[34px] min-h-screen">
      <div className="flex flex-row">
        <h1 onClick={()=>ControlNavigate('/')} className="text-xl cursor-pointer">Home / </h1>
        <h1 className="ml-[8px] font-bold text-blue-600 text-xl">Cart</h1>
      </div>

      <div className="ml-[138px] flex flex-row mt-[20px] h-[50px] justify-evenly w-[820px] bg-white border p-3 border-gray-300 rounded-[3px]">
        <h1>Product</h1>
        <h1>Price</h1>
        <h1>Quantity</h1>
        <h1>Subtotal</h1>
      </div>

      {cartItems.map((item) => (
        <div
          key={item.id}
          className="ml-[138px] flex flex-row mt-[29px] gap-x-36 h-[70px] w-[820px] bg-white border p-3 border-gray-300 rounded-[3px]"
        >
          <div className="flex flex-row ml-[89px]">
            <img className="w-[40px] h-[50px] object-contain" src={item.image} alt={item.name} />
            <span className="text-sm mt-[9px]">{item.name}</span>
          </div>
          <h1>Rs.{item.price}</h1>
          <h1>{item.quantity}</h1>
          <h1 className="pr-[400px]">Rs.{item.price * item.quantity}</h1>
        </div>
      ))}

      <div className="flex justify-between ml-[76px] mr-[478px] mt-[20px]">
        <button
         
          className="border-yellow-500 rounded-[3px] h-[45px] px-4 py-2 border-2 hover:bg-orange-200"
        >
          Return to Shop
        </button>
        <button className="border-red-600 rounded-[3px] h-[45px] px-4 py-2 border-2 hover:bg-orange-600">
          Update Cart
        </button>
      </div>

      <div className="flex flex-row gap-2 ml-[76px] mt-[65px]">
        <input
          value="Coupon Code"
          className="border-2 text-left text-pink-300 text-xl border-green-600 rounded-[3px] h-[48px] w-[260px]"
        />
        <button className="border-black bg-red-600 rounded-[3px] h-[48px] px-4 py-2 border-2 text-white text-bold">
          Apply Coupon
        </button>
      </div>

      <div className="flex flex-col gap-2 mb-[23px] ml-[650px] border-2 border-black rounded-[3px] h-[240px] w-[300px]">
        <h1 className="text-center text-2xl font-bold">Cart Total</h1>
        <h1 className="ml-3">Subtotal : Rs.{calculateSubtotal()}</h1>
        <p className="inline-block border-b-2 border-gray-500 mb-[3px] ml-3 mr-3"> </p>
        <h1 className="ml-3">Shipping: Rs.{calculateShipping()}</h1>
        <p className="inline-block border-b-2 border-gray-500 mb-[3px] ml-3 mr-3"> </p>
        <h1 className="ml-3">Total: Rs.{calculateTotal()}</h1>
        <p className="inline-block border-b-2 border-gray-500 mb-[3px] ml-3 mr-3"> </p>
        <button onClick={()=>ControlNavigate("/checkout")}
         className="bg-green-500 text-white p-2 rounded-lg w-[240px] hover:bg-slate-600 ml-3 mr-2">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}

export default Cart;

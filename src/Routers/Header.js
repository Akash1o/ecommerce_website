import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header({ cartCount }) {
  const cartCounts = useSelector((state) => state.cart.totalQuantity);
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleHome = () => {
    navigate('/');
  };

  const handleClickCart = () => {
    navigate('/cart');
  };

  return (
    <header className="shadow sticky z-50 top-0 bg-white">
      <div className="w-full py-5 px-6 flex justify-between items-center">
        <div className="text-4xl font-bold flex items-center space-x-2">
          <img src="/Photos/Vector.png" alt="logo" className="h-8 w-8" />
          <span onClick={handleHome} className="text-green-700 cursor-pointer">
            Sasto-Bazaar
          </span>
        </div>

        <button className="text-3xl md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>

        <nav
          className={`absolute top-20 left-0 w-full bg-white shadow-md md:static md:w-auto md:flex md:items-center md:shadow-none transition-all duration-300 ${
            menuOpen ? 'block' : 'hidden'
          }`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-8">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? 'text-blue-500 text-[19px] font-bold border-b-2 border-blue-500'
                    : 'text-gray-700 hover:text-blue-500 text-[19px] font-bold'
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? 'text-blue-500 text-[19px] font-bold border-b-2 border-blue-500'
                    : 'text-gray-700 hover:text-blue-500 text-[19px] font-bold'
                }
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? 'text-red-500 text-[19px] font-bold border-b-2 border-red-500'
                    : 'text-gray-700 hover:text-red-500 text-[19px] font-bold'
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/signup"
                className={({ isActive }) =>
                  isActive
                    ? 'text-pink-500 text-[19px] font-bold border-b-2 border-blue-500'
                    : 'text-gray-700 hover:text-blue-500 text-[19px] font-bold'
                }
              >
                Signup
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className="hidden md:flex space-x-2">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for products..."
              className="py-1 px-1 rounded-md border border-green-200 focus:outline-none focus:ring-5 focus:ring-red-600"
            />
            <span className="absolute right-3 top-1 text-white">🔍</span>
          </div>

          <div className="relative flex items-center space-x-3">
            <div className="relative">
              <span
                onClick={handleClickCart}
                className="text-2xl text-gray-700 hover:text-blue-500 cursor-pointer"
              >
                🛒
              </span>
              {cartCounts > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center transform translate-x-3 translate-y-[-10px]">
                  {cartCounts}
                </span>
              )}
            </div>
            <span className="text-2xl text-gray-700 hover:text-red-500 cursor-pointer">
              ❤️
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

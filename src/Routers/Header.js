import React from 'react'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function Header( {cartCount} ) {
  const navigate = useNavigate();
  const handlleClickCart = () => {
    navigate('/cart')
  }
  return (
    <header className="shadow sticky z-50 top-0 ">
<div className="w-full bg-white py-5 px-6 flex justify-between items-center">
<div className="text-4xl font-bold flex items-center space-x-2 ml-9">
  <img src='/Photos/Vector.png' alt='logo' className='h-8 w-8 '/>
<span className="text-green-700 ">Sasto-Bazaar</span> 
</div>
<nav>
<ul className="flex space-x-8">
  <li>
    <NavLink
      to="/"
      className={({ isActive }) =>
        isActive
          ? "text-blue-500 text-[19px] font-bold border-b-2 border-blue-500"
          : "text-gray-700 hover:text-blue-500 text-[19px] font-bold"
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
          ? "text-blue-500 text-[19px] font-bold border-b-2 border-blue-500"
          : "text-gray-700 hover:text-blue-500 text-[19px] font-bold"
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
          ? "text-red-500 text-[19px] font-bold border-b-2 border-red-500"
          : "text-gray-700 hover:text-red-500 text-[19px] font-bold"
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
          ? "text-pink-500 text-[19px] font-bold border-b-2 border-blue-500"
          : "text-gray-700 hover:text-blue-500 text-[19px] font-bold"
      }
    >
      Signup
    </NavLink>
  </li>
</ul>
      </nav>

 <div className='flex space-x-2 mr-[140px]' >
<div className="relative ">
<input 
        type="text" 
        placeholder="Search for products..." 
        className="py-1 px-1 rounded-md border border-green-200 focus:outline-none focus:ring-5 focus:ring-red-600"
      />
  <span className="absolute right-3 top-1 text-white">🔍</span> 

</div>

<div className="relative flex items-center space-x-3 gap-y-5 mr-[140px]">
<div className="relative"> 
<span onClick={handlleClickCart}
className="text-2xl text-gray-700 hover:text-bl}ue-500 cursor-pointer">🛒</span>
          {cartCount > 0 && (
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center transform translate-x-3 translate-y-[-10px]">
              {cartCount}
            </span>
          
          )}
       


    </div>
    <span className="text-2xl text-gray-700 hover:text-red-500 cursor-pointer">❤️</span>
    </div>

    </div>




  </div>


</header>


   

  )
}

export default Header
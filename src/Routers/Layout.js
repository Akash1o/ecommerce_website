import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import { useState } from 'react'

function Layout() {
  const [cartCount, setCartCount] = useState(0);
  const handleCart =()=>{
    setCartCount(cartCount+1);
  }
  return (
    <div className="min-h-screen flex flex-col">
      <Header cartCount={cartCount} />
      <main className='flex-grow'>
        <Outlet context={{handleCart}} />
      </main>
      <Footer/>
    </div>
  );
}

export default Layout;
import React from "react";

function Footer() {
  return (
    <footer className="bg-black text-white py-8 px-4">
      <div className="container mx-auto flex flex-wrap justify-between gap-8">
        <div className="flex flex-col gap-3 w-full md:w-1/5">
          <h2 className="text-2xl font-bold">Exclusive</h2>
          <p className="text-lg">Subscribe</p>
          <p className="font-thin">Get 10% off on first buy.</p>
          <input
            type="text"
            placeholder="Enter your email"
            className="p-2 border rounded bg-inherit text-white placeholder-white"
          />
        </div>
        <div className="flex flex-col gap-3 w-full md:w-1/5">
          <h2 className="text-2xl font-bold">Support</h2>
          <p className="font-thin">
            Swoyambhu, <br />
            Kathmandu 0435, Nepal
          </p>
          <p className="font-thin">sastobazaar@gmail.com</p>
          <p className="font-thin">9812345669</p>
        </div>
        <div className="flex flex-col gap-3 w-full md:w-1/5">
          <h2 className="text-2xl font-bold">Account</h2>
          <p className="font-thin">Login/Register</p>
          <p className="font-thin">Cart</p>
          <p className="font-thin">Wishlist</p>
          <p className="font-thin">Shop</p>
        </div>
        <div className="flex flex-col gap-3 w-full md:w-1/5">
          <h2 className="text-2xl font-bold">Quick Link</h2>
          <p className="font-thin">Privacy Policy</p>
          <p className="font-thin">Terms of Use</p>
          <p className="font-thin">FAQ</p>
          <p className="font-thin">Contact</p>
        </div>
        <div className="flex flex-col gap-3 w-full md:w-1/5">
          <h2 className="text-2xl font-bold">Download App</h2>
          <p className="font-thin">Save Rs.500 with App New User Only</p>
          <div className="flex flex-wrap items-center justify-start gap-4 mb-4">
            <img src="./Photos/qr.png" className="w-20 h-20 object-contain" />
            <div className="flex space-x-3">
              <img src="./Photos/play.png" className="w-24 object-contain" />
              <img src="./Photos/appj.png" className="w-24 object-contain" />
            </div>
          </div>
          <div className="flex space-x-4 mt-3">
            <img src="./Photos/fb.png" className="w-5 h-6 object-contain" />
            <img src="./Photos/twit.png" className="w-5 h-6 object-contain" />
            <img src="./Photos/link.png" className="w-5 h-6 object-contain" />
            <img src="./Photos/ig.png" className="w-5 h-6 object-contain" />
          </div>
          <p className="font-thin text-center mt-4">
            Copyright Akash 2024. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

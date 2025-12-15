import React from "react";
import { Link } from "react-router";
import instaImg1 from "../assets/instagram-1.jpg"
import instaImg2 from "../assets/instagram-2.jpg"
import instaImg3 from "../assets/instagram-3.jpg"
import instaImg4 from "../assets/instagram-4.jpg"
import instaImg5 from "../assets/instagram-5.jpg"
import instaImg6 from "../assets/instagram-6.jpg"

const Footer = () => {
  return (
    <>
      <footer className=" mx-auto py-10 px-4  max-w-[1200px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="">
          <h4>CONTACT INFO</h4>
          <p className="mb-4 font-medium text-gray-400">
            <span className="mr-2 text-xl text-red-600">
              <i className="ri-map-pin-2-fill"></i>
            </span>
            123, London Bridge Street, London
          </p>
          <p className="mb-4 font-medium text-gray-400">
            <span className="mr-2 text-xl text-red-600">
              <i className="ri-mail-fill"></i>
            </span>
            support@Lebaba.com
          </p>
          <p className="mb-4 font-medium text-gray-400">
            <span className="mr-2 text-xl text-red-600">
              <i className="ri-phone-fill"></i>
            </span>
            (+012) 3456 789
          </p>
        </div>
        <div>
          <h4>COMPANY</h4>
          <Link className="block mb-4 font-medium text-gray-400 hover:text-red-600" to="#">Home</Link>
          <Link className="block mb-4 font-medium text-gray-400 hover:text-red-600" to="#">About Us</Link>
          <Link className="block mb-4 font-medium text-gray-400 hover:text-red-600" to="#">Work With Us</Link>
          <Link className="block mb-4 font-medium text-gray-400 hover:text-red-600" to="#">Our Blog</Link>
          <Link className="block mb-4 font-medium text-gray-400 hover:text-red-600" to="#">Terms &amp; Conditions</Link>
        </div>
        <div>
          <h4>USEFUL LINK</h4>
          <Link className="block mb-4 font-medium text-gray-400 hover:text-red-600" to="#">Help</Link>
          <Link className="block mb-4 font-medium text-gray-400 hover:text-red-600" to="#">Track My Order</Link>
          <Link className="block mb-4 font-medium text-gray-400 hover:text-red-600" to="#">Men</Link>
          <Link className="block mb-4 font-medium text-gray-400 hover:text-red-600" to="#">Women</Link>
          <Link className="block mb-4 font-medium text-gray-400 hover:text-red-600" to="#">Dresses</Link>
        </div>
        
      </footer>
      <div className="p-4 text-center text-xs text-gray-400 border-t-2 border-gray-100">
        Copyright © 2025 Web Design Mastery. All rights reserved.
        <img src="https://www.facebook.com/photo/?fbid=3871813786430051&set=a.1686163371661781" alt="" />
      </div>
    </>
  );
};

export default Footer;

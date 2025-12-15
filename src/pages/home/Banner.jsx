import React from "react";
import bannerImg from "../../assets/header.png"
import { Link } from "react-router";

const Banner = () => {
  return (
    <section className="max-w-[1400px] mx-auto py-20 px-4 min-h-[650px] b md:bg-red-200 bg-gray-700 rounded-b-lg grid grid-cols-1  md:grid-cols-2 gap-8 items-center">
      <div className="max-w-xl ml-auto z-30">
        <h4 className="text-base font-medium text-red-600">UP TO 20% DISCOUNT ON</h4>
        <h1 className="text-6xl font-bold text-white md:text-gray-900 my-2">Girl's Fashion</h1>
        <p className="mb-8 text-gray-400 md:text-gray-600">
          Discover the latest trends and express your unique style with our
          Women's Fashion website. Explore a curated collection of clothing,
          accessories, and footwear that caters to every taste and occasion.
        </p>
        <button className="btn bg-primary px-4 py-2 rounded-md text-white">
          <Link to="/shop">EXPLORE NOW</Link>
        </button>
      </div>
      <div className="relative h-full">
        <img className="absolute left-1/2 -bottom-20 -translate-x-1/2 max-w-[500px] brightness-40 md:brightness-100" src={bannerImg} alt="header" />
      </div>
    </section>
  );
};

export default Banner;

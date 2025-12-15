import React from "react";
import dealsImg from "../../assets/deals.png"

const DealsSection = () => {
  return (
    <section className="max-w-[1400px] mx-auto py-20 px-4 bg-red-200 rounded-lg grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div className="relative h-full">
        <img className="absolute left-1/2 hidden md:block -bottom-20 -translate-x-1/2 max-w-[550px]" src={dealsImg} alt="deals" />
      </div>
      <div className="max-w-xl mr-auto">
        <h5 className="mb-4 text-base font-medium text-red-600">Get Up To 20% Discount</h5>
        <h4 className="mb-4 text-2xl font-bold text-gray-900">Deals Of This Month</h4>
        <p className="mb-8 text-gray-500">
          Our Women's Fashion Deals of the Month are here to make your style
          dreams a reality without breaking the bank. Discover a curated
          collection of exquisite clothing, accessories, and footwear, all
          handpicked to elevate your wardrobe.
        </p>
        <div className="flex items-center gap-4 flex-wrap">
          <div className="h-20 w-20 grid place-content-center text-center bg-white rounded-full shadow-md">
            <h4 className="mb-0 text-xl text-gray-900">14</h4>
            <p className="mb-0 font-medium text-gray-900">Days</p>
          </div>
          <div className="h-20 w-20 grid place-content-center text-center bg-white rounded-full shadow-md">
            <h4 className="mb-0 text-xl text-gray-900">20</h4>
            <p className="mb-0 font-medium text-gray-900">Hours</p>
          </div>
          <div className="h-20 w-20 grid place-content-center text-center bg-white rounded-full shadow-md">
            <h4 className="mb-0 text-xl text-gray-900">15</h4>
            <p className="mb-0 font-medium text-gray-900">Mins</p>
          </div>
          <div className="h-20 w-20 grid place-content-center text-center bg-white rounded-full shadow-md">
            <h4 className="mb-0 text-xl text-gray-900">05</h4>
            <p className="mb-0 font-medium text-gray-900">Secs</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DealsSection;

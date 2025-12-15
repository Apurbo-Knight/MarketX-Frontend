import React from "react";
import card1 from "../../assets/card-1.png"
import card2 from "../../assets/card-2.png"
import card3 from "../../assets/card-3.png"

const Trends = () => {
  return (
    <section className="max-w-[1400px] mx-auto py-20 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <div className="relative shadow-md">
        <img className="rounded-md" src={card1} alt="Womens Shirt" />
        <div className="absolute top-1/2 left-1/2 -translate-x-[15%] -translate-y-1/2">
          <p className="text-sm font-medium text-red-600">2023 Trend</p>
          <h4 className="mb-4 text-lg font-bold text-gray-900">Womens Shirt</h4>
          <a className="text-gray-900 underline" href="#">Discover More +</a>
        </div>
      </div>
      <div className="relative shadow-md">
        <img className="rounded-md" src={card2} alt="Womens Dresses" />
        <div className="absolute top-1/2 left-1/2 -translate-x-[15%] -translate-y-1/2">
          <p className="text-sm font-medium text-red-600">2023 Trend</p>
          <h4 className="mb-4 text-lg font-bold text-gray-900">Womens Dresses</h4>
          <a className="text-gray-900 underline" href="#">Discover More +</a>
        </div>
      </div>
      <div className="relative shadow-md">
        <img className="rounded-md" src={card3} alt="Womens Casuals" />
        <div className="absolute top-1/2 left-1/2 -translate-x-[15%] -translate-y-1/2">
          <p className="text-sm font-medium text-red-600">2023 Trend</p>
          <h4 className="mb-4 text-lg font-bold text-gray-900">Womens Casuals</h4>
          <a className="text-gray-900 underline" href="#">Discover More +</a>
        </div>
      </div>
    </section>
  );
};

export default Trends;

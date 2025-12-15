import React from "react";

const Blogs = () => {
  return (
    <section className="max-w-[1400px] mx-auto py-20 px-4 bg-gray-50 rounded-2xl">
      {/* Section Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Latest From Blog
        </h2>
        <p className="mt-3 max-w-[500px] mx-auto text-gray-500 text-sm md:text-base">
          Elevate your wardrobe with our freshest style tips, trends, and
          inspiration on our blog.
        </p>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:p-8">
        {/* Blog Card 1 */}
        <div className="bg-white overflow-hidden rounded-xl shadow-sm hover:shadow-lg cursor-pointer transform hover:scale-[1.03] transition-all duration-300">
          <img
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop"
            alt="Mastering the Art of Capsule Wardrobes"
            className="w-full h-56 object-cover"
          />
          <div className="p-5 text-center">
            <h6 className="text-xs font-semibold text-red-600 uppercase tracking-wide">
              Timeless Elegance
            </h6>
            <h4 className="mt-1 mb-2 text-lg font-bold text-gray-900 leading-snug">
              Mastering the Art of Capsule Wardrobes
            </h4>
            <p className="text-sm font-medium text-gray-400">
              12th August 2022
            </p>
          </div>
        </div>

        {/* Blog Card 2 */}
        <div className="bg-white overflow-hidden rounded-xl shadow-sm hover:shadow-lg cursor-pointer transform hover:scale-[1.03] transition-all duration-300">
          <img
            src="https://images.unsplash.com/photo-1700159017572-de76bb0c5719?q=80&w=2072&auto=format&fit=crop"
            alt="Unveiling the Hottest Beachwear Trends"
            className="w-full h-56 object-cover"
          />
          <div className="p-5 text-center">
            <h6 className="text-xs font-semibold text-red-600 uppercase tracking-wide">
              Summer Breeze
            </h6>
            <h4 className="mt-1 mb-2 text-lg font-bold text-gray-900 leading-snug">
              Unveiling the Hottest Beachwear Trends
            </h4>
            <p className="text-sm font-medium text-gray-400">
              18th January 2023
            </p>
          </div>
        </div>

        {/* Blog Card 3 */}
        <div className="bg-white overflow-hidden rounded-xl shadow-sm hover:shadow-lg cursor-pointer transform hover:scale-[1.03] transition-all duration-300">
          <img
            src="https://plus.unsplash.com/premium_photo-1682142715511-27bfbfdc044f?q=80&w=2069&auto=format&fit=crop"
            alt="Navigating the World of Women's Tailoring"
            className="w-full h-56 object-cover"
          />
          <div className="p-5 text-center">
            <h6 className="text-xs font-semibold text-red-600 uppercase tracking-wide">
              Power Dressing
            </h6>
            <h4 className="mt-1 mb-2 text-lg font-bold text-gray-900 leading-snug">
              Navigating the World of Women's Tailoring
            </h4>
            <p className="text-sm font-medium text-gray-400">
              5th January 2025
            </p>
          </div>
        </div>

        {/* Blog Card 4 */}
        <div className="bg-white overflow-hidden rounded-xl shadow-sm hover:shadow-lg cursor-pointer transform hover:scale-[1.03] transition-all duration-300">
          <img
            src="https://plus.unsplash.com/premium_photo-1713720663924-4e3fe8f20f79?q=80&w=1948&auto=format&fit=crop"
            alt="The World's Best Fashion Fair 2025"
            className="w-full h-56 object-cover"
          />
          <div className="p-5 text-center">
            <h6 className="text-xs font-semibold text-red-600 uppercase tracking-wide">
              New York Times
            </h6>
            <h4 className="mt-1 mb-2 text-lg font-bold text-gray-900 leading-snug">
              The World's Best Fashion Fair 2025
            </h4>
            <p className="text-sm font-medium text-gray-400">
              25th May 2025
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;

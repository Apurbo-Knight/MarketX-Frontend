import React from "react";

const Features = () => {
  return (
    <section className="max-w-[1400px] mx-auto py-16 px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-center">
      {/* Feature 1 */}
      <div className="flex flex-col items-center max-w-xs mx-auto">
        <span className="mb-4 inline-flex items-center justify-center text-4xl text-red-600 bg-red-100 w-16 h-16 rounded-full transition-transform duration-300 hover:scale-110">
          <i className="ri-truck-line"></i>
        </span>
        <h4 className="mb-2 text-lg md:text-xl font-bold text-gray-900">
          Free Delivery
        </h4>
        <p className="text-sm text-gray-500 leading-relaxed">
          Enjoy convenient shopping from anywhere with fast, free delivery.
        </p>
      </div>

      {/* Feature 2 */}
      <div className="flex flex-col items-center max-w-xs mx-auto">
        <span className="mb-4 inline-flex items-center justify-center text-4xl text-red-600 bg-red-100 w-16 h-16 rounded-full transition-transform duration-300 hover:scale-110">
          <i className="ri-money-dollar-circle-line"></i>
        </span>
        <h4 className="mb-2 text-lg md:text-xl font-bold text-gray-900">
          100% Money Back Guarantee
        </h4>
        <p className="text-sm text-gray-500 leading-relaxed">
          Shop confidently with our hassle-free refund and review system.
        </p>
      </div>

      {/* Feature 3 */}
      <div className="flex flex-col items-center max-w-xs mx-auto">
        <span className="mb-4 inline-flex items-center justify-center text-4xl text-red-600 bg-red-100 w-16 h-16 rounded-full transition-transform duration-300 hover:scale-110">
          <i className="ri-user-voice-fill"></i>
        </span>
        <h4 className="mb-2 text-lg md:text-xl font-bold text-gray-900">
          Strong Support
        </h4>
        <p className="text-sm text-gray-500 leading-relaxed">
          Get help anytime from our dedicated support team for all inquiries.
        </p>
      </div>
    </section>
  );
};

export default Features;

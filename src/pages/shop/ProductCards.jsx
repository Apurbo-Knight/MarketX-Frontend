import React from "react";
import RatingStar from "../../components/RatingStars";
import { Link } from "react-router";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/features/cart/cartSlice";

const ProductCards = ({ products }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {products?.length > 0
        ? products.map((product, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="relative overflow-hidden group">
                <Link to={`/shop/${product._id}`}>
                  <img
                    src={product?.image}
                    alt={product?.name}
                    className="h-64 w-full object-cover transform transition-transform duration-300 group-hover:scale-105"
                  />
                </Link>
                <button
                  onClick={() => handleAddToCart(product)}
                  className="absolute top-3 right-3 bg-primary p-2 rounded-full text-white hover:bg-primary-dark transition-colors duration-300"
                >
                  <i className="ri-shopping-cart-2-line"></i>
                </button>
              </div>

              <div className="p-4 text-center space-y-2">
                <h4 className="text-lg font-medium text-gray-800">
                  {product?.name}
                </h4>
                <p className="text-gray-700">
                  ${product?.price}{" "}
                  {product?.oldPrice && (
                    <s className="text-gray-400 ml-2">${product?.oldPrice}</s>
                  )}
                </p>
                <RatingStar rating={product?.rating} />
              </div>
            </div>
          ))
        : "No products found"}
    </div>
  );
};

export default ProductCards;

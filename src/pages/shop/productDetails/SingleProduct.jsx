import React from "react";
import { Link, useParams, useNavigate } from "react-router"; 
import { useFetchProductsByIdQuery } from "../../../redux/features/products/productsApi";
import Loading from "../../../components/Loading";
import RatingStars from "../../../components/RatingStars";
import ReviewCard from "../reviews/ReviewCard";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../redux/features/cart/cartSlice";

const SingleProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user); 

  const { data, isError, isLoading } = useFetchProductsByIdQuery(id);

  const productDetails = data?.data;
  const product = productDetails?.product;
  const reviews = productDetails?.reviews;

  if (isError) return <div>Error to load single product</div>;
  if (isLoading) return <Loading />;

  const handleAddToCart = (product) => {
    if (!user) {
      navigate("/login"); 
      return;
    }
    dispatch(addToCart(product));
  };

  return (
    <>
      {/* banner */}
      <section className="max-w-[1400px] mx-auto py-20 px-4 rounded bg-primary-light">
        <h2 className="mb-4 text-2xl font-bold text-center text-gray-900">
          Single Product Page
        </h2>
        <div className="max-w-[500px] mx-auto text-center text-gray-400">
          <span className="hover:text-primary">
            <Link to="/">home</Link>
          </span>
          <i className="ri-arrow-right-s-line"></i>
          <span className="hover:text-primary">
            <Link to="/shop">shop</Link>
          </span>
          <i className="ri-arrow-right-s-line"></i>
          <span className="hover:text-primary">{product?.name}</span>
        </div>
      </section>

      {/* products container */}
      <section className="max-w-[1400px] mx-auto py-20 px-4 mt-8">
        <div className="flex flex-col items-center md:flex-row gap-8">
          {/* Product Image */}
          <div className="w-full md:w-1/2">
            <img
              src={product?.image}
              alt={product?.name}
              className="rounded-md w-full h-auto"
            />
          </div>

          {/* Product Details */}
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-semibold mb-4">{product?.name}</h3>
            <p className="text-xl text-primary mb-4">
              ${product?.price}
              {product?.oldPrice && <s>${product?.oldPrice}</s>}
            </p>
            <p className="text-gray-700 mb-4">{product?.description}</p>

            {/* Additional Product Information */}
            <div className="flex flex-col space-y-2">
              <p className="capitalize">
                <strong>Category:</strong> {product?.category}
              </p>
              <p className="capitalize">
                <strong>Color:</strong> {product?.color}
              </p>
              <div className="flex gap-1 items-center">
                <strong>Rating: </strong>
                <RatingStars rating={product?.rating} />
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={() => handleAddToCart(product)}
              className="mt-6 px-6 py-3 bg-primary text-white rounded-md"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </section>

      {/* reviews  */}
      <section className="max-w-[1400px] mx-auto py-20 px-4 mt-8">
        <ReviewCard productReviews={reviews} />
      </section>
    </>
  );
};

export default SingleProduct;

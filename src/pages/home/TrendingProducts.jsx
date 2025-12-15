import React, { useState } from "react";
import ProductCards from "../shop/ProductCards";
import { useFetchAllProductsQuery } from "../../redux/features/products/productsApi";

const TrendingProducts = () => {
  const [visibleProducts, setVisibleProducts] = useState(8);

  const { data, error, isLoading } = useFetchAllProductsQuery({});

  // Safely extract products from API response
  const products = data?.data?.products || [];

  const loadMoreProducts = () => {
    setVisibleProducts((preCount) => preCount + 4);
  };

  if (isLoading) return <div className="text-center py-10">Loading...</div>;
  if (error) return <div className="text-center py-10">Failed to load products</div>;

  return (
    <section className="max-w-[1400px] mx-auto py-20 px-4 ">
      <h2 className="mb-4 text-2xl md:text-4xl font-bold text-center text-gray-900">
        Trending Products
      </h2>
      <p className="max-w-[500px] mx-auto text-center text-gray-500">
        Discover the Hottest Picks: Elevate Your Style with Our Curated
        Collection of Trending Women's Fashion Products.
      </p>

      {/* products card */}
      <div className="mt-8">
        <ProductCards products={products.slice(0, visibleProducts)} />
      </div>

      {/* load more btn */}
      <div className="text-center">
        {visibleProducts < products.length && (
          <button
            onClick={loadMoreProducts}
            className="btn bg-primary text-white px-4 py-2 rounded-md mt-10"
          >
            Load More
          </button>
        )}
      </div>
    </section>
  );
};

export default TrendingProducts;

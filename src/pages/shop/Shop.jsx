import React, { useState } from "react";
import ProductCards from "./ProductCards";
import { useFetchAllProductsQuery } from "../../redux/features/products/productsApi";
import ShopFiltering from "./ShopFiltering";
import Loading from "../../components/Loading";

const filters = 
  {
    categories: ["all", "accessories", "dress", "jewellery", "cosmetics"],
    colors: ["all", "black", "red", "gold", "blue", "silver", "biege", "green"],
    priceRanges: [
      { label: "Under $50", min: 0, max: 50 },
      { label: "$50 - $100", min: 50, max: 100 },
      { label: "$100 - $200", min: 100, max: 200 },
      { label: "$200 and above", min: 200, max: Infinity },
    ],
  }



const Shop = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(8);

  const [filterState, setFilterState] = useState({
    category: "all",
    color: "all",
    priceRange: "",
  });

  const { category, color, priceRange } = filterState;
  const [minPrice, maxPrice] = priceRange.split("-").map(Number);

  console.log(maxPrice, minPrice);

  const {
    data: productsData = {},
    error,
    isLoading,
  } = useFetchAllProductsQuery({
    category: category !== "all" ? category : "",
    color: color !== "all" ? color : "",
    minPrice: isNaN(minPrice) ? "" : minPrice,
    maxPrice: isNaN(maxPrice) ? "" : maxPrice,
    page: currentPage,
    limit: productsPerPage,
  });

  // console.log(productsData?.data);

  if (isLoading) return <div><Loading/></div>;

  const { products, totalPages, totalProducts } = productsData?.data || {};
  console.log(totalPages);

  // for pagination
  const handlePageChange = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  // clear filter
  const clearFilter = () => {
    setFilterState({
      category: "all",
      color: "all",
      priceRange: "",
    });
  };

  const startProduct = (currentPage - 1) * productsPerPage + 1;
  const endProduct = startProduct + products?.length - 1;

  console.log(startProduct, endProduct);

  return (
    <>
      <section className="max-w-[1400px] mx-auto py-20 px-4 rounded bg-primary-light">
        <h2 className="mb-4 text-2xl font-bold text-center text-gray-900">
          Shop Page
        </h2>
        <p className="max-w-[500px] mx-auto text-center text-gray-400">
          Discover the Hottest Picks: Elevate Your Style with Our Curated
          Collection of Trending Women's Fashion Products.
        </p>
      </section>

      <section className="max-w-[1400px] mx-auto py-20 px-4">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          {/* Categories */}
          <ShopFiltering filters={filters} filterState={filterState} setFilterState={setFilterState} clearFilter={clearFilter}/>
          {/* products grid */}
          <div>
            <h3 className="text-xl font-medium mb-4">
              Showing {startProduct} to {endProduct} of {totalProducts} products
            </h3>
            <ProductCards products={products} />

            {/* Pagination */}
            {
              products?.length > 0 && <div className="mt-6 flex justify-center gap-2">
              <button
                disabled={currentPage === 1}
                onClick={() => handlePageChange(currentPage - 1)}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md"
              >
                Previous
              </button>
              {[...Array(totalPages)].map((_, index) => (
                <button
                  onClick={() => handlePageChange(index + 1)}
                  className={`px-4 py-2 rounded-md ${
                    currentPage === index + 1
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-700 "
                  }`}
                  key={index}
                >
                  {index + 1}
                </button>
              ))}
              <button
                disabled={currentPage === totalPages}
                onClick={() => handlePageChange(currentPage + 1)}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md"
              >
                Next
              </button>
            </div>
            }
            
          </div>
          {/* Pagination */}
        </div>
      </section>
    </>
  );
};

export default Shop;

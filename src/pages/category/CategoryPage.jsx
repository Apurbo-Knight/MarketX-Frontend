import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ProductCards from "../shop/ProductCards";
import products from "../../data/products.json"

const CategoryPage = () => {
  const { categoryName } = useParams();
  const [filteredProducts, setFilteredProducts] = useState([])

    useEffect(()=> {
        const filtered =  products.filter((product) => product.category === categoryName.toLowerCase());
        setFilteredProducts(filtered)
    }, [])

  return <>
  <section className="max-w-[1400px] mx-auto py-20 px-4 bg-primary-light">
    <h2 className=" mb-4 text-2xl font-extrabold text-center text-gray-900 capitalize">{categoryName}</h2>
    <p className="max-w-[500px] mx-auto text-center text-gray-400">Browse a diverse range of categories, from chic dresses to versatile accessories. Elevate your style today!</p>
  </section>
  
  {/* Products card */}
        <div className='max-w-[1400px] mx-auto py-20 px-4'>
        <ProductCards products={filteredProducts}/>
        </div>
  </>;
};

export default CategoryPage;

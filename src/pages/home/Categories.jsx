import React from "react";
import category1 from "../../assets/category-1.jpg"
import category2 from "../../assets/category-2.jpg"
import category3 from "../../assets/category-3.jpg"
import category4 from "../../assets/category-4.jpg"
import { Link } from "react-router";


const Categories = () => {
  
     const categories = [
        { id: 1, name: "Accessories", path: 'accessories', image: category1 },
        { id: 2, name: "Dress Collection", path: 'dress', image: category2 },
        { id: 3, name: "Jewellery", path: 'jewellery', image: category3 },
        { id: 4, name: "Cosmetics", path: 'cosmetics', image: category4 },
    ]
    return (
        <section className="max-w-[900px] mx-auto mt-16 grid grid-cols-2  sm:grid-cols-4 gap-8">
            {
                categories.map((category, index) => (
                    <Link key={index} className="text-center" to={`/categories/${category.path}`}>
                        <img className="max-w-[100px] mx-auto mb-4 border-4 border-white rounded-full shadow-md" src={category.image} alt="Accessories" />
                        <h4 className="text-lg font-semibold text-gray-900">{category.name}</h4>
                    </Link>
                ))
            }


        </section>
  );
};

export default Categories;

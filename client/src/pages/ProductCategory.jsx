import React from "react";
import { useAppContext } from "../context/AppContext";
import { useParams } from "react-router";
import { categories } from "../components/Categories";
import ItemCard from "../components/ItemCard";

const ProductCategory = () => {
  const { products } = useAppContext();
  const { category } = useParams();
  const searchCategory = categories.find(
    (item) => item.path.toLowerCase() === category.toLowerCase()
  );
  const filterProductByCategory = products.filter(
    (product) =>
      product.category &&
      product.category.toLowerCase() === category?.toLowerCase()
  );

  return (
    <div>
      <h3 className="mt-9 text-[#8b5f01] text-sm">Category</h3>
      {searchCategory && (
        <div className="flex flex-col items-end w-max">
          <h1 className="text-3xl font-semibold">
            {searchCategory.name.toUpperCase()}
          </h1>
          <div className="w-28 h-0.5 bg-[#8b5f01]"></div>
        </div>
      )}

      {filterProductByCategory.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-14 gap-6">
          {filterProductByCategory.map((product) => (
            <ItemCard
              key={product._id}
              id={product._id}
              name={product.name}
              description={product.description}
              price={product.price}
              offerPrice={product.offerPrice}
              images={product.images}
              category={category}
            />
          ))}
        </div>
      ) : (
        <div className="mt-9 flex flex-col items-center justify-center h-[50vh]">
          <img src="/noProduct.jpg" className="h-[40vh] rounded-xl" alt="" />
          <h1 className="text-3xl font-medium text-green-900 mt-2">
            No Product found in this Category
          </h1>
        </div>
      )}
    </div>
  );
};

export default ProductCategory;

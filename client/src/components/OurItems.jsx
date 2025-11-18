import React from "react";
import ItemCard from "./ItemCard";
import Caraousel from "./Caraousel";
import { useAppContext } from "../context/AppContext";

const OurItems = () => {
  const { products, navigate } = useAppContext();
  const items = products?.slice(0, 5) || [];

  return (
    <div className="mt-14">
      <div>
        <h3 className="font-semibold text-[#9b6a00]">OUR ITEMS</h3>
        <h1 className="text-4xl w-full md:text-5xl font-medium md:font-semibold mt-7 leading-14 md:w-1/2">
          Always healthy grocery in our Grocery Shop.
        </h1>
      </div>
      <div className="mt-7">
        <Caraousel>
          {items.map((item) => (
            <ItemCard
              key={item._id}
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                offerPrice={item.offerPrice}
                images={item.images}
                category={item.category}
            />
          ))}
        </Caraousel>
      </div>
    </div>
  );
};

export default OurItems;

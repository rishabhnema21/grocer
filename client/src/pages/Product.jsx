import React, { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";
import { Link, useParams } from "react-router";
import ItemCard from "../components/ItemCard";

const Product = () => {
  const { products, addToCart, navigate } = useAppContext();
  const { id } = useParams();

  const [thumbnail, setThumbnail] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);

  const product = products.find((item) => item._id == id);

  const normalizedImages = product?.images?.flat
    ? product.images.flat()
    : product?.images ?? [];

  useEffect(() => {
    if (product && products.length > 0) {
      const productCopy = products
        .filter((item) => item.category === product.category && item._id !== id)
        .slice(0, 5);

      setRelatedProducts(productCopy);
    }
  }, [products, product]);

  useEffect(() => {
    if (normalizedImages.length > 0) {
      setThumbnail(normalizedImages[0]);
    }
  }, [product]);

  if (!product) return null;

  return (
    <div className="max-w-6xl mt-12 w-full px-6">
      <p className="font-medium">
        <Link to="/">Home</Link> / <Link to="/catalog">Products</Link> /
        <Link to={`/products/${product.category.toLowerCase()}`}>
          {" "}
          {product.category}
        </Link>{" "}
        /<span className="text-green-900"> {product.name}</span>
      </p>

      <div className="flex flex-col md:flex-row gap-16 mt-4">
        <div className="flex gap-3">
          <div className="flex flex-col gap-3">
            {normalizedImages.map((image, index) => (
              <div
                key={index}
                onClick={() => setThumbnail(image)}
                className="border max-w-24 border-gray-500/30 bg-green-100 rounded overflow-hidden cursor-pointer"
              >
                <img src={image} alt="" />
              </div>
            ))}
          </div>

          <div className="border border-gray-500/30 bg-green-100 max-w-100 rounded overflow-hidden">
            <img
              src={thumbnail}
              alt="Selected product"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="text-sm w-full md:w-1/2">
          <h1 className="text-4xl text-green-900 font-semibold">
            {product.name}
          </h1>

          <div className="mt-4">
            <p className="text-gray-500/70 line-through">
              MRP: &#8377;{product.price}
            </p>
            <p className="text-2xl font-medium">
              MRP: &#8377;{product.offerPrice}
            </p>
            <span className="text-gray-500/70">(inclusive of all taxes)</span>
          </div>

          <p className="text-base font-medium mt-6">About Product</p>
          <p className="text-base">{product.description}</p>

          <div className="flex items-center mt-10 gap-4 text-base">
            <button
              onClick={() => addToCart(product._id)}
              className="w-full py-3.5 font-medium bg-gray-100 hover:bg-gray-200"
            >
              Add to Cart
            </button>

            <button
              onClick={() => {
                addToCart(product._id);
                navigate("/cart");
              }}
              className="w-full py-3.5 font-medium bg-green-800 text-white hover:bg-green-900 transition-all duration-200 ease-in"
            >
              Buy now
            </button>
          </div>
        </div>
      </div>

      <div className="related-products w-full mt-[15vh] flex flex-col justify-center items-center ">
        <div>
          <h2 className="text-3xl text-green-900 font-medium">
            Related Products
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-14 gap-2">
          {relatedProducts
            .filter((product) => product.inStock)
            .map((product) => (
              <ItemCard
                key={product._id}
                id={product._id}
                name={product.name}
                description={product.description}
                price={product.price}
                offerPrice={product.offerPrice}
                images={product.images}
                category={product.category}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Product;

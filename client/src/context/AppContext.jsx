import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from "axios";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = import.meta.env.VITE_SERVER_URL;

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [isSeller, setIsSeller] = useState(false);
  const [showUserLogin, setShowUserLogin] = useState(false);
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState({});
  const [authMode, setAuthMode] = useState("login");

  const [searchQuery, setSearchQuery] = useState({});
  const [category, setCategory] = useState({});

  const fetchProducts = async () => {
    try {
      console.log("FETCH RUN");
      const { data } = await axios.get("/api/product/list", {withCredentials: true});
      setProducts(data.products);
    } catch(error) {
      console.log("Error fetching products", error);
    }
  };

  // const fetchProductsByCategory = async () => {
  //   try {
  //     const { data } = await axios.get(`/api/product/list?category=${category}`, {withCredentials: true});
  //     setCategory(data.products);
      
  //   } catch(error) {

  //   }
  // }

  useEffect(() => {
    fetchProducts();
  }, [])

  const addToCart = (itemId) => {
    let cartData = structuredClone(cartItems);
    if (cartData[itemId]) {
      cartData[itemId] += 1;
    } else {
      cartData[itemId] = 1;
    }

    setCartItems(cartData);
    toast.success("Added to Cart");
  };

  const updateCartItem = (itemId, quantity) => {
    let cartData = structuredClone(cartItems);
    cartData[itemId] = quantity;
    setCartItems(cartData);
    toast.success("Cart Updated");
  };

  const removeFromCart = (itemId) => {
    let cartData = structuredClone(cartItems);
    if (cartData[itemId]) {
      cartData[itemId] -= 1;
      if (cartData[itemId] === 0) {
        delete cartData[itemId];
      }
    }
    toast.success("Removed from Cart");
    setCartItems(cartData);
  };

  const value = {
    navigate,
    user,
    setUser,
    isSeller,
    setIsSeller,
    showUserLogin,
    setShowUserLogin,
    addToCart,
    updateCartItem,
    removeFromCart,
    authMode,
    setAuthMode,
    searchQuery,
    setSearchQuery,
    products,
    setProducts,
    fetchProducts,
    axios,
    cartItems,
    setCartItems,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  return useContext(AppContext);
};

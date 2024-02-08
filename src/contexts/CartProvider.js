// CartProvider.jsx
import React, { createContext, useContext, useEffect, useState } from "react";
import { get, set } from "../services/Storage";
import { postApiDataWithAuth } from "../utils/Utils";
import { useAuth } from "../context/AuthContext";
import LoginPopup from "../modal/LoginPopup";
import OTPPopup from "../modal/OTPPopup";
import { getApiDataWithAuth } from "../utils/Utils";
import {useIonToast} from "@ionic/react"
// Create the cart context
const CartContext = createContext();

// Create a custom hook to access the cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

// Create the CartProvider component
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const {userData, authenticated} = useAuth();
  const [isOpenOtp, setIsOpenOtp] = useState(false);
  const [isOpenLogin, setIsOpenLogin] = useState(false);
  const [wishListedItems, setWishListedItems] = useState([]);
  const [bookMarkedItems, setBookMarkedItems] = useState([]);
  const [saveForLaterData, setSaveForLaterData] = useState([]);
  const [present] = useIonToast();
  useEffect(() => {
    const loadCartItems = async () => {
      const storedCartItems = await get("cartItems");
      if (storedCartItems) {
        setCartItems(storedCartItems);
      }
    };

    const loadWishListedItems = async () => {
      try {
        const response = await getApiDataWithAuth("/get-product-wishlist");
        if(response.data.status) {

          let product_ids = response?.data?.data?.map((item) => item.product_id);
          console.log(product_ids)
          setWishListedItems(product_ids);
        } else {
          setWishListedItems([]);
        }
      } catch (err) {
        console.log(err);
      }
    }

    const loadBookMarkedItems = async () => {
      try {
        const response = await getApiDataWithAuth("/get-product-bookmark");
        if(response.data.status) {
          let product_ids = response?.data?.data?.map((item) => item.product_id);
          console.log(product_ids)
          setBookMarkedItems(product_ids);
          setSaveForLaterData(response?.data?.data);
        } else {
          setBookMarkedItems([]);
        }
        console.log(response,"response")
      } catch (err) {
        console.log(err);
      }
    }
    loadBookMarkedItems();
    loadWishListedItems();
    loadCartItems();
  }, []);

  const addToCart = (item) => {
    let index = cartItems.findIndex((cartItem) => item.product_id === cartItem.product_id && item.pro_variant_id === cartItem.pro_variant_id)
    if(index<0) {
        setCartItems((prevItems) => {
            const newItems = [...prevItems, item];
            set("cartItems", newItems); // Save to storage
            return newItems;
          });
    } else {
        let newItems = [...cartItems];
        newItems[index].quantity += item.quantity;
        setCartItems(newItems);
        set("cartItems", newItems); // Save to storage
    }
  };

  const removeFromCart = (item) => {
    console.log("jer")
    let cart = [...cartItems];
    let index = cartItems.findIndex((cartItem) => item.product_id === cartItem.product_id && item.pro_variant_id === cartItem.pro_variant_id);
    cart.splice(index, 1);
    setCartItems(cart);
    set("cartItems", cart);
    // setCartItems((prevItems) => {
    //   const newItems = prevItems.filter((i) => i.product_id !== item.product_id && i.pro_variant_id !== item.pro_variant_id);
    //   set("cartItems", newItems); // Save to storage
    //   return newItems;
    // });
  };

  const clearCart = () => {
    setCartItems([]);
    set("cartItems", []); // Save to storage
  };

  const wishListPost = async (value) => {
    if(!authenticated) {
      setIsOpenLogin(true)
      return
    }
    console.log(userData, "userData");
      try {
        const obj = {
          like_id: value?.product_id,
          user_id: 3996,
          model_name: "products"
        }
        const response = await postApiDataWithAuth("/product-wishlist", obj);
        if(wishListedItems.includes(value?.product_id)) {
          present({
            message: 'Product removed from wishlist',
            duration: 1500,
            position: 'Top',
          });
          setWishListedItems((prev) => prev.filter((id) => id !== value?.product_id));
        }else{
          present({
            message: 'Product added to wishlist',
            duration: 1500,
            position: 'Top',
          });
          setWishListedItems((prev) => [...prev, value?.product_id]);
        }
      } catch (e) {
        console.log(e);
      }
  }

  const bookMarkPost = async (value) => { 
    console.log('value',value)
    if(!authenticated) {
      setIsOpenLogin(true)
      return
    }
      try {
        const obj = {
          like_id: value?.product_id,
          user_id: 3996,
          page_type: "products"
        }
        const response = await postApiDataWithAuth("/product-bookmark", obj);
        if(bookMarkedItems.includes(value?.product_id)) {
          present({
            message: 'Product removed from bookmark',
            duration: 1500,
            position: 'Top',
          });
          setBookMarkedItems((prev) => prev.filter((id) => id !== value?.product_id));
        }else{
          present({
            message: 'Product added to bookmark',
            duration: 1500,
            position: 'Top',
          });
          setBookMarkedItems((prev) => [...prev, value?.product_id]);
        }
        console.log('response', response)
      } catch (e) {
        console.log(e);
      }
  }


  const cartContextValue = {
    cartItems,
    wishListedItems,
    bookMarkedItems,
    addToCart,
    removeFromCart,
    clearCart,
    setCartItems,
    wishListPost,
    bookMarkPost,
    saveForLaterData,
  };

  return (
    <CartContext.Provider value={cartContextValue}>
      {children}
      <LoginPopup
        isOpen={isOpenLogin}
        setIsOpen={setIsOpenLogin}
        isOtpOpen={isOpenOtp}
        setIsOtpOpen={setIsOpenOtp}
      />
      <OTPPopup isOpen={isOpenOtp} setIsOpen={setIsOpenOtp} />
    </CartContext.Provider>
  );
};

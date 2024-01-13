// CartProvider.jsx
import React, { createContext, useContext, useEffect, useState } from "react";
import { get, set } from "../services/Storage";

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

  useEffect(() => {
    const loadCartItems = async () => {
      const storedCartItems = await get("cartItems");
      if (storedCartItems) {
        setCartItems(storedCartItems);
      }
    };

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

  const cartContextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    clearCart,
    setCartItems
  };

  return (
    <CartContext.Provider value={cartContextValue}>
      {children}
    </CartContext.Provider>
  );
};

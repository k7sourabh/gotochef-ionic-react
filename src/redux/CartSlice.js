import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
  },
  reducers: {
    add(state, action) {
           const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);
               if (itemIndex >= 0) {
            state.cartItems[itemIndex].cartQuantity += 1;
              } else {
                 const tempProduct = { ...action.payload, cartQuantity: 1 };
                state.cartItems.push(tempProduct);
              }
              state.cartTotalQuantity += 1;
              state.cartTotalAmount += action.payload.price;
            },
  },
});

export const { add } = cartSlice.actions;
export default cartSlice.reducer;



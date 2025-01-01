import { createSlice } from "@reduxjs/toolkit";

 const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
  },
  reducers: {
    addtoCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          name: newItem.name,
          price: newItem.price,
          image: newItem.image,
          quantity: 1,
          subtotal: newItem.price,
        });
        state.totalQuantity++;
      } else {
        existingItem.quantity++;
        existingItem.subtotal += newItem.price;
        state.totalQuantity++;
      }
    },
    
  },
});

export const { addtoCart, updateQuantity, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    itemsList: [],
    totleQuantity: 0,
    showCart: false
  },
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      // to check if the item is availabel
      const existingItem = state.itemsList.find((item) => item.id === newItem.id);
      if (existingItem) {
        existingItem.quantity+=newItem.quantity || 1;
        existingItem.totleprice += newItem.price;
      } else {
        let totalPrice = newItem.price*newItem.quantity || newItem.price;
        state.itemsList.push({
          id: newItem.id,
          price: newItem.price,
          quantity: newItem.quantity || 1,
          totleprice: totalPrice,
          name: newItem.name,
          image: newItem.image,
          category: newItem.category,
        });
        state.totleQuantity++;
      }
    },
    removeFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.itemsList.find(item => item.id === id)
      if (existingItem.quantity === 1) {
        state.itemsList = state.itemsList.filter(item => item.id !== id);
        state.totleQuantity--;
      } else {
        existingItem.quantity--;
        existingItem.totleprice -= existingItem.price;
      }
    },
    setShowCart(state) {
      state.showCart = true;
    },
  }
})
export const cartActions = cartSlice.actions;
export default cartSlice;
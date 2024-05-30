import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, actions) => {
      console.log(actions);
      const itemExisted = state.cart.find(
        (item) => item.title === actions.payload.title
      );
      if (itemExisted) {
        itemExisted.quantity++;
      } else {
        state.cart = [...state.cart, { ...actions.payload, quantity: 1 }];
      }
    },
    increment: (state, actions) => {
      const itemExisted = state.cart.find(
        (item) => item.title === actions.payload
      );
      itemExisted.quantity++;
    },
    decrement: (state, actions) => {
      const itemExisted = state.cart.find(
        (item) => item.title === actions.payload
      );
      if (itemExisted.quantity > 1) {
        itemExisted.quantity--;
      } else {
        state.cart.splice(state.cart.indexOf(itemExisted), 1);
      }
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const actions = cartSlice.actions;

export const cartReducer = cartSlice.reducer;

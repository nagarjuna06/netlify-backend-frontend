import { createSlice, nanoid } from "@reduxjs/toolkit";
const initialState = { products: [], totalPrice: 0, ids: [] };
const cartReducer = createSlice({
  name: "count",
  initialState,
  reducers: {
    add: (state, action) => {
      console.log(nanoid());
      state.products.push(action.payload);
      state.totalPrice = state.products
        .map((each) => each.price)
        .reduce((a, b) => a + b);
      state.ids = state.products.map((each) => each.id);
    },
    remove: (state, action) => {
      const index = state.products.findIndex(
        (each) => each.id === action.payload.id
      );
      state.products.splice(index, 1);
      console.debug(state.products);
      if (state.products.length) {
        state.totalPrice = state.products
          .map((each) => each.price)
          .reduce((a, b) => a + b);
      } else {
        state.totalPrice = 0;
      }

      state.ids = state.products.map((each) => each.id);
    },
  },
});

export const { add, remove } = cartReducer.actions;
export default cartReducer.reducer;

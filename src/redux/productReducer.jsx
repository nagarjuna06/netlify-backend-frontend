import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = { products: [], isLoading: false, isError: false };

export const fetchProducts = createAsyncThunk("fetchProducts", async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  return await res.json();
});

const productReducer = createSlice({
  name: "product",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
    });
  },
});

export default productReducer.reducer;

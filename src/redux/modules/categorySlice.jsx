import { instance } from "./instance";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const getCategoryAsync = createAsyncThunk(
  "get/categoryFilter",
  async (data, thunkAPI) => {
    try {
      const res = await instance.get(`/product/search/${data}`);
      return res.data;
    } catch (error) {
      console.error(error);
    }
  }
);

export const categorySlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCategoryAsync.fulfilled, (state, action) => {
      return (state = action.payload);
    });
  },
});

export default categorySlice;
